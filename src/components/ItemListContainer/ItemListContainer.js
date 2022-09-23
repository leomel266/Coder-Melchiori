import React from "react";
import data from "./mock-data";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  console.log("categoryId", categoryId);

  const [productos, setProductos] = useState([]);

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

  useEffect(() => {
    promesa.then((result) => {
      if (categoryId) {
        const newProducts = result.filter(
          (item) => item.category === categoryId
        );
        setProductos(newProducts);
      } else {
        setProductos(result);
      }
    });
  }, [categoryId]);

  return (
    <div className="contenido">
      <h2>Productos</h2>
      <div className="row">
        {productos.length > 0 ? (
          <ItemList items={productos} />
        ) : (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
