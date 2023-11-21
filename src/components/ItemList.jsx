import Item from "./Item";

const ItemList = ({ items }) => {
  return items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      quantity={item.quantity}
      price={item.price}
      pictureUrl={item.pictureUrl}
    />
  ));
};

export default ItemList;
