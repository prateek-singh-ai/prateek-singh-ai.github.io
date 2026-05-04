/**
 * Prateek Singh Portfolio - Main JavaScript
 * Handles animations, interactions, and UI functionality
 */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initTypingEffect();
    initScrollAnimations();
    initCounterAnimations();
    initTimeline();
    initProjectCards();
    initExperienceCards();
    initSmoothScroll();
    initMobileMenu();
    initScrollProgress();
    initBackToTop();
    initCurrentYear();
    initPhotoSlideshow();
});

// ============================================
// NAVBAR
// ============================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    let lastScroll = 0;
    let ticking = false;

    // Navbar scroll behavior (throttled)
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleNavbarScroll(navbar, lastScroll);
                lastScroll = window.scrollY;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Active link highlighting via IntersectionObserver (no scroll listener)
    const sections = document.querySelectorAll('section[id]');
    const linkMap = {};
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            linkMap[href.slice(1)] = link;
        }
    });

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = linkMap[id];
            if (!link) return;

            if (entry.isIntersecting) {
                // Clear all, then highlight the one in view
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }, {
        rootMargin: '-40% 0px -55% 0px',  // triggers when section is roughly centered
        threshold: 0
    });
    
    sections.forEach(section => navObserver.observe(section));    
}

function handleNavbarScroll(navbar, lastScroll) {
    const currentScroll = window.scrollY;
    
    // Add background when scrolled
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Hide/show on scroll direction
    if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('active');
        
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Accessibility
        navToggle.setAttribute('aria-expanded', !isOpen);
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ============================================
// TYPING EFFECT
// ============================================

function initTypingEffect() {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;

    const phrases = [
        'AI/ML Engineer',
        'Data Analyst',
        'Python Developer',
        'GenAI Enthusiast',
        'Problem Solver',
        'Automation Architect'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at end of phrase
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing after a short delay
    setTimeout(type, 1000);
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);  // animate once, then stop watching
            }
        });
    }, observerOptions);

    // Apply fade-in to major sections/cards
    const animatedElements = document.querySelectorAll(
        '.section-title, .about-grid, .timeline-item, .experience-card, ' +
        '.skills-container, .education-grid, .projects-grid, .contact-content, ' +
        '.certs-grid, .journey-stats, .favorite-tools'
    );

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ============================================
// COUNTER ANIMATIONS
// ============================================

function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = Math.max(1, target / (duration / 16));
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    requestAnimationFrame(updateCounter);
}

// ============================================
// TIMELINE
// ============================================

function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (!timelineItems.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active from all
                timelineItems.forEach(item => item.classList.remove('active'));
                
                // Add active to current
                entry.target.classList.add('active');
                
                // Update progress bar
                const index = Array.from(timelineItems).indexOf(entry.target);
                updateTimelineProgress(index, timelineItems.length);
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => observer.observe(item));

    // Initial animation on scroll into view
    const timelineSection = document.getElementById('journey');
    if (timelineSection) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 150);
                    });
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        sectionObserver.observe(timelineSection);
    }
}

function updateTimelineProgress(index, total) {
    const progress = document.getElementById('timelineProgress');
    if (progress) {
        const percentage = ((index + 1) / total) * 100;
        progress.style.height = `${percentage}%`;
    }
}

// ============================================
// PROJECT CARDS
// ============================================

function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Tilt + lift effect on hover
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;

            card.style.transform = `perspective(1000px) translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ============================================
// EXPERIENCE CARDS
// ============================================

function initExperienceCards() {
    const cards = document.querySelectorAll('.experience-card');
    if (!cards.length) return;

    cards.forEach(card => {
        const header = card.querySelector('.experience-header');
        if (!header) return;

        header.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                progressBar.style.width = `${scrollPercent}%`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                backToTop.classList.toggle('visible', window.scrollY > 500);
                ticking = false;
            });
            ticking = true;
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// CURRENT YEAR
// ============================================
function initCurrentYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// ============================================
// PHOTO SLIDESHOW
// ============================================
function initPhotoSlideshow() {
    // ⬇️ List image filenames here (place files in /assets/)
    const photos = [
        'assets/photos/CCA_1010.jpeg',
        'assets/photos/CCA_0638.jpeg',
        'assets/photos/CCA_0550.jpeg',
    ];

    const container = document.getElementById('photoSlideshow');
    const fallback = document.getElementById('avatarFallback');
    if (!container || photos.length === 0) return;

    // Build <img> elements
    const imgs = photos.map((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Prateek Singh photo ${i + 1}`;
        img.loading = 'lazy';
        img.onerror = () => {
            img.remove();   // silently drop missing files
            // If no images left, restore SVG fallback
            if (container.querySelectorAll('img').length === 0 && fallback) {
                fallback.style.display = '';
            }
        };
        if (i === 0) img.classList.add('active');
        container.appendChild(img);
        return img;
    });

    // Hide SVG fallback once at least one image loads
    imgs.forEach(img => {
        img.addEventListener('load', () => {
            if (fallback) fallback.style.display = 'none';
        }, { once: true });
    });

    // Auto-rotate if more than one photo
    if (photos.length > 1) {
        let idx = 0;
        setInterval(() => {
            imgs[idx].classList.remove('active');
            idx = (idx + 1) % imgs.length;
            imgs[idx].classList.add('active');
        }, 4000); // change every 4s
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait = 20) {
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

// Throttle function for performance
function throttle(func, limit = 100) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll percentage
function getScrollPercent() {
    const h = document.documentElement;
    const b = document.body;
    const st = 'scrollTop';
    const sh = 'scrollHeight';
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

// ============================================
// EASTER EGGS & FUN STUFF
// ============================================

// Konami code easter egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Fun confetti or special effect
    console.log('🎉 You found the easter egg! Prateek says hi!');
    
    // Create confetti effect
    createConfetti();
    
    showNotification('🎉 You found the secret! Good things happen to good people!', 'success');
}

function showNotification(message, type = 'info') {
    // Remove any existing notification
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 90px;
        left: 50%;
        transform: translateX(-50%) translateY(-20px);
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: #fff;
        padding: 14px 24px;
        border-radius: 12px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 0.95rem;
        box-shadow: 0 10px 40px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.4);
        z-index: 10001;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        pointer-events: none;
        max-width: 90vw;
        text-align: center;
    `;
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Auto-dismiss after 4s
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function createConfetti() {
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        const drift = Math.random() * 200 - 100;
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            opacity: ${Math.random() + 0.5};
            transform: rotate(${Math.random() * 360}deg);
            --drift: ${drift}px;
            animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
            z-index: 10000;
            pointer-events: none;
        `;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }

    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes confetti-fall {
                to {
                    top: 100vh;
                    transform: rotate(720deg) translateX(var(--drift, 0px));
                }
            }
        `;
        document.head.appendChild(style);
    }
}


// Console message
console.log(`
%c👋 Hey there, curious developer!

%cWelcome to Prateek Singh's portfolio.
Built with vanilla HTML, CSS, and JavaScript.
No frameworks, just good old-fashioned code.

%c"Good things happen to those who build them"

%cInterested in connecting? 
📧 prateek.singh090493@gmail.com
🔗 linkedin.com/in/prateeksingh9493

`, 
'font-size: 20px; font-weight: bold;',
'font-size: 14px; color: #3b82f6;',
'font-size: 12px; font-style: italic; color: #8b5cf6;',
'font-size: 12px; color: #10b981;'
);
