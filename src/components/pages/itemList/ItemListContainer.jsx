import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemLIst from "./ItemLIst";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { generoName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.genero === generoName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(generoName ? productosFiltrados : products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [generoName]);

  return <ItemLIst items={items} />;
};

export default ItemListContainer;
