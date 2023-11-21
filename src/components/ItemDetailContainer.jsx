import { useState, useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import data from "../data/data";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    getData.then((res) => {
      const findById = res.find((el) => el.id == id);
      setItem(findById);
    });
  }, [id]);

  return item ? (
    <ItemDetails
      description={item.description}
      title={item.title}
      pictureUrl={item.pictureUrl}
    />
  ) : (
    <h3>Loading...</h3>
  );
};

export default ItemDetailContainer;
