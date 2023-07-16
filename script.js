// Add any JavaScript functionality you need here

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const darkModeSwitch = document.getElementById('dark-mode-switch');
const body = document.body;

darkModeSwitch.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
