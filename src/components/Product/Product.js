import productStyle from "./Product.module.css";
import data from "../../utils/data";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM } from "../../services/actions/cardItems";
import { v4 as uuidv4 } from "uuid";

export default function Product() {
  const [src, setSrc] = useState("../../logo/Group 4.png");
  const largeImg = (imgSrc) => {
    setSrc(imgSrc);
  };
  const Carditems = useSelector((store) => store.cardItem.items);
  const { state } = useLocation() || {};
  const { props } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    setSrc(props.image);
  }, [props]);
  const length = Carditems.length;
  const addItem = () => {
    dispatch({
      type: ADD_ITEM,
      item: { props, id4: uuidv4(), id5: uuidv4(), length },
    });
  };
  return (
    <div className={productStyle.mainBox}>
      <div className={productStyle.box}>
        <div className={productStyle.imgBox}>
          <img
            onClick={() => largeImg(props.image)}
            className={productStyle.imgMin}
            src={props.image}
          ></img>
          <img
            onClick={() => largeImg(props.image1)}
            className={productStyle.imgMin}
            src={props.image1}
          ></img>
          <img
            onClick={() => largeImg(props.image2)}
            className={productStyle.imgMin}
            src={props.image2}
          ></img>
          <img
            onClick={() => largeImg(props.image3)}
            className={productStyle.imgMin}
            src={props.image3}
          ></img>
          <img
            onClick={() => largeImg(props.image4)}
            className={productStyle.imgMin}
            src={props.image4}
          ></img>
        </div>
        <img className={productStyle.imgLarge} src={src}></img>
      </div>
      <div className={productStyle.infoBox}>
        <div className={productStyle.headerBox}>
          <h2 className={productStyle.name}>{props.name}</h2>
          <p className={productStyle.price}>{props.price} $</p>
        </div>
        <hr></hr>
        <p className={productStyle.about}>{props.data}</p>
        <div className={productStyle.sizesBox}></div>
        <button onClick={addItem} className={productStyle.btn}>
          Add to Card
        </button>
      </div>
    </div>
  );
}
