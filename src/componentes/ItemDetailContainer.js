import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../assets/productos";
import { customFetch } from "../assets/customFetch";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();


  function setear(datos) {
    setProducto(datos[2])
  }

  useEffect(() => {
    customFetch(products).then((data) => {
      setear(data);
      console.log(producto)
    });
  }, []);

  return (
    <>
      <ItemDetail  producto = {producto}/>
    </>
  );
};

export default ItemDetailContainer;
