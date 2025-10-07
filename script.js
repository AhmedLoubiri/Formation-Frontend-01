// Show an alert when clicking the "Send Email" button in the contact form
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.contact');
  if (!form) return;
  var sendBtn = form.querySelector('button[type="submit"]');
  if (!sendBtn) return;

  sendBtn.addEventListener('click', function (e) {
    // Prevent the form from submitting so you can see the alert
    e.preventDefault();

    var subject = (form.querySelector('#subject') || {}).value || '';
    var body = (form.querySelector('#body') || {}).value || '';

    if (subject || body) {
      alert('Preparing to send:\n\nSubject: ' + subject + '\nMessage: ' + body);
    } else {
      alert('Please write a subject and a message before sending.');
    }
  });
});
