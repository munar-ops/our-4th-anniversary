const CONFIG = {
  user: 'maryance',
  pass: 'maryance05',
  startDate: '2022-10-05',
  herName: 'MAHAL:',                 
  song: 'assets/audio/old-love.mp3',  
  playlist: [
  ['Old Love', 'Yuji', 'assets/audio/old-love.mp3'],
  ['Misteryoso', 'Cup of Joe', 'assets/audio/misteryoso.mp3'],
  ['Dulo Ng Pahina', 'Wilbert Ross', 'assets/audio/dulo-ng-pahina.mp3'],
  ['Ginintuang Tanawin', 'Wilbert Ross', 'assets/audio/ginintuang-tanawin.mp3']
],
  memories: [
    ['2022-10-05', 'Confession natin', 'Umamin ka, umamin ako. Ito ang araw na hindi ko akalain na magkaka girl friend ako.'],
    ['2023-10-05', '1st Anniversary', 'hindi ko akalain na tatagal tayo ng 1 year'],
    ['2024-10-05', '2nd Anniversary', 'mas nag mamahalan tayo, mas matagal tayong nag mamahalan nag discover something new para saatin'],
    ['2025-10-05', '3rd Anniversary', 'napatunayan nating matatag tayo lalo na college life na mahirap kasi hindi na tayo lagi magkasama at makita but napatunayan nating kaya natin'],
    ['2026-10-05', '4th Anniversary', 'Still inlove sayo. Madameng problema na naharap, mas malakas compared dati. Though hindi tayo makapag celebrate dahil sa mga hinaharap sa school, i hope makapag date tayo soon']
    
  ],
  changelog: [
    ['v1.0', 'Year 1 · 2022', ['first anniversary', 'Nagsimula lang tayo sa chat chat eh']],
    ['v2.0', 'Year 2 · 2023', ['Improved communication ', 'Added late-night call']],
    ['v3.0', 'Year 3 · 2024', ['Stability improvements', ' nakalimutang kong mag-reply😅', 'Snack sharing optimized']],
    ['v4.0', 'Year 4 · 2026', ['Added unlimited love storage', 'Warning: walang uninstall option subukan mo lang dodong😒', 'Added new memories', 'Added new changelog']]
  ],
  letter: `Haluu {Mahal},
Ang bilis ng panahon noh, parang kailan lang nag chat ka sakin thru messenger about sa subject dahil ako ay ang representative ng subject na yun (nakalimutan ko kasi anong sub yun eh hehe😅).
So ayun dun nga tayo nag start nag uusap, yabangan, tawanan, at mga pag tatanong mo sakin dahil hindi ka napasok ng online class noon HAHAHAHA.
until one day, uhmm we finally meet yun yung unang beses ata akong pumasok face to face sa school and nahiya akong mag approach sayo,tapos mga tropa mo lumapit sakin tapos nag aya na sumama ako sainyo HAHAHA.
tas ayun tumambay tayo sa court ng paragon tas nilibre nyo ako ng street foods ata, dahil yung pera ko naiwan ko sa bahay noon HAHAHA.
Sarap lang balikan ng mga ala-ala na iyon 4 years ago na ang nakalipas pero fresh padin sakin yung mga ala-ala na yun, yun din yung araw na una akong nag I LOVE YOU sayo, sa kalsadang madilim HAHAHAHA nag lakas nalang ako ng loob nun syempre may hiya ako nun HAHAHA
then one day nag chat ka sakin randomly para mag tanong ng nami or robin HAHAHAHA tapos hindi ko alam kung para saan iyong tanong na yun hanggang sa ayun umamin ka HAHAHAHAHAHA. Paldo AHAHAHAHAH.
And syempre hindi lang naman puro masasayang araw lang ang mangyayare, meron ding sad and rejection era, yun yung pinag stop mo ako manligaws sayo, sakit mo naman dodong HAHAHA
Yung mundo ko noon talagang wasak, kasi yung totoo wala akong balak mag gf until sa ready nako, and ikaw nag paramdam sakin na hindi ko kailangan ng perfect opportunity para pumasok sa relasyon, but pinaramdam mo sakin na your the one na mag kukumpleto sa buhay na hindi ko inaasahang mang yare,
thats why parang nasira buhay ko noon eh, tas sinabe ko sa sarili ko ano bayan kung kelan ready ako para sakanya saka naman sya huminto. And akala ko wala na tapos na move on na, but siguro hindi tayo basta basta bumitaw sa isat isa kaya tumuloy nanaman ang panliligaw ko.
Hanggang sa OCTOBER 5, 2022. sinagot mo ako HAHAHAHA. 

And now we are here, 4 years later, mag kasama padin tayo, lumalaban, may happy moment, may sad and fighting moment, pero nalagpasan natin yun lahat.
I was very thankful to have you in my life, and I will always be grateful for the love and supoort that you gave to me. 
Although hindi ako perfect na boy friend, naaway kita, nasaktan kita, pero I will always try to be the best version of myself for you. Ohh dba panis HAHAHAHAHA
Pero kidding aside, Thankful ako na lagi ka andyan sa tabe ko, biruan, asaran, tawanan, kwentuhan namay kwnetutan AHAHAHAH. Sa pag intindi sakin, pag titiis sa ugali ko, sa pag suporta sakin.
ayun, And lagi ikaw ang pipiliin ko sa pang araw-araw na buhay ko, kahit anong mangyare andito lang ako para sayo parati, I hope na pang habang buhay ako sa puso mo.
I promise na I never gonna let you go, gagawin ko ang lahat para hindi kita mabigo, ofcourse except sa cheating because hindi ko magagawa sayo yun, kahit ilang babae pa ang mag try na lumapit sakin, pero malabo yun dahil hindi naman ako ganun ka attractive sa iba eh HAHAHHA

So ayun yun lang ang mga message ko para sayo I LOVE YOU MAHAL, HAPPY 4TH ANNIVERSARY, I WILL ALWAYS BE GRATEFUL TO HAVE YOU IN MY LIFE 
wag mo lang ako saktan dodong sinasabe ko sayo😒😒
So ayun I LOVE YOU SO MUCH, AND I WILL ALWAYS LOVE YOU FOREVER AND EVER, I PROMISE. MWUAAAAAAAAAAAA😘😘😘😘


— Your MAHAL(lance)`
};
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const show = id => { $$('.screen').forEach(s => s.classList.remove('active')); $(id).classList.add('active'); };
 
