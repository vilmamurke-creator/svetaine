document.documentElement.classList.add('js');

const PASTAS = 'uableostat@gmail.com';

// ---------- Vertimai ----------
const EN = {
  'veikla': 'Piping systems',
  'nav.paslaugos': 'Services', 'nav.darbai': 'Projects', 'nav.apie': 'About us',
  'nav.darbas': 'Careers', 'nav.kontaktai': 'Contact', 'nav.atidaryti': 'Menu',
  'hero.h1': 'Piping, welding and installation in Lithuania and Scandinavia',
  'hero.p': 'UAB Leostat has worked as a subcontractor for construction companies since 2022. Tell us what work you need and we will send you a quote.',
  'cta.pasiulymas': 'Request a quote', 'cta.darbas': 'Careers',
  'pasl.h2': 'What we do',
  'pasl.p': 'We work both as a main contractor and as a subcontractor, so we can take over the work on a whole site or join a project already in progress.',
  'pasl.g1': 'Piping', 'pasl.gamyba': 'Pipe fabrication', 'pasl.montavimas': 'Installation', 'pasl.laivai': 'Piping in shipbuilding',
  'pasl.g2': 'Welding and metal', 'pasl.suvirinimas': 'Welding', 'pasl.metalas': 'Metalwork',
  'pasl.g3': 'Water and fire protection', 'pasl.vanduo': 'Water supply', 'pasl.sprinkleriai': 'Fire sprinkler system installation',
  'darbai.h2': 'Our projects', 'darbai.laivai': 'Shipbuilding', 'darbai.pramone': 'Industrial sites',
  'f.komanda': 'Engine room, our team installing piping', 'f.sklende': 'Vertical assembly with a valve',
  'f.mazgas': 'Piping assembly with valves', 'f.nerudijantis': 'Stainless steel piping with valves',
  'f.filtrai': 'Filters in a ship compartment', 'f.izoliuoti': 'Insulated pipes and valves',
  'f.transportas': 'Piping module ready for transport to site', 'f.pizoliuoti': 'Insulated piping at an industrial site',
  'f.pvamzdynai': 'Piping in a steel frame', 'f.modulis': 'Large pipe module next to the building',
  'kur.h2': 'Where we work',
  'salis.lt': 'Lithuania', 'salis.se': 'Sweden', 'salis.no': 'Norway', 'salis.fi': 'Finland',
  'kur.objektai': 'Sites', 'kur.objektai.v': 'Shipbuilding and industrial sites',
  'kur.partneris': 'Partner and client', 'kur.nuo': 'In business since', 'kur.nuo.v': 'April 2022, Klaipėda',
  'kvalif': 'Our workers are qualified and work with all the required documents: ID06, SSG and others required by the country and site.',
  'apie.h2': 'Vilma, managing director',
  'apie.p1': 'I run a company that fabricates and installs piping systems. We work in Lithuania, Sweden, Norway and Finland.',
  'apie.p2': 'My work is the part of the company you do not see on site, but without which it does not move: contracts, documents, staff matters and contact with clients and authorities.',
  'apie.p3': 'Because we work under two legal systems, our documents have to be in order in both Lithuanian and Swedish. I take care of that myself.',
  'vadovas.h2': 'Osvaldas, works manager',
  'vadovas.p1': '20 years of experience in piping.',
  'vadovas.p2': 'Responsible for the work on site: the team, progress and quality.',
  'darbas.h2': 'Careers',
  'darbas.p': 'We are looking for welders, pipe fitters and sprinkler installers to work in Lithuania and Scandinavia.',
  'r1.h': 'Welder', 'r1.a': 'Can weld using TIG.', 'r1.b': 'At least 1 year of work experience.',
  'r1.c': 'Welding certificates. If you do not have them, we will arrange them.',
  'r2.h': 'Pipe fitter', 'r2.a': 'Can read isometric and construction drawings.',
  'r2.b': 'Experience installing and fabricating different types of piping.', 'r2.c': 'At least 1 year of work experience.',
  'r3.h': 'Sprinkler (fire protection system) installer', 'r3.a': 'At least 1 year of work experience.', 'r3.trumpas': 'Sprinkler installer',
  'siul.h': 'What we offer', 'siul.1a': '6 + 2',
  'siul.1': 'Rotation: 6 weeks of work, 2 weeks off.',
  'siul.2': 'Accommodation, transport and travel costs paid by us.',
  'siul.3': 'Workwear and tools.',
  'siul.4': 'We arrange all required documents and cards (ID06, SSG, etc.).',
  'siul.5': 'Professional development.',
  'siul.6': 'Good results mean higher pay.',
  'anketa.h': 'Application', 'anketa.siusti': 'Send application',
  'l.vardas': 'Full name', 'l.vardas2': 'Name', 'l.spec': 'Trade', 'l.pasirink': 'Choose',
  'l.patirtis': 'Work experience', 'l.patirtis.p': 'E.g. how many years and on what kind of sites.',
  'l.sert': 'Certificates and cards you already have', 'l.sert.p': 'E.g. TIG certificate, ID06, SSG. If you have none, just say so.',
  'l.pastas': 'Email', 'l.imone': 'Company', 'l.darbas': 'What work do you need',
  'l.darbas.p': 'Type of work, country and site, approximate start.',
  'kont.h2': 'Request a quote', 'kont.p': 'Tell us what work you need, where and when. We will send you a quote.',
  'kont.siusti': 'Send request', 'ik': 'company code', 'uzdaryti': 'Close',
};

