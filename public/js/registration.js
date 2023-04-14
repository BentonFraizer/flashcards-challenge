const navLinks = document.querySelectorAll('.nav-link');
navLinks[0].classList.add('active');
navLinks[1].classList.remove('active');
navLinks[2].classList.remove('active');

const form = document.querySelector('.form-registration');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formSubmitted = event.target;

  const login = formSubmitted.login.value;
  const password = formSubmitted.password.value;

  const response = await fetch('/registration', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ login, password }),
  });

  const data = await response.json();
  console.log(data);
});
