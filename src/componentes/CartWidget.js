import { Link } from "react-router-dom";

function CartWidget() {
    return(
        <>
        <Link className="nav-item nav-link mx-2" to="cart">
        <span className="material-symbols-outlined text-danger">shopping_cart</span>
        CARRITO
        </Link>
        </>)

};

export default CartWidget;