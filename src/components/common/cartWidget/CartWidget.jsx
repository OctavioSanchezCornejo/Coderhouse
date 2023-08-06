import { Badge } from "@mui/material";
import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <Link to="/cart">
      <div>
        <Badge badgeContent={total} color="primary">
          <BsFillCartFill color="black" size="40px" />
        </Badge>
      </div>
    </Link>
  );
};

export default CartWidget;
