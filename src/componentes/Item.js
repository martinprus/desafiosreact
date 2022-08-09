import ItemCount from "./ItemCount"

const Item = ({product}) => {
    

  return (<>
  <div className="container">
    <h2>{product.product}</h2>
    <img src={product.image} width="200" height="200" alt={product.product}/>
    <p className="display-4">${product.precio}</p>
    <p className="h5">Stock: {product.stock}</p>
    <ItemCount/>
    <button className="btn btn-secondary m-4">Ver detalle</button> 
    </div>
    </>
  )
}

export default Item