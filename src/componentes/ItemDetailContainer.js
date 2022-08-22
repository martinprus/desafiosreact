import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../assets/productos";
import { customFetch } from "../assets/customFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState();
  const { id } = useParams();

  function set(data) {
    setProduct(data[id - 1]);
  }

  useEffect(() => {
    customFetch(products).then((data) => {
      set(data);
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
      {loading && <ItemDetail product={product} />}
    </>
  );
};

export default ItemDetailContainer;
