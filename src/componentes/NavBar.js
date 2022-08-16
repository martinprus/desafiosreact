import Button from "react-bootstrap/Button";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light d-flex justify-content-end">
      <NavLink className="nav-item nav-link mx-2" to="categoria/remeras">
        <span className="material-symbols-outlined">checkroom</span> Remeras
      </NavLink>
      <NavLink className="nav-item nav-link mx-2" to="categoria/sueteres">
        <span className="material-symbols-outlined">checkroom</span> Suteres
      </NavLink>
      <NavLink className="nav-item nav-link mx-2" to="categoria/camperas">
        <span className="material-symbols-outlined">checkroom</span> Camperas
      </NavLink>
      <CartWidget />

      <Button variant="danger m-5">LogOut</Button>
    </nav>
  );
}

export default NavBar;
