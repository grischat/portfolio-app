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
            <a href="home.html">Home</a>
          </li>
          <li>
            <a href="portfolio.html">Portfolio</a>
          </li>
          <li>
            <a href="contact.html">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
