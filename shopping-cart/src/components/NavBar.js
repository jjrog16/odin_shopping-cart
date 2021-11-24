import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavBar() {
  const [click, setClick] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  function handleClick() {
    // When a click happens, set the opposite of the current state of a click
    setClick(!click);
  }

  // When an option is clicked in mobile, close the menu
  function closeMobileMenu() {
    setClick(false);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Caked Up!
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <MenuIcon /> : <CloseIcon />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-links">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li className="nav-links">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="shopping-cart">
            <ShoppingCartIcon />
            <p>{cartCount}</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
