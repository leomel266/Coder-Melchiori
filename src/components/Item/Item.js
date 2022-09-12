import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: "100%" }}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description.substring(0, 30)}...</p>
          <p className="card-text">{item.price}</p>
          <Link to={`/item/${item.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
