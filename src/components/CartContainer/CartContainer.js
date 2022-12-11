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
          <p>Su orden fue creado, id: {idOrder} </p>
          <Link
            className='cartBtn btn btn-light shadow-lg p-3 mb-5 bg-white rounded'
            style={{ fontWeight: "bold", textDecoration: "none" }}
            to='/'>
            Ver productos
          </Link>
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
              <button
                onClick={clear}
                className='vaciar shadow-lg p-3 mb-4 rounded'
                style={{ marginBottom: 20 }}>
                Vaciar carrtito
              </button>
              <div
                className='shadow-lg p-3 mb-5 mt-2 bg-white rounded'
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: 300,
                  justifyContent: "center",
                }}>
                <form
                  onSubmit={sendOrder}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                  }}>
                  <label
                    className='mt-1'
                    style={{ fontSize: "1em", fontWeight: "bold" }}>
                    Nombre
                  </label>
                  <input
                    className='inpLabel'
                    style={{ outline: "none" }}
                    type='text'
                  />
                  <label
                    className='mt-1'
                    style={{ fontSize: "1em", fontWeight: "bold" }}>
                    Telefono{" "}
                  </label>
                  <input
                    className='inpLabel'
                    style={{ outline: "none" }}
                    type='text'
                  />
                  <label
                    className='mt-1'
                    style={{ fontSize: "1em", fontWeight: "bold" }}>
                    Email{" "}
                  </label>
                  <input
                    className='inpLabel mb-5'
                    style={{ outline: "none" }}
                    type='email'
                  />
                  <button
                    className='enviar shadow-lg p-3 mb-4 rounded'
                    type='submit'>
                    Enviar orden
                  </button>
                </form>
              </div>
            </>
          ) : (
            <Link style={{ textDecoration: "none" }} to='/'>
              <button
                className='cartBtn btn btn-light shadow-lg p-3 mb-5 bg-white rounded'
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
