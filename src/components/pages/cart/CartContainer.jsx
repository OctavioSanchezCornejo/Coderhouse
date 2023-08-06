import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let precio = getTotalPrice();
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ width: "200px", border: "2px solid steelblue" }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h3>{elemento.quantity}</h3>
            <Button onClick={() => deleteById(elemento.id)}>Eliminar</Button>
          </div>
        );
      })}

      {cart.length > 0 ? (
        <div>
          <Button onClick={clearCart}>Limpiar</Button>

          <h2> Total: ${precio}</h2>
          <Link to="/checkout">
            <Button>Finalizar compra</Button>
          </Link>
        </div>
      ) : (
        <h1> Tu Carrito esta vacio</h1>
      )}
    </div>
  );
};

export default CartContainer;
