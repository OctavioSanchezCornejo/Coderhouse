import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <div>
          {/* icono de carrito*/}

          <BsFillCartFill color="black" size="40px" />
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
