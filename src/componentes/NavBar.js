import Button from "react-bootstrap/Button";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light d-flex justify-content-end">
      <Link className="nav-item nav-link mx-2" to="categoria/remeras">
        <span className="material-symbols-outlined">checkroom</span> Remeras
      </Link>
      <Link className="nav-item nav-link mx-2" to="categoria/sueteres">
        <span className="material-symbols-outlined">checkroom</span> Suteres
      </Link>
      <Link className="nav-item nav-link mx-2" to="categoria/camperas">
        <span className="material-symbols-outlined">checkroom</span> Camperas
      </Link>
      <CartWidget />

      <Button variant="danger m-5">LogOut</Button>
    </nav>
  );
}

export default NavBar;
