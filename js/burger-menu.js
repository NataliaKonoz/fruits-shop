const btnBurgerOff = document.querySelector('#burger');
const btnBurgerPackage = document.querySelector('#burger-package');
const menu = document.querySelector('.header__section--mobile');
const linkBurger = document.querySelector('.navigation__link--mobile');

btnBurgerOff.addEventListener('click', () => {
  menu.classList.toggle('open');
  btnBurgerOff.classList.toggle('open');
});

linkBurger.addEventListener('click', () => {
  menu.classList.remove('open');
});

btnBurgerPackage.addEventListener('click', () => {
  menu.classList.remove('open');
});
