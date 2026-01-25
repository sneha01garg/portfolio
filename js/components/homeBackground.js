
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
        constructor(color) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.targetRadius = Math.random() * 250 + 300;
            this.radius = 0; // Start invisible
            this.color = color;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.opacity = 0; // Start transparent
        }

        update() {
            // Smooth fade-in animation
            if (this.radius < this.targetRadius) {
                this.radius += (this.targetRadius - this.radius) * 0.02; // Smooth growth
            }
            if (this.opacity < 1) {
                this.opacity += 0.01; // Smooth fade-in
            }

            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 400 && dist > 0) {
                let angle = Math.atan2(dy, dx);
                this.x += Math.cos(angle) * 0.8;
                this.y += Math.sin(angle) * 0.8;
            }

            this.x += this.vx;
            this.y += this.vy;

            if (this.x < -this.radius) this.x = canvas.width + this.radius;
            if (this.x > canvas.width + this.radius) this.x = -this.radius;
            if (this.y < -this.radius) this.y = canvas.height + this.radius;
            if (this.y > canvas.height + this.radius) this.y = -this.radius;
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
        const count = Math.floor(Math.random() * 3) + 4;
        for (let i = 0; i < count; i++) {
            blobs.push(new Blob(colors[Math.floor(Math.random() * colors.length)]));
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
