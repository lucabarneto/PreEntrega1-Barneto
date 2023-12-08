import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div className="cart-container">
      <Link to={"/cart"}>
        <i className="bi bi-cart-fill"></i>
        <p>1</p>
      </Link>
    </div>
  );
};
