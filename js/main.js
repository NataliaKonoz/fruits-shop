const btnBurgerOff = document.querySelector('#burger-off');
const btnBurgerPackage = document.querySelector('#burger-package');
const header = document.querySelector('header');
const linkBurger = document.querySelector('.navigation__link--mobile');

btnBurgerOff.addEventListener('click', () => {
  header.classList.toggle('open');
});

linkBurger.addEventListener('click', () => {
  header.classList.remove('open');
});

btnBurgerPackage.addEventListener('click', () => {
  header.classList.remove('open');
});
