const formContainer = document.getElementById('formContainer');
const loadFormBtn = document.querySelectorAll('[id^="showFormBtn"]');
const removeFormBtn = document.querySelector('#removeFormBtn');

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
    }
  });
});

removeFormBtn.addEventListener('click', () => {
  if (formContainer.classList.contains('active')) {
    formContainer.classList.remove('active');
    formContainer.classList.add('hidden');
  }
});
