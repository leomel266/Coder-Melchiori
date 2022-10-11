import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebase";
import "./CartContainer.css";

const CartContainer = () => {
  const { productCartList, removeItem, clear, getTotalPrice } =
    useContext(CartContext);

  useEffect(() => {
    const datos = localStorage.getItem("productos");
    console.log("datos", JSON.parse(datos));
  }, []);

  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (event) => {
    event.preventDefault();

    const order = {
      buyer: {
        name: event.target[0].value,
        phone: event.target[1].value,
        email: event.target[2].value,
      },
      items: productCartList,
      total: getTotalPrice(),
    };
    const queryRef = collection(db, "orders");
    addDoc(queryRef, order).then((response) => {
      setIdOrder(response.id);
      clear();
    });
  };

  // const updateOrder = () => {
  //   //creamos la referencia
  //   const queryRef = doc(db, "orders", "");
  //   //actualizar el documento
  //   updateDoc(queryRef, {
  //     total: 80,
  //   }).then((response) => console.log(response));
  // };

  return (
    <div className='contenido'>
      {idOrder ? (
        <>
          <p>Su orden fue creado, id {idOrder} </p>
          <Link to='/'>Ver productos</Link>
        </>
      ) : (
        <>
          <table className='table table-striped table-borderless'>
            <thead>
              <tr>
                <th scope='col'>Nombre</th>
                <th scope='col'>Cantidad</th>
                <th scope='col'>Precio Unitario</th>
                <th scope='col'>Precio Productos</th>
              </tr>
            </thead>
            <tbody>
              {productCartList.length > 0 ? (
                <>
                  {productCartList.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td className='text-center'>{item.quantity}</td>
                      <td className='text-center'> ${item.price}</td>
                      <td className='text-center'> ${item.quantityPrice}</td>
                      <td>
                        <button
                          className='eliminar fa-solid fa-delete-left'
                          onClick={() => removeItem(item.id)}></button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr>
                  <td>Carrito vacio</td>
                </tr>
              )}
            </tbody>
          </table>
          {productCartList.length > 0 ? (
            <>
              <p style={{ fontWeight: "bold" }}>
                Precio total: ${getTotalPrice()}
              </p>
              <button onClick={clear} className='vaciar'>
                Vaciar carrtito
              </button>
              <form onSubmit={sendOrder}>
                <label className='mt-1'>Nombre:</label>
                <br />
                <input
                  className='inpLabel'
                  style={{ outline: "none" }}
                  type='text'
                />
                <br />
                <label className='mt-1'>Telefono: </label>
                <br />
                <input
                  className='inpLabel'
                  style={{ outline: "none" }}
                  type='text'
                />
                <br />
                <label className='mt-1'>Email: </label>
                <br />
                <input
                  className='inpLabel'
                  style={{ outline: "none" }}
                  type='email'
                />
                <br />
                <br />
                <button className='enviar' type='submit'>
                  Enviar orden
                </button>
              </form>
            </>
          ) : (
            <Link style={{ textDecoration: "none" }} to='/'>
              <button
                className='cartBtn btn btn-light'
                style={{ fontWeight: "bold" }}>
                Ver Productos
              </button>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default CartContainer;
