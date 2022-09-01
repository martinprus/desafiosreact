import Header from "./componentes/Header";
import Principal from "./componentes/Principal";
import Footer from "./componentes/Footer";
import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./componentes/CartContext";
import "./App.scss";
import "./componentes/firebase.js";

function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Header />
        <Principal />
        <Footer />
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
