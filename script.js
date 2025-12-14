// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all blog posts
document.querySelectorAll('.blog-post').forEach(post => {
    observer.observe(post);
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section, article[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.scrollY;
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }
});

// Label filter functionality
const labelLinks = document.querySelectorAll('.label-list a');
const blogPosts = document.querySelectorAll('.blog-post');

labelLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const label = link.getAttribute('href').substring(1);
        
        blogPosts.forEach(post => {
            const postLabel = post.getAttribute('data-label');
            if (label === 'all' || postLabel === label) {
                post.style.display = 'block';
                post.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                post.style.display = 'none';
            }
        });

        // Remove active class from all labels
        labelLinks.forEach(l => l.style.backgroundColor = 'var(--accent-color)');
        // Add active class to clicked label
        link.style.backgroundColor = 'var(--primary-color)';
    });
});

// Animate elements on hover
const sidebarSections = document.querySelectorAll('.sidebar-section');
sidebarSections.forEach(section => {
    section.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    section.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-3px)';
    });
});

// Read more button animation
const readMoreBtns = document.querySelectorAll('.read-more');
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Social icons hover effect
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
});

// Add stagger animation to blog posts on page load
const posts = document.querySelectorAll('.blog-post');
posts.forEach((post, index) => {
    post.style.animationDelay = `${0.2 + (index * 0.1)}s`;
});

// Popular posts click tracking
const popularPostLinks = document.querySelectorAll('.popular-posts a');
popularPostLinks.forEach(link => {
    link.addEventListener('click', function() {
        this.style.color = 'var(--accent-color)';
    });
});

// Image placeholder interaction
const placeholderImages = document.querySelectorAll('.placeholder-image');
placeholderImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Console message
console.log('%cPsychology Insights Blog', 'font-size: 20px; font-weight: bold; color: #2c2c2c;');
console.log('%cExploring the fascinating concepts of PSY101', 'font-size: 12px; color: #7a7a7a;');