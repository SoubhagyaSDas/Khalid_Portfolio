// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('backToTop');
const loadingScreen = document.getElementById('loadingScreen');
const contactForm = document.getElementById('contactForm');
const scrollIndicator = document.getElementById('scrollIndicator');

// Loading Screen Management
function hideLoadingScreen() {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
}

// Mobile Navigation Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu if open
    if (navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
}

// Hero Section Click to Scroll
function scrollToAbout() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const offsetTop = aboutSection.offsetTop - 70; // Account for fixed navbar
        
        // Add click animation to scroll indicator
        scrollIndicator.style.transform = 'scale(0.95)';
        scrollIndicator.style.background = 'rgba(255, 107, 53, 0.2)';
        
        // Add click animation to floating page
        const floatingPage = document.querySelector('.floating-page');
        if (floatingPage) {
            floatingPage.style.transform = 'scale(0.98)';
        }
        
        // Smooth scroll with easing
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Reset animations after scroll
        setTimeout(() => {
            scrollIndicator.style.transform = '';
            scrollIndicator.style.background = '';
            if (floatingPage) {
                floatingPage.style.transform = '';
            }
        }, 1000);
    }
}

// Back to Top Button
function toggleBackToTop() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Active Navigation Link Highlighting
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const sectionTop = targetSection.offsetTop;
            const sectionBottom = sectionTop + targetSection.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

// Navbar Background on Scroll
function updateNavbarBackground() {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 107, 53, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Contact Form Handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Create mailto link
    const subject = 'Portfolio Contact from ' + name;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:khalidhussain.siddique@my.liu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink);
    
    // Reset form
    contactForm.reset();
    
    // Show success message
    showNotification('Message sent successfully!', 'success');
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    const bgColor = type === 'success' ? '#ff6b35' : type === 'error' ? '#dc3545' : '#6c757d';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(255, 107, 53, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-family: 'Inter', sans-serif;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Typing Effect for Hero Section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize Typing Effect
function initTypingEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 50);
    }
}

// Parallax Effect for Hero Section
function initParallaxEffect() {
    const floatingPage = document.querySelector('.floating-page');
    if (floatingPage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            floatingPage.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Intersection Observer for Fade-in Animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Performance Optimization: Throttle Scroll Events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Responsive Utilities
function isMobile() {
    return window.innerWidth <= 768;
}

function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
}

function isDesktop() {
    return window.innerWidth > 1024;
}

// Adjust animations based on device performance
function adjustAnimationsForDevice() {
    const isLowPerformance = navigator.hardwareConcurrency <= 4 || 
                            navigator.deviceMemory <= 4 ||
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isLowPerformance) {
        // Reduce animation complexity for low-performance devices
        document.documentElement.style.setProperty('--transition-fast', '0.2s ease');
        document.documentElement.style.setProperty('--transition-medium', '0.3s ease');
        document.documentElement.style.setProperty('--transition-slow', '0.5s ease');
        
        // Disable some animations on mobile for better performance
        if (isMobile()) {
            const bgCircles = document.querySelectorAll('.bg-circle');
            bgCircles.forEach(circle => {
                circle.style.animation = 'none';
            });
        }
    }
}

// Image Loading Optimization
function optimizeImageLoading() {
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        // Preload the image
        const img = new Image();
        img.src = 'assets/profile.jpg';
        
        img.onload = function() {
            console.log('Profile image loaded successfully');
            profileImg.style.opacity = '1';
        };
        
        img.onerror = function() {
            console.error('Failed to load profile image');
            // Fallback: try to reload the image
            profileImg.src = 'assets/profile.jpg?' + new Date().getTime();
        };
        
        // Set initial opacity
        profileImg.style.opacity = '0';
        profileImg.style.transition = 'opacity 0.5s ease';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    hideLoadingScreen();
    
    // Initialize typing effect
    initTypingEffect();
    
    // Initialize intersection observer
    initIntersectionObserver();
    
    // Initialize parallax effect
    initParallaxEffect();
    
    // Optimize image loading
    optimizeImageLoading();
    
    // Adjust animations for device performance
    adjustAnimationsForDevice();
    
    // Mobile navigation
    navToggle.addEventListener('click', toggleMobileMenu);
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Hero section click to scroll
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', scrollToAbout);
    }
    
    // Click anywhere on hero section to scroll
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('click', (e) => {
            // Don't trigger if clicking on the scroll indicator (to avoid double trigger)
            if (!scrollIndicator.contains(e.target)) {
                scrollToAbout();
            }
        });
    }
    
    // Back to top button
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // Contact form
    contactForm.addEventListener('submit', handleContactForm);
    
    // Throttled scroll events
    const throttledScrollHandler = throttle(() => {
        toggleBackToTop();
        updateActiveNavLink();
        updateNavbarBackground();
    }, 16); // ~60fps
    
    window.addEventListener('scroll', throttledScrollHandler);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
        
        // Re-adjust animations on resize
        adjustAnimationsForDevice();
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Handle touch events for mobile
    if ('ontouchstart' in window) {
        // Add touch-specific optimizations
        document.addEventListener('touchstart', () => {}, {passive: true});
        
        // Improve scroll performance on mobile
        const scrollElements = document.querySelectorAll('.hero, .about, .resume, .projects, .skills, .contact');
        scrollElements.forEach(element => {
            element.style.webkitOverflowScrolling = 'touch';
        });
    }
    
    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics tracking (if needed)
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4 or other analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Custom analytics
    console.log('Event tracked:', eventName, eventData);
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', () => {
    // Track form submissions
    contactForm.addEventListener('submit', () => {
        trackEvent('contact_form_submit');
    });
    
    // Track navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const section = link.getAttribute('href').substring(1);
            trackEvent('navigation_click', { section });
        });
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Could send to error tracking service
});

// Performance monitoring
window.addEventListener('load', () => {
    // Measure page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
    
    // Track performance metrics
    trackEvent('page_load', { loadTime });
}); 