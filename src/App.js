import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "./components/itemCount.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import CartContainer from "./components/CartContainer/CartContainer";
import { CartProvider } from "./context/CartContext";

function App() {


  return (
      <CartProvider>
        <BrowserRouter>
          <div className="container">
            <NavBar />
            <ItemDetailContainer />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/productos/" element={<ItemListContainer />} />
              <Route
                path="/productos/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:productId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
