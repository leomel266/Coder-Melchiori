import React from "react";
import { useState } from "react";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (productId)=>{
        const productExist = productCartList.some(item =>item.id === productId)
        return productExist
    }

    const addItem = (item, quantity)=>{
        console.log("item", item, "quantity", quantity)
        const newProduct ={
            ...item,
            quantity
        }
        console.log("newProduct", newProduct)
        // Si el producto existe, busquelo en el array, y reemplaze la cantidadad
        if(isInCart(item.id)){
            const productPos = productCartList.findIndex(product => product.id === item.id )
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity=newArreglo[productPos].quantity + quantity
            newArreglo[productPos].quantityPrice= newArreglo[productPos].quantity * newArreglo[productPos].price
            setProductCartList(newArreglo)
        }else{
            // Si no existe, agregue al carrito
            const newArreglo = [...productCartList];
            newProduct.quantityPrice= newProduct.quantity * newProduct.price
            newArreglo.push(newProduct);
            setProductCartList(newArreglo);

        }
    }

    const removeItem = (itemId)=>{
        console.log("itemId", itemId)
        const newArreglo = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArreglo)
    }

    const clear = ()=>{
        setProductCartList([])
    }

    const getTotalPrice = ()=>{
        const totalPrice = productCartList.reduce((acc, item)=> acc + item.quantityPrice, 0)
        return totalPrice  
    }

    const getTotalProducts=()=>{
        const totalProducts = productCartList.reduce((acc, item)=> acc + item.quantity, 0);
        return totalProducts
        
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear, getTotalPrice, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
