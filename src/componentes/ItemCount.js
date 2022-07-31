import { useState } from "react";

function ItemCount(props) {
  const resultado = useState(0);
  let contador = resultado[0];
  const setContador = resultado[1];

  function aumentarContador() {
    if (contador<=props.stock && contador != 0){
    let newState = contador++;
    setContador(newState);}
    else{alert("No hay stock disponible")}
  }

  function disminuirContador() {
    if(contador>=0 && contador != 0){
    let newState = contador--;
    setContador(newState);}
    else{alert("Valor invalido")}
  }

  function resetearContador() {
    let newState = 0;
    setContador(newState);
  }

  return (
    <div className="container text-center">
      <div className="row text-center ">
        <p className="lead border border-5"><strong>{contador}</strong></p>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={disminuirContador} className="btn btn-danger btn-lg">
            Disminuir Contador
          </button>
        </div>
        <div className="col">
          <button onClick={resetearContador} className="btn btn-warning btn-lg">Resetear Contador</button>
        </div>
        <div className="col">
          <button onClick={aumentarContador} className="btn btn-success btn-lg">Aumentar Contador</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
