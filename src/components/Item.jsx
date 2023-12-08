import { Link } from "react-router-dom";

const Item = ({ pictureUrl, title, price, quantity, id, description }) => {
  return (
    <article className="item">
      <img src={pictureUrl} alt={description} className="item-img" />
      <div className="item-info">
        <span>{title}</span>
        <div>
          <span className="item-price">${price}</span>
          <span className="item-quantity">{quantity} disponibles</span>
        </div>
        <Link to={`/items/${id}`}>
          <button>Ver detalles del producto</button>
        </Link>
      </div>
    </article>
  );
};

export default Item;
