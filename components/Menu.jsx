import "../scss/Menu.scss";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <ul className="menu__container">
        <li>
          <Link id="link-text" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link id="link-text" to="/portfolio">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link id="link-text" to="/contact">
            CONTACT ME
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
