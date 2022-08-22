import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";

function Principal() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="Bienvenid@ a nuestra tienda"
              nombre="Martin"
            />
          }
        />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
}

export default Principal;
