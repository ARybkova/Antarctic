export const toggleMenu = () => {
  const pageHeader = document.querySelector('.main-header');
  const navMain = document.querySelector('.navigation');
  const navToggle = document.querySelector('.navigation__toggle');
  const navLinks = navMain.querySelectorAll('.navigation__item');
  const overlay = document.querySelector('.main-header__overlay');

  const closeMenu = () => {
    if (document.getElementsByClassName('.navigation')) {
      navMain.classList.remove('navigation--opened');
      navMain.classList.add('navigation--closed');
      document.body.style.overflow = 'visible';
      overlay.style.display = 'none';
    }
  };

  navMain.classList.remove('navigation--nojs');
  pageHeader.classList.remove('main-header--nojs');

  if (document.getElementsByClassName('.navigation__toggle')) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('navigation--closed')) {
        navMain.classList.remove('navigation--closed');
        navMain.classList.add('navigation--opened');
        document.body.style.overflow = 'hidden';
        overlay.style.display = 'block';
      } else {
        closeMenu();
      }
    });
  }

  if (navLinks.length > 0) {
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', closeMenu);
    });
  }

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
};
