import Item from "./Item";

const ItemList = ({ listProducts }) => {
  return (
    <>
      {listProducts.map(product => 
        <Item key={product.id} product={product} />
      )}
    </>
  );
};

export { ItemList };
