import ProductCard from "../../common/productCard/ProductCard";

const ItemLIst = ({ items }) => {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "25px",
        gap: "20px",
        background: "blueviolet",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemLIst;
