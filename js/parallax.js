/**
 * Generic Parallax System - v3-mobile-fix
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
    const isMobileQuery = window.matchMedia('(max-width: 768px)');

    if (parallaxElements.length === 0) return;

    function handleScroll() {
        // Double check width
        if (isMobileQuery.matches || window.innerWidth < 768) {
            parallaxElements.forEach(el => {
                el.style.transform = '';
            });
            return;
        }

        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed') || 0.5);
            const rect = el.getBoundingClientRect();
            const elementViewportCenter = rect.top + rect.height / 2;
            const style = window.getComputedStyle(el);
            const matrix = new DOMMatrix(style.transform);
            const currentTranslateY = matrix.m42;
            const neutralViewportCenter = elementViewportCenter - currentTranslateY;
            const distFromCenter = neutralViewportCenter - (windowHeight / 2);
            const offset = distFromCenter * speed;

            el.style.transform = `translateY(${offset}px)`;
        });
    }

    let ticking = false;
    const scrollListener = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', scrollListener);

    // Initial and resize checks
    handleScroll();
    isMobileQuery.addListener(handleScroll);
}
