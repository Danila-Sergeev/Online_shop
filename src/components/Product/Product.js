import productStyle from "./Product.module.css";
import data from "../../utils/data";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Product() {
  const [src, setSrc] = useState("../../logo/Group 4.png");
  const largeImg = (imgSrc) => {
    setSrc(imgSrc);
  };
  useEffect(() => {
    setSrc(props.image);
  }, []);
  const { state } = useLocation() || {};
  const { props } = state;

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
        <button className={productStyle.btn}>Add to Card</button>
      </div>
    </div>
  );
}
