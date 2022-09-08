import React from 'react';
import Item from '../Item/Item';

const ItemDetail = ({itemDetail}) => {
    return (
        <>
          {itemDetail.map((producto) => {
            return (
              <>
                <div>
                  <Item
                    key={producto.id}
                    id={producto.id}
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
}

export default ItemDetail;
