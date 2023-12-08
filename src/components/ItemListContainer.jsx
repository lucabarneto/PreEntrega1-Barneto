import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore(),
      refCollection = !id
        ? collection(db, "items")
        : query(collection(db, "items"), where("category", "==", id));

    getDocs(refCollection).then((res) => {
      if (res.size === 0) {
        console.log("La colección no presenta documentos");
      } else {
        setItems(
          res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      }
    });
  }, [id]);

  return (
    <section className="item-list">
      <ItemList items={items} />
    </section>
  );
};
