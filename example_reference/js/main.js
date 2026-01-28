// ===================================
// Main Application JavaScript
// ===================================

// ===================================
// Mobile Navigation Toggle
// ===================================
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = navToggle.querySelectorAll('span');
      if (navToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
}

// ===================================
// Smooth Scroll to Section
// ===================================
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = document.querySelector('.nav-bar').offsetHeight;
    const sectionTop = section.offsetTop - navHeight;
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
}

// ===================================
// Navbar Scroll Effect
// ===================================
function initNavbarScroll() {
  const navbar = document.querySelector('.nav-bar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
      navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    } else {
      navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });
}

// ===================================
// Active Navigation Highlighting
// ===================================
function initActiveNavigation() {
  const sections = document.querySelectorAll('.data-section, .hero-section');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ===================================
// Intersection Observer for Animations
// ===================================
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    '.visual-card, .info-card, .stat-card, .insight-card, .milestone'
  );
  
  animatedElements.forEach(el => observer.observe(el));
}

// ===================================
// Copy Data to Clipboard
// ===================================
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification('Data copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

// ===================================
// Show Notification
// ===================================
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  notification.style.position = 'fixed';
  notification.style.top = '100px';
  notification.style.right = '20px';
  notification.style.padding = '1rem 1.5rem';
  notification.style.background = type === 'success' ? '#7CB342' : '#FF7043';
  notification.style.color = 'white';
  notification.style.borderRadius = '10px';
  notification.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
  notification.style.zIndex = '10000';
  notification.style.fontWeight = '600';
  notification.style.animation = 'slideInRight 0.3s ease';
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// ===================================
// Export Chart as Image
// ===================================
function exportChartAsImage(chartId, filename = 'chart.png') {
  const chartElement = document.getElementById(chartId);
  
  if (!chartElement) {
    showNotification('Chart not found', 'error');
    return;
  }

  // For Canvas-based charts (Chart.js)
  const canvas = chartElement.querySelector('canvas');
  if (canvas) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showNotification('Chart exported successfully!');
    return;
  }

  // For SVG-based charts (ECharts, D3.js)
  const svg = chartElement.querySelector('svg');
  if (svg) {
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.download = filename.replace('.png', '.svg');
    link.href = url;
    link.click();
    
    URL.revokeObjectURL(url);
    showNotification('Chart exported successfully!');
  }
}

// ===================================
// Print Functionality
// ===================================
function initPrintStyles() {
  // Add print button functionality if needed
  const printButtons = document.querySelectorAll('[data-print]');
  
  printButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.print();
    });
  });
}

// ===================================
// Performance Monitoring
// ===================================
function monitorPerformance() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log(`%c📊 Page Load Time: ${pageLoadTime}ms`, 'color: #7CB342; font-weight: bold; font-size: 14px;');
      }, 0);
    });
  }
}

// ===================================
// Lazy Load Images
// ===================================
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

// ===================================
// Keyboard Navigation
// ===================================
function initKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
      const navMenu = document.querySelector('.nav-menu');
      const navToggle = document.getElementById('navToggle');
      
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
    
    // Arrow keys for section navigation
    if (e.key === 'ArrowDown' && e.ctrlKey) {
      e.preventDefault();
      scrollToNextSection();
    }
    
    if (e.key === 'ArrowUp' && e.ctrlKey) {
      e.preventDefault();
      scrollToPrevSection();
    }
  });
}

// ===================================
// Section Navigation Helpers
// ===================================
function scrollToNextSection() {
  const sections = Array.from(document.querySelectorAll('.data-section, .hero-section'));
  const currentScroll = window.pageYOffset;
  
  const nextSection = sections.find(section => {
    return section.offsetTop > currentScroll + 100;
  });
  
  if (nextSection) {
    scrollToSection(nextSection.id);
  }
}

function scrollToPrevSection() {
  const sections = Array.from(document.querySelectorAll('.data-section, .hero-section'));
  const currentScroll = window.pageYOffset;
  
  const prevSection = sections.reverse().find(section => {
    return section.offsetTop < currentScroll - 100;
  });
  
  if (prevSection) {
    scrollToSection(prevSection.id);
  }
}

// ===================================
// Hero Stat Counter Animation
// ===================================
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number-large');
  
  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };
    
    updateCounter();
  };
  
  // Use Intersection Observer to trigger animation when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.textContent === '0') {
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => observer.observe(stat));
}

// ===================================
// Console Welcome Message
// ===================================
function showWelcomeMessage() {
  console.log(
    '%c🌱 Food Economics Data Story',
    'color: #7CB342; font-size: 24px; font-weight: bold; padding: 10px;'
  );
  console.log(
    '%cExploring the intersection of data, design, and sustainability',
    'color: #757575; font-size: 14px; font-style: italic;'
  );
  console.log(
    '%c\n📊 Built with: Chart.js, ECharts, D3.js, GSAP\n🎨 Design: Organic Data Visualization Aesthetic\n💚 Theme: Sustainable Food Systems\n',
    'color: #424242; font-size: 12px; line-height: 1.6;'
  );
}

// ===================================
// Initialize All Functions
// ===================================
function initApp() {
  initMobileNav();
  initNavbarScroll();
  initActiveNavigation();
  initIntersectionObserver();
  initPrintStyles();
  initLazyLoading();
  initKeyboardNavigation();
  initStatCounters();
  monitorPerformance();
  showWelcomeMessage();
}

// ===================================
// Auto-Initialize on DOM Ready
// ===================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ===================================
// Make functions globally accessible
// ===================================
window.scrollToSection = scrollToSection;
window.exportChartAsImage = exportChartAsImage;
window.copyToClipboard = copyToClipboard;

// ===================================
// Service Worker Registration (Optional)
// ===================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //   .then(reg => console.log('Service Worker registered'))
    //   .catch(err => console.log('Service Worker registration failed'));
  });
}