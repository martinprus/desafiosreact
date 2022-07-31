import { useState } from "react";

function ItemCount(props) {
  const resultado = useState(0);
  let contador = resultado[0];
  const setContador = resultado[1];

  function aumentarContador() {
    if (contador < props.stock && props.stock > 0) {
      setContador(contador + 1);
    } else {
      alert("Stock agotado");
    }
  }

  function disminuirContador() {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
        alert("La cantidad no puede ser menor a cero")
    }
  }

  function resetearContador() {
    let newState = 0;
    setContador(newState);
  }

  return (
    <div className="container text-center">
      <div className="row text-center ">
        <p className="lead border border-5">
          <strong>{contador}</strong>
        </p>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={disminuirContador} className="btn btn-danger btn-lg">
            Disminuir Contador
          </button>
        </div>
        <div className="col">
          <button onClick={resetearContador} className="btn btn-warning btn-lg">
            Resetear Contador
          </button>
        </div>
        <div className="col">
          <button onClick={aumentarContador} className="btn btn-success btn-lg">
            Aumentar Contador
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            onClick={aumentarContador}
            className="btn btn-primary btn-lg mt-4"
          >
            Aumentar Contador
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
