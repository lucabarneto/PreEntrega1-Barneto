import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Checkout = () => {
  const { confirmPurchase, buyers, handleBuyer } = useContext(CartContext);

  return (
    <form>
      <input
        type="text"
        name="nombre"
        value={buyers.nombre}
        id="checkout-name"
        placeholder="Nombre"
        required
        onChange={handleBuyer}
      />
      <input
        type="tel"
        name="telefono"
        value={buyers.telefono}
        id="checkout-tel"
        placeholder="Télefono"
        required
        onChange={handleBuyer}
      />
      <input
        type="email"
        name="email"
        value={buyers.email}
        id="checkout-email"
        placeholder="Email"
        required
        onChange={handleBuyer}
      />
      <button onClick={confirmPurchase}>Realizar compra</button>
    </form>
  );
};

export default Checkout;
