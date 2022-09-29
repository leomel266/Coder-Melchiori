import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(1);

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
        <div>
            <h3>Stock disponible: {stock}</h3>
            <div className='contador d-flex justify-content-center'>
                <button disabled={stock===0} className='suma btn btn-success w-30 h-50' onClick={resta}>-</button>
                <h2 className='Ctitulo'>{count}</h2>
                <button disabled={stock===0} className='resta btn btn-success w-30 h-50' onClick={suma}>+</button>
            </div>
            <div className='text-center'>
                <button className='btn w-75' style={{fontWeight:'bold', backgroundColor:'#57be6c', color:'#FFFFFF'}} onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
            
        </div>
    );
}

export default ItemCount;
