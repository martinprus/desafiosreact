import Button from "react-bootstrap/Button";

function ItemListContainer(props) {  
  return (
    <>
      <h1 className="h1 text-center text-secondary">
        {props.greeting}: <strong className="text-danger">{props.nombre}</strong>
      </h1>
      
    </>
  );
}

export default ItemListContainer;
