// Replace these with your EmailJS credentials
const EMAILJS_USER_ID = 'yHAX1m8a6xvtippJ3';
const EMAILJS_SERVICE_ID = 'service_t0tvmwj';
const EMAILJS_TEMPLATE_ID = 'template_nizwiai';

// Initialize EmailJS
(function() {
  emailjs.init(EMAILJS_USER_ID);
})();

// Handle form submission
const form = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    date: form.date.value,
    message: form.message.value
  };

  // Send email using EmailJS
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
    .then(function(response) {
      formMessage.innerHTML = '<div class="alert alert-success">Thank you! Your booking request has been sent.</div>';
      form.reset();
    }, function(error) {
      formMessage.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again later.</div>';
      console.error('FAILED...', error);
    });
});
