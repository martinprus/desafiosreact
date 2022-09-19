import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { context } from "./CartContext";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const { cart } = useContext(context);
  const productsCollection = collection(db, "products");
  const consulta = getDocs(productsCollection);

  useEffect(() => {
    consulta.then((snapshot) => {
      const productList = snapshot.docs.map((doc) => {
        return { ...doc.data() };
      });
      const cat = productList.map((x) => x.category);
      setCategories([...new Set(cat)]);
    });
  }, []);

  return (
    <nav className="navbar navbar-light d-flex justify-content-end">
      {categories.map((element, index) => {
        return (
          <NavLink
            className="nav-item nav-link mx-2 p-1 border border-2 border-success rounded"
            to={`category/${element}`}
            key={index}
          >
            <span className="material-symbols-outlined">sports_esports</span>{" "}
            {element}
          </NavLink>
        );
      })}

      <CartWidget></CartWidget>
    </nav>
  );
}

export default NavBar;
