const btnBurgerOff = document.querySelector('#burger-off');
const header = document.querySelector('header');

btnBurgerOff.addEventListener('click', () => {
  header.classList.toggle('open');
});
