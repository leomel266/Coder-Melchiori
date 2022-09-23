import React from "react";
import { useState, useEffect } from "react";
import data from "../ItemListContainer/mock-data";
import ItemDetail from "../ItemDatail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [item, setItem] = useState({});

  // const getItem = (id) => {
  //   return new Promise((resolve, reject) => {
  //     const item = data.find((item) => item.id === parseInt(id));
  //     // si en la constante producto le pongo item de nombre me sale error
  //     resolve(item);
  //   });
  // };

  useEffect(() => {
    const getProducto = async () => {
      //creamos la ref del producto
      const queryRef = doc(db, 'items', productId);
      // hacemos solicitud a firebase
      const response = await getDoc(queryRef);
      const newItem ={
        id:response.id,
        ...response.data()
      }
      setItem(newItem)
    };
    setTimeout(() => {
      getProducto();
      
    }, 1000);
  }, [productId]);


  return (
    <div className="contenido">
      <p>Item detail Container</p>
      {item?.id ? <ItemDetail item={item} /> : 
      <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>}
    </div>
  );
};

export default ItemDetailContainer;
