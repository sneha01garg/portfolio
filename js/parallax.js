/**
 * Generic Parallax System
 * 
 * Usage: Add data-parallax-speed="0.5" to any element.
 * 0.5 means it moves at 50% speed of scroll (slower).
 * Negative values move faster/opposite.
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');

    // Initial check
    if (parallaxElements.length === 0) {
        console.log('No parallax elements found');
        return;
    }

    function handleScroll() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const viewportCenter = scrollY + windowHeight / 2;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed') || 0.5);

            // We need the original position of the element in the document.
            // Since we are applying transforms, getBoundingClientRect().top changes.
            // But we can approximate the original position or assume the element's layout position doesn't change much.
            // Better approach: Calculate the offset from the "center" of the viewport.

            const rect = el.getBoundingClientRect();
            // Current center of the element relative to the viewport
            const elementViewportCenter = rect.top + rect.height / 2;

            // We want to calculate the distance from the viewport center.
            // But 'rect' includes the current transform!
            // We need to back out the current transform to get the "neutral" position.

            // Parse current transform transform
            const style = window.getComputedStyle(el);
            const matrix = new DOMMatrix(style.transform);
            const currentTranslateY = matrix.m42; // m42 is translateY

            // "Neutral" viewport position (where it would be without parallax)
            const neutralViewportCenter = elementViewportCenter - currentTranslateY;

            // Distance from center:
            // If neutral pos is below center (positive), we want to push it down (positive offset) -> appears slower
            // dist = neutralViewportCenter - (windowHeight / 2)
            const distFromCenter = neutralViewportCenter - (windowHeight / 2);

            const offset = distFromCenter * speed;

            el.style.transform = `translateY(${offset}px)`;
        });
    }

    // Use requestAnimationFrame for smoothness
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    handleScroll(); // Initial position
}
