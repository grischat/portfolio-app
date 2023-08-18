import "../scss/HeaderNav.scss";
import React, { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import Menu from "./Menu";
function HeaderNav() {
  const [isOpen, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!isOpen);
  };
  return (
    <div className="header__nav">
      
      <img src="../media/images/logo.svg" alt="Black triangles logo" />
      <Hamburger toggled={isOpen} toggle={toggleMenu}></Hamburger>
      {isOpen && <Menu/>}
    </div>
  );
}

export default HeaderNav;
