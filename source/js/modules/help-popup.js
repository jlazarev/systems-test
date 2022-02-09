const helpBtn = document.querySelector('.header__help');
const helpPopup = document.querySelector('.header__popup');

helpBtn.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (helpPopup.classList.contains('header__popup--open')) {
    helpPopup.classList.remove('header__popup--open');
  } else {
    helpPopup.classList.add('header__popup--open');
  }
});

window.addEventListener('click', function (evt) {
  if ((evt.target !== helpPopup) && (evt.target !== helpBtn)) {
    helpPopup.classList.remove('header__popup--open');
  }
});

helpPopup.addEventListener('click', function (evt) {
  evt.stopPropagation();
});

helpBtn.addEventListener('click', function (evt) {
  evt.stopPropagation();
});
