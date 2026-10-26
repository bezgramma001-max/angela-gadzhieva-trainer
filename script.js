const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const videoCard = document.querySelector('.video-card');
const video = document.querySelector('#training-video');
const overlay = document.querySelector('.video-overlay');
overlay?.addEventListener('click', async () => {
  videoCard?.classList.add('is-playing');
  try { await video?.play(); } catch (_) {}
});
video?.addEventListener('pause', () => {
  if (video.currentTime < video.duration) videoCard?.classList.remove('is-playing');
});
video?.addEventListener('ended', () => videoCard?.classList.remove('is-playing'));

// Force the latest trainer photo to load instead of a cached copy.
const aboutPhoto = document.querySelector('.about-photo-wrap img');
if (aboutPhoto) {
  aboutPhoto.src = 'assets/about.jpg?v=20261026-3';
}

// About section photo: show the trainer larger while keeping face and body fully visible.
const aboutPhotoFix = document.createElement('style');
aboutPhotoFix.textContent = `
@media (min-width: 1001px) {
  .about-grid {
    grid-template-columns: 1.02fr 1.12fr .74fr;
  }
  .about-photo-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #171719;
  }
  .about-photo-wrap img {
    width: 100%;
    height: auto;
    max-width: none;
    max-height: 100%;
    object-fit: contain;
    object-position: center center;
  }
}
@media (max-width: 1000px) {
  .about-photo-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: 0;
    background: #171719;
  }
  .about-photo-wrap img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center center;
  }
}
`;
document.head.appendChild(aboutPhotoFix);
