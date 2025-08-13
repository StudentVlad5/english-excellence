import heroMobile from '../src/img/webp/hero/hero_2.jpg';
import heroTablet from '../src/img/webp/hero/hero_tablet_2.jpg';
import heroDesktop from '../src/img/webp/hero/hero_desktop_2.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const img = new Image();
  let bgUrl;

  if (window.innerWidth >= 1024) {
    bgUrl = heroDesktop;
  } else if (window.innerWidth >= 768) {
    bgUrl = heroTablet;
  } else {
    bgUrl = heroMobile;
  }
  img.onload = () => {
    hero.style.setProperty(
      '--main-bg',
      `linear-gradient(-144deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 60%), url(${bgUrl})`
    );
    hero.classList.add('loaded');
  };

  img.onerror = () => console.error('Не вдалося завантажити картинку:', bgUrl);

  img.src = bgUrl;
});
