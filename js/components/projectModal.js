class ProjectModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  static get observedAttributes() {
    return ['open', 'title', 'tools', 'type', 'image', 'description'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  setupEventListeners() {
    const closeBtn = this.shadowRoot.querySelector('.close-btn');
    const backdrop = this.shadowRoot.querySelector('.modal-backdrop');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          this.close();
        }
      });
    }

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.getAttribute('open') === 'true') {
        this.close();
      }
    });
  }

  open(projectData) {
    this.setAttribute('open', 'true');
    this.setAttribute('title', projectData.title);
    this.setAttribute('tools', projectData.tools);
    this.setAttribute('type', projectData.type);
    this.setAttribute('image', projectData.image);
    this.setAttribute('description', projectData.description);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.setAttribute('open', 'false');
    document.body.style.overflow = '';
  }

  render() {
    const isOpen = this.getAttribute('open') === 'true';
    const title = this.getAttribute('title') || '';
    const tools = this.getAttribute('tools') || '';
    const type = this.getAttribute('type') || '';
    const image = this.getAttribute('image') || '';
    const description = this.getAttribute('description') || '';

    this.shadowRoot.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .modal-backdrop {
                    display: ${isOpen ? 'flex' : 'none'};
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.95);
                    z-index: 10000;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .modal-content {
                    position: relative;
                    width: 100%;
                    max-width: 1200px;
                    max-height: 90vh;
                    background: #000;
                    color: #fff;
                    overflow-y: auto;
                    animation: modalSlideIn 0.3s ease-out;
                }

                @keyframes modalSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 40px 40px 20px;
                    border-bottom: 1px solid #333;
                }

                .title-section h2 {
                    font-size: 48px;
                    font-weight: 300;
                    letter-spacing: 2px;
                    margin-bottom: 10px;
                }

                .meta-info {
                    display: flex;
                    gap: 30px;
                    margin-top: 10px;
                }

                .meta-item {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                .meta-label {
                    font-size: 12px;
                    color: #888;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .meta-value {
                    font-size: 14px;
                    color: #fff;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: #fff;
                    font-size: 32px;
                    cursor: pointer;
                    padding: 0;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.2s;
                }

                .close-btn:hover {
                    color: #888;
                }

                .modal-body {
                    padding: 40px;
                }

                .main-image {
                    width: 100%;
                    border: 2px solid #0066cc;
                    margin-bottom: 30px;
                }

                .main-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .description {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    margin-top: 30px;
                }

                .description p {
                    font-size: 16px;
                    line-height: 1.8;
                    color: #ccc;
                }

                .secondary-image {
                    margin-top: 30px;
                }

                .secondary-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                @media (max-width: 768px) {
                    .modal-header {
                        padding: 20px;
                    }

                    .title-section h2 {
                        font-size: 32px;
                    }

                    .modal-body {
                        padding: 20px;
                    }

                    .description {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }

                    .meta-info {
                        flex-direction: column;
                        gap: 15px;
                    }
                }
            </style>

            <div class="modal-backdrop">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="title-section">
                            <h2>${title}</h2>
                            <div class="meta-info">
                                <div class="meta-item">
                                    <span class="meta-label">TOOLS:</span>
                                    <span class="meta-value">${tools}</span>
                                </div>
                                <div class="meta-item">
                                    <span class="meta-label">TYPE:</span>
                                    <span class="meta-value">${type}</span>
                                </div>
                            </div>
                        </div>
                        <button class="close-btn">×</button>
                    </div>
                    <div class="modal-body">
                        <div class="main-image">
                            <img src="${image}" alt="${title}">
                        </div>
                        <div class="description">
                            <p>${description}</p>
                            <p>${description}</p>
                        </div>
                        ${image ? `
                            <div class="secondary-image">
                                <img src="${image}" alt="${title} detail">
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

    // Re-setup event listeners after render
    if (isOpen) {
      this.setupEventListeners();
    }
  }
}

customElements.define('project-modal', ProjectModal);
