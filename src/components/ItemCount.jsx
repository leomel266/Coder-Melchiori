import React from "react";
import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(1);

  const resta = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const suma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <h3>Stock disponible: {stock}</h3>
      <div className='contador d-flex justify-content-center mb-1'>
        <button
          disabled={stock === 0}
          className='suma btn btn-success w-30 h-50 mx-auto shadow-lg p-3 mb-3 rounded'
          onClick={resta}
          style={{ fontWeight: "bold", fontSize: "1em" }}>
          -
        </button>
        <h4 className='Ctitulo'>{count}</h4>
        <button
          disabled={stock === 0}
          className='resta btn btn-success w-30 h-50 mx-auto shadow-lg p-3 mb-3 rounded'
          onClick={suma}
          style={{ fontWeight: "bold", fontSize: "1em" }}>
          +
        </button>
      </div>
      <div className='text-center'>
        <button
          className='btnCarrito btn w-75 shadow-lg p-3 mb-2 rounded'
          onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
