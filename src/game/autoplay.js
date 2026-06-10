// Piloto automático da Frosty — usado pela simulação headless (validação de
// balanceamento) e pelo modo demonstração no browser.

import { chebyshev } from './grid.js';

export function heroAutoTurn(battle) {
  const u = battle.hero;
  const hs = battle.heroState;
  if (!battle.isPlayerTurn()) return;

  let guard = 0;
  const abilities = Object.fromEntries((u.abilities ?? []).map((a) => [a.id, a]));

  const canUse = (a) => {
    if (!a) return false;
    if (u.cooldowns.has(a.id)) return false;
    if (a.usesPerBattle) {
      const left = u.usesLeft.get(a.id) ?? a.usesPerBattle;
      if (left <= 0) return false;
    }
    return true;
  };

  // 1) emergências
  if (u.hp < u.maxHp * 0.35) {
    const folego = abilities['retomar_folego'];
    if (canUse(folego)) battle.playerAbility(folego, null);
  }
  if (u.hp < u.maxHp * 0.3 && hs) {
    for (const pid of ['cura_suprema', 'cura_maior', 'cura']) {
      if ((hs.potions[pid] ?? 0) > 0) { battle.playerUsePotion(pid); break; }
    }
  }
  // remove condições paralisantes com panaceia
  if (hs && (hs.potions.antidoto ?? 0) > 0) {
    const bad = ['congelado', 'atordoado', 'paralisado'].some((c) => u.conditions.has(c));
    if (bad) battle.playerUsePotion('antidoto');
  }

  // 2) buff de batalha grande
  const enemies = () => battle.livingEnemies();
  if (enemies().length >= 3 || battle.isBossBattle) {
    const furia = abilities['furia_norte'];
    if (canUse(furia)) battle.playerAbility(furia, null);
  }
  if ((enemies().length >= 3 && u.hp > u.maxHp * 0.5) || battle.isBossBattle) {
    const surto = abilities['surto_acao'];
    if (canUse(surto) && battle.targetsInRange(u, u.attacks[0]).length > 0) {
      battle.playerAbility(surto, null);
    }
  }

  // 3) loop de ações
  while (battle.isPlayerTurn() && guard++ < 30) {
    const es = enemies();
    if (!es.length) break;

    const adjacentEnemies = es.filter((e) => chebyshev(u.pos, e.pos) <= 1);
    const within2 = es.filter((e) => chebyshev(u.pos, e.pos) <= 2);
    const within3 = es.filter((e) => chebyshev(u.pos, e.pos) <= 3);

    if (u.actionsLeft > 0) {
      // ultimate quando cercada
      const avatar = abilities['avatar_geada'];
      if (canUse(avatar) && (within3.length >= 3 || (battle.isBossBattle && within3.length >= 2))) {
        if (battle.playerAbility(avatar, null)) continue;
      }
      const tornado = abilities['tornado_aco'];
      if (canUse(tornado) && within2.length >= 3) {
        if (battle.playerAbility(tornado, null)) continue;
      }
      const arrebatador = abilities['golpe_arrebatador'];
      if (canUse(arrebatador) && adjacentEnemies.length >= 2) {
        if (battle.playerAbility(arrebatador, null)) continue;
      }

      // alvo preferido: menor vida efetiva ao alcance; senão o mais próximo
      const inRange = battle.targetsInRange(u, u.attacks[0]);
      if (inRange.length) {
        const target = inRange.sort((a, b) => a.hp - b.hp)[0];
        const gelido = abilities['golpe_gelido'];
        if (canUse(gelido) && target.hp > target.maxHp * 0.5) {
          if (battle.playerAbility(gelido, target)) continue;
        }
        if (battle.playerAttack(target.id)) continue;
      }

      // fora de alcance: investida
      const investida = abilities['investida'];
      if (canUse(investida)) {
        const chargeable = es.filter((e) => chebyshev(u.pos, e.pos) <= 4 + 1).sort((a, b) => a.hp - b.hp)[0];
        if (chargeable && battle.playerAbility(investida, chargeable)) continue;
      }
    }

    // mover na direção do inimigo mais próximo
    if (u.movementLeft > 0) {
      const nearest = es.sort((a, b) => chebyshev(u.pos, a.pos) - chebyshev(u.pos, b.pos))[0];
      const reach = battle.reachableFor(u);
      let best = null, bestScore = Infinity;
      for (const [key, r] of reach) {
        const d = chebyshev({ x: r.x, y: r.y }, nearest.pos);
        const tile = battle.grid.at(r.x, r.y);
        const hazardPenalty = ['lava', 'poison', 'spikes'].includes(tile.terrain) ? 50 : 0;
        const score = d * 10 + r.cost + hazardPenalty;
        if (score < bestScore) { bestScore = score; best = { key, r }; }
      }
      const curScore = chebyshev(u.pos, nearest.pos) * 10;
      if (best && bestScore < curScore) {
        if (battle.playerMove(best.key)) {
          if (u.actionsLeft > 0) continue; // tenta atacar da nova posição
        }
      } else if (u.actionsLeft > 0 && chebyshev(u.pos, nearest.pos) > 1) {
        // preso: salto alado por cima de tudo
        const salto = abilities['salto_alado'];
        if (canUse(salto)) {
          const occ = battle.occupiedMap();
          const range = battle.heroState?.wingRange ?? 4;
          let dest = null, destD = chebyshev(u.pos, nearest.pos);
          for (let dy = -range; dy <= range; dy++) {
            for (let dx = -range; dx <= range; dx++) {
              const t = battle.grid.at(u.pos.x + dx, u.pos.y + dy);
              if (!t || t.terrain === 'rock') continue;
              if (chebyshev(u.pos, t) > range) continue;
              if (occ.get(`${t.x},${t.y}`)) continue;
              const d = chebyshev(t, nearest.pos);
              if (d < destD) { destD = d; dest = t; }
            }
          }
          if (dest && battle.playerAbility(salto, { key: `${dest.x},${dest.y}` })) continue;
        }
        break; // nada a fazer
      } else {
        break;
      }
    } else {
      break;
    }
  }

  if (battle.isPlayerTurn()) battle.playerEndTurn();
}

