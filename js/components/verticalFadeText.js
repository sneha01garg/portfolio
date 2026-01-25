class VerticalFadeText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.handleScroll = this.handleScroll.bind(this);
  }

  connectedCallback() {
    this.render();
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Initial calculation
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  static get observedAttributes() {
    return ['side', 'text1', 'text2', 'text3'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  handleScroll() {
    if (!this.shadowRoot) return;

    const container = this.shadowRoot.querySelector('.container');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate visibility and scroll progress
    const viewportCenter = windowHeight / 2;

    // Get element center
    // We can use the container's position
    const elementCenter = rect.top + (rect.height / 2);

    // Distance from center
    // If element is at center, distance is 0.
    // If element is at bottom (entering), distance is positive (high).
    // If element is at top (leaving), distance is negative.
    // Wait, rect.top is relative to viewport.
    // Center: rect.top = 300, height=200 -> elemCenter=400. Viweprot=800. Center=400. Dist=0.
    // Bottom: rect.top = 800. elemCenter=900. Dist = 500.
    // Top: rect.top = -200. elemCenter=-100. Dist = -500.

    const distFromCenter = elementCenter - viewportCenter;

    // Normalize distance?
    // Let's us pixels directly for control.

    // Base gap at center
    const baseGap = 70;

    // Spread factor
    // As it goes UP (negative distance), we want it to spread OUT?
    // "spreading out as you scroll" -> User scrolls down, content moves up.
    // So as it moves to top, gap increases.
    // distFromCenter goes from Positive -> Negative.

    // Let's say we want:
    // Bottom (enter): Gap is smaller? or larger?
    // "spreading out as you scroll" implies Gap increases.
    // So Gap should increase as distFromCenter decreases.

    // Let's try: Gap = baseGap - (distFromCenter * 0.1)
    // Center (0): 70
    // Bottom (500): 70 - 50 = 20 (Collapsed)
    // Top (-500): 70 - (-50) = 120 (Spread)

    const spreadSpeed = 0.15; // Tweak this for sensitivity
    const spread = distFromCenter * spreadSpeed;

    // We want "spreading out" as we scroll down (content moves up).
    // Content moves up -> distFromCenter goes from + to -.
    // So we want gap to INCREASE as distFromCenter DECREASES.
    // So subtract the spread.

    const currentGap = baseGap - spread;

    const text2 = this.shadowRoot.querySelector('.text2');
    const text3 = this.shadowRoot.querySelector('.text3');

    if (!text2 || !text3) return;

    const side = this.getAttribute('side') || 'left';
    const isRight = side === 'right';

    // Apply transforms
    // Note: We need to maintain the rotation for left side

    if (isRight) {
      text2.style.transform = `translateX(-${currentGap}px)`;
      text3.style.transform = `translateX(-${currentGap * 2}px)`;
    } else {
      text2.style.transform = `translateX(${currentGap}px) rotate(180deg)`;
      text3.style.transform = `translateX(${currentGap * 2}px) rotate(180deg)`;
    }
  }

  render() {
    const side = this.getAttribute('side') || 'left';
    const text1 = this.getAttribute('text1') || 'TEXT';
    const text2 = this.getAttribute('text2') || 'TEXT';
    const text3 = this.getAttribute('text3') || 'TEXT';

    const isRight = side === 'right';

    this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap">
            
            <style>
                :host {
                    display: block;
                    position: relative;
                }

                .container {
                    position: relative;
                    display: inline-block;
                    transition: transform 0.1s linear; /* Smooth movement */
                }

                .vertical-text {
                    line-height: 80%;
                    color: white;
                    font: Montserrat;
                    font-weight: 900;
                    font-size: 120px;
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    white-space: nowrap;
                    margin: 0;
                    padding: 0;
                    position: absolute;
                    top: 0;
                    ${isRight ? 'right: 0;' : 'left: 0;'}
                    ${isRight ? '' : 'transform: rotate(180deg);'}
                    transition: transform 0.1s ease-out; /* Smooth spreading */
                    will-change: transform;
                }

                .text1 {
                    opacity: 1;
                    position: relative;
                    z-index: 3;
                    ${isRight ? 'transform: translateX(0);' : 'transform: rotate(180deg);'}
                }

                .text2 {
                    opacity: 0.14;
                    z-index: 2;
                    ${isRight ? 'transform: translateX(-70px);' : 'transform: translateX(70px) rotate(180deg);'}
                }

                .text3 {
                    opacity: 0.06;
                    z-index: 1;
                    ${isRight ? 'transform: translateX(-140px);' : 'transform: translateX(140px) rotate(180deg);'}
                }
            </style>

            <div class="container">
                <p class="vertical-text text1">${text1}</p>
                <p class="vertical-text text2">${text2}</p>
                <p class="vertical-text text3">${text3}</p>
            </div>
        `;

    // Trigger initial positioning
    this.handleScroll();
  }
}

customElements.define('vertical-fade-text', VerticalFadeText);
