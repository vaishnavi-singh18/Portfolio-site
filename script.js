// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;';
    document.querySelector('.navbar').appendChild(navToggle);
  
    const navLinks = document.querySelector('.nav-links');
  
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  
    // Active link highlighting
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      }
    });
  });
 
  // Get modal elements
const modal = document.getElementById('projectModal');
const closeBtn = document.getElementsByClassName('close-btn')[0];

// Open modal and populate it with project details
function openModal(title, description, link) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal-link').href = link;
  modal.style.display = 'block';
}

// Close modal when close button is clicked
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close modal when clicked outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Add this to each project card, passing the relevant data
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h2').textContent;
    const description = card.querySelector('p').textContent;
    const link = card.getAttribute('data-project-link'); // Assuming a link attribute on each card
    openModal(title, description, link);
  });
});
