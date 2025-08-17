import heroMobile from '../img/hero/hero_2.jpg';
import heroTablet from '../img/hero/hero_tablet_2.jpg';
import heroDesktop from '../img/hero/hero_desktop_2.jpg';
import heroMobile2x from '../img/hero/hero_2@2x.jpg';
import heroTablet2x from '../img/hero/hero_tablet_2@2x.jpg';
import heroDesktop2x from '../img/hero/hero_desktop_2@2x.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const img = new Image();
  let bgUrl;
  let bgUrl2x;

  if (window.innerWidth >= 1280) {
    bgUrl = heroDesktop;
    bgUrl2x = heroDesktop2x;
  } else if (window.innerWidth >= 768) {
    bgUrl = heroTablet;
    bgUrl2x = heroTablet2x;
  } else {
    bgUrl = heroMobile;
    bgUrl2x = heroMobile2x;
  }

  img.onload = () => {
    hero.style.setProperty(
      '--main-bg',
      `linear-gradient(-144deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 60%), url(${bgUrl})`
    );

    hero.style.setProperty(
      '--main-bg-2x',
      `linear-gradient(-144deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 60%), url(${bgUrl2x})`
    );

    hero.classList.add('loaded');
  };

  img.onerror = () => console.error('Не вдалося завантажити картинку:', bgUrl);

  img.src = bgUrl;
});
