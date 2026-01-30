
window.initHomeBackground = function () {
    const canvas = document.getElementById('home-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let blobs = [];
    // Initialize mouse off-screen
    const mouse = { x: -1000, y: -1000 };
    const colors = ['#E89AC7', '#7FA3D6', '#B8A4D1', '#F4A6B8'];

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Blob {
        constructor(color, initial = false) {
            this.x = Math.random() * canvas.width;
            this.targetRadius = Math.random() * 150 + 150; // Reduced size

            if (initial) {
                this.y = Math.random() * canvas.height;
                this.radius = this.targetRadius; // Start fully grown
                this.opacity = 1; // Start fully visible
            } else {
                this.y = canvas.height + this.targetRadius;
                this.radius = 0; // Start invisible
                this.opacity = 0; // Start transparent
            }

            this.color = color;
            // Initial velocity
            this.vx = (Math.random() - 0.5) * 2.0;
            this.vy = -Math.random() * 1.6 - 0.8; // Upward start
        }

        update() {
            // Smooth fade-in animation
            if (this.radius < this.targetRadius) {
                this.radius += (this.targetRadius - this.radius) * 0.02; // Smooth growth
            }
            if (this.opacity < 1) {
                this.opacity += 0.01; // Smooth fade-in
            }

            // Organic wandering movement + Buoyancy
            this.vx += (Math.random() - 0.5) * 0.064;
            this.vy += (Math.random() - 0.5) * 0.064;
            this.vy -= 0.008; // Constant upward float

            // Cap speed to maintain continuous flow
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            const maxSpeed = 3.2;
            const minSpeed = 1.2;

            if (speed > maxSpeed) {
                this.vx = (this.vx / speed) * maxSpeed;
                this.vy = (this.vy / speed) * maxSpeed;
            } else if (speed < minSpeed) {
                const angle = Math.atan2(this.vy, this.vx) || -Math.PI / 2;
                this.vx = Math.cos(angle) * minSpeed;
                this.vy = Math.sin(angle) * minSpeed;
            }

            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 400 && dist > 0) {
                let angle = Math.atan2(dy, dx);
                this.x += Math.cos(angle) * 2.4; // Mouse repulse
                this.y += Math.sin(angle) * 2.4;
            }

            this.x += this.vx;
            this.y += this.vy;

            // Boundary checks
            // Horizontal wrap
            if (this.x < -this.radius) this.x = canvas.width + this.radius;
            if (this.x > canvas.width + this.radius) this.x = -this.radius;

            // Vertical recycle (Reset to bottom)
            if (this.y < -this.radius) {
                this.y = canvas.height + this.targetRadius;
                this.vy = -Math.random() * 1.6 - 0.8;
                this.x = Math.random() * canvas.width;
                this.radius = 0;
                this.targetRadius = Math.random() * 150 + 150; // New reduced size
            }

            // If wanders off bottom, recycle
            if (this.y > canvas.height + this.targetRadius + 200 && this.vy > 0) {
                this.y = canvas.height + this.targetRadius;
                this.vy = -Math.random() * 1.6 - 0.8;
                this.x = Math.random() * canvas.width;
                this.radius = 0;
                this.targetRadius = Math.random() * 150 + 150; // New reduced size
            }
        }

        draw() {
            const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);

            // Extract RGB from hex color
            const hex = this.color.replace('#', '');
            const r = parseInt(hex.substring(0, 2), 16);
            const g_val = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);

            g.addColorStop(0, `rgba(${r}, ${g_val}, ${b}, ${this.opacity})`);
            g.addColorStop(1, 'rgba(74, 95, 127, 0)');

            ctx.beginPath();
            ctx.fillStyle = g;
            ctx.globalCompositeOperation = 'screen';
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function spawnBlobs() {
        const count = Math.floor(Math.random() * 5) + 15; // Increased slightly more
        for (let i = 0; i < count; i++) {
            let b = new Blob(colors[Math.floor(Math.random() * colors.length)], true);
            // Pre-warm: Simulate movement for initial blobs
            for (let j = 0; j < 200; j++) {
                b.update();
            }
            blobs.push(b);
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.002) {
            blobs.push(new Blob(colors[Math.floor(Math.random() * colors.length)]));
        }

        blobs.forEach((b) => {
            b.update();
            b.draw();
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);

    // Initial setup
    resize();
    spawnBlobs();
    animate();
}
