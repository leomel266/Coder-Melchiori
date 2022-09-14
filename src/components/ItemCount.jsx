import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const resta=()=>{
        if(count > 1){
            setCount(count-1)
        }
    }
    const suma=()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    return (
        <div className='widget-1'>
            <h1>Stock disponible: {stock}</h1>
            <div className='contador'>
                <button disabled={stock===0} className='suma btn btn-success' onClick={suma}>+</button>
                <h2 className='Ctitulo'>{count}</h2>
                <button disabled={stock===0} className='resta btn btn-success' onClick={resta}>-</button>
            </div>
            <div className='Acarrito'>
                <button className='btn btn-primary' onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
            
        </div>
    );
}

export default ItemCount;
