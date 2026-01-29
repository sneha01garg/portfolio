function renderContact() {
  return html`
        <div class="container section" id="contact-section">
          <div class='vertical-text'>
            <vertical-fade-text 
                side="left" 
                text1="CONTACT" 
                text2="CONTACT" 
                text3="CONTACT">
            </vertical-fade-text>           
          </div>
          <div class="contact">
            <div class="contact-header">
              <p data-parallax-speed="0.1">Ready to connect?</p>
            </div>
            <div class="contact-cards-container">
              <div class="contact-card">
                <div class="contact-card-title">
                  Email
                </div>
                <div class="contact-card-value">
                  work01sneha@gmail.com
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-card-title">
                  LinkedIn
                </div>
                <div class="contact-card-value">
                  work01sneha@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
}
