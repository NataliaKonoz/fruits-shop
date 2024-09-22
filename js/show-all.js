const showAllBtn = document.getElementById('showAllBtn');
const list = document.querySelector('.buy-section__list-fruits');
const buySection = document.getElementById('buy-section');

showAllBtn.addEventListener('click', () => {
  list.classList.toggle('show-all');
  if (list.classList.contains('show-all')) {
    showAllBtn.textContent = 'Згорнути';
    showAllBtn.style.backgroundColor = 'red';
  } else {
    showAllBtn.textContent = 'Дивитися все';
    showAllBtn.style.backgroundColor = 'var(--color-brand-green)';
    buySection.scrollIntoView({ behavior: 'smooth' });
  }
});
