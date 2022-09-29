import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-sm-4">
      <div className="card w-80 h-90 text-center" >
        <img src={item.image} className="card-img-top w-100 h-auto" alt="..." style={{ height:'auto'}} />
        <div className="card-body">
          <h5 className="card-title">{item.name.substring(0, 20)}</h5>
          <p className="card-text">${item.price}</p>
            <Link to={`/item/${item.id}`} className="btn detalles">
              Ver Detalles
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
