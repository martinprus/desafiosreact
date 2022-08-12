import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

import { Routes, Route } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function Principal() {
  return (
    <>
      <ItemListContainer
        greeting="Bienvenid@ a nuestra tienda"
        nombre="Martin"
      />
      <ItemDetailContainer/>
    </>
  );
}

export default Principal;
