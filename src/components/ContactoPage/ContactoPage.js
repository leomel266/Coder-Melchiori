import React from "react";

const ContactoPage = () => {
  return (
      <div className="sidebar text-center p-2">
        <h3 style={{ fontWeight: "bold" }}>Contacto</h3>
        <p>Resuelva sus dudas contactandonos atravez de estos medios</p>
        <section>
          <ul>
            <li>Email: agro@email.com</li>
            <li>Telefono: +9 54 595 666</li>
          </ul>
        </section>
        <div>
            <h4 style={{fontWeight: "bold"}}>Sobre nosotros</h4>
            <p>Somos una empresa especializada en brinda los mejores productos y apoyo
            a nuestros clientes, darle una soluciones a sus problemas y la mejor atencion 
            es por la cual nos destacamos</p>
        </div>
      </div>

  );
};

export default ContactoPage;
