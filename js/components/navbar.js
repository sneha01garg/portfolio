class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.mobileMenuOpen = false;
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.classList.add('scrolled');
    } else {
      this.classList.remove('scrolled');
    }
  }

  handleResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && this.mobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    const backdrop = this.shadowRoot.querySelector('.backdrop');
    const hamburger = this.shadowRoot.querySelector('.hamburger');

    if (this.mobileMenuOpen) {
      navLinks.classList.add('active');
      backdrop.classList.add('active');
      hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      navLinks.classList.remove('active');
      backdrop.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  setupListeners() {
    this.shadowRoot.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        const sectionId = e.target.dataset.section;
        this.scrollToSection(sectionId);
        this.setActive(sectionId);

        // Close mobile menu after clicking a link
        if (this.mobileMenuOpen) {
          this.toggleMobileMenu();
        }
      }

      if (e.target.classList.contains('hamburger') || e.target.closest('.hamburger')) {
        this.toggleMobileMenu();
      }

      if (e.target.classList.contains('backdrop')) {
        this.toggleMobileMenu();
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
                    padding: 20px 0;
                }

                .navbar {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                    position: relative;
                }

                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #fff;
                    z-index: 1001;
                }

                .hamburger {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    cursor: pointer;
                    z-index: 1001;
                    padding: 10px;
                    background: none;
                    border: none;
                }

                .hamburger span {
                    width: 25px;
                    height: 3px;
                    background-color: #fff;
                    transition: all 0.3s ease;
                    border-radius: 2px;
                }

                .hamburger.active span:nth-child(1) {
                    transform: rotate(45deg) translate(8px, 8px);
                }

                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }

                .hamburger.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -7px);
                }

                .nav-links {
                    display: flex;
                    gap: 30px;
                    list-style: none;
                }

                .nav-link {
                    color: #fff;
                    padding: 5px 0;
                    border-bottom: 2px solid transparent;
                    transition: border-color 0.3s;
                    cursor: pointer;
                }

                .nav-link:hover,
                .nav-link.active {
                    border-bottom-color: #007bff;
                }

                .backdrop {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 999;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .backdrop.active {
                    opacity: 1;
                }

                /* Mobile styles */
                @media (max-width: 768px) {
                    .hamburger {
                        display: flex;
                    }

                    .backdrop {
                        display: block;
                        pointer-events: none;
                    }

                    .backdrop.active {
                        pointer-events: all;
                    }

                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 70%;
                        max-width: 300px;
                        height: 100vh;
                        background-color: rgba(33, 33, 33, 0.98);
                        backdrop-filter: blur(10px);
                        flex-direction: column;
                        gap: 0;
                        padding: 80px 30px 30px;
                        transition: right 0.3s ease;
                        z-index: 1000;
                        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
                    }

                    .nav-links.active {
                        right: 0;
                    }

                    .nav-link {
                        padding: 15px 0;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                        width: 100%;
                        font-size: 1.2rem;
                    }

                    .nav-link:hover,
                    .nav-link.active {
                        border-bottom-color: #007bff;
                    }
                }

                /* Tablet styles */
                @media (min-width: 769px) and (max-width: 1024px) {
                    .nav-links {
                        gap: 20px;
                    }

                    .logo {
                        font-size: 1.3rem;
                    }
                }
            </style>

            <div class="backdrop"></div>
            <div class="navbar">
                <div class="logo">Portfolio</div>
                <button class="hamburger" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
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

