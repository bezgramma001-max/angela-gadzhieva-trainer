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
