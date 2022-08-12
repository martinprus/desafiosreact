import { customFetch } from "../assets/customFetch";
import { useState, useEffect } from "react";
import { products } from "../assets/productos";
import { ItemList } from "./ItemList";

function ItemListContainer(props) {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    customFetch(products).then((data) => {
      setLoading(true);
      setListProducts(data);
    });
  }, []);

  

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="h1 text-center text-secondary">
            {props.greeting}:{"  "}
            <strong className="text-danger">{props.nombre}</strong>
          </h1>
        </div>
        <div className="row">
          <div className="col d-flex text-center">
            {!loading && (
              <div className="spinner-border text-dark text-center m-5" role="status">
                <span className="sr-only m-5">Cargando...</span>
              </div>
            )}
            {loading && <ItemList listProducts={listProducts} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
