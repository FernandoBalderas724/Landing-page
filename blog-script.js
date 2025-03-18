document.addEventListener('DOMContentLoaded', () => {
    // Animate items on page load
    const animateItems = document.querySelectorAll('.blog-post, .post-card, .categories, .newsletter');
    
    animateItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Handle newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // In a real application, you would send this to your backend
                console.log('Subscribing email:', email);
                
                // Show success message
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Thanks for subscribing!';
                successMessage.style.color = 'var(--accent)';
                successMessage.style.marginTop = '0.75rem';
                
                // Replace form with success message
                newsletterForm.innerHTML = '';
                newsletterForm.appendChild(successMessage);
            }
        });
    }
    
    // Image lazy loading
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // If the image has a data-src attribute, use that as the src
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    
                    // Stop observing the image after it's loaded
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Read more button hover effect
    const readMoreLinks = document.querySelectorAll('.read-more, .read-more-small');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.textShadow = '0 0 8px var(--pale-glow)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.textShadow = 'none';
        });
    });
}); 