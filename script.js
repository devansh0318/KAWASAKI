// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Set higher refresh rate for GSAP
    gsap.ticker.fps(120);

    // Optimize video playback (play only when in viewport to reduce lag)
    const videos = document.querySelectorAll('video');
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().catch(e => console.log('Autoplay prevented', e));
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.1 });

    videos.forEach(video => {
        videoObserver.observe(video);
    });

    // Hero text removed

    // Scroll Animations for Sections
    gsap.utils.toArray('.content-block').forEach(block => {
        gsap.fromTo(block, 
            {
                y: 100,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: block,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                    toggleActions: "play none none reverse"
                },
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out"
            }
        );
    });

    gsap.utils.toArray('.image-block img').forEach(img => {
        gsap.fromTo(img, 
            {
                x: 100,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: img,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                    toggleActions: "play none none reverse"
                },
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out"
            }
        );
    });

    // Parallax effect for video
    gsap.to(".hero .video-container", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        yPercent: 30,
        ease: "none"
    });

    // Stats Counter Animation
    gsap.utils.toArray('.counter').forEach(counter => {
        let endValue = parseInt(counter.innerText);
        gsap.fromTo(counter, 
            { innerHTML: 0 },
            {
                innerHTML: endValue,
                scrollTrigger: {
                    trigger: ".stats-slab",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power2.out"
            }
        );
    });
});
