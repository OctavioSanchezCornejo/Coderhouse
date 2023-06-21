import { Button } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  let cantCarrito = 3;
  return (
    <div className="navContainer">
      <h4>El Rincon</h4>
      <ul className="containerCategories">
        <li>
          <Button variant="contained">Inicio</Button>
        </li>
        <li>
          <Button variant="contained">Generos</Button>
        </li>
      </ul>
      <CartWidget cantCarrito={cantCarrito} />
    </div>
  );
};

export default Navbar;
