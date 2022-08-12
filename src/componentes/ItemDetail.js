import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  return (
    <>
      <div className="container text-center">
        <h1 className="h1">{props.producto.product}</h1>
        <h2 className="h2">${props.producto.precio}</h2>
        <img src={props.producto.image} height="400" width="400" />
        <span>
          <strong>{props.producto.description}</strong>
        </span>
        <ItemCount stock={props.producto.stock} />
      </div>
    </>
  );
};

export default ItemDetail;
