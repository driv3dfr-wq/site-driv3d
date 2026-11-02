// D-Riv 3D : petits comportements du site (menu mobile, curseur jour/nuit, galerie, vidéos).
(function () {
  // Menu mobile
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('nav.main');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? 'Fermer' : 'Menu';
    });
  }

  // Curseur jour / nuit
  document.querySelectorAll('.compare').forEach(function (cmp) {
    var r = cmp.querySelector('input[type=range]');
    if (r) r.addEventListener('input', function () { cmp.style.setProperty('--pos', r.value + '%'); });
  });

  // Vidéos YouTube : la vidéo ne se charge qu'au clic (site plus rapide, pas de cookies avant)
  document.querySelectorAll('.video[data-id]').forEach(function (v) {
    var b = v.querySelector('button');
    if (!b) return;
    b.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + v.dataset.id + '?autoplay=1&rel=0';
      f.title = b.getAttribute('aria-label') || 'Vidéo';
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      v.innerHTML = '';
      v.appendChild(f);
    });
  });

  // Galerie photo plein écran
  var groups = document.querySelectorAll('.gallery');
  if (!groups.length) return;
  var box, img, list = [], idx = 0, last;
  function show(i) {
    idx = (i + list.length) % list.length;
    img.src = list[idx].href;
    img.alt = list[idx].querySelector('img').alt;
  }
  function close() { box.hidden = true; document.body.style.overflow = ''; if (last) last.focus(); }
  function build() {
    box = document.createElement('div');
    box.className = 'lightbox'; box.hidden = true;
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', 'Photo agrandie');
    box.innerHTML = '<img alt=""><button class="prev" aria-label="Photo précédente">‹</button><button class="next" aria-label="Photo suivante">›</button><button class="close" aria-label="Fermer">✕</button>';
    document.body.appendChild(box);
    img = box.querySelector('img');
    box.querySelector('.prev').onclick = function () { show(idx - 1); };
    box.querySelector('.next').onclick = function () { show(idx + 1); };
    box.querySelector('.close').onclick = close;
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }
  groups.forEach(function (g) {
    var links = Array.prototype.slice.call(g.querySelectorAll('a'));
    links.forEach(function (a, i) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        if (!box) build();
        list = links; last = a; show(i);
        box.hidden = false; document.body.style.overflow = 'hidden';
        box.querySelector('.close').focus();
      });
    });
  });
})();
