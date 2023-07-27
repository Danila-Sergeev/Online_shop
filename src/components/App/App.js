import appStyles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import Home from "../Home/Home";
import Product from "../Product/Product";
function App() {
  return (
    <div className={appStyles.App}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