const PRANESIMAI = {
  lt: {
    privaloma: 'Užpildykite šį laukelį.',
    pastas: 'Įrašykite el. pašto adresą, pvz., vardas@imone.lt.',
    atidaryta: 'Atsidarė jūsų el. pašto programa su paruoštu laišku. Paspauskite „Siųsti“. Jei neatsidarė, parašykite mums: ' + PASTAS,
  },
  en: {
    privaloma: 'Please fill in this field.',
    pastas: 'Enter an email address, e.g. name@company.com.',
    atidaryta: 'Your email app opened with a ready message. Press "Send". If it did not open, write to us at ' + PASTAS,
  },
};

const LT = {};
document.querySelectorAll('[data-i18n]').forEach(el => { LT[el.dataset.i18n] = el.textContent; });
let kalba = 'lt';

function nustatykKalba(k) {
  kalba = k;
  const zodynas = k === 'en' ? EN : LT;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const t = zodynas[el.dataset.i18n];
    if (t) el.textContent = t;
  });
  document.documentElement.lang = k;
  document.querySelectorAll('.kalba button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.kalba === k)));
  document.querySelectorAll('.g').forEach(f => {
    const img = f.querySelector('img');
    img.alt = f.querySelector('figcaption').textContent;
  });
  try { localStorage.setItem('leostat-kalba', k); } catch (e) {}
}
document.querySelectorAll('.kalba button').forEach(b => b.addEventListener('click', () => nustatykKalba(b.dataset.kalba)));
let issaugota = null;
try { issaugota = localStorage.getItem('leostat-kalba'); } catch (e) {}
nustatykKalba(issaugota === 'en' ? 'en' : 'lt');

// ---------- Meniu telefone ----------
const meniu = document.getElementById('meniu');
const meniuBtn = document.querySelector('.meniu-mygtukas');
meniuBtn.addEventListener('click', () => {
  const atidaryti = meniuBtn.getAttribute('aria-expanded') !== 'true';
  meniuBtn.setAttribute('aria-expanded', String(atidaryti));
  meniu.classList.toggle('atidarytas', atidaryti);
});
meniu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { meniuBtn.setAttribute('aria-expanded', 'false'); meniu.classList.remove('atidarytas'); }
});

