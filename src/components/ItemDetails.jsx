import ItemCount from "./ItemCount";

const ItemDetails = ({ title, pictureUrl, description, price, quantity }) => {
  return (
    <>
      <article className="item-details">
        <img src={pictureUrl} alt={description} />
        <div>
          <div className="item-details__header">
            <h1>{title}</h1>
            <div>${price}</div>
          </div>
          <div>
            <p>
              Hecho con tela vinílica premium, un material con base de PVC
              brillante, impresos con tintas al solvente.
              <br />
              <br />
              Montados en Bastidores de madera de 2cm de espesor reforzados,
              ¡listos para colgar!
              <br />
              <br />
              Nuestros cuadros poseen un diseño envolvente, la imagen continúa
              en los laterales.
            </p>
          </div>
          <div className="item-details__buttons">
            <div>
              <ItemCount />
              <span>{quantity} cuadros disponibles</span>
            </div>
            <button>Agregar al carrito</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ItemDetails;

//d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/vinilo-3d-infantiles-spider-man1-9e660ff52f8e3daba115503601575193-1024-1024.webp