// Escolha automática de ASI (sim/demonstração): FOR até 20, depois CON.
export function autoAsi(heroState, applyAsiFn) {
  while (heroState.pendingAsi > 0) {
    const a = heroState.str < 20 ? 'str' : heroState.con < 20 ? 'con' : 'dex';
    const b = heroState.str < 20 ? 'str' : heroState.con < 20 ? 'con' : 'dex';
    applyAsiFn(heroState, a, b);
  }
}

// Compras automáticas na loja (sim): prioriza poções e melhorias baratas.
export function autoShop(heroState, { POTIONS, UPGRADES }) {
  // poções de cura: manter ~3
  let safety = 0;
  while (safety++ < 50) {
    const h = heroState;
    const healing = (h.potions.cura ?? 0) + (h.potions.cura_maior ?? 0) + (h.potions.cura_suprema ?? 0);
    let bought = false;
    if (healing < 3) {
      const pick = h.level >= 12 ? 'cura_suprema' : h.level >= 6 ? 'cura_maior' : 'cura';
      const p = POTIONS[pick];
      if (h.gold >= p.price) { h.gold -= p.price; h.potions[pick]++; bought = true; }
      else if (POTIONS.cura.price <= h.gold) { h.gold -= POTIONS.cura.price; h.potions.cura++; bought = true; }
    }
    // melhorias na ordem: lâmina > runas > armadura > amuleto > botas
    if (!bought) {
      for (const uid of ['lamina', 'runas', 'armadura', 'amuleto', 'botas']) {
        const up = UPGRADES[uid];
        const lvl = h.upgrades[uid];
        if (lvl >= up.max) continue;
        const price = up.price(lvl);
        if (h.gold >= price + 60) { // mantém reserva
          h.gold -= price;
          h.upgrades[uid]++;
          bought = true;
          break;
        }
      }
    }
    if (!bought) break;
  }
}
