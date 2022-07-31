import Header from "./componentes/Header";
import Principal from "./componentes/Principal";
import Footer from "./componentes/Footer";
import { useState } from "react";

function App() {
  const resultado = useState(0);
  let contador = resultado[0];
  const setContador = resultado[1];
  function aumentarContador() {
    let newState = contador++;
    setContador(newState);
  }

  function disminuirContador() {
    let newState = contador--;
    setContador(newState);
  }

  return (
    <>
      <Header contador={contador} />
      <Principal contador={contador} />
      <button className= "btn btn-lg btn-danger m-5"onClick={disminuirContador}>- contador</button>
      <button className="btn btn-lg btn-success m-5"onClick={aumentarContador}>+ contador</button>
      <Footer contador={contador} />
    </>
  );
}

export default App;
