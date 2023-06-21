import Navbar from "./components/layout/navbar/Navbar";
import HomeContainer from "./components/pages/home/HomeContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const saludo = "Bienvenido";
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={saludo} />
      <HomeContainer />
    </div>
  );
}

export default App;
