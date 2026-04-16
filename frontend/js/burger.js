const burger = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links a');

// Toggle the 'open' class on both the menu and the burger icon
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close the menu when a link is clicked (important for anchor links)
links.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});