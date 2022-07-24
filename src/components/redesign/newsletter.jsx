export const Newsletter = (props) => {
  return (
    <div className='newsletter-main-container'>
      <div className='container newsletter-sub-container'>
        <div className='row'>
          <div className='col-xs-12 col-md-4'>
            <div className='newsletter-content'>
              <p className='newsletter-heading'>
                Newsletters
                <img
                  src='img/dash_white.png'
                  className='blogcard-subheading'
                  alt='dash'
                />
              </p>
              <p className='welcome-subheading'>
                Stay updated on upcoming events, annoucements and other updates
                from Colours of India community.
              </p>
              {/* <p>
                <a
                  href={props.data ? props.data.discord : "/"}
                  className="btn btn-custom btn-lg know-more-anchor"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "white",
                  }}
                  target="blank"
                >
                  Subscribe
                </a>
              </p> */}
            </div>
          </div>

          <div className='col-xs-12 col-md-8 newsletter-link-container'>
            {/* <div className='newsletter-redirections'>
              <a href='home'>
                <span>About</span>
              </a>
             <a href='home'>
                <span>Blog</span>
              </a>
              <a href='home'>
                <span>Upcoming</span>
              </a>
              <a href='home'>
                <span>FAQ's</span>
              </a>
              <a href='home'>
                <span>Help Chat</span>
              </a>
              <a href='home'>
                <span>Guidelines</span>
              </a>
              <a href='home'>
                <span>Report</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className='container footer-container'>
        <div className='col-xs-12 col-md-6 footer-logo-section'>
          <a className='logo' href='#page-top'>
            <img src='img/footerlogo.png' alt='colours of india logo' />
          </a>
          {/* <a className='terms' href='#page-top'>
            <span>Terms & Conditions</span>
          </a>
          <a className='privacy' href='#page-top'>
            <span>Privacy Policy</span>
          </a> */}
        </div>
        <div className='col-xs-12 col-md-6 footer-icons'>
          <a href='https://www.instagram.com/coloursofindianft/' target='blank'>
            <img src='img/Instagram.png' alt='instagram' />
          </a>
          <a href='https://twitter.com/coi_nft' target='blank'>
            <img src='img/Twitter.png' alt='Twitter' />
          </a>
          <a
            target='blank'
            href=' https://www.linkedin.com/in/colours-of-india-nft-764a43218/'
          >
            <img src='img/Linkedin.png' alt='Linkedin' />
          </a>
          {/* <a>
            <img src='img/Facebook.png' alt='Facebook' />
          </a> */}
        </div>
      </div>
    </div>
  );
};
