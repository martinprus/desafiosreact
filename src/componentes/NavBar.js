import Button from "react-bootstrap/Button";
import CartWidget from "./CartWidget";
import { FaBeer } from 'react-icons/fa';


function NavBar() {
  return (
    <nav className="navbar navbar-light d-flex justify-content-end">
      <a className="nav-item nav-link mx-2" href="google.com">
        <span className="material-symbols-outlined">pageview</span>{" "}
        CarritoProductos
      </a>
      <a className="nav-item nav-link mx-2" href="google.com">
        <span className="material-symbols-outlined">groups</span> Nosotros
      </a>
      <CartWidget/>      
      

      <Button variant="danger m-5">LogOut</Button>
    </nav>
    
  );
}

export default NavBar;
