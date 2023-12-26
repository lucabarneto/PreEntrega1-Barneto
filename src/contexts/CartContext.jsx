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
  const [items, setItems] = useState([]),
    [buyers, setBuyers] = useState(initialBuyers),
    [cartNumber, setCartNumber] = useState(0);

  const handleItem = (item, newCount) => {
    if (items.some((el) => el.id === item.id)) {
      const updateValue = items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            count: i.count + newCount,
            totalPrice: i.totalPrice + i.price * newCount,
          };
        } else {
          return i;
        }
      });
      setItems(updateValue);
    } else {
      setItems((prev) => {
        return [...prev, item];
      });
    }
  };

  const handleBuyer = (e) => {
    setBuyers((buyer) => {
      return {
        ...buyer,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCartNumber = (count) => {
    setCartNumber(cartNumber + count);
  };

  const clearAll = () => {
    setItems([]);
    setCartNumber(0);
  };

  const removeItem = (id, count) => {
    let filterById = items.filter((item) => item.id !== id);
    setItems(filterById);
    setCartNumber(cartNumber - count);
  };

  const finalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      total = total + Number(item.totalPrice);
    });
    return total;
  };

  const confirmPurchase = (e) => {
    e.preventDefault();

    const order = {
      buyers,
      items,
      total: finalPrice(items),
    };

    console.log(order);

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(() => {
      console.log("Funcionó");
      alert("Tu orden ha sido exitosa");
      setBuyers(initialBuyers);
      clearAll();
    });
  };

  const globalVars = {
    items,
    buyers,
    cartNumber,
    handleItem,
    handleBuyer,
    handleCartNumber,
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
