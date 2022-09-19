import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { context } from "./CartContext";
import { useContext } from "react";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState();
  const { isInCart, addItem } = useContext(context);

  const addQuantity = (value) => {
    addItem(product, value);
    setQuantity(value);
    isInCart(product.id);
  };

  return (
    <>
      <div className="container text-center border border-3 border-light p-4 bg-dark text-white">
        <div className="row m-1 p-2">
          <div className="col">
            <h1 className="h1">{product.product}</h1>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-6">
            <img
              className="img p-3 border"
              src={product.image}
              height="400"
              width="400"
              alt=""
            />

            <div>
              <p className="h2 mt-3">Precio: ${product.price}</p>            
            </div>
          </div>
          <div className="col-6 ">
            <ItemCount stock={product.stock} addQuantity={addQuantity} />
            <p className="mt-5 lead">
              <u>Descripción</u>: {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
