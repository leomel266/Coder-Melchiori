import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      <div>
        <h1>Item list</h1>
        {items.map((producto) => (
          <Item key={producto.id} item={producto} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
