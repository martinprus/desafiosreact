import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../assets/productos";
import { customFetch } from "../assets/customFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();
  const [loading, setLoading] = useState();
  const { id } = useParams();

  function setear(datos) {
    setProducto(datos[id - 1]);
  }

  useEffect(() => {
    customFetch(products).then((data) => {
      setear(data);
      setLoading(true);
    });
  },[id]);



  return (
    <>
      {!loading && (
        <div className="spinner-border text-dark text-center m-5" role="status">
          <span className="sr-only m-5">Cargando...</span>
        </div>
      )}
      {loading && <ItemDetail producto={producto} />}
    </>
  );
};

export default ItemDetailContainer;
