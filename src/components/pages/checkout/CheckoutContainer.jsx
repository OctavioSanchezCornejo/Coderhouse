import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../fireBaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Button } from "@mui/material";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total: getTotalPrice(),
      date: serverTimestamp(),
    };
    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
  };

  cart.forEach((elemento) => {
    updateDoc(doc(db, "products", elemento.id), {
      stock: elemento.stock - elemento.quantity,
    });
  });

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div style={{ background: "blueviolet" }}>
      <h1 style={{ background: "blueviolet" }}>CheckoutContainer</h1>
      {orderId ? (
        <h3>Su numero de compra: {orderId}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="apellido"
            name="lastName"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <button>Comprar</button>
        </form>
      )}
    </div>
  );
};
export default CheckoutContainer;
