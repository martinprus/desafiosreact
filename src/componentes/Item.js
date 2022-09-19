import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const id = product.id;

  return (
    <>
      <div className="border border-3 rounded m-2 bg-light w-20 text-center bg-dark bg-gradient text-white">
        <h2 className="w-30 display-5 text-center">{product.product}</h2>
        <img
          className="img"
          src={product.image}
          width="250"
          height="250"
          alt={product.product}
        />
        <p className="display-4">${product.price}</p>
        <p>
          <u>Plataforma</u>:
          <strong
            className={
              product.category === "xbox"
                ? "text-success"
                : product.category === "playstation"
                ? "text-primary"
                : "text-danger"
            }
          >
            {product.category.toUpperCase()}
          </strong>
        </p>

        <Link to={`/detail/${id}`} className="btn btn-primary my-3">
          <strong>COMPRAR</strong>
        </Link>
      </div>
    </>
  );
};

export default Item;
