import React from 'react';

const Item = ({id,name,description,image,price,stock}) => {
    return (
        <div>
            <p>{id}</p>
            <h1>{name}</h1>
            <p>Descripción:{description}</p>
            <p>Precio: {price}</p>
            <p>Stock: {stock}</p>
        </div>
    );
}

export default Item;
