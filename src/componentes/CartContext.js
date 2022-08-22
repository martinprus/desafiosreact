import { createContext } from "react";
import { useState } from "react";

export const context = createContext();
const { Provider } = context;

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  const addItem = (product, quantity) => {
    const newProduct = {
      ...product,
      quantity,
    };

    if (isInCart(newProduct.id)) {
      const findProduct = cart.find((x) => x.id === newProduct.id);
      const productIndex = cart.indexOf(findProduct);
      const auxCart = [...cart];
      auxCart[productIndex].quantity += quantity;
      setCart(auxCart);
    } else {
      setCart([...cart, newProduct]);
    }
    console.log(cart);
  };

  const removeItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  const clear = () => {
    return setCart([]);
  };

  const getItemQty = () => {
    return cart.reduce((acc, x) => (acc += x.quantity), 0);
  };

  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.quantity * x.price), 0);
  };

  const contextValue = {
    cart: cart,
    isInCart,
    clear,
    removeItem,
    getItemQty,
    getItemPrice,
    addItem,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
