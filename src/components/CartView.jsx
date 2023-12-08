import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItemList from "./CartItemList";

const CartView = () => {
  const { items, clearAll } = useContext(CartContext);

  const finalPrice = (items) => {
    let total = null;
    items.forEach((item) => {
      total = total + item.price;
    });
    return total;
  };

  return (
    <section className="cart-view">
      <div className="cart-view__header">
        <h1>Tus cuadros en el carrito</h1>
        <button onClick={clearAll}>Eliminar todos</button>
      </div>
      {items.length === 0 ? (
        "No tienes ningún cuadro en el carrito"
      ) : (
        <CartItemList items={items} />
      )}
    </section>
  );
};

export default CartView;
