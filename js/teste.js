// Anima destaque da seção atual ao rolar
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Faz as seções aparecerem com efeito fade-up ao rolar
const sections = document.querySelectorAll('.section');

function showSectionsOnScroll() {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showSectionsOnScroll);
showSectionsOnScroll();
