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
        return ['open', 'title', 'tools', 'type', 'image', 'description', 'images', 'project-overview', 'key-highlights', 'thumbnail', 'images-scroll', 'image-styles'];
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

        // Scroll buttons
        const leftBtn = this.shadowRoot.querySelector('.scroll-btn.left');
        const rightBtn = this.shadowRoot.querySelector('.scroll-btn.right');
        const scrollArea = this.shadowRoot.querySelector('.secondary-images.horizontal');

        if (scrollArea && leftBtn && rightBtn) {
            leftBtn.addEventListener('click', () => {
                scrollArea.scrollBy({ left: -555, behavior: 'smooth' }); // 525 + 30 gap
            });

            rightBtn.addEventListener('click', () => {
                scrollArea.scrollBy({ left: 555, behavior: 'smooth' });
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
        this.setAttribute('thumbnail', projectData.thumbnail || '');
        this.setAttribute('description', projectData.description);
        this.setAttribute('project-overview', projectData.projectOverview || '');
        // Serialize arrays to string
        const keyHighlights = projectData.keyHighlights ? JSON.stringify(projectData.keyHighlights) : '[]';
        this.setAttribute('key-highlights', keyHighlights);

        const images = projectData.images ? JSON.stringify(projectData.images) : '[]';
        this.setAttribute('images', images);

        this.setAttribute('images-scroll', projectData.imagesScroll || 'vertical'); // Default to vertical

        const imageStyles = projectData.imageStyles ? JSON.stringify(projectData.imageStyles) : '{}';
        this.setAttribute('image-styles', imageStyles);

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
        const projectOverview = this.getAttribute('project-overview') || description; // Fallback to description
        const imagesScroll = this.getAttribute('images-scroll') || 'vertical';

        const imageStylesStr = this.getAttribute('image-styles') || '{}';
        let customImageStyles = {};
        try {
            customImageStyles = JSON.parse(imageStylesStr);
        } catch (e) {
            customImageStyles = {};
        }

        const keyHighlightsStr = this.getAttribute('key-highlights') || '[]';
        let keyHighlights = [];
        try {
            keyHighlights = JSON.parse(keyHighlightsStr);
        } catch (e) {
            keyHighlights = [];
        }

        const imagesStr = this.getAttribute('images') || '[]';
        let images = [];
        try {
            images = JSON.parse(imagesStr);
        } catch (e) {
            images = [];
        }

        // If no images array but we have a main image, stick it in
        if (images.length === 0 && image) {
            images = [image];
        }

        // Separate main image (first) and others
        const thumbnail = this.getAttribute('thumbnail');
        let mainImage;
        let otherImages;

        if (thumbnail) {
            mainImage = thumbnail;
            otherImages = images.filter(img => img !== thumbnail);
        } else {
            mainImage = images.length > 0 ? images[0] : image;
            otherImages = images.length > 1 ? images.slice(1) : [];
        }

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
                    padding: 0 8%;
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
                    margin-bottom: 40px;
                }

                .description p {
                    font-size: 16px;
                    line-height: 1.8;
                    color: #ccc;
                }
                
                /* Container for Scroll + Buttons */
                .scroll-container {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                }

                .secondary-images {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    width: 100%;
                }
                
                /* Horizontal Scroll Style */
                .secondary-images.horizontal {
                    flex-direction: row;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    padding-bottom: 20px;
                    scroll-behavior: smooth;
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                /* Hide scrollbar for Chrome, Safari and Opera */
                .secondary-images.horizontal::-webkit-scrollbar {
                    display: none;
                }
                
                /* Nudge Animation */
                .nudge-anim {
                    animation: scrollNudge 1.5s ease-in-out 1s;
                }

                @keyframes scrollNudge {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(-20px); }
                }
                
                .secondary-images.horizontal .secondary-image {
                    min-width: 525px;
                    width: 525px;
                    flex: 0 0 525px;
                    scroll-snap-align: start;
                }

                .secondary-image {
                    width: 100%;
                }

                .secondary-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                
                /* Scroll Buttons */
                .scroll-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(0,0,0,0.6);
                    color: white;
                    border: 1px solid rgba(255,255,255,0.3);
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    cursor: pointer;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    transition: all 0.2s ease;
                    opacity: 0;
                    pointer-events: none;
                }
                
                .scroll-container:hover .scroll-btn {
                    opacity: 1;
                    pointer-events: auto;
                }
                
                .scroll-btn:hover {
                    background: rgba(255,255,255,0.15);
                    border-color: white;
                }
                
                .scroll-btn.left { left: 10px; }
                .scroll-btn.right { right: 10px; }
                
                .scroll-btn.hidden {
                    display: none !important;
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
                    
                    .description-column {
                       display: flex;
                       flex-direction: column;
                       gap: 15px;
                    }

                    .meta-info {
                        flex-direction: column;
                        gap: 15px;
                    }
                    
                    .secondary-images.horizontal .secondary-image {
                        min-width: 90%;
                        width: 90%;
                        flex: 0 0 90%;
                    }
                    
                    .scroll-btn {
                        display: none;
                    }
                }
                
                .section-title {
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 10px;
                    font-size: 18px;
                    display: block;
                }
                
                .highlights-list {
                    list-style-type: disc;
                    padding-left: 20px;
                    color: #ccc;
                }
                
                .highlights-list li {
                    margin-bottom: 8px;
                    line-height: 1.6;
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
                        ${mainImage ? `
                            <div class="main-image">
                                <img src="${mainImage}" alt="${title}" style="${this.styleMapToString(customImageStyles)}">
                            </div>
                        ` : ''}
                        
                        <div class="description">
                            <div class="description-column">
                                <span class="section-title">Project Overview-</span>
                                <p>${projectOverview}</p>
                            </div>
                            
                            ${keyHighlights.length > 0 ? `
                            <div class="description-column">
                                <span class="section-title">Key Highlights-</span>
                                <ul class="highlights-list">
                                    ${keyHighlights.map(highlight => `<li>${highlight}</li>`).join('')}
                                </ul>
                            </div>
                            ` : ''}
                        </div>

                        ${otherImages.length > 0 ? `
                            <div class="scroll-container ${imagesScroll === 'horizontal' ? 'horizontal' : ''}">
                                ${imagesScroll === 'horizontal' ? '<button class="scroll-btn left">‹</button>' : ''}
                                
                                <div class="secondary-images ${imagesScroll === 'horizontal' ? 'horizontal nudge-anim' : ''}">
                                    ${otherImages.map(img => `
                                        <div class="secondary-image">
                                            <img src="${img}" alt="${title} view" style="${this.styleMapToString(customImageStyles)}">
                                        </div>
                                    `).join('')}
                                </div>
                                
                                ${imagesScroll === 'horizontal' ? '<button class="scroll-btn right">›</button>' : ''}
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
    // Helper to convert style object to CSS string
    styleMapToString(styleMap) {
        return Object.entries(styleMap)
            .map(([k, v]) => `${k}:${v}`)
            .join(';');
    }
}

customElements.define('project-modal', ProjectModal);
