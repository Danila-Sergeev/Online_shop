import appStyles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Shop from "../pages/Shop/Shop";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import React, { FC, useEffect } from "react";
import { getCards } from "../../services/actions/cards";
import { useAppDispatch } from "../../utils/hoc";
import Auth from "../pages/Auth/registration/Auth";
import Autorisation from "../pages/Auth/autorisation/Authorisation";
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
        <Route path="/signIn" element={<Auth />} />
        <Route path="/signUp" element={<Autorisation />} />
      </Routes>
    </div>
  );
};

export default App;