// ---------- Darbų skirtukai ----------
const skirtukai = [...document.querySelectorAll('[role="tab"]')];
function rodykSkirtuka(tab) {
  skirtukai.forEach(t => {
    const aktyvus = t === tab;
    t.setAttribute('aria-selected', String(aktyvus));
    t.tabIndex = aktyvus ? 0 : -1;
    const panele = document.getElementById(t.getAttribute('aria-controls'));
    panele.hidden = !aktyvus;
    if (aktyvus) {
      panele.querySelectorAll('.g').forEach((g, i) => g.style.setProperty('--i', i));
      panele.classList.remove('keiciasi'); void panele.offsetWidth; panele.classList.add('keiciasi');
    }
  });
}
skirtukai.forEach((t, i) => {
  t.addEventListener('click', () => rodykSkirtuka(t));
  t.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const kitas = skirtukai[(i + (e.key === 'ArrowRight' ? 1 : -1) + skirtukai.length) % skirtukai.length];
    kitas.focus(); rodykSkirtuka(kitas);
  });
});

// ---------- Nuotraukos peržiūra ----------
const perziura = document.getElementById('perziura');
document.querySelectorAll('.g__btn').forEach(btn => btn.addEventListener('click', () => {
  const img = btn.querySelector('img');
  const aprasas = btn.parentElement.querySelector('figcaption').textContent;
  perziura.querySelector('img').src = img.src;
  perziura.querySelector('img').alt = aprasas;
  perziura.querySelector('.perziura__aprasas').textContent = aprasas;
  perziura.showModal();
}));
perziura.querySelector('.perziura__uzdaryti').addEventListener('click', () => perziura.close());
perziura.addEventListener('click', e => { if (e.target === perziura) perziura.close(); });

// ---------- Atsiradimas slenkant ----------
const rodomi = document.querySelectorAll('.rodyti');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(irasai => irasai.forEach(i => {
    if (i.isIntersecting) { i.target.classList.add('matomas'); io.unobserve(i.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  rodomi.forEach(el => io.observe(el));
} else {
  rodomi.forEach(el => el.classList.add('matomas'));
}

// ---------- 3D vaizdai: groja tik kai matomi ----------
const ramiai = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!ramiai && 'IntersectionObserver' in window) {
  const vio = new IntersectionObserver(irasai => irasai.forEach(i => {
    if (i.isIntersecting) i.target.play().catch(() => {}); else i.target.pause();
  }), { threshold: 0.25 });
  document.querySelectorAll('video').forEach(v => vio.observe(v));
}

// ---------- Formos: paruošia laišką el. pašto programoje ----------
function tikrink(forma) {
  let gerai = true;
  forma.querySelectorAll('.laukas').forEach(l => {
    const lauk = l.querySelector('input, select, textarea');
    const klaida = l.querySelector('[data-klaida]');
    if (!klaida) return;
    let tekstas = '';
    if (lauk.required && !lauk.value.trim()) tekstas = PRANESIMAI[kalba].privaloma;
    else if (lauk.type === 'email' && lauk.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lauk.value.trim())) tekstas = PRANESIMAI[kalba].pastas;
    klaida.textContent = tekstas;
    l.classList.toggle('blogai', !!tekstas);
    lauk.setAttribute('aria-invalid', String(!!tekstas));
    if (tekstas && gerai) { lauk.focus(); gerai = false; }
  });
  return gerai;
}

function siusk(forma, tema) {
  forma.addEventListener('submit', e => {
    e.preventDefault();
    const busena = forma.querySelector('.forma__busena');
    busena.textContent = '';
    if (!tikrink(forma)) return;
    const eilutes = [...forma.querySelectorAll('.laukas')].map(l => {
      const lauk = l.querySelector('input, select, textarea');
      return l.querySelector('label').textContent + ': ' + (lauk.value.trim() || '-');
    });
    const url = 'mailto:' + PASTAS + '?subject=' + encodeURIComponent(tema()) + '&body=' + encodeURIComponent(eilutes.join('\n\n'));
    window.location.href = url;
    busena.textContent = PRANESIMAI[kalba].atidaryta;
  });
}
siusk(document.getElementById('uzklausa'), () => (kalba === 'en' ? 'Quote request' : 'Užklausa pasiūlymui'));
siusk(document.getElementById('anketa'), () => (kalba === 'en' ? 'Job application' : 'Darbo anketa') + ': ' + document.getElementById('a-spec').value);
