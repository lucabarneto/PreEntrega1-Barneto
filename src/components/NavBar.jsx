import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div>Quarter Shop</div>
      <ul type="none">
        <li>
          <a href="">Cuadros populares</a>
        </li>
        <li>
          <a href="">Cuadros comúnes</a>
        </li>
        <li>
          <a href="">Cuadros trípticos</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};
