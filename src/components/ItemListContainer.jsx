import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "../App.css";
import { useParams } from "react-router-dom";

import data from "../data/data";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    getData.then((res) => {
      if (!id) {
        setItems(res);
      } else {
        const filterByType = res.filter((el) => el.type === id);
        setItems(filterByType);
      }
    });
  }, [id]);

  return (
    <section className="item-list">
      <ItemList items={items} />
    </section>
  );
};
