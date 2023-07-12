import { Button } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <Link to="/">El Rincon</Link>
        <ul className="containerCategories">
          <li>
            <Link to="/">
              <Button variant="contained">Inicio</Button>
            </Link>
          </li>
          <li>
            <Link to="/category/Aventura">
              <Button variant="contained">Aventura</Button>
            </Link>
          </li>
          <li>
            <Link to="/category/Ficcion">
              <Button variant="contained">Ficcion</Button>
            </Link>
          </li>
          <li>
            <Link to="/category/Policial">
              <Button variant="contained">Policial</Button>
            </Link>
          </li>
          <li>
            <Link to="/category/Romantico">
              <Button variant="contained">Romantico</Button>
            </Link>
          </li>
          <li>
            <Link to="/category/Terror">
              <Button variant="contained">Terror</Button>
            </Link>
          </li>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
