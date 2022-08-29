import { context } from "./CartContext";
import { useContext, useState } from "react";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

import React from "react";

const Cart = () => {
  const [checkout, setCheckOut] = useState(false);

  const changeCheckOut = () => {
    setCheckOut(true);
  };

  const { cart, getItemPrice, Clear } = useContext(context);
  if (cart.length > 0) {
    return (
      <>
        <div className="row">
          <div className="col-8 p-3">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
            <p className="lead text-center">
              Total a pagar: <strong>{getItemPrice()}</strong>
            </p>
            <button onClick={Clear} className="btn btn-lg btn-warning m-5">
              Limpiar Carrito
            </button>
            <button
              onClick={changeCheckOut}
              className="btn btn-lg btn-success m-5"
            >
              Realizar checkout
            </button>
          </div>
          {checkout && (
            <div className="col-4 p-3">
              <form action="">
                <label className="m-2" htmlFor="">
                  {" "}
                  Nombre y apellido :
                  <input type="text" />
                </label>{" "}
                <br />
                <label className="m-2" htmlFor="">
                  {" "}
                  Correo electrónico:
                  <input type="email" />
                </label>{" "}
                <br />
                <label className="m-2" htmlFor="">
                  {" "}
                  Número de teléfono:
                  <input type="number" />
                </label>
                <br />
                <label className="m-2" htmlFor="">
                  <input
                    type="Submit"
                    value="Finalizar compra"
                    className="btn btn-primary"
                  />
                </label>
              </form>
            </div>
          )}
        </div>
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
