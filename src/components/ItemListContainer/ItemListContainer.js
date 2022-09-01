import React from 'react';
import data from './mock-data';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const getData= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(data);
        }, 2000);

    })

    useEffect(() => {
        getData.then((result)=>{
            setItems(result)
        })
    }, []);
    return (
        <div className='contenido'>
            {
                items.length > 0 ? (

                    <ItemList itemList={items}/>
                ):(
                    <div>Cargando...</div>
                )
            }
        </div>
    );
}

export default ItemListContainer;
