import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const id = product.id;

  return (
    <>
      <div className="container border border-3 rounded m-1 bg-light">
        <h2 className="display-4">{product.product}</h2>
        <img
          className="img"
          src={product.image}
          width="250"
          height="250"
          alt={product.product}
        />
        <p className="display-4">${product.precio}</p>
        <p>
          <u>Categoria</u>:<strong>{product.category}</strong>
        </p>

        <Link to={`/detalle/${id}`} className="btn btn-primary my-3">
          <strong>Ver detalle</strong>
        </Link>
      </div>
    </>
  );
};

export default Item;
