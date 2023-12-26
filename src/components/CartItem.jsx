import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ pictureUrl, description, title, price, id, count }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <img src={pictureUrl} alt={description} className="cart-item-img" />
        <div>
          <div className="cart-item-title">
            {count}x {title}
          </div>
          <div className="cart-item-price">${price}</div>
        </div>
      </div>
      <button onClick={() => removeItem(id, count)}>Eliminar</button>
    </article>
  );
};

export default CartItem;
