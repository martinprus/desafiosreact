import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ItemCount(props) {
  const [contador, setContador] = useState(0);

  const MySwal = withReactContent(Swal);

  function aumentarContador() {
    if (contador < props.stock && props.stock > 0) {
      setContador(contador + 1);
    } else {
      MySwal.fire({
        title: "Error!",
        text: "No hay stock suficiente",
        icon: "error",
        confirmButtonText: "Regresar",
      });
    }
  }

  function disminuirContador() {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      MySwal.fire({
        title: "Error!",
        text: "La cantidad ingresada es invalida",
        icon: "error",
        confirmButtonText: "Regresar",
      });
    }
  }

  function resetearContador() {
    setContador(0);
  }

  function onAdd() {
    MySwal.fire({
      title: "Elemento/s agregado al carrito!",
      icon: "success",
      confirmButtonText: "Regresar",
    });
  }
  return (
    <div className="container text-center">
      <div className="row text-center ">
        <p className="lead border border-5">
          La cantidad de items es: <strong>{contador}</strong>
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          <button onClick={disminuirContador} className="btn btn-danger m-3">
            Disminuir Contador
          </button>
        </div>
        <div className="col-6">
          <button onClick={aumentarContador} className="btn btn-success m-3">
            Aumentar Contador
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={resetearContador} className="btn btn-warning">
            Resetear Contador
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button onClick={onAdd} className="btn btn-primary  mt-4">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
