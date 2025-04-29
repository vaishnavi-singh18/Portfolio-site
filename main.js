// Mobile menu toggle - Enhanced with null checks
function setupMobileMenu() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            // Toggle nav
            navLinks.classList.toggle('active');
            
            // Burger animation
            burger.classList.toggle('toggle');
            
            // Animate links
            navItems.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });

        // Close mobile menu when clicking a link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
                navItems.forEach(link => {
                    link.style.animation = '';
                });
            });
        });
    }
}

// Navbar scroll effect - More efficient
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
}

// Intersection Observer for scroll animations - Improved
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section-entry');
    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('visible', entry.isIntersecting);
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// Smooth scrolling for anchor links - Fixed
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Initialize skill bar animations - More robust
function setupSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar, .level-bar');
    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const level = bar.getAttribute('data-level') || bar.style.width;
                    bar.style.width = level;
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            if (bar.classList.contains('skill-bar')) {
                const level = bar.getAttribute('data-level');
                bar.style.width = '0';
            }
            skillObserver.observe(bar);
        });
    }
}

// Form submission - More secure
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = contactForm.querySelector('[name="name"]');
            const email = contactForm.querySelector('[name="email"]');
            
            if (!name.value || !email.value) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Form submission logic would go here
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    setupNavbarScroll();
    setupScrollAnimations();
    setupSmoothScrolling();
    setupSkillBars();
    setupContactForm();
    
    // Custom cursor (if needed)
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
    }
});