/* ---- Login ---- */
$('#loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const ok = $('#u').value.trim().toLowerCase() === CONFIG.user && $('#p').value.trim().toLowerCase() === CONFIG.pass;
  const err = $('#err');
  if (!ok) {
    err.hidden = false; err.classList.remove('shake'); void err.offsetWidth; err.classList.add('shake');
    $('#p').value = ''; return;
  }
  err.hidden = true;
  show('#boot');
  const lines = ['Establishing secure connection...', 'Verifying credentials...', 'Access granted.',
    'Relationship database connected.', 'Welcome, Maryance.'];
  const out = $('#bootLog'); out.textContent = '';
  for (const l of lines) { await typeInto(out, '> ' + l + '\n', 40); await sleep(260); }
  await sleep(500);
  show('#app'); startApp();
});
 
async function typeInto(el, text, speed) {
  for (const c of text) { el.textContent += c; await sleep(speed); }
}
 
/* ---- App ---- */
const seen = new Set(); let started = false, ready = false;
function startApp() {
  if (started) return; started = true;
  const days = Math.max(0, Math.floor((Date.now() - new Date(CONFIG.startDate)) / 864e5));
  countUp($('#days'), days); countUp($('#hours'), days * 24);
  bootLog(); buildMemories(); buildChangelog(); termInit();
}
function countUp(el, to) {
  const t0 = performance.now();
  (function f(t) { const p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString(); if (p < 1) requestAnimationFrame(f); })(t0);
}
async function bootLog() {
  const L = ['[OK] kernel loaded', '[OK] memory archive mounted', '[OK] heartbeat service running', '[WARN] affection exceeds expected range', '[INFO] unknown process "forever" is running'];
  for (const l of L) { $('#log').textContent += l + '\n'; await sleep(700); }
}
 
