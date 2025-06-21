// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for multiple elements
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, observerOptions);
  
  // Observe all scroll reveal elements
  document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));
  });
  
  // Navbar scroll effect
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class for styling
    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // FAQ functionality (simple toggle)
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const icon = question.querySelector('i');
      
      // Simple visual feedback
      question.style.background = question.style.background === 'rgba(139, 93, 60, 0.1)' 
        ? 'transparent' 
        : 'rgba(139, 93, 60, 0.1)';
      
      // Toggle icon
      if (icon.classList.contains('bi-plus-lg')) {
        icon.classList.remove('bi-plus-lg');
        icon.classList.add('bi-dash-lg');
      } else {
        icon.classList.remove('bi-dash-lg');
        icon.classList.add('bi-plus-lg');
      }
    });
  });
  
  // Parallax effect for hero section (subtle)
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector('.hero-img');
    
    if (heroImg && scrolled < window.innerHeight) {
      heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
  
  // Add loading animation
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
  
  // Performance optimization: throttle scroll events
  function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Apply throttling to scroll events
  const throttledScroll = throttle(() => {
    // Your scroll animations here
  }, 16); // ~60fps
  
  window.addEventListener('scroll', throttledScroll);
  