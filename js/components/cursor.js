class CustomCursor extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.initCursor();
        this.initProjectCards();
    }

    render() {
        // Create the main dot cursor
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        this.appendChild(cursor);
        this.cursorElement = cursor;

        // Create the label element
        const label = document.createElement('div');
        label.classList.add('cursor-label');
        label.textContent = 'VIEW';
        this.appendChild(label);
        this.labelElement = label;
    }

    initCursor() {
        document.addEventListener('mousemove', (e) => {
            // Move cursor dot
            this.cursorElement.style.top = `${e.clientY}px`;
            this.cursorElement.style.left = `${e.clientX}px`;

            // Move label (it follows the mouse too, but has its own offset in CSS)
            this.labelElement.style.top = `${e.clientY}px`;
            this.labelElement.style.left = `${e.clientX}px`;
        });

        // Add hover effect for interactive elements (excluding project cards which have their own logic)
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursorElement.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                this.cursorElement.classList.remove('hover');
            });
        });
    }

    initProjectCards() {
        // We use a MutationObserver or a timeout to wait for project cards if they are dynamically loaded
        // But assuming they might be static or already present:
        const setupCards = () => {
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    this.labelElement.classList.add('visible');
                    this.cursorElement.classList.add('hover'); // Optional: scale dot too
                });
                card.addEventListener('mouseleave', () => {
                    this.labelElement.classList.remove('visible');
                    this.cursorElement.classList.remove('hover');
                });
            });
        };

        // Run immediately
        setupCards();

        // Also run after a short delay in case of dynamic content (or listening for a specific event)
        // For a more robust solution, we'd use MutationObserver on the grid container.
        // Assuming projects might be loaded by js/sections/projects.js
        setTimeout(setupCards, 500);
        setTimeout(setupCards, 1000);
    }
}

customElements.define('custom-cursor', CustomCursor);
