import React from 'react';
import { useState } from 'react';

const ItemCount = () => {
    const [contador, setContador] = useState(0);
    const resta=()=>{
        setContador(contador - 1)
    }
    const suma=()=>{
        setContador(contador + 1)
    }
    return (
        <div>
            <h1>Contador</h1>
            <div className='contador'>
                <button className='suma' onClick={suma}>+</button>
                <h2 className='Ctitulo'>{contador}</h2>
                <button className='resta' onClick={resta}>-</button>
            </div>
            <div className='Acarrito'>
                <button>Agregar al carrito</button>
            </div>
            
        </div>
    );
}

export default ItemCount;
