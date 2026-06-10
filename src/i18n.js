// Internacionalização: idioma ativo (pt/en), dicionários de UI e log,
// e interpolação simples t('chave', {var}). Funciona também em Node (sim).

const LS_KEY = 'frosty-locale';

function storedLocale() {
  try {
    if (typeof localStorage !== 'undefined') return localStorage.getItem(LS_KEY);
  } catch { /* indisponível */ }
  return null;
}

let locale = storedLocale() ?? 'pt';
const listeners = new Set();

export function getLocale() { return locale; }
export function hasStoredLocale() { return storedLocale() != null; }

export function setLocale(l) {
  if (l !== 'pt' && l !== 'en') return;
  locale = l;
  try { if (typeof localStorage !== 'undefined') localStorage.setItem(LS_KEY, l); } catch { /* ok */ }
  for (const cb of listeners) cb(l);
}

export function onLocaleChange(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function t(key, vars = null) {
  const dict = locale === 'en' ? EN : PT;
  let s = dict[key] ?? PT[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      s = s.replaceAll(`{${k}}`, String(v));
    }
  }
  return s;
}

// ============================== PORTUGUÊS ==============================
export const PT = {
  // título / menu
  'title.sub': 'A Lâmina Rúnica ❄️',
  'menu.continue': '▶️ Continuar',
  'menu.continueEndless': '▶️ Continuar (Modo Infinito)',
  'menu.new': '⚔️ Nova Campanha',
  'menu.bestiary': '📖 Bestiário',
  'menu.help': '❓ Como Jogar',
  'menu.blurb': 'Frosty, a tiefling alada da espada bastarda Geada Eterna, enfrenta as hordas do Vazio em 50 batalhas táticas por 5 zonas — e além, no Modo Infinito.',
  'menu.confirmNew': 'Começar do zero apaga o progresso salvo. Continuar?',
  'menu.language': '🌐 English',
  'settings.music': '🎵 Música',
  'settings.sfx': '⚔️ Golpes & Efeitos',

  // seletor de idioma
  'lang.pick': 'Escolha seu idioma · Choose your language',

  // intro de zona
  'zone.battleOf': 'Batalha {i} de {total}',
  'zone.enter': '⚔️ Entrar em Batalha',

  // HUD
  'hud.battle': 'Batalha',
  'hud.battleEndless': '∞ Batalha',
  'hud.round': 'Round',
  'hud.endTurn': 'Encerrar Turno [T]',
  'hud.gold': '💰 {gold} ouro · 👟 {mov} mov · ⚔️ {act} ação',
  'hud.speedTitle': 'Velocidade das animações',
  'hud.demoTitle': 'Modo demonstração (Frosty joga sozinha)',
  'hud.soundTitle': 'Som',
  'hud.helpTitle': 'Como jogar (H)',
  'hud.level': 'Nv {n}',
  'hud.hpOf': '{name} — {hp}/{max} PV',
  'hud.potionTip': '{name} — {desc} (1 por turno, ação livre)',
  'hud.commonSpecimen': 'Espécime comum, sem peculiaridades.',
  'hud.resists': 'resiste {t}',
  'hud.vulnerable': 'vulnerável {t}',
  'hud.immune': 'imune {t}',
  'hud.hitChance': '{p}% de acertar · ~{d} dano{adv}',
  'hud.advantage': ' · vantagem',
  'hud.disadvantage': ' · desvantagem',
  'hud.hintTarget': '{icon} {name} — clique no alvo (Esc cancela)',
  'hud.hintTile': '{icon} {name} — clique na casa de destino (Esc cancela)',
  'hud.hintLine': '{icon} {name} — clique numa direção (Esc cancela)',
  'hud.turnsLeft': '({n} turnos)',
  'hud.ac': 'CA {n}',

  // resultados / vitória / derrota
  'win.title': '🏆 Vitória!',
  'win.bossDown': '👑 Chefe derrotado!',
  'win.zoneCleared': 'Zona "{zone}" concluída!',
  'win.xp': 'Experiência',
  'win.gold': 'Ouro',
  'win.kills': 'Inimigos derrotados',
  'win.level': 'Nível',
  'win.shop': '🛒 Loja',
  'win.next': 'Próxima Batalha ▶️',
  'win.asiAvailable': '📈 Aumento de Atributo disponível! Escolha +1 em dois atributos.',
  'defeat.title': '💔 Frosty caiu…',
  'defeat.body': 'Mas tieflings não morrem fácil. Ela recua, recupera o fôlego e perde {gold} de ouro no caminho.',
  'defeat.retryHint': 'A batalha {i} a aguarda novamente — com um novo campo e novos inimigos.',
  'defeat.menu': '🏠 Menu',
  'defeat.retry': '⚔️ Tentar Novamente',
  'campaign.victory': '⭐ VITÓRIA ⭐',
  'campaign.body1': 'Vorthrax, o Dragão do Vazio, tomba dos céus estilhaçados.',
  'campaign.body2': 'O portal se fecha. As Planícies do Gelo Quebrado conhecem a paz.',
  'campaign.body3': '{hero}, nível {lvl}, termina sua jornada com {kills} inimigos derrotados em {battles} batalhas.',
  'campaign.heroTitle': 'Frosty, a Lâmina Rúnica',
  'campaign.endlessTeaser': 'Mas além do portal… algo ainda se move. O Modo Infinito desperta.',
  'campaign.endless': '♾️ Modo Infinito',

  // ASI
  'asi.title': '📈 Aumento de Atributo (nível {lvl})',
  'asi.hint': 'Escolha 2 pontos para distribuir (pode repetir o mesmo atributo).',
  'asi.confirm': 'Confirmar',

  // loja
  'shop.title': '🛒 Acampamento — Loja',
  'shop.gold': 'ouro',
  'shop.potions': 'Poções',
  'shop.upgrades': 'Melhorias permanentes',
  'shop.done': 'Pronto',
  'shop.max': 'MÁX',

  // bestiário
  'bestiary.title': '📖 Bestiário',
  'bestiary.creatures': 'Criaturas',
  'bestiary.adjectives': 'Adjetivos',
  'bestiary.foundCreatures': 'Descobertas: <b>{n}</b> / {total} criaturas',
  'bestiary.foundAdjectives': 'Descobertos: <b>{n}</b> / {total} adjetivos',
  'bestiary.close': 'Fechar',
  'bestiary.tier': 'Tier {n}',
  'bestiary.hpac': '{hp} PV · CA {ac}',

  // ajuda
  'help.title': '❓ Como Jogar',
  'help.goal': '<b>Objetivo:</b> derrote todos os inimigos de cada batalha. 5 zonas × 10 batalhas, com um chefe a cada 10ª. Depois da 50ª… o Modo Infinito.',
  'help.turn': '<b>Seu turno:</b> mova-se (casas azuis) e use 1 ação (ataque/habilidade). Clique num inimigo ao alcance para atacar. Poções são ações livres (1/turno). Sair do corpo a corpo provoca <b>ataques de oportunidade</b>!',
  'help.dnd': '<b>D&D nas regras:</b> d20 + bônus vs CA para acertar; 20 natural = crítico (dados dobrados); vantagem/desvantagem; testes de resistência contra efeitos; terreno alto dá +2 de acerto; atacar à distância adjacente a um inimigo impõe desvantagem.',
  'help.adjectives': '<b>Adjetivos:</b> cada criatura pode vir com adjetivos que mudam tudo — um <i>Goblin Flamejante Gigante</i> é outra criatura. Passe o mouse para ler os efeitos!',
  'help.keys': '<b>Atalhos:</b> <span class="kbd">1-9</span> habilidades · <span class="kbd">T</span> encerrar turno · <span class="kbd">Q/E</span> girar câmera · <span class="kbd">roda</span> zoom · <span class="kbd">Esc</span> cancelar mira · <span class="kbd">H</span> esta ajuda',
  'help.between': '<b>Entre batalhas:</b> cura completa, loja (poções e melhorias permanentes) e aumentos de atributo a cada 4 níveis. Derrota custa 10% do ouro — nunca o progresso.',
  'help.ok': 'Entendi!',

  // log de combate
  'log.battleTitle': '⚔️ Batalha {i} — {zone}',
  'log.hit': '{a} acerta {d} com {w}: {roll}+{bonus}={total} vs CA{ac}.',
  'log.crit': ' 💥 CRÍTICO!',
  'log.miss': '{a} ataca {d} com {w}: {roll}+{bonus}={total} vs CA{ac} → ERROU!',
  'log.damage': '→ {name} sofre {n} de dano ({parts}). [{hp}/{max} PV]',
  'log.noDamage': '→ {name} não sofre dano (imune).',
  'log.resisted': ' (resistiu)',
  'log.vulnerable': ' (vulnerável!)',
  'log.heals': '{name} recupera {n} PV.',
  'log.defeated': '💀 {name} foi derrotado!',
  'log.dodges': '{name} ESQUIVA do golpe!',
  'log.lifesteal': '{name} drena {n} PV!',
  'log.thorns': '{name} reflete {n} de dano (espinhos)!',
  'log.rage': '{name} entra em FÚRIA!',
  'log.lucky': '{name} é sortudo e rerola o 1! → {n}',
  'log.save': '{name} — teste de {ab}: {roll}+{bonus}={total} vs CD{dc} → {result}',
  'log.saveSuccess': 'sucesso',
  'log.saveFail': 'falha',
  'log.immuneCond': '{name} é imune a {cond}!',
  'log.gainedCond': '{name} está {cond}! ({n} turnos)',
  'log.condEnds': '{name} se livra de {cond}!',
  'log.condTick': '{name} sofre com {cond}.',
  'log.auraHit': '{name} é atingido pela aura de {other}!',
  'log.cantAct': '{name} não consegue agir!',
  'log.hazard': '{name} sofre com o terreno ({terr})!',
  'log.oa': '{name} aproveita a brecha — ataque de oportunidade!',
  'log.heroUses': 'Frosty usa {ab}!',
  'log.heroCharges': 'Frosty INVESTE contra {name}!',
  'log.wingJump': 'Frosty abre as asas e salta pelos céus!',
  'log.drinkPotion': 'Frosty bebe {p}!',
  'log.cleansed': 'Todas as condições negativas foram removidas!',
  'log.extraAction': 'Frosty ganha uma ação extra!',
  'log.explodes': '{name} EXPLODE!',
  'log.splits': '{name} se divide em {n}!',
  'log.blinks': '{name} pisca para outro lugar!',
  'log.summons': '{name} invoca {n} {what}!',
  'log.enemyUses': '{name} usa {sp}!',
  'log.enemyUsesOn': '{name} usa {sp} contra Frosty!',
  'log.lazy': '{name} boceja, sem vontade de lutar.',
  'log.retreats': '{name} recua!',
  'log.heroFell': '💔 Frosty caiu em batalha...',
  'log.victory': '🏆 VITÓRIA! +{xp} XP, +{gold} ouro',
  'log.stalemate': 'A batalha se arrasta sem fim — Frosty recua para se reagrupar.',

  // textos flutuantes
  'float.miss': 'errou',
  'float.dodge': 'esquivou!',
  'float.oa': '⚡ oportunidade!',
  'float.rage': '💢 FÚRIA!',

  // unidades
  'unit.splitM': '{name} Dividido',
  'unit.splitF': '{name} Dividida',
};

