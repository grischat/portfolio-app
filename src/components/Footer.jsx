import "../scss/Footer.scss";
import "../scss/MainContentHome.scss";
import "../scss/Button.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer__content">
          <img
            className="white__triangles"
            src="../media/images/logo_white.svg"
          />
          <ul className="links__footer-text">
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/portfolio" preventScrollReset={true}>
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to="/contact">CONTACT ME</Link>
            </li>
          </ul>

          <ul className="links__icons">
            <li>
              <a href="https://github.com/grischat" target="_blank">
                <img
                  src="../media/images/icons/github-white.svg"
                  alt="github icon"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/KosolapH" target="_blank">
                <img
                  src="../media/images/icons/twitter-white.svg"
                  alt="twitter icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hryhorii-kosolap-1b7892231/"
                target="_blank"
              >
                <img
                  src="../media/images/icons/linkedin-white.svg"
                  alt="linkedin icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

