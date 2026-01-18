class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  setupListeners() {
    this.shadowRoot.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        const sectionId = e.target.dataset.section;
        this.scrollToSection(sectionId);
        this.setActive(sectionId);
      }
    });
  }

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setActive(sectionId) {
    const links = this.shadowRoot.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.classList.toggle('active', link.dataset.section === sectionId);
    });
  }

  render() {
    const links = [
      { label: 'Home', section: 'home-section' },
      { label: 'About', section: 'about-section' },
      { label: 'Projects', section: 'projects-section' },
      { label: 'Contact', section: 'contact-section' }
    ];

    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #222;
                    padding: 20px 0;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }

                .navbar {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                }

                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #fff;
                    cursor: pointer;
                }

                .nav-links {
                    display: flex;
                    gap: 30px;
                    list-style: none;
                }

                .nav-link {
                    color: #fff;
                    cursor: pointer;
                    padding: 5px 0;
                    border-bottom: 2px solid transparent;
                    transition: border-color 0.3s;
                }

                .nav-link:hover,
                .nav-link.active {
                    border-bottom-color: #007bff;
                }
            </style>

            <div class="navbar">
                <div class="logo">Portfolio</div>
                <ul class="nav-links">
                    ${links.map(link => `
                        <li class="nav-link" data-section="${link.section}">${link.label}</li>
                    `).join('')}
                </ul>
            </div>
        `;

    // Set home as active by default
    this.setActive('home-section');
  }
}

customElements.define('nav-bar', NavBar);

