const loadFormBtn = document.getElementById('orderBtn');
const formContainer = document.querySelector('.form-container');

loadFormBtn.addEventListener('click', function () {
  fetch('/pages/order-form.html')
    .then(response => response.text())
    .then(data => {
      formContainer.innerHTML = data;
    });
});