// ============================== ENGLISH ==============================
export const EN = {
  'title.sub': 'The Runic Blade ❄️',
  'menu.continue': '▶️ Continue',
  'menu.continueEndless': '▶️ Continue (Endless Mode)',
  'menu.new': '⚔️ New Campaign',
  'menu.bestiary': '📖 Bestiary',
  'menu.help': '❓ How to Play',
  'menu.blurb': 'Frosty, the winged tiefling wielding the bastard sword Everfrost, faces the hordes of the Void across 50 tactical battles in 5 zones — and beyond, in Endless Mode.',
  'menu.confirmNew': 'Starting over erases your saved progress. Continue?',
  'menu.language': '🌐 Português',
  'settings.music': '🎵 Music',
  'settings.sfx': '⚔️ Hits & SFX',

  'lang.pick': 'Choose your language · Escolha seu idioma',

  'zone.battleOf': 'Battle {i} of {total}',
  'zone.enter': '⚔️ Enter Battle',

  'hud.battle': 'Battle',
  'hud.battleEndless': '∞ Battle',
  'hud.round': 'Round',
  'hud.endTurn': 'End Turn [T]',
  'hud.gold': '💰 {gold} gold · 👟 {mov} move · ⚔️ {act} action',
  'hud.speedTitle': 'Animation speed',
  'hud.demoTitle': 'Demo mode (Frosty plays by herself)',
  'hud.soundTitle': 'Sound',
  'hud.helpTitle': 'How to play (H)',
  'hud.level': 'Lv {n}',
  'hud.hpOf': '{name} — {hp}/{max} HP',
  'hud.potionTip': '{name} — {desc} (1 per turn, free action)',
  'hud.commonSpecimen': 'A common specimen, nothing peculiar.',
  'hud.resists': 'resists {t}',
  'hud.vulnerable': 'vulnerable to {t}',
  'hud.immune': 'immune to {t}',
  'hud.hitChance': '{p}% to hit · ~{d} damage{adv}',
  'hud.advantage': ' · advantage',
  'hud.disadvantage': ' · disadvantage',
  'hud.hintTarget': '{icon} {name} — click a target (Esc cancels)',
  'hud.hintTile': '{icon} {name} — click a destination tile (Esc cancels)',
  'hud.hintLine': '{icon} {name} — click a direction (Esc cancels)',
  'hud.turnsLeft': '({n} turns)',
  'hud.ac': 'AC {n}',

  'win.title': '🏆 Victory!',
  'win.bossDown': '👑 Boss defeated!',
  'win.zoneCleared': 'Zone "{zone}" cleared!',
  'win.xp': 'Experience',
  'win.gold': 'Gold',
  'win.kills': 'Enemies slain',
  'win.level': 'Level',
  'win.shop': '🛒 Shop',
  'win.next': 'Next Battle ▶️',
  'win.asiAvailable': '📈 Ability Score Increase available! Choose +1 to two abilities.',
  'defeat.title': '💔 Frosty has fallen…',
  'defeat.body': "But tieflings don't die easy. She retreats, catches her breath, and loses {gold} gold on the way.",
  'defeat.retryHint': 'Battle {i} awaits her once more — with a new field and new enemies.',
  'defeat.menu': '🏠 Menu',
  'defeat.retry': '⚔️ Try Again',
  'campaign.victory': '⭐ VICTORY ⭐',
  'campaign.body1': 'Vorthrax, the Void Dragon, plummets from the shattered skies.',
  'campaign.body2': 'The portal closes. The Shattered Ice Plains know peace at last.',
  'campaign.body3': '{hero}, level {lvl}, ends her journey with {kills} enemies slain across {battles} battles.',
  'campaign.heroTitle': 'Frosty, the Runic Blade',
  'campaign.endlessTeaser': 'But beyond the portal… something still stirs. Endless Mode awakens.',
  'campaign.endless': '♾️ Endless Mode',

  'asi.title': '📈 Ability Score Increase (level {lvl})',
  'asi.hint': 'Choose 2 points to distribute (you may pick the same ability twice).',
  'asi.confirm': 'Confirm',

  'shop.title': '🛒 Camp — Shop',
  'shop.gold': 'gold',
  'shop.potions': 'Potions',
  'shop.upgrades': 'Permanent upgrades',
  'shop.done': 'Done',
  'shop.max': 'MAX',

  'bestiary.title': '📖 Bestiary',
  'bestiary.creatures': 'Creatures',
  'bestiary.adjectives': 'Adjectives',
  'bestiary.foundCreatures': 'Discovered: <b>{n}</b> / {total} creatures',
  'bestiary.foundAdjectives': 'Discovered: <b>{n}</b> / {total} adjectives',
  'bestiary.close': 'Close',
  'bestiary.tier': 'Tier {n}',
  'bestiary.hpac': '{hp} HP · AC {ac}',

  'help.title': '❓ How to Play',
  'help.goal': '<b>Goal:</b> defeat every enemy in each battle. 5 zones × 10 battles, with a boss every 10th. After the 50th… Endless Mode.',
  'help.turn': '<b>Your turn:</b> move (blue tiles) and use 1 action (attack/ability). Click an enemy in range to attack. Potions are free actions (1/turn). Leaving melee range provokes <b>opportunity attacks</b>!',
  'help.dnd': '<b>D&D rules inside:</b> d20 + bonus vs AC to hit; natural 20 = critical (double dice); advantage/disadvantage; saving throws against effects; high ground grants +2 to hit; ranged attacks while adjacent to an enemy suffer disadvantage.',
  'help.adjectives': '<b>Adjectives:</b> every creature may carry adjectives that change everything — a <i>Flaming Giant Goblin</i> is a different beast. Hover to read their effects!',
  'help.keys': '<b>Shortcuts:</b> <span class="kbd">1-9</span> abilities · <span class="kbd">T</span> end turn · <span class="kbd">Q/E</span> rotate camera · <span class="kbd">wheel</span> zoom · <span class="kbd">Esc</span> cancel targeting · <span class="kbd">H</span> this help',
  'help.between': '<b>Between battles:</b> full heal, shop (potions and permanent upgrades) and ability score increases every 4 levels. Defeat costs 10% of your gold — never your progress.',
  'help.ok': 'Got it!',

  'log.battleTitle': '⚔️ Battle {i} — {zone}',
  'log.hit': '{a} hits {d} with {w}: {roll}+{bonus}={total} vs AC{ac}.',
  'log.crit': ' 💥 CRITICAL!',
  'log.miss': '{a} attacks {d} with {w}: {roll}+{bonus}={total} vs AC{ac} → MISS!',
  'log.damage': '→ {name} takes {n} damage ({parts}). [{hp}/{max} HP]',
  'log.noDamage': '→ {name} takes no damage (immune).',
  'log.resisted': ' (resisted)',
  'log.vulnerable': ' (vulnerable!)',
  'log.heals': '{name} recovers {n} HP.',
  'log.defeated': '💀 {name} was defeated!',
  'log.dodges': '{name} DODGES the blow!',
  'log.lifesteal': '{name} drains {n} HP!',
  'log.thorns': '{name} reflects {n} damage (thorns)!',
  'log.rage': '{name} flies into a RAGE!',
  'log.lucky': '{name} is lucky and rerolls the 1! → {n}',
  'log.save': '{name} — {ab} save: {roll}+{bonus}={total} vs DC{dc} → {result}',
  'log.saveSuccess': 'success',
  'log.saveFail': 'failure',
  'log.immuneCond': '{name} is immune to {cond}!',
  'log.gainedCond': '{name} is {cond}! ({n} turns)',
  'log.condEnds': '{name} shakes off {cond}!',
  'log.condTick': '{name} suffers from {cond}.',
  'log.auraHit': '{name} is struck by {other}\'s aura!',
  'log.cantAct': '{name} cannot act!',
  'log.hazard': '{name} suffers from the terrain ({terr})!',
  'log.oa': '{name} seizes the opening — opportunity attack!',
  'log.heroUses': 'Frosty uses {ab}!',
  'log.heroCharges': 'Frosty CHARGES at {name}!',
  'log.wingJump': 'Frosty spreads her wings and leaps through the sky!',
  'log.drinkPotion': 'Frosty drinks {p}!',
  'log.cleansed': 'All negative conditions removed!',
  'log.extraAction': 'Frosty gains an extra action!',
  'log.explodes': '{name} EXPLODES!',
  'log.splits': '{name} splits into {n}!',
  'log.blinks': '{name} blinks away!',
  'log.summons': '{name} summons {n} {what}!',
  'log.enemyUses': '{name} uses {sp}!',
  'log.enemyUsesOn': '{name} uses {sp} against Frosty!',
  'log.lazy': '{name} yawns, in no mood to fight.',
  'log.retreats': '{name} falls back!',
  'log.heroFell': '💔 Frosty has fallen in battle...',
  'log.victory': '🏆 VICTORY! +{xp} XP, +{gold} gold',
  'log.stalemate': 'The battle drags on endlessly — Frosty retreats to regroup.',

  'float.miss': 'miss',
  'float.dodge': 'dodged!',
  'float.oa': '⚡ opportunity!',
  'float.rage': '💢 RAGE!',

  'unit.splitM': 'Split {name}',
  'unit.splitF': 'Split {name}',
};
