import React from "react";
import cart from "./img/cart.png";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
        <Link to='/cart'>
      <img src={cart} alt="cart" style={{ width: 55 }} />
      <span
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          width: "10px",
          heigth: "10px",
          fontSize: "10px",
          color: "black",
        }}
      >
        2
      </span>

        </Link>
    </div>
  );
};

export default CartWidget;
