const projectsData = [
  {
    id: 1,
    title: 'ASBL POSTER',
    tools: 'Photoshop',
    type: 'Ad Poster',
    image: './assets/my-works/asbl-poster/1080x1080.png',
    images: [
      './assets/my-works/asbl-poster/1080x1080.png',
      './assets/my-works/asbl-poster/1080x1920.png',
      './assets/my-works/asbl-poster/bus-stop-mockup.png'
    ],
    description: 'We believe great design isn\'t just about looking good—it\'s about creating meaningful connections that drive real results. Every project starts with understanding your vision and ends with exceeding your expectations.',
    thumbnail: './assets/my-works/asbl-poster/bus-stop-mockup.png',
    column: 2,
    row: 2,
  },
  {
    id: 2,
    title: 'DUAL SENSE',
    tools: 'Figma, Photoshop',
    type: 'Product Design',
    image: './assets/my-works/game-console/dualsense.png',
    images: [
      './assets/my-works/game-console/dualsense.png'
    ],
    description: 'A modern product showcase design highlighting the innovative features of gaming controllers with bold typography and vibrant colors.',
    thumbnail: './assets/my-works/game-console/dualsense.png',
    column: 2,
    row: 2,
  },
  {
    id: 3,
    title: 'FAST POSTER',
    tools: 'Photoshop',
    type: 'Ad Poster',
    image: './assets/my-works/fast-poster/car-poster.png',
    images: [
      './assets/my-works/fast-poster/car-poster.png',
      './assets/my-works/fast-poster/fast-mockup.png'
    ],
    description: 'We believe great design isn\'t just about looking good—it\'s about creating meaningful connections that drive real results. Every project starts with understanding your vision and ends with exceeding your expectations.',
    thumbnail: './assets/my-works/fast-poster/fast-mockup.png',
    column: 2,
    row: 2,
  },
  {
    id: 4,
    title: 'MALLUABLE',
    tools: 'Illustrator, Photoshop',
    type: 'Brand Identity',
    image: './assets/my-works/business-card/business-card-1.jpg',
    images: [
      './assets/my-works/business-card/business-card-1.jpg',
      './assets/my-works/business-card/business-card-2.jpg',
      './assets/my-works/business-card/beige-minimalist-mockup-instagram-post.png'
    ],
    description: 'Elegant business card design for a luxury real estate company featuring sophisticated geometric patterns and premium finishes.',
    thumbnail: './assets/my-works/business-card/beige-minimalist-mockup-instagram-post.png',
    column: 2,
    row: 2,
  },
  {
    id: 5,
    title: 'RECIPE BOOK',
    tools: 'InDesign, Photoshop',
    type: 'Print Design',
    image: './assets/my-works/cook-book/cookbook.jpg',
    images: [
      './assets/my-works/cook-book/cookbook.jpg',
      './assets/my-works/cook-book/cookbook2.jpg',
      './assets/my-works/cook-book/cookbook3.jpg',
      './assets/my-works/cook-book/cookbook4.jpg',
      './assets/my-works/cook-book/cookbook-magazine.png',
      './assets/my-works/cook-book/magazine-mockup-4.png'
    ],
    description: 'Beautiful cookbook layout featuring mouth-watering food photography and clean typography for an elevated culinary experience.',
    thumbnail: './assets/my-works/cook-book/cookbook-magazine.png',
    column: 2,
    row: 2,
  },
  {
    id: 6,
    title: 'MIND EASE',
    tools: 'Figma, After Effects',
    type: 'Web Design',
    image: './assets/my-works/mental-health-app/mental-health-1.png',
    images: [
      './assets/my-works/mental-health-app/mental-health-1.png',
      './assets/my-works/mental-health-app/mindease1.avif',
      './assets/my-works/mental-health-app/mindease2.avif',

    ],
    description: 'A calming mental wellness platform design with soothing illustrations and intuitive user experience to help users find balance.',
    thumbnail: './assets/my-works/mental-health-app/mental-health-1.png',
    column: 3,
    row: 2,
  },
  {
    id: 7,
    title: 'JUPITER',
    tools: 'Figma, Illustrator',
    type: 'Mobile App',
    image: './assets/my-works/jupito-carousel/1.png',
    images: [
      './assets/my-works/jupito-carousel/1.png',
      './assets/my-works/jupito-carousel/2.png',
      './assets/my-works/jupito-carousel/3.png',
      './assets/my-works/jupito-carousel/4.png',
      './assets/my-works/jupito-carousel/5.png',
      './assets/my-works/jupito-carousel/jupito-mock.png'
    ],
    description: 'A playful mobile app interface designed for meaningful conversations with warm yellow tones and friendly character illustrations.',
    thumbnail: './assets/my-works/jupito-carousel/jupito-mock.png',
    column: 3,
    row: 2,
  },
  {
    id: 8,
    title: 'FIERY CHOW MAGIC',
    tools: 'Photoshop, Illustrator',
    type: 'Food Marketing',
    image: './assets/my-works/noodles/noodles.png',
    images: [
      './assets/my-works/noodles/noodles.png'
    ],
    description: 'Bold and appetizing food marketing design with vibrant orange colors and enticing product photography to drive customer engagement.',
    thumbnail: './assets/my-works/noodles/noodles.png',
    column: 2,
    row: 2,
  }
];

// Global function to open project modal
function openProjectModal(projectId) {
  console.log('clicked', projectId);
  const modal = document.getElementById('project-modal');
  const projectData = projectsData.find(p => p.id === projectId);

  if (projectData && modal) {
    modal.open(projectData);
  }
}

function renderProjects() {
  return html`
    <div class="container section" id="projects-section">
      <h1 data-parallax-speed="0.1">My Works</h1>
      <div class="projects-grid">
        ${projectsData.slice(0, 2).map(project => `
          <div class="project-card" 
               onclick="openProjectModal(${project.id})" 
               style="grid-column: span ${project.column}; grid-row: span ${project.row};">
            <div class="project-image">
              <img src="${project.thumbnail}" alt="${project.title}">
              <div class="project-overlay">
                <h3>${project.title}</h3>
                <p class="project-tools">• ${project.tools}</p>
              </div>
            </div>
          </div>
        `).join('')}
        
        <div class="vertical-text-item">
          <vertical-fade-text
            side="right"
            text1="PROJECTS"
            text2="PROJECTS"
            text3="PROJECTS"
          ></vertical-fade-text>
        </div>
        
        ${projectsData.slice(2).map(project => `
          <div class="project-card" 
               onclick="openProjectModal(${project.id})" 
               style="grid-column: span ${project.column}; grid-row: span ${project.row};">
            <div class="project-image">
              <img src="${project.thumbnail}" alt="${project.title}">
              <div class="project-overlay">
                <h3>${project.title}</h3>
                <p class="project-tools">• ${project.tools}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <project-modal id="project-modal"></project-modal>
  `;
}
