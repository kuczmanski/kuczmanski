const fs = require('fs');
const { Resvg } = require('@resvg/resvg-js');

const metrics = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="220" viewBox="0 0 850 220">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#161b22"/>
    </linearGradient>
    <style>
      .label { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #7d8590; }
      .value { font: 700 28px 'Segoe UI', Ubuntu, Sans-Serif; fill: #e6edf3; }
      .hint { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: #7d8590; }
      .title { font: 600 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #58a6ff; }
    </style>
  </defs>
  <rect width="850" height="220" rx="12" fill="url(#bg)" stroke="#30363d"/>
  <text x="28" y="36" class="title">vis\u00e3o geral</text>
  <g transform="translate(28,70)">
    <text class="label" x="0" y="0">REPOSIT\u00d3RIOS</text>
    <text class="value" x="0" y="36">20</text>
    <text class="hint" x="0" y="58">projetos pr\u00f3prios</text>
  </g>
  <g transform="translate(230,70)">
    <text class="label" x="0" y="0">VOLUME DE C\u00d3DIGO</text>
    <text class="value" x="0" y="36">~333k</text>
    <text class="hint" x="0" y="58">linhas estimadas</text>
  </g>
  <g transform="translate(450,70)">
    <text class="label" x="0" y="0">STACK PRINCIPAL</text>
    <text class="value" x="0" y="36">Java</text>
    <text class="hint" x="0" y="58">+ JS · HTML · CSS · Python</text>
  </g>
  <g transform="translate(650,70)">
    <text class="label" x="0" y="0">AMBIENTES</text>
    <text class="value" x="0" y="36">Fullstack</text>
    <text class="hint" x="0" y="58">web · mobile · backend</text>
  </g>
  <line x1="28" y1="160" x2="822" y2="160" stroke="#30363d"/>
  <text x="28" y="190" class="hint">m\u00e9tricas calculadas a partir dos reposit\u00f3rios (incl. privados) · atualizado jul 2026</text>
</svg>`;

const languages = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="280" viewBox="0 0 850 280">
  <defs>
    <style>
      .title { font: 600 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #58a6ff; }
      .name { font: 600 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: #e6edf3; }
      .pct { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #7d8590; }
      .track { fill: #21262d; }
    </style>
  </defs>
  <rect width="850" height="280" rx="12" fill="#0d1117" stroke="#30363d"/>
  <text x="28" y="36" class="title">linguagens por volume de c\u00f3digo</text>
  <text x="28" y="78" class="name">HTML</text>
  <text x="790" y="78" text-anchor="end" class="pct">40%</text>
  <rect x="28" y="88" width="794" height="10" rx="5" class="track"/>
  <rect x="28" y="88" width="318" height="10" rx="5" fill="#e34c26"/>
  <text x="28" y="126" class="name">Java</text>
  <text x="790" y="126" text-anchor="end" class="pct">24%</text>
  <rect x="28" y="136" width="794" height="10" rx="5" class="track"/>
  <rect x="28" y="136" width="191" height="10" rx="5" fill="#b07219"/>
  <text x="28" y="174" class="name">JavaScript</text>
  <text x="790" y="174" text-anchor="end" class="pct">16%</text>
  <rect x="28" y="184" width="794" height="10" rx="5" class="track"/>
  <rect x="28" y="184" width="127" height="10" rx="5" fill="#f1e05a"/>
  <text x="28" y="222" class="name">CSS</text>
  <text x="790" y="222" text-anchor="end" class="pct">12%</text>
  <rect x="28" y="232" width="794" height="10" rx="5" class="track"/>
  <rect x="28" y="232" width="95" height="10" rx="5" fill="#563d7c"/>
  <text x="28" y="260" class="pct">tamb\u00e9m: Python · Dart · TypeScript · C++ · Shell · Docker</text>
</svg>`;

// Anonymous: ramo (area) + stack only — no real names / product purpose
const projects = [
  { id: '01', ramo: 'SaaS · Backend', stack: 'Java · Spring · HTML · CSS · JS' },
  { id: '02', ramo: 'SaaS · Web', stack: 'Java · HTML · CSS · JS' },
  { id: '03', ramo: 'SaaS · Web', stack: 'Java · HTML · CSS · JS' },
  { id: '04', ramo: 'Web · Conte\u00fado', stack: 'HTML · JS · CSS · Shell' },
  { id: '05', ramo: 'Web · Landing', stack: 'HTML' },
  { id: '06', ramo: 'Social · Frontend', stack: 'CSS · HTML · JS' },
  { id: '07', ramo: 'Desktop · Auth', stack: 'HTML · TeX · Python' },
  { id: '08', ramo: 'Sistemas · Backend', stack: 'Java · CSS · Docker' },
  { id: '09', ramo: 'Mobile', stack: 'Dart · Flutter' },
  { id: '10', ramo: 'Infra · Redes', stack: 'Python · HTML' },
  { id: '11', ramo: 'IA · Web', stack: 'JS · HTML · CSS · C++' },
  { id: '12', ramo: 'IA · Scripts', stack: 'Python' },
  { id: '13', ramo: 'Dados · Web', stack: 'HTML · JS' },
  { id: '14', ramo: 'Site institucional', stack: 'HTML' },
  { id: '15', ramo: 'Site · Portf\u00f3lio', stack: 'HTML' },
  { id: '16', ramo: 'Mobile', stack: 'C++ · Dart · Flutter · HTML' },
  { id: '17', ramo: 'Mensageria · Web', stack: 'HTML · JS' },
  { id: '18', ramo: 'Servi\u00e7os · Web', stack: 'JS · Java · HTML · CSS · TS' },
  { id: '19', ramo: 'Fintech · Web', stack: 'HTML · CSS · JS' },
  { id: '20', ramo: 'Fullstack · Web', stack: 'HTML · Java · JS · CSS' },
];

function renderGrid(title, slice, outName) {
  const cardW = 250;
  const cardH = 100;
  const gapX = 16;
  const gapY = 14;
  const startX = 28;
  const startY = 56;
  const cols = 3;
  const rows = Math.ceil(slice.length / cols);
  const height = startY + rows * cardH + (rows - 1) * gapY + 28;

  let cards = '';
  slice.forEach((p, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);
    cards += `
  <g transform="translate(${x},${y})">
    <rect width="${cardW}" height="${cardH}" rx="10" class="card"/>
    <text x="16" y="28" class="cardTitle">Projeto ${p.id}</text>
    <text x="16" y="52" class="ramo">${p.ramo}</text>
    <text x="16" y="76" class="tag">${p.stack}</text>
  </g>`;
  });

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="${height}" viewBox="0 0 850 ${height}">
  <defs>
    <style>
      .title { font: 600 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #58a6ff; }
      .cardTitle { font: 700 15px 'Segoe UI', Ubuntu, Sans-Serif; fill: #e6edf3; }
      .ramo { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #8b949e; }
      .tag { font: 600 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: #3fb950; }
      .card { fill: #161b22; stroke: #30363d; }
    </style>
  </defs>
  <rect width="850" height="${height}" rx="12" fill="#0d1117" stroke="#30363d"/>
  <text x="28" y="36" class="title">${title}</text>
  ${cards}
</svg>`;

  fs.writeFileSync(`assets/${outName}.svg`, svg, 'utf8');
  const r = new Resvg(svg, { fitTo: { mode: 'width', value: 1700 } });
  fs.writeFileSync(`assets/${outName}.png`, r.render().asPng());
  console.log('ok', outName, 'cards=', slice.length);
}

const files = { metrics, languages };
for (const [name, svg] of Object.entries(files)) {
  fs.writeFileSync(`assets/${name}.svg`, svg, 'utf8');
  const r = new Resvg(svg, { fitTo: { mode: 'width', value: 1700 } });
  fs.writeFileSync(`assets/${name}.png`, r.render().asPng());
  console.log('ok', name);
}

renderGrid('projetos 01-10 · ramo e stack', projects.slice(0, 10), 'work-a');
renderGrid('projetos 11-20 · ramo e stack', projects.slice(10, 20), 'work-b');

// keep work.png as alias of combined note for backwards compat - remove tall single image
if (fs.existsSync('assets/work.png')) fs.unlinkSync('assets/work.png');
if (fs.existsSync('assets/work.svg')) fs.unlinkSync('assets/work.svg');
