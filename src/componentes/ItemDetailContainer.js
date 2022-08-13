import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../assets/productos";
import { customFetch } from "../assets/customFetch";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();
  const [loading, setLoading] = useState();

  function setear(datos) {
    setProducto(datos[1]);
  }

  useEffect(() => {
    customFetch(products).then((data) => {
      setear(data);
      setLoading(true)
      console.log(producto);
    });
  }, []);

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
