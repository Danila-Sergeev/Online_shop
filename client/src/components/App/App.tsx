import appStyles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import Home from "../Home/Home";
import Product from "../Product/Product";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCards } from "../../services/actions/cards";
import { useAppDispatch } from "../../utils/hoc";
const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);
  return (
    <div className={appStyles.App}>
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
