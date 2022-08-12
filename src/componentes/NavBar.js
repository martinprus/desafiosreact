import Button from "react-bootstrap/Button";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"



function NavBar(props) {
  return (
    <nav className="navbar navbar-light d-flex justify-content-end">
            <a className="nav-item nav-link mx-2" href="google.com">
        <span className="material-symbols-outlined">checkroom</span>{" "}
        Remeras
      </a>
      <a className="nav-item nav-link mx-2" href="google.com">
        <span className="material-symbols-outlined">checkroom</span> Suteres
      </a>
      <a className="nav-item nav-link mx-2" href="google.com">
        <span className="material-symbols-outlined">checkroom</span> Camperas
      </a>
      <CartWidget/>      
      

      <Button variant="danger m-5">LogOut</Button>
    </nav>
    
  );
}

export default NavBar;
