class VerticalFadeText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['side', 'text1', 'text2', 'text3'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
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
                }

                .text1 {
                    opacity: 1;
                    position: relative;
                    ${isRight ? 'transform: translateX(0);' : 'rotate(180deg)'}
                }

                .text2 {
                    opacity: 0.14;
                    ${isRight ? 'transform: translateX(-70px);' : 'transform: translateX(70px) rotate(180deg);'}
                }

                .text3 {
                    opacity: 0.06;
                    ${isRight ? 'transform: translateX(-140px);' : 'transform: translateX(140px) rotate(180deg);'}
                }
            </style>

            <div class="container">
                <p class="vertical-text text1">${text1}</p>
                <p class="vertical-text text2">${text2}</p>
                <p class="vertical-text text3">${text3}</p>
            </div>
        `;
  }
}

customElements.define('vertical-fade-text', VerticalFadeText);
