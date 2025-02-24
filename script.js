// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});

// ====================================================================

// Existing smooth scrolling code...

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Parallax effect for hero section
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;
  if (heroContent) {
    heroContent.style.transform = `translateY(${scroll * 0.4}px)`;
  }
});

// Dynamic text animation for skills
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`;
  });
  
  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  });
});

// Typing effect for hero description
const heroDescription = document.querySelector('.hero-description');
if (heroDescription) {
  const text = heroDescription.innerHTML;
  heroDescription.innerHTML = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      heroDescription.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 20);
    }
  }
  
  // Start typing when hero section is visible
  const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      typeWriter();
    }
  });
  
  heroObserver.observe(document.querySelector('.hero'));
}

//======================================================================================
// About section animation handler
const aboutSection = document.querySelector('.about');
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Add floating emojis animation
      const emojis = ['💻', '🤖', '🎯', '🚀'];
      emojis.forEach((emoji, index) => {
        setTimeout(() => {
          const floatingEmoji = document.createElement('span');
          floatingEmoji.innerHTML = emoji;
          floatingEmoji.style.cssText = `
            position: absolute;
            font-size: 1.5rem;
            left: ${Math.random() * 100}%;
            opacity: 0;
            transform: translateY(20px);
            animation: floatUp 2s ease-out forwards;
          `;
          aboutSection.appendChild(floatingEmoji);
          
          // Remove emoji after animation
          setTimeout(() => floatingEmoji.remove(), 2000);
        }, index * 500);
      });
    }
  });
}, {
  threshold: 0.2
});

aboutObserver.observe(aboutSection);

// Add floating animation
const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-50px);
    }
  }
`;
document.head.appendChild(style);