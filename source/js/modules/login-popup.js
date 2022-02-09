const linkPopup = document.querySelector('.link-popup');
const popup = document.querySelector('.popup');

if (popup) {
  const popupIn = popup.querySelector('.popup__wrapper');
  const closeButton = popup.querySelector('.popup__close-btn');

  linkPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup--open');
  });

  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--open');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      if (popup.classList.contains('popup--open')) {
        evt.preventDefault();
        popup.classList.remove('popup--open');
      }
    }
  });

  popup.addEventListener('click', function (evt) {
    if (evt.target !== popupIn) {
      popup.classList.remove('popup--open');
    }
  });

  popupIn.addEventListener('click', function (evt) {
    evt.stopPropagation();
  });
}
