// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    const heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true
        }
    });
    
    heroTimeline
        .to(".line1", { y: 0, rotateX: 0, opacity: 1, duration: 1 })
        .to(".line2", { y: 0, rotateX: 0, opacity: 1, duration: 1 })
        .to(".line3", { y: 0, rotateX: 0, opacity: 1, duration: 1 })
        .to({}, {duration: 0.5});

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
    gsap.to(".video-container", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: "30%",
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
