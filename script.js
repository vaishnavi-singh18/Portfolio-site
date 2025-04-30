document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileNavBtn = document.querySelector('.mobile-nav-btn');
    const navbar = document.querySelector('.navbar');
    
    mobileNavBtn.addEventListener('click', function() {
      navbar.classList.toggle('active');
      mobileNavBtn.innerHTML = navbar.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
  
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
          navbar.classList.remove('active');
          mobileNavBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });
    });
  
    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 100);
    });
  
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
      backToTopBtn.classList.toggle('active', window.scrollY > 300);
    });
  
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Active Navigation Link Based on Scroll Position
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 300) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}` || 
            link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  
    // Tab Functionality for Resources Section
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length && tabContents.length) {
      tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const tabId = this.getAttribute('data-tab');
          
          // Remove active class from all buttons and contents
          tabBtns.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
          
          // Add active class to clicked button and corresponding content
          this.classList.add('active');
          document.getElementById(tabId).classList.add('active');
        });
      });
    }
  
    // Filter Functionality for Projects Section
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length && projectCards.length) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');
          
          // Remove active class from all buttons
          filterBtns.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // Filter projects
          projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }
  
    // Animate Skill Bars on Scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              bar.style.width = width;
              observer.unobserve(entry.target);
            }
          });
        });
        
        observer.observe(bar.parentElement);
      });
    }
    
    if (skillBars.length) {
      animateSkillBars();
    }
  
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
      });
    }
  
    // Intersection Observer for Animate on Scroll
    const animateElements = document.querySelectorAll('.section-title, .highlight-card, .skill-category, .skill-card, .project-card, .certificate-card, .timeline-item, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.1
    });
    
    animateElements.forEach(el => {
      observer.observe(el);
    });
  
    // Preloader (optional)
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
      <div class="preloader-content">
        <div class="spinner"></div>
        <p>Loading...</p>
      </div>
    `;
    
    document.body.prepend(preloader);
    
    window.addEventListener('load', function() {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 500);
    });
  });
  
  // Add this to your style.css for the preloader
  /*
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
  }
  
  .preloader-content {
    text-align: center;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(74, 111, 165, 0.2);
    border-radius: 50%;
    border-top-color: var(--accent);
    animation: spin 1s linear infinite;
    margin: 0 auto 2rem;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  */
 
