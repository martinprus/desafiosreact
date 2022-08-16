import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ItemCount = ({stock , fijarCantidad}) => {
  const [contador, setContador] = useState(0);
  const MySwal = withReactContent(Swal);




  function aumentarContador() {
    if (contador < stock && stock > 0) {
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



  function onAdd() {
    fijarCantidad(contador)
    setContador(0)
    MySwal.fire({
      title: "Elemento/s agregado al carrito!",
      icon: "success",
      confirmButtonText: "Regresar",
    });
  }
  return (
    <div className="container text-center mt-5">
      <div className="row text-center ">
        <p className="border border-5">
          <strong>Cantidad: {contador}</strong>  (stock: {stock})
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          <button onClick={disminuirContador} className="btn btn-danger m-1">
            Disminuir Contador
          </button>
        </div>
        <div className="col-6">
          <button onClick={aumentarContador} className="btn btn-success m-1">
            Aumentar Contador
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
