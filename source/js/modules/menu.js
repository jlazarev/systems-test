// const header = document.querySelector('.header');
const navToggle = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__menu');
// const body = document.querySelector('.page-body');

navToggle.addEventListener('click', function () {
  if (menu.classList.contains('header__menu--open')) {
    menu.classList.remove('header__menu--open');
    navToggle.classList.remove('header__menu-btn--open');
    // body.classList.remove('page-body--no-scroll');
  } else {
    menu.classList.add('header__menu--open');
    navToggle.classList.add('header__menu-btn--open');
    // body.classList.add('page-body--no-scroll');
  }
});

window.addEventListener('click', function (evt) {
  if ((evt.target !== menu) && (evt.target !== navToggle)) {
    menu.classList.remove('header__menu--open');
    navToggle.classList.remove('header__menu-btn--open');
    // body.classList.remove('page-body--no-scroll');
  }
});

menu.addEventListener('click', function (evt) {
  evt.stopPropagation();
});
