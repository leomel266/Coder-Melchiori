import React from "react";
import ItemCount from "../ItemCount";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext);

  const [contador, setContador] = useState(0);

  const onAdd=(dato)=>{
    setContador(dato)
    addItem(item, dato)

  }
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card" style={{ width: "100%" }}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description.substring(0, 30)}...</p>
            <p className="card-text">{item.price}</p>
            <p className="card-text">{contador}</p>
            <ItemCount stock={10} initial={0} onAdd={onAdd}/>
          </div>
          {
            contador > 0 &&
            <Link to='/cart'>
              <button>Terminar mi compra</button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
