import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Favorites from "./Pages/Favorites";
import Cart from "./Pages/Cart";
import ProductPage from "./Pages/ProductPage";
import AccountPage from "./Pages/AccountPage";
import AllProduct from "./Pages/AllProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />} />
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/user" element={<AccountPage />}></Route>
          <Route path="/products" element={<AllProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