function go(v) {
  if (v === 'final' && !ready) { toast(); return; }
  $$('.view').forEach(x => x.classList.toggle('show', x.id === 'v-' + v));
  $$('#nav button').forEach(b => b.classList.toggle('on', b.dataset.view === v));
  $('#crumb').textContent = '/' + (v === 'final' ? 'final_commit' : v);
  closeNav(); scrollTo(0, 0);
  if (['memories', 'changelog', 'terminal'].includes(v)) { seen.add(v); updateProg(); }
}
function updateProg() {
  $('#prog').textContent = `modules reviewed ${seen.size}/3`;
  if (seen.size >= 3 && !ready) {
    ready = true; const b = $('#finalBtn');
    b.textContent = '💌 final_commit'; b.classList.remove('locked'); b.classList.add('ready');
    $('#log').textContent += '[INFO] final_commit.exe is now available\n';
  }
}
function toast() { $('#prog').textContent = 'access denied · review all 3 modules first'; setTimeout(updateProg, 2200); }
$('#nav').addEventListener('click', e => { const b = e.target.closest('button'); if (b) go(b.dataset.view); });
const closeNav = () => { $('#side').classList.remove('open'); $('#scrim').classList.remove('on'); };
$('#burger').onclick = () => { $('#side').classList.toggle('open'); $('#scrim').classList.toggle('on'); };
$('#scrim').onclick = closeNav;
$('#logout').onclick = () => location.reload();
 
