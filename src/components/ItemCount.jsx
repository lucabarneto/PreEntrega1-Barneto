import { useState } from "react";

const ItemCount = ({ quantity }) => {
  const [count, setCount] = useState(1);

  return (
    <div className="item-count">
      <button onClick={() => count !== 1 && setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => count !== quantity && setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
