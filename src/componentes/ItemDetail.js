import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  return (
    <>
      <div className="container text-center border">
        <div className="row m-1 bg-secondary">
          <div className="col">
            <h1 className="h1">{props.producto.product}</h1>
          </div>
        </div>
        <div className="row">
        <div className="col-8 border">
          <img src={props.producto.image} height="400" width="400" />
          <p>
            <strong> {props.producto.description}</strong>
            <h2 className="h2">${props.producto.precio}</h2>
          </p>
        </div>
        <div className="col-4 border">
          <ItemCount stock={props.producto.stock} />
        </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
