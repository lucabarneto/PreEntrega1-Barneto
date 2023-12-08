import { useState, useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore(),
      refDoc = doc(db, "items", id);

    getDoc(refDoc).then((res) => {
      if (!id) {
        console.log("Ocurrió un error");
      } else {
        setItem({ id: res.id, ...res.data() });
      }
    });
  }, [id]);

  return item ? (
    <ItemDetails
      id={item.id}
      description={item.description}
      title={item.title}
      pictureUrl={item.pictureUrl}
      price={item.price}
      quantity={item.quantity}
    />
  ) : (
    <h3>Loading...</h3>
  );
};

export default ItemDetailContainer;
