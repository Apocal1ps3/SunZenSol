// Add animation class when sections scroll into view
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.benefit-item, .service-item, .testimonial-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const serviceId = item.getAttribute('data-service');
            const detail = document.getElementById(`service-detail-${serviceId}`);

            // Toggle the active class to show or hide the detail section
            if (detail) {
                detail.classList.toggle('active');
            }
        });
    });
});
function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show'); // Toggle 'show' class to control visibility
}

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const button = document.querySelector('.dropbtn');
    
    if (!button.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Select all gallery items
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');

// Open lightbox when an image is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = item.src; // Set lightbox image source to the clicked image
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});