import React from "react";
import ItemCount from "../ItemCount";
import { useState } from "react";

const ItemDetail = ({ item }) => {

  const [contador, setContador] = useState(0);

  const onAdd=(dato)=>{
    setContador(dato)

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
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
