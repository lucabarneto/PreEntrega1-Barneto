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
        placeholder="Nombre"
        required
        onChange={handleBuyer}
      />
      <input
        type="tel"
        name="telefono"
        value={buyers.telefono}
        placeholder="Télefono"
        required
        onChange={handleBuyer}
      />
      <input
        type="email"
        name="email"
        value={buyers.email}
        placeholder="Email"
        required
        onChange={handleBuyer}
      />
      <button onClick={confirmPurchase}>Realizar compra</button>
    </form>
  );
};

export default Checkout;
