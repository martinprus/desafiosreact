import Header from "./componentes/Header";
import Principal from "./componentes/Principal";
import Footer from "./componentes/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Principal />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
