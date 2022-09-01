import React from 'react';

const Item = ({id,name,description,image,price,stock}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>
        </div>
    );
}

export default Item;
