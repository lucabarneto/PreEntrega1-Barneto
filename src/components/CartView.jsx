import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItemList from "./CartItemList";
import Checkout from "./Checkout";

const CartView = () => {
  const { items, clearAll, finalPrice } = useContext(CartContext);

  let totalAmount = finalPrice(items);

  return (
    <section className="cart-view">
      {items.length === 0 ? (
        "No tienes ningún cuadro en el carrito"
      ) : (
        <>
          <article className="cart-view__checkout">
            <h2>Completá el formulario</h2>
            <Checkout />
          </article>
          <article className="cart-view__cart-items">
            <div className="cart-view__cart-items__header">
              <h2>Tus cuadros en el carrito</h2>
              <button onClick={clearAll}>Eliminar todos</button>
            </div>
            <CartItemList items={items} />
            <div className="cart-view__cart-items__total-amount">
              Total de la compra: ${totalAmount}
            </div>
          </article>
        </>
      )}
    </section>
  );
};

export default CartView;
