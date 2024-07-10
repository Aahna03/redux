import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action: any) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.log("reducer called", action);
  //     return action.data;
  //   } else {
  //     return "no action matched";
  //   }

  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD to cart condition", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.log("Remove from cart condition", action);
      data.length = data.length - 1;
      return [...data];

    default:
      return data;
  }
};
