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

// Показываем фотографию тренера в блоке «Обо мне» полностью, без обрезки.
const aboutPhotoWrap = document.querySelector('.about-photo-wrap');
const aboutPhoto = document.querySelector('.about-photo-wrap img');
if (aboutPhotoWrap && aboutPhoto) {
  aboutPhotoWrap.style.background = '#151517';
  aboutPhotoWrap.style.display = 'flex';
  aboutPhotoWrap.style.alignItems = 'center';
  aboutPhotoWrap.style.justifyContent = 'center';
  aboutPhoto.style.width = '100%';
  aboutPhoto.style.height = '100%';
  aboutPhoto.style.objectFit = 'contain';
  aboutPhoto.style.objectPosition = 'center center';
}
