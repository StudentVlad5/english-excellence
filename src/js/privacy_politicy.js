document.addEventListener('DOMContentLoaded', function () {
  const infoBtns = document.querySelectorAll('.info-open-btn-id');
  const infoBackdrop = document.querySelector('.info-backdrop-id');
  const closeBtn = document.querySelector('.info-close-btn-id');
  const infoModal = document.querySelector('.info-modal');

  const heroContainer = document.querySelector('.hero');

  let scrollPosition = 0;

  infoBtns.forEach(infoBtn => {
    infoBtn.addEventListener('click', () => {
      scrollPosition = window.scrollY;
      scrollToTop();
      openInfoModal();
    });
  });

  closeBtn.addEventListener('click', () => {
    closeInfoModal();
    scrollToPosition();
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openInfoModal() {
    infoBackdrop.style.opacity = '1';
    infoBackdrop.classList.remove('is-hidden');

    // const heroPosition = heroContainer.getBoundingClientRect();
    // infoModal.style.top = `${heroPosition.top}px`;
  }

  function closeInfoModal() {
    infoBackdrop.style.opacity = '0';
    infoBackdrop.classList.add('is-hidden');
  }

  function scrollToPosition() {
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }
});
