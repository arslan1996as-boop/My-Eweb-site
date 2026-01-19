// Basic interactivity: button click + contact form submit handling

// Helper to show a temporary message in an element
function showTemporaryMessage(container, text, ms = 3500) {
  container.textContent = text;
  container.style.opacity = '1';
  setTimeout(() => {
    // fade out
    container.style.transition = 'opacity 300ms';
    container.style.opacity = '0';
    setTimeout(() => { container.textContent = ''; container.style.transition = ''; container.style.opacity = '1'; }, 300);
  }, ms);
}

// Button click -> show a friendly message
const surpriseBtn = document.getElementById('surpriseBtn');
const heroMessage = document.getElementById('message');

if (surpriseBtn && heroMessage) {
  surpriseBtn.addEventListener('click', () => {
    showTemporaryMessage(heroMessage, "Thanks for clicking — hope you enjoy the site!");
  });
}

// Contact form submit -> show a message (no network request)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      showTemporaryMessage(formStatus, 'Please fill out all fields.', 3000);
      return;
    }

    // Simulate sending...
    formStatus.style.color = '#064e3b';
    showTemporaryMessage(formStatus, `Thanks, ${name}! Your message has been received.`);

    // Clear form
    contactForm.reset();
  });
}