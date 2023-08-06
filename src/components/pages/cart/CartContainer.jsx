import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let precio = getTotalPrice();
  return (
    <div style={{ background: "blueviolet" }}>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ width: "200px", border: "5px solid blue" }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h3>{elemento.quantity}</h3>
            <Button variant="contained" onClick={() => deleteById(elemento.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 ? (
        <div>
          <Button variant="contained" onClick={clearCart}>
            Limpiar
          </Button>

          <h2> Total: ${precio}</h2>
          <Link to="/checkout">
            <Button variant="contained">Finalizar compra</Button>
          </Link>
        </div>
      ) : (
        <h1> Tu Carrito esta vacio</h1>
      )}
    </div>
  );
};

export default CartContainer;
