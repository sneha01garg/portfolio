// Wait for DOM to be ready
const html = String.raw;

document.addEventListener('DOMContentLoaded', () => {
  // Render all sections into the main element
  const appContainer = document.getElementById('app');

  appContainer.innerHTML += renderHome();
  appContainer.innerHTML += renderAbout();
  appContainer.innerHTML += renderProjects();
  appContainer.innerHTML += renderContact();

  // Setup contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message!');
      contactForm.reset();
    });
  }

  // Initialize Parallax
  initParallax();
});
