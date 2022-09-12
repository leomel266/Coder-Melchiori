import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <p>Item detail</p>
      <div>
        {/* <img src={item.image} alt="..." /> */}
      </div>
      <div>
        <h4>{item.name}</h4>
        <h5>{item.price}</h5>
        <h5>{item.description}</h5>
      </div>
    </div>
  );
};

export default ItemDetail;
