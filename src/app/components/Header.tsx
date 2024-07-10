import React from "react";
import cart from "../assets/cart.png";
import Image from "next/image";
import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state: any) => state.cartData);
  console.log("redux data in header", result);

  return (
    <div className="header">
      <div className="cart-div">
        <span className="cart-items">{result.length}</span>
        <Image className="img" src={cart} alt="cart" width={100} height={100} />
      </div>
    </div>
  );
};

export default Header;
