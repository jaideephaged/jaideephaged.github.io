// Down arrow scroll
document.querySelector('.scroll-down').addEventListener('click', function () {
  const target = document.querySelector(this.dataset.target);
  target.scrollIntoView({ behavior: 'smooth' });
});

// Scroll spy (auto active nav)
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// PROJECT CARD TOGGLE (MULTIPLE OPEN ALLOWED)
document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.project-card').classList.add('expanded');
    });
});

document.querySelectorAll('.view-less').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.project-card').classList.remove('expanded');
    });
});

