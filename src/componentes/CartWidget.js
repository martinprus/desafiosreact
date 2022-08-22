import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { context } from "./CartContext";

function CartWidget() {
  const { cart, getItemQty } = useContext(context);

  return (
    <>
      <NavLink className="nav-item nav-link mx-2" to="cart">
        <span className="material-symbols-outlined text-success">
          shopping_cart
        </span>
        <strong>CARRITO</strong> {getItemQty(cart)}
      </NavLink>
    </>
  );
}

export default CartWidget;
