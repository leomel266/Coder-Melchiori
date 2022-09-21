import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { productCartList, removeItem, clear, getTotalPrice } =
    useContext(CartContext);

  return (
    <div>
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
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>Cantidad: {item.quantity}</td>
                    <td>Precio Unitario: ${item.price}</td>
                    <td>Precio Productos: ${item.quantityPrice}</td>
                    <button onClick={() => removeItem(item.id)}>
                      eliminar producto
                    </button>
                  </tr>
                ))}
              </>
            ) : (
              <>
                <p> El carrito esta vacio, Agrega algun producto</p>
                <Link to="/">Ir al Listado de productos</Link>
              </>
            )}
          </>
        </tbody>
      </table>
      <p>Precio total: ${getTotalPrice()}</p>
      <button onClick={clear}>Vaciar carrtito</button>
    </div>
  );
};

export default CartContainer;
