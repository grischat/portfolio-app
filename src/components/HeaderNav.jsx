import "../scss/HeaderNav.scss";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import Menu from "./Menu";
function HeaderNav() {
  const [isOpen, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function toggleMenu() {
    setOpen(!isOpen);
  }
  useEffect(() => {
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const mobileScreen = windowWidth < 768;
  return (
    
    <div className="header__nav">
      
      <img src="./media/images/logo.svg" alt="Triangles logo" />
      
      {mobileScreen && (
        <>
        <Hamburger toggled={isOpen} toggle={toggleMenu}></Hamburger>
        {isOpen && <Menu/>}
        </>
      )}
      {!mobileScreen && <Menu/>}
    </div>
  );
}

export default HeaderNav;
