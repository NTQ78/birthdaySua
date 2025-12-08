// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    offset: 100
});

// Loading Screen
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('hidden');
    }, 2000);
});

// Countdown Timer
function updateCountdown() {
    // Set target date - thay đổi ngày tháng năm phù hợp
    const targetDate = new Date('2025-12-20T08:00:00').getTime();
    
    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<h2 style="color: white;">🎉 Bữa Tiệc Đang Diễn Ra! 🎉</h2>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    update();
    setInterval(update, 1000);
}

updateCountdown();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Down Arrow
const scrollDown = document.querySelector('.scroll-down');
if (scrollDown) {
    scrollDown.addEventListener('click', function() {
        document.querySelector('.introduction').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Gallery Lightbox Effect (Mobile Optimized)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const img = this.querySelector('img');
        const src = img.getAttribute('src');
        const caption = this.querySelector('.gallery-overlay p')?.textContent || '';
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close-lightbox">&times;</span>
                <img src="${src}" alt="Gallery Image">
                ${caption ? `<p class="lightbox-caption">${caption}</p>` : ''}
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Add animation
        setTimeout(() => {
            lightbox.style.opacity = '1';
            lightbox.querySelector('.lightbox-content').style.transform = 'scale(1)';
        }, 10);
        
        // Close lightbox (touch and click)
        const closeLightbox = () => {
            lightbox.style.opacity = '0';
            lightbox.querySelector('.lightbox-content').style.transform = 'scale(0.7)';
            setTimeout(() => {
                lightbox.remove();
                document.body.style.overflow = 'auto';
            }, 300);
        };
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target.classList.contains('close-lightbox')) {
                closeLightbox();
            }
        });
        
        // Swipe to close on mobile
        let touchStartY = 0;
        let touchEndY = 0;
        
        lightbox.addEventListener('touchstart', (e) => {
            touchStartY = e.changedTouches[0].screenY;
        });
        
        lightbox.addEventListener('touchend', (e) => {
            touchEndY = e.changedTouches[0].screenY;
            if (touchStartY - touchEndY > 50 || touchEndY - touchStartY > 50) {
                closeLightbox();
            }
        });
    });
});

