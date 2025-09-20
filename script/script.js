
// AJAX submit using FormSubmit (no backend required)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn ? submitBtn.textContent : 'Send';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
     }

    const formData = new FormData(form);

    try {
     const resp = await fetch('https://formsubmit.co/ajax/mwasmwas683@gmail.com', {
        method: 'POST',
        body: formData
     });

     const result = await resp.json();

      if (resp.ok) {
         // simple success feedback
        alert('Message sent — thank you!');
        form.reset();
     } else {
        // server returned an error
        alert(result.message || 'Failed to send message. Please try again.');
     }
    } catch (err) {
        alert('Network error. Please try again later.');
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel;
          }
    }
  });
});
