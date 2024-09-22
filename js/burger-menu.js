const btnBurger = document.querySelector('#burger');
const btnBurgerPackage = document.querySelector('#burger-package');
const menu = document.querySelector('.header__section--mobile');
const linkBurger = document.querySelectorAll('.navigation__link--mobile');

btnBurger.addEventListener('click', () => {
  menu.classList.toggle('open');
  btnBurger.classList.toggle('open');
});

linkBurger.forEach(link => {
  link.addEventListener('click', () => {
    btnBurger.classList.remove('open');
    menu.classList.remove('open');
  });
});

btnBurgerPackage.addEventListener('click', () => {
  menu.classList.remove('open');
  btnBurger.classList.remove('open');
});
