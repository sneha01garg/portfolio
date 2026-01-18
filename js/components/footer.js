class PageFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const year = new Date().getFullYear();

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #222;
                    color: #fff;
                    padding: 20px;
                    text-align: center;
                    margin-top: 40px;
                }

                p {
                    margin: 0;
                    color: #ccc;
                }
            </style>

            <footer>
                <p>&copy; ${year} My Portfolio. All rights reserved.</p>
            </footer>
        `;
    }
}

customElements.define('page-footer', PageFooter);
