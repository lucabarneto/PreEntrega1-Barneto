const ItemDetails = ({ title, pictureUrl, description }) => {
  return (
    <>
      <article>
        <img src={pictureUrl} alt="" />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </article>
    </>
  );
};

export default ItemDetails;
