function ItemListContainer(props) {
  console.log(props);
  return (
    <>
      <h1 className="h1 text-center text-secondary">
        {props.greeting}: <strong className="text-danger">{props.nombre}</strong>
      </h1>
    </>
  );
}

export default ItemListContainer;
