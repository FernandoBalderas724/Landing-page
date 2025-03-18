document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to bento items on page load
    const bentoItems = document.querySelectorAll('.bento-item');
    
    bentoItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
        }, 100 * index);
    });

    // Enhance the hover effect for bento items
    bentoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const otherItems = Array.from(bentoItems).filter(i => i !== item);
            otherItems.forEach(other => {
                other.style.opacity = '0.7';
            });
        });

        item.addEventListener('mouseleave', () => {
            bentoItems.forEach(i => {
                i.style.opacity = '1';
            });
        });
    });

    // Add a subtle parallax effect to the featured image
    const featuredImage = document.querySelector('.featured-image');
    if (featuredImage) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            featuredImage.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        });
    }
}); 