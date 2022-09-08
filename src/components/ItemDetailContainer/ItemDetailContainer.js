import React from 'react';
import { useState, useEffect } from 'react';
import data from '../ItemListContainer/mock-data';
import ItemDetail from '../ItemDatail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    const getData= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(data);
        }, 2000);

    })

    useEffect(() => {
        getData.then((result)=>{
            setItem(result)
        })
    }, []);
    return (
        <div className='aside'>
            {
                item.length > 0 ? (

                    <ItemDetail itemDetail={item}/>
                ):(
                    <div>Cargando...</div>
                )
            }
        </div>
    );
}

export default ItemDetailContainer;
