// Utilitários de DOM seguros: parsing via DOMParser (não executa scripts)
// e escape de valores dinâmicos interpolados nos templates.
// Todo o conteúdo do jogo é estático/first-party, mas escapamos mesmo assim.

const parser = new DOMParser();

export function setHTML(el, html) {
  const doc = parser.parseFromString(`<body>${html}</body>`, 'text/html');
  el.replaceChildren(...doc.body.childNodes);
}

export function fragmentFrom(html) {
  const doc = parser.parseFromString(`<body>${html}</body>`, 'text/html');
  const frag = document.createDocumentFragment();
  frag.append(...doc.body.childNodes);
  return frag;
}

export function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function div(className, html = '') {
  const el = document.createElement('div');
  if (className) el.className = className;
  if (html) setHTML(el, html);
  return el;
}
