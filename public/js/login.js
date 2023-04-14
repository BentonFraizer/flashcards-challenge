const navLinks = document.querySelectorAll('.nav-link');
navLinks[2].classList.remove('active');
navLinks[0].classList.remove('active');
navLinks[1].classList.add('active');

const form = document.querySelector('.form-login');
console.log(form);

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formSubmitted = event.target;

  const login = formSubmitted.login.value;
  const password = formSubmitted.password.value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ login, password }),
  });

  const data = await response.json();

  if (data) {
    window.location.href = '/';
  }
});
