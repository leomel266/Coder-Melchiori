import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  console.log("categoryId", categoryId);

  const [productos, setProductos] = useState([]);

  // const promesa = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(data);
  //   }, 1000);
  // });

  // useEffect(() => {
  //   promesa.then((result) => {
  //     if (categoryId) {
  //       const newProducts = result.filter(
  //         (item) => item.category === categoryId
  //       );
  //       setProductos(newProducts);
  //     } else {
  //       setProductos(result);
  //     }
  //   });
  // }, [categoryId]);

  useEffect(() => {
    //creamos referencia de la coleccion
    const queryRef = !categoryId
      ? collection(db, "items")
      : query(collection(db, "items"), where("category", "==", categoryId));
    getDocs(queryRef).then((response) => {
      const result = response.docs.map((doc) => {
        const newItem = {
          id: doc.id,
          ...doc.data(),
        };
        return newItem;
      });
      setProductos(result);
      setTimeout(() => {
        setProductos(result);
      }, 500);
    });
  }, [categoryId]);

  return (
    <div className='contenido p-2'>
      <h2 className='text-center' style={{ fontWeight: "bold", fontSize: 50 }}>
        Productos
      </h2>
      <p className='text-center' style={{ marginBottom: 50 }}>
        Desde el campo a tu casa
      </p>
      <div>
        {productos.length > 0 ? (
          <ItemList items={productos} />
        ) : (
          <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
