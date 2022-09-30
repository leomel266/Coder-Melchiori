import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav class="main-nav">
      <ul class="main-nav-list">
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/productos/vehiculos">Vehiculos</Link>
        </li>
        <li>
          <Link to="/Productos/insumos">Insumos</Link>
        </li>
        <CartWidget/>
      </ul>
    </nav>
  );
};

export default NavBar;
