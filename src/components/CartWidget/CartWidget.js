import React from "react";
import cart from "./img/cart.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {

  const {getTotalProducts}= useContext(CartContext)

  return (
    <>
        <Link to='/cart'>
      <img src={cart} alt="cart" style={{ width: 20 }}/>
      <span
        style={{
          borderRadius: "50%",
          width: "15px",
          heigth: "15px",
          fontSize: "15px",
          color: "aliceblue",
          backgroundColor:"#57be6c",
        }}
      >
        {getTotalProducts()}
      </span>

        </Link>
    </>
  );
};

export default CartWidget;
