import ItemCount from "./ItemCount";

function ItemListContainer(props) {  
  return (
    <>
      <h1 className="h1 text-center text-secondary">
        {props.greeting}: <strong className="text-danger">{props.nombre}</strong>
      </h1>
      <ItemCount stock = {4}/>
      
    </>
  );
}

export default ItemListContainer;
