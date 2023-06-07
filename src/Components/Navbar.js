import React from "react";
import Logo from "../Assets/nyx-name.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
