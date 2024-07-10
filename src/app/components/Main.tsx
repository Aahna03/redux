"use client";
import { addToCart, removeFromCart } from "../redux/action";
import { useDispatch, UseDispatch } from "react-redux";

import React from "react";

const Main = () => {
  const dispatch = useDispatch();
  const product = {
    name: "I Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    <>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product))}>
          Remove from Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>Empty Cart</button>
      </div>
    </>
  );
};

export default Main;
