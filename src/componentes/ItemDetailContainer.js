import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection } from "firebase/firestore";
import { getDoc, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const productsCollection = collection(db, "products");

  const consulta = getDocs(productsCollection);

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState();
  const { id } = useParams();

  function set(data) {
    const product = data.find((element) => element.id === id);
    setProduct(product);
  }

  useEffect(() => {
    consulta.then((data) => {
      const productList = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      set(productList);

      setLoading(true);
    });
  }, [id]);

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
