const formContainer = document.getElementById('formContainer');
const loadFormBtn = document.querySelectorAll('[id^="showFormBtn"]');
const removeFormBtn = document.querySelector('#removeFormBtn');
const main = document.getElementById('mainContent');
const footer = document.getElementById('footer');
const listItem = document.getElementById('[id^="listItem"]');

document.addEventListener('DOMContentLoaded', function () {
  fetch('/pages/order-form.html')
    .then(response => response.text())
    .then(data => {
      formContainer.insertAdjacentHTML('beforeend', data);
    });
});

formContainer.classList.add('hidden');

loadFormBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (formContainer.classList.contains('hidden')) {
      formContainer.classList.remove('hidden');
      formContainer.classList.add('active');
      main.style.display = 'none';
      footer.style.display = 'none';
    }
  });
});

removeFormBtn.addEventListener('click', () => {
  if (formContainer.classList.contains('active')) {
    formContainer.classList.remove('active');
    formContainer.classList.add('hidden');
    main.style.display = 'block';
    footer.style.display = 'block';
  }
});
