import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Navbar from "./components/layout/navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/category/:generoName" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Route>
        <Route path="*" element={<h1>error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
