import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Caked Up! <FontAwesomeIcon icon={faCoffee} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
