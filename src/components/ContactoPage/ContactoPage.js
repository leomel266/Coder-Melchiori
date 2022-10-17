import React from "react";
import atencion from "./img/atencion.jpg";
import nosotros from "./img/nosotros.jpg";

const ContactoPage = () => {
  return (
    <div className='col-lg-5 text-center p-2'>
      <div>
        <h4 style={{ fontWeight: "bold", marginBottom: 30 }}>Sobre nosotros</h4>
        <img
          src={nosotros}
          alt='sada'
          style={{ width: 400, marginBottom: 20, borderRadius: 10 }}
        />
        <p style={{ marginBottom: 30 }}>
          Somos una empresa especializada en brindar los mejores productos y
          apoyo a nuestros clientes, darle una soluciones a sus problemas y la
          mejor atencion es por la cual nos destacamos.
        </p>
      </div>
      <h3 style={{ fontWeight: "bold" }}>Contactenos</h3>
      <img src={atencion} alt='sada' style={{ width: 400, marginBottom: 20 }} />
      <p>Resuelva sus dudas contactandonos atravez de estos medios</p>
      <section>
        <ul>
          <li>Email: agro@email.com</li>
          <li>Telefono: +9 54 595 666</li>
        </ul>
      </section>
    </div>
  );
};

export default ContactoPage;
