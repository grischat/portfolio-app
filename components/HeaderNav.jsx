import "../scss/HeaderNav.scss";
import { Squash as Hamburger } from 'hamburger-react'
function HeaderNav() {
  return (
    <div className="header__nav">
      <img src="../media/images/logo.svg" alt="Black triangles logo" />
      {/* <img className ='nav__hamburger'src="../media/images/icons/hamburger.svg" alt="Black triangles logo" /> */}
      <Hamburger className ='hamburger-react'/>
    </div>
  );
}

export default HeaderNav;
