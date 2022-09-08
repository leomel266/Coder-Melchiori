import React from "react";
import Item from "../Item/Item";

const ItemList = ({ itemList }) => {
  return (
    <>
      {itemList.map((producto) => {
        return (
          <>
            <div>
              <Item
                key={producto.id}
                name={producto.name}
                description={producto.description}
                price={producto.price}
                stock={producto.stock}
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default ItemList;
