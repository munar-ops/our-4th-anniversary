/* Photo Archive — nagdadagdag ng sariling sidebar item, page, at lightbox.
   Dagdagan lang ang CAPTIONS kung gusto mo (key = numero ng photo). */
(function () {
  const COUNT = 17, DIR = 'assets/images/', EXT = '.webp';
  const CAPTIONS = {
    // 1: 'First picture natin',
    // 2: 'Date natin sa ...',
  };

  const css = document.createElement('style');
  css.textContent = `
  .gal{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}
  .gal figure{margin:0;cursor:pointer;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--panel);transition:border-color .2s,transform .15s}
  .gal figure:hover{border-color:var(--ac)}.gal figure:active{transform:scale(.97)}
  .gal img{display:block;width:100%;aspect-ratio:1/1;object-fit:cover}
  .gal figcaption{font:.7rem var(--mono);color:var(--mut);padding:6px 8px}
  #lb{position:fixed;inset:0;z-index:50;background:#06030cee;display:none;flex-direction:column;align-items:center;justify-content:center;padding:16px}
  #lb.on{display:flex}
  #lb img{max-width:100%;max-height:78vh;border-radius:10px;box-shadow:0 0 40px #b57bff44}
  #lb p{color:var(--tx);font:.9rem var(--mono);margin-top:12px;text-align:center;min-height:1.4em}
  #lb .ctl{display:flex;gap:10px;margin-top:10px}
  #lb button{background:var(--panel);color:var(--tx);border:1px solid var(--line);border-radius:8px;min-width:48px;height:44px;font-size:1.1rem;cursor:pointer}
  `;
  document.head.appendChild(css);

  // sidebar button (bago ang final_commit)
  const nav = document.getElementById('nav');
  const btn = document.createElement('button');
  btn.dataset.view = 'photos'; btn.textContent = '📷 Our Memories';
  nav.insertBefore(btn, document.getElementById('finalBtn'));

  // page
  const sec = document.createElement('section');
  sec.id = 'v-photos'; sec.className = 'view';
  sec.innerHTML = '<h2>Photo Archive</h2><p class="hint">' + COUNT + ' image files found. Tap one to open.</p><div class="gal" id="gal"></div>';
  document.querySelector('.main').appendChild(sec);

  const gal = sec.querySelector('#gal');
  for (let i = 1; i <= COUNT; i++) {
    const f = document.createElement('figure'); f.dataset.i = i;
    f.innerHTML = '<img loading="lazy" src="' + DIR + i + EXT + '" alt="Photo ' + i + '"><figcaption>IMG_' + String(i).padStart(3, '0') + (CAPTIONS[i] ? ' · ' + CAPTIONS[i] : '') + '</figcaption>';
    f.querySelector('img').onerror = () => f.remove();
    gal.appendChild(f);
  }

  // lightbox
  const lb = document.createElement('div');
  lb.id = 'lb';
  lb.innerHTML = '<img alt=""><p></p><div class="ctl"><button data-d="-1" aria-label="Previous">‹</button><button data-d="0" aria-label="Close">✕</button><button data-d="1" aria-label="Next">›</button></div>';
  document.body.appendChild(lb);
  let cur = 1;
  const open = i => {
    cur = ((i - 1 + COUNT) % COUNT) + 1;
    lb.querySelector('img').src = DIR + cur + EXT;
    lb.querySelector('p').textContent = CAPTIONS[cur] || 'IMG_' + String(cur).padStart(3, '0');
    lb.classList.add('on');
  };
  gal.addEventListener('click', e => { const f = e.target.closest('figure'); if (f) open(+f.dataset.i); });
  lb.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (b) { +b.dataset.d ? open(cur + +b.dataset.d) : lb.classList.remove('on'); }
    else if (e.target === lb) lb.classList.remove('on');
  });
  addEventListener('keydown', e => {
    if (!lb.classList.contains('on')) return;
    if (e.key === 'Escape') lb.classList.remove('on');
    if (e.key === 'ArrowRight') open(cur + 1);
    if (e.key === 'ArrowLeft') open(cur - 1);
  });
})();