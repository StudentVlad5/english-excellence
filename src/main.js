import heroMobile from '../src/img/jpg/hero/hero_2.jpg';
import heroTablet from '../src/img/jpg/hero/hero_tablet_2.jpg';
import heroDesktop from '../src/img/jpg/hero/hero_desktop_2.jpg';

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

//-------------------------------- HEADER ------------------------------//

const burgerButton = document.getElementById('burger-button');
const closeButton = document.getElementById('close-button');
const siteNavLinks = document.querySelectorAll('.site-nav-link');
const navList = document.querySelector('.site-nav__list');
const backdrop = document.querySelector('.backdrop');
const sideMenu = document.getElementById('side-menu');

burgerButton.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
  sideMenu.classList.remove('is-hidden');
});

closeButton.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
  sideMenu.classList.add('is-hidden');
});

backdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    backdrop.classList.add('is-hidden');
    sideMenu.classList.add('is-hidden');
  }
});

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

function handleScreenWidthChange() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1280) {
    burgerButton.classList.remove('is-hidden');
    closeButton.classList.remove('is-hidden');
    backdrop.classList.add('is-hidden');
    sideMenu.classList.add('is-hidden');
  }

  if (screenWidth >= 1280) {
    burgerButton.classList.add('is-hidden');
    closeButton.classList.add('is-hidden');
    sideMenu.classList.remove('is-hidden');
    backdrop.classList.remove('is-hidden');
  }

  siteNavLinks.forEach(siteNavLink => {
    siteNavLink.removeEventListener('click', addIsHidden);

    if (screenWidth < 1280) {
      siteNavLink.addEventListener('click', addIsHidden);
    }
    if (screenWidth >= 1280) {
      siteNavLink.addEventListener('click', removeIsHidden);
    }
  });

  function addIsHidden() {
    backdrop.classList.add('is-hidden');
  }

  function removeIsHidden() {
    backdrop.classList.remove('is-hidden');
  }
}

handleScreenWidthChange();

window.addEventListener('resize', handleScreenWidthChange);

// ****************************************************************************//
