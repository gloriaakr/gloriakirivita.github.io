// Initialize EmailJS
emailjs.init('OcAnKY-NIbQPNe6MX');

// Scroll-Reveal Animations
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('active');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Contact Form Submission via EmailJS
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm('service_vtcixzc', 'template_r6vfp8h', this)
    .then(() => alert('✅ Message sent successfully!'))
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('❌ Oops, failed to send. Please try again.');
    });
});


// Testimonial Carousel Functionality
const testimonialTrack = document.querySelector('.testimonial-carousel-track');
const testimonialCards = document.querySelectorAll('.testimonial-carousel-track .testimonial');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;
const visibleCount = 3;

const updateCarousel = () => {
  const cardWidth = testimonialCards[0].offsetWidth + 20; // width + margin
  testimonialTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
};

rightArrow?.addEventListener('click', () => {
  if (currentIndex < testimonialCards.length - visibleCount) {
    currentIndex++;
    updateCarousel();
  }
});

leftArrow?.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);




