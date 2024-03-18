import appStyles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import Home from "../Home/Home";
import Product from "../Product/Product";
import React from "react";
const App = () => {
  return (
    <div className={appStyles.App}>
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
