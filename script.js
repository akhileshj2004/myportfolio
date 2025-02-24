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
  threshold: 0.1,
  rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = '1';
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

// Enhanced particle creation with 3D effects
function createParticles(count) {
  const particlesContainer = document.querySelector('.particles');
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random initial position
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    
    // Random animation duration and delay
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    // Random 3D transform
    const zDepth = Math.random() * 400 - 200;
    const rotation = Math.random() * 360;
    particle.style.transform = `translateZ(${zDepth}px) rotateX(${rotation}deg)`;
    
    particlesContainer.appendChild(particle);
  }
}

// Initialize more particles for enhanced effect
createParticles(30);

// Modified particle creation with smoother animations
function createParticlesForContainer(containerClass, particleClass, count) {
  const container = document.querySelector(containerClass);
  if (!container) return;
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = particleClass;
    
    // Random initial position with more controlled ranges
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Longer animation duration for smoother movement
    const duration = Math.random() * 10 + 15; // 15-25 seconds
    const delay = Math.random() * -20; // Negative delay for continuous effect
    
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    // Reduced size variation
    const size = Math.random() * 2 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Reduced opacity for subtler effect
    const colors = ['rgba(0, 255, 255, ', 'rgba(255, 0, 255, '];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4 opacity range
    particle.style.background = `${color}${opacity})`;
    
    container.appendChild(particle);
  }
}

// Reduce particle count and increase refresh interval
function initializeAllParticles() {
  const header = document.querySelector('header');
  const headerParticles = document.createElement('div');
  headerParticles.className = 'header-particles';
  header.appendChild(headerParticles);
  
  document.querySelectorAll('section').forEach(section => {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'section-particles';
    section.appendChild(particlesContainer);
  });
  
  // Reduced particle counts
  createParticlesForContainer('.header-particles', 'particle', 10);
  document.querySelectorAll('.section-particles').forEach(container => {
    createParticlesForContainer('.' + container.className, 'particle', 15);
  });
}

// Initialize particles
document.addEventListener('DOMContentLoaded', initializeAllParticles);

// Increase interval for particle refresh
setInterval(() => {
  document.querySelectorAll('.section-particles, .header-particles').forEach(container => {
    container.innerHTML = '';
    createParticlesForContainer('.' + container.className, 'particle', 
      container.className === 'header-particles' ? 10 : 15);
  });
}, 20000); // Increased to 20 seconds