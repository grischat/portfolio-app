import Button from "./Button";
import BottomLine from "./BottomLine";
import { Link } from "react-router-dom";
import "../scss/Footer.scss";
import "../scss/MainContentHome.scss";
import "../scss/Button.scss";
function ContactMeFooter() {
  return (
    <div>
      <div className="contactme__container">
        <h1 className="header__text-interested">
          Interested in doing a project together?
        </h1>
        {window.innerWidth >= 768 && (
          <BottomLine className="bottomline-short" />
        )}
        <Link id="link" to="/portfolio-app/contact">
          <Button className="btn__contactme">CONTACT ME</Button>
        </Link>
      </div>
    </div>
  );
}

export default ContactMeFooter;
