import "../scss/Footer.scss";
import "../scss/MainContentHome.scss";
import "../scss/Button.scss";
import { Link } from "react-router-dom";
import logo from "../media/images/logo_white.svg";
import githubLinkImg from "../media/images/icons/github-white.svg";
import twitterLinkImg from "../media/images/icons/twitter-white.svg";
import linkedinLinkImg from "../media/images/icons/linkedin-white.svg";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer__content">
          <img className="white__triangles" src={logo} />
          <ul className="links__footer-text">
            <li>
              <Link to="/portfolio-app">HOME</Link>
            </li>
            <li>
              <Link to="/portfolio-app/portfolio" preventScrollReset={true}>
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to="/portfolio-app/contact">CONTACT ME</Link>
            </li>
          </ul>

          <ul className="links__icons">
            <li>
              <a href="https://github.com/grischat" target="_blank">
                <img src={githubLinkImg} alt="github icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/KosolapH" target="_blank">
                <img src={twitterLinkImg} alt="twitter icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hryhorii-kosolap-1b7892231/"
                target="_blank"
              >
                <img src={linkedinLinkImg} alt="linkedin icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
