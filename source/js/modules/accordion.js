const accordions = document.querySelectorAll('.accordion');

accordions.forEach((el) => {
  const title = el.querySelector('.accordion__title');

  title.addEventListener('click', () => {
    let content = title.nextElementSibling;

    if (content.style.height) {
      content.style.height = null;
      el.classList.remove('accordion--open');
    } else {
      el.classList.add('accordion--open');
      // let paddingTop = parseInt(getComputedStyle(content).getPropertyValue('padding-top'), 10);
      // let paddingBottom = parseInt(getComputedStyle(content).getPropertyValue('padding-bottom'), 10);
      // let padding = paddingBottom + paddingTop
      content.style.height = content.scrollHeight + 'px';
    }
  });
});
