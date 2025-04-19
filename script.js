// Smooth scroll to projects section when CTA button is clicked
document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({
      behavior: 'smooth'
    });
  });
  