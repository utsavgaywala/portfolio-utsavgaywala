// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// ===================================
// ACTIVE SECTION HIGHLIGHTING
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project').forEach(project => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(30px)';
    project.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(project);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(skill => {
    skill.style.opacity = '0';
    skill.style.transform = 'translateY(20px)';
    skill.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(skill);
});

// ===================================
// PARALLAX EFFECT (subtle)
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// ===================================
// CONSOLE EASTER EGG
// ===================================
console.log('%c👋 Hello!', 'font-size: 20px; font-weight: bold; font-family: Space Mono, monospace;');
console.log('%cInterested in the code? Let\'s connect!', 'font-size: 14px; font-family: Space Mono, monospace;');
console.log('%cutsavgaywala.work@gmail.com', 'font-size: 14px; color: #525252; font-family: Space Mono, monospace;');

// ===================================
// TOGGLE PROJECTS SECTION (MODULES)
// ===================================
const modulesLink = document.querySelector('a[href="#work"]');
const projectsSection = document.getElementById('work');

if (modulesLink && projectsSection) {
    modulesLink.addEventListener('click', (e) => {
        e.preventDefault();

        // Toggle display
        if (projectsSection.style.display === 'none') {
            projectsSection.style.display = 'block';
            // Scroll to projects section
            setTimeout(() => {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        } else {
            projectsSection.style.display = 'none';
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// ===================================
// CONTACT FORM HANDLING
// ===================================
const contactForm = document.getElementById('contact-form');
const formStatusWindow = document.getElementById('form-status-window');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');

        // Hide previous status messages
        formStatusWindow.style.display = 'none';
        formStatusWindow.className = 'status-window';

        try {
            // Submit form to Web3Forms
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Success
                formStatus.textContent = '✓ TRANSMISSION SUCCESSFUL! Your message has been received. I will get back to you soon.';
                formStatusWindow.classList.add('success');
                formStatusWindow.style.display = 'block';

                // Reset form
                contactForm.reset();

                // Scroll to status message
                formStatusWindow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                // Error
                formStatus.textContent = '✗ TRANSMISSION FAILED. Please try again or use the direct channels below.';
                formStatusWindow.classList.add('error');
                formStatusWindow.style.display = 'block';
            }
        } catch (error) {
            // Network error
            formStatus.textContent = '✗ CONNECTION ERROR. Please check your internet connection and try again.';
            formStatusWindow.classList.add('error');
            formStatusWindow.style.display = 'block';
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });
}

