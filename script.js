// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dot navigation functionality with image changing
const dots = document.querySelectorAll('.dot');
const profileImage = document.querySelector('.profile-image');

const colors = [
    '#8B5A5C',
    '#6B8A8C',
    '#A57C8C',
    '#7A8B9C',
    '#9C7A8B',
    '#8C9C7A'
];

// Image array - using images from img folder
const images = [
    'img/sonia1.png',
    'img/sonia2.png',
    'img/sonia3.png',
    'img/sonia4.png',
    'img/sonia5.png',
    'img/sonia1.png'      // Using first image again for 6th dot
];

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        // Remove active class from all dots
        dots.forEach(d => d.classList.remove('active'));
        
        // Add active class to clicked dot
        this.classList.add('active');
        
        // Change the primary color
        document.documentElement.style.setProperty('--primary-color', colors[index]);
        
        // Change branding color
        const branding = document.querySelector('.branding h3');
        branding.style.color = colors[index];
        
        // Change image with fade animation
        profileImage.style.opacity = '0';
        profileImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            // Change to the selected image
            profileImage.src = images[index];
            
            // Fade back in
            setTimeout(() => {
                profileImage.style.opacity = '1';
                profileImage.style.transform = 'scale(1)';
            }, 50);
        }, 300);
    });
});

// Parallax effect for watermark on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const watermark = document.querySelector('.watermark');
    
    if (watermark) {
        watermark.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.text-content > *').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Animate elements on load
    setTimeout(() => {
        document.querySelectorAll('.text-content > *').forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
});

// Add cursor effect
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add hover effect to interactive elements
document.querySelectorAll('a, .btn, .dot').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.backgroundColor = 'rgba(139, 90, 92, 0.3)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    });
});

// Add custom cursor styles
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, background-color 0.2s ease;
        transform: translate(-50%, -50%);
    }
    
    body {
        cursor: none;
    }
    
    a, button, .btn, .dot {
        cursor: none;
    }
`;
document.head.appendChild(style);

// Add typing effect to tagline
const tagline = document.querySelector('.tagline em');
if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    
    setTimeout(() => {
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 100);
    }, 2000);
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (name && email && subject && message) {
            // Show success message
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send this data to a server
            console.log({
                name: name,
                email: email,
                subject: subject,
                message: message
            });
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
        bar.style.width = width;
    }, 100);
    skillObserver.observe(bar);
});

// Animate sections on scroll
const animatedSections = document.querySelectorAll('.about, .projects, .skills, .contact');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

animatedSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.2
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
});

// Update active navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add smooth reveal for contact items
const contactItems = document.querySelectorAll('.contact-item');
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.5
});

contactItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    contactObserver.observe(item);
});
