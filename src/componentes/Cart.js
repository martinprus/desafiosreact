const Cart = () => {
  return (
    <div className="container text-center m-5">
      <img
        src="data:image/jpeg;base64,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"
        alt=""
      />
    </div>
  );
};

export default Cart;
