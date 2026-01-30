function renderAbout() {
  return html`
        <div class="container section" id="about-section">
          <div class='vertical-text'>
            <vertical-fade-text 
                side="left" 
                text1="ABOUT ME" 
                text2="ABOUT ME" 
                text3="ABOUT ME">
            </vertical-fade-text>           
          </div>
          <div class='my-image'>
            <img src='./assets/my-works/aboutme/my-image.png' data-parallax-speed="-0.1">
          </div>
          <div class='about-me'>
            <div class='about-me-header'>
              <p data-parallax-speed="0.1">
              Crafting Visual
              </p>
              <p data-parallax-speed="0.15">
              Stories
              </p>
            </div>
            <div class='about-me-description'>
              I’m a passionate visual designer who loves exploring creativity through colors, layouts, and storytelling. I enjoy experimenting with different styles and bringing concepts to life through thoughtful design. I’m always excited to learn, grow, and take on new creative challenges.
            </div>
            
            <div class='about-me-description design-toolkit-container'>
            <div>
              <span>Design Toolkit :</span>
            </div>
              <div class='tools-row'>
                <img src='./assets/my-works/aboutme/Figma.svg' alt='Figma'>
                <img src='./assets/my-works/aboutme/Adobe_Photoshop_CC_icon.svg.png' alt='Photoshop'>
                <img src='./assets/my-works/aboutme/Adobe_Illustrator_CC_icon.svg.png' alt='Illustrator'>
                <img src='./assets/my-works/aboutme/Adobe_InDesign_CC_icon.svg.png' alt='InDesign'>
              </div>
            </div>
          </div>
        </div>
    `;
}
