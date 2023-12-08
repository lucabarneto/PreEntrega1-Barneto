import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ItemCount = ({ top, item }) => {
  const [count, setCount] = useState(1),
    { handleCartNumber, handleItem } = useContext(CartContext);

  const completeItem = {
    ...item,
    count,
    totalPrice: item.price * count,
  };

  return (
    <>
      <div className="item-details__buttons">
        <div className="item-count">
          <button onClick={() => count !== 1 && setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => count !== top && setCount(count + 1)}>
            +
          </button>
        </div>
        <button
          onClick={() => {
            handleItem(completeItem, count);
            handleCartNumber(item.id);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
