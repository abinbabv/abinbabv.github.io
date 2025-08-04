// Wait until the entire HTML document is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Element Selection ---
    const loaderOverlay = document.getElementById('loader-overlay');
    const enterButton = document.getElementById('enter-button');
    const mainContent = document.getElementById('main-content');
    const audioControls = document.getElementById('audio-controls');
    const socialLinks = document.getElementById('social-links');
    
    const audio = document.getElementById('background-audio');
    const playPauseButton = document.getElementById('play-pause-button');
    
    const canvas = document.getElementById('dynamic-background');
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    // --- Enter Site Logic ---
    enterButton.addEventListener('click', () => {
        // Fade out the loader
        loaderOverlay.style.opacity = '0';
        // Wait for fade out to complete before hiding it
        setTimeout(() => {
            loaderOverlay.style.display = 'none';
        }, 500);

        // Fade in the main content and controls
        mainContent.classList.remove('hidden');
        audioControls.classList.remove('hidden');
        socialLinks.classList.remove('hidden');

        // Start audio and update button
        audio.play().catch(error => console.log("Audio autoplay was prevented. User must interact first."));
        playPauseButton.textContent = 'Pause';

        // Start the background animation
        startAnimation();
    });

    // --- Audio Controls Logic ---
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // --- Dynamic Background Animation ---
    let particlesArray;

    // Set canvas size to full window size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();

    // Particle object
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Reset particle position if it goes off-screen
            if (this.x > canvas.width || this.x < 0) this.x = Math.random() * canvas.width;
            if (this.y > canvas.height || this.y < 0) this.y = Math.random() * canvas.height;
        }
        draw() {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create and initialize particles
    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        animationFrameId = requestAnimationFrame(animate);
    }

    function startAnimation() {
        init();
        animate();
    }
    
    function stopAnimation() {
        cancelAnimationFrame(animationFrameId);
    }

    // Adjust canvas and particle count on window resize
    window.addEventListener('resize', () => {
        stopAnimation();
        setCanvasSize();
        startAnimation();
    });
});
