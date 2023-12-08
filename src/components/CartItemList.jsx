import CartItem from "./CartItem";

const CartItemList = ({ items }) => {
  return items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      pictureUrl={item.pictureUrl}
      description={item.description}
    />
  ));
};

export default CartItemList;
