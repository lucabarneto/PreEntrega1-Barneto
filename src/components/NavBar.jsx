import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const NavBar = () => {
  const { cartNumber } = useContext(CartContext);
  return (
    <nav className="navbar">
      <NavLink to="/">Quarter Shop</NavLink>
      <ul type="none">
        <li>
          <NavLink to="/category/poliptico">Cuadros polípticos</NavLink>
        </li>
        <li>
          <NavLink to="/category/simple">Cuadros simples</NavLink>
        </li>
        <li>
          <NavLink to="/category/3d">Vinilos 3d</NavLink>
        </li>
      </ul>
      <CartWidget number={cartNumber} />
    </nav>
  );
};
