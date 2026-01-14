tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: "#FFD700",
                gold: {
                    primary: "#FFD700",
                    dark: "#DAA520",
                    light: "#FFE87C",
                    accent: "#FFC125"
                },
                cream: "#FDF5E6",
                'soft-black': "#1a1a1a"
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'serif'],
                sans: ['Inter', 'sans-serif']
            }
        }
    }
};

// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Remove observer after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Add animate-on-scroll to sections automatically
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        // Skip first section (hero) as it animates on load
        if (index > 0) {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        }
    });

    // Animate cards with stagger effect
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Animate grid items
    const gridItems = document.querySelectorAll('.grid > *');
    gridItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
});