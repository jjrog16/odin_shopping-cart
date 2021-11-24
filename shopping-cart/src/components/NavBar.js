import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavBar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Caked Up!
          </Link>
          <ul className="link-container">
            <li className="nav-links">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/menu" className="nav-links">
                Menu
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/contact" className="nav-links">
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
