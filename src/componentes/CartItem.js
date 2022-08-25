import { useContext } from "react";
import { context } from "./CartContext";

export const CartItem = ({ product }) => {
  const { removeItem } = useContext(context);
  return (
    <div>
      <p className="text-center mt-2">
        {product.product}
        <img
          className="img border p-3 m-2"
          src={product.image}
          width="150"
          height="150"
        />
        <strong className="p-3 border">{product.quantity}</strong>
        <button
          onClick={() => removeItem(product.id)}
          className="btn btn-danger mx-3"
        >
          X
        </button>
      </p>
      <p className="text-center">
        <strong>Total:</strong> ${product.price * product.quantity}
      </p>
    </div>
  );
};

export default CartItem;
