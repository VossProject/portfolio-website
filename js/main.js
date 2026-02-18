// Mobile nav toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
  });
}

// Dropdown toggle
const dropdowns = document.querySelectorAll('.nav__dropdown');

dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.nav__dropdown-toggle');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('is-open');
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  dropdowns.forEach(d => d.classList.remove('is-open'));
});

// Close mobile nav when clicking a link
navLinks?.querySelectorAll('.nav__link, .nav__dropdown-item').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('is-open');
    navLinks.classList.remove('is-open');
  });
});
