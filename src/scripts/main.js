const hamburgerButton = document.getElementById('hamburger');
const menu = document.querySelector('.nav__list');
const main = document.querySelector('main');

hamburgerButton.addEventListener('click', (e) => {
  menu.classList.toggle('open');
  e.stopPropagation();
})

main.addEventListener('click', (e) => {
  menu.classList.remove('open');
  e.stopPropagation();
})
