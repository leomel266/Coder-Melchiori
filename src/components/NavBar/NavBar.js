import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import cart from './img/cart.png'


const NavBar = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <img src={cart} alt='..'/>
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/">Disabled</Link>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default NavBar;
