import { useContext } from "react";
import { context } from "./CartContext";

export const CartItem = ({ product }) => {
  const { removeItem } = useContext(context);
  return (
    <div className="text-center border rounded m-1">
      <p className=" text-center  mt-3">{product.product}</p>
      <img
        className="img  p-3 m-2"
        src={product.image}
        width="200"
        height="200"
        alt={product.product}
      />
      <strong className="p-3">{product.quantity}</strong>
      <button
        onClick={() => removeItem(product.id)}
        className="btn btn-lg btn-danger mx-3"
      >
        X
      </button>
      <strong>Total:</strong> ${product.price * product.quantity}
    </div>
  );
};

export default CartItem;
