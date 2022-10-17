import React from "react";
import ItemCount from "../ItemCount";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import ContactoPage from "../ContactoPage/ContactoPage";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const [contador, setContador] = useState(0);

  const onAdd = (dato) => {
    setContador(dato);
    addItem(item, dato);
  };

  return (
    <>
      <div className='row p-2'>
        <div className='col-lg-5' style={{ marginBottom: 30 }}>
          <div className='card w-80' style={{ width: "100%" }}>
            <img src={item.image} className='card-img-top' alt='...' />
            <div className='card-body text-center'>
              <h5 className='card-title' style={{ fontWeight: "bold" }}>
                {item.name.substring(0, 20)}
              </h5>
              <p className='card-text'>
                {item.description.substring(0, 30)}...
              </p>
              <p className='card-text' style={{ fontWeight: "bold" }}>
                Precio: ${item.price}
              </p>
              <p className='card-text'>En Carrito: {contador}</p>
              <ItemCount stock={10} initial={0} onAdd={onAdd} />
              {contador > 0 && (
                <>
                  <Link
                    className='d-flex justify-content-center'
                    style={{ textDecoration: "none" }}
                    to='/cart'>
                    <button
                      className='btn btn-light mt-1 w-75'
                      style={{
                        fontWeight: "bold",
                        boxShadow: "7px 13px 37px #7c7c7c",
                      }}>
                      Ir al carrito
                    </button>
                  </Link>
                  <Link
                    className='d-flex justify-content-center'
                    style={{ textDecoration: "none" }}
                    to='/productos'>
                    <button
                      className='btn btn-light mt-1 w-75'
                      style={{
                        fontWeight: "bold",
                        boxShadow: "7px 13px 37px #7c7c7c",
                      }}>
                      Seguir comprando
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <ContactoPage />
      </div>
    </>
  );
};

export default ItemDetail;
