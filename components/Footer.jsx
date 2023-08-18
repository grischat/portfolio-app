import "../scss/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <img
          className="white__triangles"
          src="../media/images/logo_white.svg"
        ></img>
        <ul className="links__text">
          <li>
            <a href="home.html">HOME</a>
          </li>
          <li>
            <a href="portfolio.html">PORTFOLIO</a>
          </li>
          <li>
            <a href="contact.html">CONTACT ME</a>
          </li>
        </ul>

        <ul className="links__icons">
          <li>
            <a href="https://github.com/grischat" target="_blank">
              <img
                src="../media/images/icons/github-white.svg"
                alt="github icon"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/KosolapH" target="_blank">
              <img
                src="../media/images/icons/twitter-white.svg"
                alt="twitter icon"
              ></img>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/hryhorii-kosolap-1b7892231/' target="_blank">
              <img
                src="../media/images/icons/linkedin-white.svg"
                alt="linkedin icon"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
