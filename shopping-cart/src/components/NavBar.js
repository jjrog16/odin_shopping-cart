import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavBar(props) {
  const cartCount = () => {
    switch (props.cart.length) {
      case 0:
        // Return an object with cupcakeCount otherwise reduce will
        // return a number, which does not have the cupcakeCount property
        return { cupcakeCount: 0 };

      case 1:
        // Returns the object so that cupcakeCount can be called
        return props.cart[0];

      default:
        return props.cart.reduce((previousValue, currentValue) => {
          // Return an object with cupcakeCount otherwise reduce will
          // return a number, which does not have the cupcakeCount property
          return {
            cupcakeCount:
              previousValue.cupcakeCount + currentValue.cupcakeCount,
          };
        });
    }
  };

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
            <p>{cartCount().cupcakeCount}</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
