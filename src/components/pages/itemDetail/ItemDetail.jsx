import CounterContainer from "../../common/Counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <div style={{ background: "blueviolet" }}>
      <h1>{product.title}</h1>
      <h3>${product.price}</h3>
      <h3>Autor: {product.author}</h3>
      <h3>{product.description}</h3>
      <h3>{product.genero}</h3>
      <img src={product.img} height="150px" width="150px" />
      <CounterContainer
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      />
    </div>
  );
};

export default ItemDetail;
