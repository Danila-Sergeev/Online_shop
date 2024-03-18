import appStyles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import Home from "../Home/Home";
import Product from "../Product/Product";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCards } from "../../services/actions/cards";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);
  const cards = useSelector((store) => store.cards.cards);
  console.log(cards);
  return (
    <div className={appStyles.App}>
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop cards={cards} />} />
        <Route path="/" element={<Home cards={cards} />} />
        <Route path="/shop/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
