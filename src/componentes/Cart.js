import { context } from "./CartContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

import React from "react";

const Cart = () => {
  const { cart, getItemPrice, Clear } = useContext(context);
  if (cart.length > 0) {
    return (
      <>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <p>
          Total a pagar: <strong>{getItemPrice()}</strong>
          <button onClick={Clear} className="btn btn-lg btn-warning m-5">
            Limpiar Carrito
          </button>
        </p>
      </>
    );
  } else {
    return (
      <>
        <div className="container text-center">
          <h1 className="h1  m-5">Aún no tienes productos en el carrito</h1>
          <Link className="h2 m-5" to="/">
            Volver a la tienda
          </Link>
        </div>
      </>
    );
  }
};

export default Cart;
