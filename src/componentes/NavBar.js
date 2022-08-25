import Button from "react-bootstrap/Button";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { context } from "./CartContext";

function NavBar() {
  const { cart } = useContext(context);
  return (
    <nav className="navbar navbar-light d-flex justify-content-end">
      <NavLink
        className="nav-item nav-link mx-2 p-1 border border-2 border-success rounded"
        to="category/remeras"
      >
        <span className="material-symbols-outlined">checkroom</span> Remeras
      </NavLink>
      <NavLink
        className="nav-item nav-link mx-2 p-1 border border-2 border-success rounded"
        to="category/sueteres"
      >
        <span className="material-symbols-outlined">checkroom</span> Suteres
      </NavLink>
      <NavLink
        className="nav-item nav-link mx-2 p-1 border border-2 border-success rounded"
        to="category/camperas"
      >
        <span className="material-symbols-outlined">checkroom</span> Camperas
      </NavLink>
      {cart.length > 0 && <CartWidget />}

      <Button variant="danger m-5">LogOut</Button>
    </nav>
  );
}

export default NavBar;
