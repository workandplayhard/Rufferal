import React, { useState } from "react";
import "./BurgerMenu.css";
import { IoMenu } from "react-icons/io5";
function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="burger" style={{ width: "20%" }}>
      <button className="burger-menu" onClick={handleMenuClick}>
        <IoMenu size={35} />
      </button>
      <ul className={`burger-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#">Drops</a>
        </li>
        <li>
          <a href="#">Stats</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
