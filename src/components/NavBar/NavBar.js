import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="header">
      <h1>Seeds</h1>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/productos">
                  productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/productos"></Link>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
