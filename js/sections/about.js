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
            <img src='./assets/my-image.png' data-parallax-speed="-0.1">
          </div>
          <div class='about-me'>
            <div class='about-me-header'>
              <p data-parallax-speed="0.1">
              Creative Mind,
              </p>
              <p data-parallax-speed="0.15">
              Strategic Heart
              </p>
            </div>
            <div class='about-me-description'>
              We believe great design isn't just about looking good—it's about creating meaningful connections that drive real results. Every project starts with understanding your vision and ends with exceeding your expectations.
            </div>
            <div class='about-me-description'>
              We believe great design isn't just about looking good—it's about creating meaningful connections that drive real results. Every project starts with understanding your vision and ends with exceeding your expectations.
            </div>
          </div>
        </div>
    `;
}
