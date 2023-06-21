import { BsFillCartFill } from "react-icons/bs";

import React from "react";

const CartWidget = ({ cantCarrito }) => {
  return (
    <div>
      {/* icono de carrito*/}
      <div>
        <h5>{cantCarrito}</h5>
      </div>
      <BsFillCartFill color="black" size="40px" />
    </div>
  );
};

export default CartWidget;
