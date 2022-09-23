import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const CartContainer = () => {
  const { productCartList, removeItem, clear, getTotalPrice } =
    useContext(CartContext);

  const [idOrder, setIdOrder] = useState('');

  const sendOrder = (event)=>{
    event.preventDefault()

    const order = {
      buyer: {
        name: event.target[0].value,
        phone: event.target[1].value,
        email: event.target[2].value,
      },
      items: productCartList,
      total: getTotalPrice()
    }
    const queryRef = collection(db, 'orders')
    addDoc(queryRef, order)
    .then(response=>{
      setIdOrder(response.id)
      clear()
    })
  }

  const updateOrder=()=>{
    //creamos la referencia
    const queryRef= doc(db,'orders','')
    //actualizar el documento
    updateDoc(queryRef,{
      total:80
    })
    .then(response=>(console.log(response)))
  }

  return (
    <div className="contenido">
      <button onClick={updateOrder}>actualizar Orden</button>
      {idOrder ? <>
        <p>Su orden fue creado, id {idOrder} </p>
        <Link to='/'>Ver productos</Link>
      </>
      :<>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Price</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <>
            {productCartList.length > 0 ? (
              <>
                {productCartList.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>Cantidad: {item.quantity}</td>
                    <td>Precio Unitario: ${item.price}</td>
                    <td>Precio Productos: ${item.quantityPrice}</td>
                    <td>
                      <button className="eliminar fa-solid fa-delete-left" onClick={() => removeItem(item.id)}>
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td>Carrito vacio</td>
              </tr>
            )}
          </>
        </tbody>
      </table>
      {
        productCartList.length > 0 ? 
      <>
        <p>Precio total: ${getTotalPrice()}</p>
        <button onClick={clear} className='vaciar btn btn-ligth'>Vaciar carrtito</button>
        <form onSubmit={sendOrder}>
          <label>Nombre:</label><br/>
          <input type='text'/><br/>
          <label>Telefono: </label><br/>
          <input type = 'text'/><br/>
          <label>Email: </label><br/>
          <input type ='email'/><br/><br/>
          <button type="submit">Enviar orden</button>
        </form>
      </>
      :
      <Link to='/'>Ver productos</Link>
      }

      </>}
    </div>
  );
};

export default CartContainer;
