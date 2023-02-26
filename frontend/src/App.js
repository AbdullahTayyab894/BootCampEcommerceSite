import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/footer/Footer";
import HomeScreen from "./components/homeProduct/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/ProductDetail/Detail";
import ShoppingCart from './components/shoppingCart/ShoppingCart'
import Acount from './components/account/Acount'
function App() {
  return (
    <BrowserRouter>
      <Header />
        <main className="py-3">
          <Container>
            <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id/" element={<Detail />}/>
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/signin" element={<Acount />} />
              </Routes>
          </Container>
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
