import { useContext } from "react";
import { context } from "./CartContext";

export const CartItem = ({ product }) => {
  const { removeItem } = useContext(context);
  return (
    <div className="border rounded m-1 d-flex flex-row align-items-center justify-content-start">
      <h2 className="mx-3 w-25">{product.product}</h2>
      <img
        className="img p-3 mx-2"
        src={product.image}
        width="200"
        height="200"
        alt={product.product}
      />
      <p className="px-3">
        Cantidad: <strong>{product.quantity}</strong>
      </p>
      <p className="px-3">
        <strong>Total:</strong> ${product.price * product.quantity}
      </p>
      <button
        onClick={() => removeItem(product.id)}
        className="btn btn-lg btn-danger mx-3 px-4"
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