// Add lightbox styles dynamically
const style = document.createElement('style');
style.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s;
        padding: 1rem;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        transform: scale(0.7);
        transition: transform 0.3s;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 80vh;
        border-radius: 10px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        object-fit: contain;
    }
    
    .lightbox-caption {
        color: white;
        font-size: 1.2rem;
        margin-top: 1rem;
        text-align: center;
    }
    
    .close-lightbox {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 40px;
        cursor: pointer;
        transition: transform 0.3s;
        z-index: 10001;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .close-lightbox:hover {
        transform: rotate(90deg);
    }
    
    /* Mobile Responsive Lightbox */
    @media (max-width: 768px) {
        .lightbox {
            padding: 0.5rem;
        }
        
        .lightbox-content img {
            max-height: 70vh;
            border-radius: 8px;
        }
        
        .lightbox-caption {
            font-size: 1rem;
            margin-top: 0.8rem;
        }
        
        .close-lightbox {
            top: -35px;
            right: -5px;
            font-size: 35px;
            width: 35px;
            height: 35px;
        }
    }
    
    @media (max-width: 480px) {
        .lightbox-content img {
            max-height: 60vh;
        }
        
        .lightbox-caption {
            font-size: 0.9rem;
            margin-top: 0.5rem;
        }
        
        .close-lightbox {
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            font-size: 30px;
            width: 40px;
            height: 40px;
        }
    }
`;
document.head.appendChild(style);

// Confetti Animation
function createConfetti() {
    const colors = ['#ff6b9d', '#ffc93c', '#a8e6cf', '#c780fa', '#4facfe'];
    const confettiContainer = document.querySelector('.confetti');
    
    if (!confettiContainer) return;
    
    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }, 300);
}

const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    .confetti-piece {
        position: absolute;
        width: 10px;
        height: 10px;
        top: -10px;
        animation: confetti-fall linear infinite;
        pointer-events: none;
    }
    
    @keyframes confetti-fall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    /* Reduce animation on mobile for performance */
    @media (max-width: 768px) {
        .confetti-piece {
            width: 8px;
            height: 8px;
        }
    }
`;
document.head.appendChild(confettiStyle);

createConfetti();

createFloatingParticles();

// Parallax Effect on Hero Section (Disable on Mobile for Performance)
let heroSection = document.querySelector('.hero');
if (heroSection && window.innerWidth > 768) {
    window.addEventListener('scroll', function() {
        let scrolled = window.pageYOffset;
        let parallax = heroSection.querySelector('.hero-content');
        if (parallax && scrolled < window.innerHeight) {
            parallax.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
        }
    });
}

// Detect mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

// Reduce animations on mobile for better performance
if (isMobile) {
    // Reduce confetti frequency
    const confettiInterval = 800;
} else {
    const confettiInterval = 300;
}

// Optimize floating particles based on device
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Reduce particles on mobile
    const particleCount = isMobile ? 10 : 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
        `;
        hero.appendChild(particle);
    }
}

// Optimize confetti for mobile
function createConfetti() {
    const colors = ['#ff6b9d', '#ffc93c', '#a8e6cf', '#c780fa', '#4facfe'];
    const confettiContainer = document.querySelector('.confetti');
    
    if (!confettiContainer) return;
    
    // Reduce confetti on mobile
    const interval = isMobile ? 800 : 300;
    
    setInterval(() => {
        // Don't create confetti if page is not visible
        if (document.hidden) return;
        
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }, interval);
}

// Add hover sound effect (optional)
function addHoverEffects() {
    const buttons = document.querySelectorAll('.btn-rsvp, .btn-map, .btn-call');
    
    buttons.forEach(button => {
        // Use both mouse and touch events for mobile
        const addWiggle = function() {
            this.style.animation = 'wiggle 0.5s';
        };
        
        const removeWiggle = function() {
            this.style.animation = '';
        };
        
        button.addEventListener('mouseenter', addWiggle);
        button.addEventListener('touchstart', addWiggle);
        button.addEventListener('animationend', removeWiggle);
    });
}

addHoverEffects();

// Mobile Menu Smooth Scrolling with offset
if (isMobile) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 20; // Offset for mobile
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Prevent zoom on double tap for iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Optimize AOS for mobile
if (isMobile) {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true, // Animate only once on mobile
        mirror: false,
        offset: 50
    });
}

// Timeline Animation on Scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
    threshold: 0.2,
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

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'all 0.6s ease-out';
    observer.observe(item);
});

// Add floating particles to hero section
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

createFloatingParticles();

// Countdown pulse effect
const countdownItems = document.querySelectorAll('.countdown-item');
setInterval(() => {
    countdownItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'scale(1.1)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 200);
        }, index * 100);
    });
}, 3000);

// Add transition to countdown items
countdownItems.forEach(item => {
    item.style.transition = 'transform 0.3s ease';
});

// Easter egg: Click on hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    heroTitle.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'bounceIn 1s';
        }, 10);
        
        // Create burst of balloons
        for (let i = 0; i < 10; i++) {
            const balloon = document.createElement('div');
            balloon.textContent = '🎈';
            balloon.style.cssText = `
                position: fixed;
                left: 50%;
                top: 50%;
                font-size: 30px;
                animation: burst 1s ease-out forwards;
                animation-delay: ${i * 0.1}s;
                pointer-events: none;
                z-index: 9999;
            `;
            document.body.appendChild(balloon);
            
            setTimeout(() => balloon.remove(), 1500);
        }
    });
}

const burstStyle = document.createElement('style');
burstStyle.textContent = `
    @keyframes burst {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(
                calc(-50% + ${Math.random() * 400 - 200}px),
                calc(-50% - ${Math.random() * 400}px)
            ) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(burstStyle);

// Console message
console.log('%c🎉 Chúc Mừng Sinh Nhật! 🎂', 'font-size: 30px; color: #ff6b9d; font-weight: bold;');
console.log('%cWebsite được tạo với ❤️ cho bé yêu', 'font-size: 14px; color: #ffc93c;');

// Performance optimization - Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add special effects on page sections becoming visible
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

const sectionStyle = document.createElement('style');
sectionStyle.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.section-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1 !important;
        transform: none !important;
    }
`;
document.head.appendChild(sectionStyle);

console.log('🎊 Birthday Website Loaded Successfully! 🎊');
