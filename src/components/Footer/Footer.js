import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer text-center">
      <h4>Todos los derechos reservados</h4>
      <section class="ft-social">
        <ul class="ft-social-list">
          <li>
            <Link to="/">
              <i class="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fab fa-github"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fab fa-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fab fa-youtube"></i>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
