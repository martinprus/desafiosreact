import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer(props) {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const q = query(collection(db, "products"), where("category", "==", id));

      getDocs(q).then((snapshot) => {
        const productList = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setLoading(true);
        setListProducts(productList);
      });
    } else {
      const productsCollection = collection(db, "products");

      const consulta = getDocs(productsCollection);
      consulta.then((snapshot) => {
        const productList = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setLoading(true);
        setListProducts(productList);
      });
    }
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row m-3">
          {!id && (
            <h1 className="h1 text-center">
              {props.greeting}:{" "}
              <strong className="text-danger">{props.nombre}</strong>
            </h1>
          )}
          {id && (
            <h1 className="h1 text-center">
              Categoria:{"  "}
              <strong className="text-danger">{id.toUpperCase()}</strong>
            </h1>
          )}
        </div>
        <div className="row">
          <div className="col d-flex text-center">
            {!loading && (
              <div
                className="spinner-border text-dark text-center m-5"
                role="status"
              >
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
