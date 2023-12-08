import { createContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
("firebase/firestore");

export const CartContext = createContext();

const initialBuyers = {
  nombre: "",
  telefono: "",
  email: "",
};

const CartProvider = ({ children }) => {
  // const { items, setItems } = useState([]);
  const [items, setItems] = useState([]),
    [buyers, setBuyers] = useState(initialBuyers);

  const handleItem = (item) => {
    setItems((prev) => {
      return [...prev, item];
    });
  };

  const handleBuyer = (e) => {
    setBuyers((buyer) => {
      return {
        ...buyer,
        [e.target.name]: e.target.value,
      };
    });
  };

  const clearAll = () => setItems([]);

  const removeItem = (id) => {
    let filterById = items.filter((item) => item.id !== id);
    setItems(filterById);
  };

  const finalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      total = total + Number(item.price);
    });
    return total;
  };

  const confirmPurchase = () => {
    const order = {
      buyers,
      items,
      total: finalPrice(items),
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
      if (id) {
        clearAll();
        alert();
        setBuyers(initialBuyers);
      } else {
        ("Ocurrio un error");
      }
    });
  };

  const globalVars = {
    items,
    buyers,
    handleItem,
    handleBuyer,
    clearAll,
    removeItem,
    finalPrice,
    confirmPurchase,
  };

  return (
    <CartContext.Provider value={globalVars}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
