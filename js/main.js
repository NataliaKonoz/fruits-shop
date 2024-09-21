const btnBurger = document.querySelector('#burger');
const header = document.querySelector('header');

btnBurger.addEventListener('click', () => {
  header.classList.toggle('open');
});
