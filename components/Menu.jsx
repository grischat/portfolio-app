import '../scss/Menu.scss'
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
      <ul className="menu__container">
        <li>
          <Link  to="/">HOME</Link>
        </li>
        <li>
          <Link  to="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link  to="/contact">CONTACT ME</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
