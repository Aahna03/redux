import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

interface data {
  name: string;
  category: string;
  price: number;
  color: string;
}

export const addToCart = (data: data) => {
  console.log("action is called", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const removeFromCart = (data: data) => {
  console.log("action is removed", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};

export const emptyCart = (data: data) => {
  console.log("action is removed", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};
