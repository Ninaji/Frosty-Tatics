# ❄️ Frosty Tactics — A Lâmina Rúnica · The Runic Blade

Jogo tático 3D isométrico por turnos no browser, no espírito de **Final Fantasy Tactics**, com regras inspiradas em **D&D 5e**. Você é **Frosty** — uma tiefling alada de pele azul, chifres dourados, uma asa negra e uma asa branca, empunhando a espada bastarda rúnica **Geada Eterna** (*Everfrost*).

🌐 **Bilíngue**: seletor de idioma (Português/English) na entrada do jogo — 100% traduzido, incluindo os 115 inimigos, 279 adjetivos, habilidades e o log de combate, com completude verificada no CI.

![tech](https://img.shields.io/badge/Three.js-3D-blue) ![lang](https://img.shields.io/badge/PT--BR%20%2B%20EN-bilingual-green)

## ▶️ JOGUE AGORA (no browser, grátis)

**https://ninaji.github.io/Frosty-Tatics/**

Cada push na branch `main` valida os dados, simula a campanha e publica automaticamente via GitHub Actions.

## 🎮 Rodar localmente

```bash
npm install
npm run dev        # abre em http://localhost:5173
```

Build de produção (pasta `dist/`, hospedável em qualquer estático):

```bash
npm run build
npm run preview
```

### Parâmetros de URL
| Parâmetro | Efeito |
|---|---|
| `?demo` | Frosty joga sozinha (modo espectador) |
| `?auto` | avança batalhas/loja/atributos automaticamente |
| `?speed=4` | velocidade das animações (1-10) |
| `?seed=123` | campanha com seed fixa |
| `?lang=en` / `?lang=pt` | força o idioma |

## ⚔️ O Jogo

- **Campanha:** 5 zonas × 10 batalhas (chefe a cada 10ª) + chefe final **Vorthrax, o Dragão do Vazio** — e depois, **Modo Infinito** com escala crescente.
- **115 inimigos base** em 17 famílias × **279 adjetivos** com efeitos mecânicos reais = **32.085 variantes** de 1 adjetivo (milhões com combinações). Um *Goblin Flamejante Gigante* explode em chamas e esmaga; uma *Aranha Vampírica Veloz* drena vida e corre.
- **Regras D&D:** d20 + bônus vs CA, vantagem/desvantagem, crítico no 20 (dados dobrados), testes de resistência, 12 tipos de dano com resistências/imunidades/vulnerabilidades, 16 condições, ataques de oportunidade, terreno elevado (+2 acerto), perigos (lava, veneno, espinhos).
- **Progressão:** níveis 1-30+, 13 habilidades ativas + 10 passivas (Salto Alado, Golpe Gélido, Surto de Ação, Avatar da Geada…), aumentos de atributo, loja com poções e 5 melhorias permanentes.
- **Bestiário** registra cada criatura e adjetivo descobertos.
- Save automático (localStorage) após cada batalha.

### Controles
| Tecla | Ação |
|---|---|
| Clique | mover / atacar / mirar habilidade |
| 1-9 | habilidades |
| T | encerrar turno |
| Q / E | girar câmera |
| Roda do mouse | zoom |
| Esc | cancelar mira |
| H | ajuda |

## 🧪 Testes e validação

```bash
npm run validate          # integridade dos dados (≥100 inimigos, ≥200 adjetivos, refs)
npm run sim               # simula a CAMPANHA COMPLETA em múltiplas seeds (headless)
node sim/run-sim.js --seeds 5 --smoke --endless 10   # + smoke de 394 unidades + modo infinito
```

A simulação valida fim-a-fim: todas as seeds devem zerar a campanha, com nível final 18-34, derrotas médias ≤20 e batalhas de 3-15 rounds.

## 🏗️ Arquitetura

```
src/
  core/    regras D&D puras (dados, combate, condições, efeitos) — sem Three.js
  data/    115 inimigos, 279 adjetivos, habilidades, zonas, itens
  game/    motor de batalha, IA, geração de encontros, campanha, save
  render/  Three.js: cena isométrica, personagens procedurais, efeitos
  ui/      HUD, telas e modais (PT-BR)
  audio/   sons sintetizados via WebAudio (zero assets externos)
sim/       validação de dados + simulação headless da campanha
```

A lógica nunca importa Three.js — o motor emite **eventos** que o renderizador anima. Por isso a campanha inteira roda em Node em ~0,2s, permitindo balanceamento validado por simulação.

---
Feito com Three.js + Vite. Todos os assets (personagens, sons, texturas de runas) são gerados proceduralmente em código — zero downloads.
