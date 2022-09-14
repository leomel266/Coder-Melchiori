import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      <h1>Item list</h1>
        <div className="row">
          {items.map((producto) => (
            <Item key={producto.id} item={producto} />
          ))}
        </div>
    </>
  );
};

export default ItemList;
