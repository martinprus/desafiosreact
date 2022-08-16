import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  const [cantidad, setCantidad] = useState();

  const fijarCantidad = (valor) => {
    setCantidad(valor);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row m-1">
          <div className="col">
            <h1 className="h1">{props.producto.product}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 border border-3 border-success">
            <img src={props.producto.image} height="400" width="400" alt="" />
            <p>Cantidad en el carrito: {cantidad}</p>
            <div>
              <strong> {props.producto.product}</strong>
              <p className="h2">${props.producto.precio}</p>
            </div>
          </div>
          <div className="col-6 border border-3 border-success">
            <ItemCount
              stock={props.producto.stock}
              fijarCantidad={fijarCantidad}
            />
            <p className="mt-5 lead">
              <u>Descripción</u>: {props.producto.description}
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
