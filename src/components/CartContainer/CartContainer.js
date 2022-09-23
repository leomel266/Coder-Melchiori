import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { productCartList, removeItem, clear, getTotalPrice } =
    useContext(CartContext);

  return (
    <div className="contenido">
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
      </>
      :
      <Link to='/'>Ver productos</Link>
      }
    </div>
  );
};

export default CartContainer;
