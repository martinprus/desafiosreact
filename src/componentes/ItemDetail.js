import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { context } from "./CartContext";
import { useContext } from "react";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState();
  const { isInCart, addItem } = useContext(context);

  const addQuantity = (value) => {
    addItem(product, value)
    setQuantity(value);
    isInCart(product.id);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row m-1">
          <div className="col">
            <h1 className="h1">{product.product}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 border border-3 border-success">
            <img src={product.image} height="400" width="400" alt="" />
            <p>Cantidad en el carrito: {quantity}</p>
            <div>
              <strong> {product.product}</strong>
              <p className="h2">${product.price}</p>
            </div>
          </div>
          <div className="col-6 border border-3 border-success">
            <ItemCount stock={product.stock} addQuantity={addQuantity} />
            <p className="mt-5 lead">
              <u>Descripción</u>: {product.description}
            </p>
            <Link className="btn btn-warning mt-3" to="/cart">
              Finalizar la compra
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
