import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";

const Item = ({ item }) => {
  return (
    <div className='col-sm-4'>
      <div className='itemCard card w-80 h-100 text-center'>
        <img
          src={item.image}
          className='itemImg img-fluid card-img-top'
          alt='...'
          style={{ height: "70%", objectFit: "cover", maxWidth: "100%" }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{item.name.substring(0, 20)}...</h5>
          <p className='card-text'>${item.price}</p>
          <Link to={`/item/${item.id}`} className='btn mx-auto detalles'>
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
