// ===================================
// GSAP Animations & Scroll Triggers
// ===================================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ===================================
// Hero Section Animations
// ===================================
function initHeroAnimations() {
  // Create organic floating background elements
  const heroVisual = document.getElementById('heroVisual');
  
  if (heroVisual) {
    // Create floating organic shapes
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement('div');
      shape.style.position = 'absolute';
      shape.style.borderRadius = '50%';
      shape.style.opacity = Math.random() * 0.3 + 0.1;
      
      const size = Math.random() * 150 + 50;
      shape.style.width = size + 'px';
      shape.style.height = size + 'px';
      
      const colors = ['#7CB342', '#FFB74D', '#FF7043', '#4FC3F7', '#AB47BC'];
      shape.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      shape.style.left = Math.random() * 100 + '%';
      shape.style.top = Math.random() * 100 + '%';
      shape.style.filter = 'blur(40px)';
      
      heroVisual.appendChild(shape);
      
      // Animate floating
      gsap.to(shape, {
        y: Math.random() * 100 - 50,
        x: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }

  // Parallax effect on hero stats
  gsap.to('.hero-stats', {
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: 100,
    opacity: 0
  });
}

// ===================================
// Section Animations
// ===================================
function initSectionAnimations() {
  // Animate section headers
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header.querySelector('.section-number'), {
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      },
      opacity: 0,
      scale: 0.5,
      duration: 1
    });

    gsap.from(header.querySelector('.section-title-block'), {
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        end: 'top 50%'
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  // Animate visual cards
  gsap.utils.toArray('.visual-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'top 60%'
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out'
    });
  });

  // Animate info cards (sidebar)
  gsap.utils.toArray('.info-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      opacity: 0,
      x: 50,
      duration: 0.6,
      delay: index * 0.15,
      ease: 'power2.out'
    });
  });

  // Animate insight box
  gsap.utils.toArray('.insight-box').forEach(box => {
    gsap.from(box, {
      scrollTrigger: {
        trigger: box,
        start: 'top 85%'
      },
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'back.out(1.4)'
    });
  });

  // Animate stat cards
  gsap.utils.toArray('.stat-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: index * 0.15,
      ease: 'power2.out'
    });

    // Animate stat values with counting effect
    const statValue = card.querySelector('.stat-value');
    if (statValue) {
      const endValue = parseInt(statValue.textContent);
      gsap.from(statValue, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%'
        },
        textContent: 0,
        duration: 2,
        ease: 'power1.inOut',
        snap: { textContent: 1 },
        onUpdate: function() {
          statValue.textContent = Math.ceil(this.targets()[0].textContent) + '%';
        }
      });
    }
  });

  // Animate insight cards
  gsap.utils.toArray('.insight-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      opacity: 0,
      y: 50,
      duration: 0.7,
      delay: index * 0.2,
      ease: 'power3.out'
    });
  });

  // Animate milestones
  gsap.utils.toArray('.milestone').forEach((milestone, index) => {
    gsap.from(milestone, {
      scrollTrigger: {
        trigger: milestone,
        start: 'top 90%'
      },
      opacity: 0,
      x: -30,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'power2.out'
    });
  });
}

// ===================================
// Number Counter Animation
// ===================================
function animateNumbers() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const target = stat.textContent.replace('+', '');
    
    gsap.from(stat, {
      scrollTrigger: {
        trigger: stat,
        start: 'top 85%'
      },
      textContent: 0,
      duration: 2,
      ease: 'power1.inOut',
      snap: { textContent: 1 },
      onUpdate: function() {
        const current = Math.ceil(this.targets()[0].textContent);
        stat.textContent = current + (target.includes('+') ? '+' : '');
      }
    });
  });
}

// ===================================
// Chart Animation Triggers
// ===================================
function initChartAnimations() {
  // Fade in charts when they come into view
  const chartContainers = document.querySelectorAll('.chart-container');
  
  chartContainers.forEach(container => {
    gsap.from(container, {
      scrollTrigger: {
        trigger: container,
        start: 'top 85%'
      },
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: 'power2.out'
    });
  });
}

// ===================================
// Smooth Scroll & Navigation
// ===================================
function initSmoothScroll() {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: {
            y: target,
            offsetY: 80
          },
          ease: 'power3.inOut'
        });
      }
    });
  });
}

// ===================================
// Scroll Progress Indicator
// ===================================
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.position = 'fixed';
  progressBar.style.top = '0';
  progressBar.style.left = '0';
  progressBar.style.height = '4px';
  progressBar.style.background = 'linear-gradient(90deg, #7CB342, #FFB74D, #FF7043)';
  progressBar.style.transformOrigin = 'left';
  progressBar.style.transform = 'scaleX(0)';
  progressBar.style.zIndex = '9999';
  progressBar.style.transition = 'transform 0.1s ease';
  
  document.body.appendChild(progressBar);

  gsap.to(progressBar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      start: 'top top',
      end: 'max',
      scrub: 0.3
    }
  });
}

// ===================================
// Parallax Effects
// ===================================
function initParallaxEffects() {
  // Parallax on section numbers
  gsap.utils.toArray('.section-number').forEach(number => {
    gsap.to(number, {
      scrollTrigger: {
        trigger: number.closest('.data-section'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: -50,
      opacity: 0.1
    });
  });
}

// ===================================
// Hover Effects Enhancement
// ===================================
function initHoverEffects() {
  // Enhanced hover for cards
  const cards = document.querySelectorAll('.visual-card, .info-card, .stat-card, .insight-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Button hover effects
  const buttons = document.querySelectorAll('.cta-button, .filter-btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
    
    button.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });
}

// ===================================
// Loading Animation
// ===================================
function initLoadingAnimation() {
  gsap.from('body', {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Stagger animation for hero elements
  gsap.from('.hero-badge, .hero-title, .hero-subtitle, .hero-stats, .cta-button', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 0.3
  });
}

// ===================================
// Initialize All Animations
// ===================================
function initAllAnimations() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLoadingAnimation();
      initHeroAnimations();
      initSectionAnimations();
      animateNumbers();
      initChartAnimations();
      initSmoothScroll();
      initScrollProgress();
      initParallaxEffects();
      initHoverEffects();
    });
  } else {
    initLoadingAnimation();
    initHeroAnimations();
    initSectionAnimations();
    animateNumbers();
    initChartAnimations();
    initSmoothScroll();
    initScrollProgress();
    initParallaxEffects();
    initHoverEffects();
  }
}

// Auto-initialize animations
initAllAnimations();

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});