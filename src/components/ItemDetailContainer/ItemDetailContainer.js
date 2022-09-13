import React from "react";
import { useState, useEffect } from "react";
import data from "../ItemListContainer/mock-data";
import ItemDetail from "../ItemDatail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [item, setItem] = useState({});

  const getItem = (id) => {
    return new Promise((resolve, reject) => {
      const producto = data.find((item) => item.id === parseInt(id));
      // si en la constante producto le pongo item de nombre me sale error
      resolve(item);
    });
  };

  useEffect(() => {
    const getProducto = async () => {
      const producto = await getItem(productId);
      console.log("producto", producto);
      setItem(producto);
    };
    getProducto();
  }, [productId]);

  return (
    <div className="aside">
      <p>Item detail Container</p>
      {item.id ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