function buildMemories() {
  $('#memList').innerHTML = CONFIG.memories.map(([d, t, x], i) =>
    `<button class="panel rec" data-i="${i}"><div class="h">record_${String(i + 1).padStart(3, '0')} · ${d}</div>
    <div class="cipher">${btoa(t).slice(0, 36)}…[encrypted]</div>
    <div class="plain"><b>${t}</b><br>${x}</div></button>`).join('');
  $('#memList').onclick = e => e.target.closest('.rec')?.classList.toggle('open');
}
function buildChangelog() {
  $('#chg').innerHTML = CONFIG.changelog.map(([v, y, l]) =>
    `<div class="panel"><b>${v}</b> — ${y}<ul>${l.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('');
}
 
/* ---- Shared music player ---- */
const player = new Audio();
let plIndex = 0, plMode = null; // 'playlist' | 'letter'
function stopMusic() { player.onended = null; player.onerror = null; player.pause(); plMode = null; }
function playTrack(i, print) {
  const n = CONFIG.playlist.length;
  if (i >= n) { plMode = null; print('playlist finished (' + n + '/' + n + ')'); return; }
  plMode = 'playlist'; plIndex = i;
  const [title, artist, src] = CONFIG.playlist[i];
  player.loop = false;
  player.onended = () => playTrack(i + 1, print);          // next song pag tapos na
  player.onerror = () => { print('error: cannot load ' + src + ' (check filename sa assets/audio/)'); playTrack(i + 1, print); };
  player.src = src;
  player.play().then(() => print('now playing [' + (i + 1) + '/' + n + ']: ' + title + ' — ' + artist))
    .catch(() => {});
}

/* ---- Terminal ---- */
function termInit() {
  const out = $('#termOut'), inp = $('#termIn');
  const print = t => { out.textContent += t + '\n'; out.scrollTop = out.scrollHeight; };
  print('LMS shell v4.0 — type "help"');
  const cmds = {
    help: () => 'commands: help, whoami, status, ls, snacks, play theme song, next, stop, playlist, cat us.txt, date, sudo love, clear',
    whoami: () => 'maryance — the only authorized user (and my favorite person)',
    status: () => 'all systems operational\nlove: 100% (overflow)',
    ls: () => 'memories/  us.txt  snacks.db  final_commit.exe',
    snacks: () => 'softdrinks, fries, gummy bears, seafood(fav mo to eh), other food cravings',
    'play theme song': () => { stopMusic(); playTrack(0, print); return ''; },
    theme: () => { stopMusic(); playTrack(0, print); return ''; },
    next: () => { if (plMode !== 'playlist') return 'nothing playing. type "play theme song"'; playTrack(plIndex + 1, print); return ''; },
    stop: () => { stopMusic(); return 'music stopped'; },
    playlist: () => CONFIG.playlist.map((t, i) => (i + 1) + '. ' + t[0] + ' — ' + t[1]).join('\n'),
    'cat us.txt': () => 'two users, one shared home directory',
    date: () => new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila', dateStyle: 'full', timeStyle: 'medium' }) + ' (PHT)',
    'sudo love': () => `[sudo] password for maryance: ********\npermission granted: I LOVE YOU MAHAL`,
    clear: () => { out.textContent = ''; return ''; }
  };
  inp.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const c = inp.value.trim().toLowerCase(); inp.value = '';
    print('maryance@lms:~$ ' + c);
    const r = cmds[c] ? cmds[c]() : c ? `command not found: ${c}` : '';
    if (r) print(r);
  });
  $('#termBox').onclick = () => inp.focus();
}
 
/* ---- Final reveal ---- */
function letterSong(m) {
  if (plMode !== 'letter') { stopMusic(); plMode = 'letter'; player.src = CONFIG.song; player.loop = true; }
  player.play().then(() => m.textContent = '♪ pause song')
    .catch(() => m.textContent = '♪ play song (check assets/audio/old-love.mp3)');
}
$('#run').onclick = async () => {
  $('#gate').hidden = true; $('#reveal').hidden = false;
  hearts(true);
  const m = $('#music'); m.hidden = false;
  letterSong(m);                       // Old Love starts agad pag pinindot ang EXECUTE
  m.onclick = () => (plMode === 'letter' && !player.paused) ? (player.pause(), m.textContent = '♪ play song') : letterSong(m);
  const el = $('#letter');
  const text = CONFIG.letter.replace('{Mahal}', CONFIG.herName).replace('{name}', CONFIG.herName);
  for (const c of text) { el.textContent += c; await sleep(c === '\n' ? 260 : 32); }
  el.classList.add('done');
};

/* ---- Background: purple data rain with snacks; hearts + soda bubbles on reveal ---- */
const cv = $('#fx'), cx = cv.getContext('2d'); let W, H, cols = [], P = [], mode = 0;
const SN = ['🍟', '🥤', '🧸', '🦐', '🍬'];
function size() { W = cv.width = innerWidth; H = cv.height = innerHeight; cols = Array.from({ length: Math.floor(W / 28) }, () => Math.random() * H); }
addEventListener('resize', size); size();
function hearts(on) { mode = on ? 1 : 0; P = []; cx.clearRect(0, 0, W, H); }
function spawn() {
  P.push({ x: Math.random() * W, y: H + 30, v: .6 + Math.random() * 1.5, s: 10 + Math.random() * 20,
    t: Math.random() < .5 ? 'h' : Math.random() < .75 ? 'b' : 'e', e: SN[Math.random() * 5 | 0], w: Math.random() * 6.28 });
}
(function draw() {
  if (!mode) {
    cx.fillStyle = 'rgba(10,7,18,.12)'; cx.fillRect(0, 0, W, H); cx.font = '14px monospace';
    cols.forEach((y, i) => {
      const snack = Math.random() < .004;
      cx.fillStyle = 'rgba(181,123,255,.25)';
      cx.fillText(snack ? SN[Math.random() * 5 | 0] : Math.random() < .5 ? '0' : '1', i * 28, y);
      cols[i] = y > H + Math.random() * 3000 ? 0 : y + 1.4;
    });
  } else {
    cx.clearRect(0, 0, W, H);
    if (P.length < 70 && Math.random() < .25) spawn();
    P = P.filter(p => p.y > -40);
    P.forEach(p => {
      p.y -= p.v; p.w += .02; const x = p.x + Math.sin(p.w) * 14;
      if (p.t === 'h') { cx.font = p.s + 'px serif'; cx.fillStyle = 'rgba(181,123,255,.55)'; cx.fillText('♥', x, p.y); }
      else if (p.t === 'e') { cx.font = p.s + 'px serif'; cx.fillText(p.e, x, p.y); }
      else { cx.strokeStyle = 'rgba(255,122,217,.4)'; cx.beginPath(); cx.arc(x, p.y, p.s / 3, 0, 6.28); cx.stroke(); }
    });
  }
  if (!matchMedia('(prefers-reduced-motion:reduce)').matches) requestAnimationFrame(draw);
})();