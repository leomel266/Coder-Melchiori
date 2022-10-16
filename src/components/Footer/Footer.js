import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer text-center'>
      <h4>Todos los derechos reservados</h4>
      <section className='ft-social'>
        <ul className='ft-social-list'>
          <li>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              to='https://github.com/leomel266'>
              <i className='fab fa-github'></i>
            </Link>
          </li>
          <li>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              to='https://www.linkedin.com/in/leonardo-melchiori-013678225/'>
              <i className='fab fa-linkedin'></i>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
