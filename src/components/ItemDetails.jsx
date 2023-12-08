import ItemCount from "./ItemCount";

const ItemDetails = ({
  id,
  title,
  pictureUrl,
  description,
  price,
  quantity,
}) => {
  const incompleteItem = {
    title,
    price,
    quantity,
    id,
    pictureUrl,
    description,
  };

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
              <ItemCount top={quantity} item={incompleteItem} />
              <span>{quantity} cuadros disponibles</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ItemDetails;
