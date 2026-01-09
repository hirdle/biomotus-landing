/**
 * BioMotus Landing Page - Enterprise JavaScript
 * Interactive elements, animations, and user experience enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============ Preloader ============
    const preloader = document.querySelector('.preloader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = 'visible';
        }, 500);
    });

    // Fallback: hide preloader after 3 seconds regardless
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 3000);

    // ============ Navigation ============
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Navbar scroll effect
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        }
    });

    // ============ Smooth Scrolling ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============ Scroll Animations ============
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                entry.target.style.setProperty('--delay', delay);

                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay);

                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });

    // ============ Counter Animation ============
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');

    const animateCounter = (el) => {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                el.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                el.textContent = target;
            }
        };

        updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => {
        counterObserver.observe(el);
    });

    // ============ Steps Timeline Progress ============
    const timelineProgress = document.getElementById('timeline-progress');
    const stepsSection = document.getElementById('how-it-works');

    if (timelineProgress && stepsSection) {
        const updateTimelineProgress = () => {
            const sectionRect = stepsSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
                const sectionHeight = sectionRect.height;
                const visibleHeight = Math.min(windowHeight - sectionRect.top, sectionHeight);
                const progress = Math.max(0, Math.min(100, (visibleHeight / sectionHeight) * 100));
                timelineProgress.style.height = `${progress}%`;
            }
        };

        window.addEventListener('scroll', updateTimelineProgress);
        updateTimelineProgress();
    }

    // ============ FAQ Accordion ============
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ============ App Carousel ============
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    let carouselInterval;

    const showSlide = (index) => {
        carouselSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            carouselDots[i]?.classList.remove('active');
        });

        carouselSlides[index]?.classList.add('active');
        carouselDots[index]?.classList.add('active');
        currentSlide = index;
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % carouselSlides.length;
        showSlide(next);
    };

    // Auto-advance carousel
    const startCarousel = () => {
        carouselInterval = setInterval(nextSlide, 4000);
    };

    const stopCarousel = () => {
        clearInterval(carouselInterval);
    };

    // Dot navigation
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
    });

    // Start carousel if slides exist
    if (carouselSlides.length > 0) {
        startCarousel();
    }

    // Pause carousel on hover
    const carouselContainer = document.querySelector('.app-carousel');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopCarousel);
        carouselContainer.addEventListener('mouseleave', startCarousel);
    }

    // ============ Back to Top Button ============
    const backToTopBtn = document.getElementById('back-to-top');

    const handleBackToTopVisibility = () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', handleBackToTopVisibility);

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============ Active Navigation Link ============
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNavLink = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
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
    };

    window.addEventListener('scroll', highlightNavLink);

    // ============ Tariff Card Hover Effect ============
    const tariffCards = document.querySelectorAll('.tariff-card:not(.popular)');

    tariffCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const popularCard = document.querySelector('.tariff-card.popular');
            if (popularCard && window.innerWidth > 768) {
                popularCard.style.transform = 'scale(1)';
            }
        });

        card.addEventListener('mouseleave', () => {
            const popularCard = document.querySelector('.tariff-card.popular');
            if (popularCard && window.innerWidth > 768) {
                popularCard.style.transform = 'scale(1.05)';
            }
        });
    });

    // ============ Parallax Effects ============
    const floatingCards = document.querySelectorAll('.floating-card');
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual && floatingCards.length > 0) {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const moveX = (clientX - centerX) / 50;
            const moveY = (clientY - centerY) / 50;

            floatingCards.forEach((card, index) => {
                const multiplier = (index + 1) * 0.5;
                card.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
            });
        });
    }

    // ============ Benefit Cards Interaction ============
    const benefitCards = document.querySelectorAll('.benefit-card');

    benefitCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';

            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple effect styles
    const rippleStyles = document.createElement('style');
    rippleStyles.textContent = `
        .benefit-card {
            position: relative;
            overflow: hidden;
        }
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(22, 142, 80, 0.2);
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        @keyframes ripple {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        .nav-link.active {
            color: #168E50;
        }
        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(rippleStyles);

    // ============ Keyboard Navigation ============
    document.addEventListener('keydown', (e) => {
        // Escape closes mobile menu
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'visible';

            // Close any open FAQ items
            faqItems.forEach(item => item.classList.remove('active'));
        }
    });

    // ============ Resize Handler ============
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'visible';
            }
        }, 250);
    });

    // ============ Performance: Throttle scroll events ============
    let ticking = false;

    const optimizedScrollHandler = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleNavbarScroll();
                handleBackToTopVisibility();
                highlightNavLink();
                ticking = false;
            });
            ticking = true;
        }
    };

    // Replace individual scroll listeners with optimized one
    window.removeEventListener('scroll', handleNavbarScroll);
    window.removeEventListener('scroll', handleBackToTopVisibility);
    window.removeEventListener('scroll', highlightNavLink);
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    console.log('BioMotus Landing Page initialized successfully');
});
