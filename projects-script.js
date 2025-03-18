document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to project cards
    const projectCards = document.querySelectorAll('.bento-item');
    
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
        }, 100 * index);
    });

    // Enhance hover effect
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const otherCards = Array.from(projectCards).filter(c => c !== card);
            otherCards.forEach(other => {
                other.style.opacity = '0.8';
            });
        });

        card.addEventListener('mouseleave', () => {
            projectCards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });
    
    // Add filter functionality (if needed in the future)
    // This is a placeholder for future filter buttons
    const setupFilters = () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        if (filterButtons.length === 0) return;
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Reset active class
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    };
    
    setupFilters();
    
    // Add parallax effect to project images
    const projectImages = document.querySelectorAll('.project-img');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        projectImages.forEach(img => {
            const imgIcon = img.querySelector('.img-placeholder i');
            if (imgIcon) {
                imgIcon.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
            }
        });
    });
    
    // Add dynamic button effects
    const buttons = document.querySelectorAll('.btn, .btn-large');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
}); 