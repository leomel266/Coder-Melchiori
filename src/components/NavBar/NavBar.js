import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav class="main-nav">
      <ul class="main-nav-list">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">productos</Link>
        </li>
        <li>
          <Link to="/">dsafa</Link>
        </li>
        <CartWidget/>
      </ul>
    </nav>
  );
};

export default NavBar;
