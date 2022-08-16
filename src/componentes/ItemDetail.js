import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import {Link} from "react-router-dom"

const ItemDetail = (props) => {

  const[cantidad, setCantidad] = useState()

  const fijarCantidad = (valor) => {
    setCantidad(valor)
  }



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
          <img src={props.producto.image} height="400" width="400" alt = ""/>
          <p>Cantidad: {cantidad}</p>
          <p>
            <strong> {props.producto.product}</strong>
            <h2 className="h2">${props.producto.precio}</h2>
          </p>
        </div>
        <div className="col-4 border">
          <ItemCount stock={props.producto.stock} fijarCantidad={fijarCantidad}/>
          <p className="mt-5 lead">{props.producto.description}</p>
         <Link className="btn btn-warning" to="/cart">Finalizar la compra</Link>
        </div>

        </div>
      </div>
    </>
  );
};

export default ItemDetail;
