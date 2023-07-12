const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <br></br>
      <div style={{ display: "flex" }}>
        <button disabled={counter <= 1} onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <h4>{counter}</h4>
        <button
          disabled={counter >= stock}
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>

      <button onClick={() => agregarAlCarrito(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
