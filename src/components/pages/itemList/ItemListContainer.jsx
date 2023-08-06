import { useState, useEffect } from "react";
import ItemLIst from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../fireBaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { Category } from "@mui/icons-material";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { generoName } = useParams();

  useEffect(() => {
    let consulta;

    let productsCollection = collection(db, "products");

    if (!generoName) {
      consulta = productsCollection;
    } else {
      consulta = query(productsCollection, where("genero", "==", generoName));
    }

    getDocs(consulta).then((res) => {
      let arrayProductos = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayProductos);
    });
  }, [generoName]);

  return <ItemLIst items={items} />;
};

export default ItemListContainer;
