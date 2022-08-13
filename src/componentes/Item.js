const Item = ({product}) => {
    

  return (<>
  <div className="container border rounded m-1 bg-light">
    <h2>{product.product}</h2>
    <img src={product.image} width="200" height="200" alt={product.product}/>
    <p className="display-4">${product.precio}</p>
    <p className="h5">Stock: {product.stock}</p>
    <p>Categoria: <strong>{product.category}</strong></p> 
    
    <button className="btn btn-secondary m-4">Ver detalle</button> 
    </div>
    </>
  )
}

export default Item