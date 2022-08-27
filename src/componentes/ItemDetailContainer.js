import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "./firebase";

import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState();
  const { id } = useParams();

  useEffect(() => {
    const docuRef = doc(db, "products", id);
    const request = getDoc(docuRef);
    request
      .then((res) => {
        setProduct(res.data());
      })
      .catch((error) => {
        console.log(error);
      });

    setLoading(true);
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
