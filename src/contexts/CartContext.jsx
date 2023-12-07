import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // const { items, setItems } = useState([]);
  const [items, setItems] = useState([]);

  console.log(items);

  const handleItem = (item) => {
    setItems((prev) => {
      return [...prev, item];
    });
  };

  const clearAll = () => setItems([]);

  const removeItem = (item) => {
    items.some((el) => el.id == item.id)
      ? items.splice(items.indexOf(item), 1)
      : "El item no se encuentra en la cart";
  };

  const globalVars = { items, handleItem, clearAll, removeItem };

  return (
    <CartContext.Provider value={globalVars}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
