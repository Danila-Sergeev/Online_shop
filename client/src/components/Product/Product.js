import productStyle from "./Product.module.css";
import data from "../../utils/data";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM } from "../../services/actions/cardItems";
import { v4 as uuidv4 } from "uuid";
import { getCard } from "../../services/actions/card";

export default function Product() {
  const [src, setSrc] = useState();
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
  const addItem = () => {
    dispatch({
      type: ADD_ITEM,
      item: { props, id4: uuidv4(), id5: uuidv4() },
    });
  };
  useEffect(() => {
    dispatch(getCard(params.id));
  }, []);

  const card = useSelector((store) => store.card.card);
  const params = useParams();

  return (
    <div className={productStyle.mainBox}>
      <div className={productStyle.box}>
        <div className={productStyle.imgBox}>
          <img
            onClick={() => largeImg(card.image)}
            className={productStyle.imgMin}
            src={card.image}
            alt={card._id}
          ></img>
          {card.image1 ? (
            <img
              onClick={() => largeImg(card.image1)}
              className={productStyle.imgMin}
              src={card.image1}
              alt={card._id}
            ></img>
          ) : (
            <></>
          )}
          {card.image2 ? (
            <img
              onClick={() => largeImg(card.image2)}
              className={productStyle.imgMin}
              src={card.image2}
              alt={card._id}
            ></img>
          ) : (
            <></>
          )}
          {card.image3 ? (
            <img
              onClick={() => largeImg(card.image3)}
              className={productStyle.imgMin}
              src={card.image3}
              alt={card._id}
            ></img>
          ) : (
            <></>
          )}
          {card.image4 ? (
            <img
              onClick={() => largeImg(card.image4)}
              className={productStyle.imgMin}
              src={card.image4}
              alt={card._id}
            ></img>
          ) : (
            <></>
          )}
        </div>
        <img className={productStyle.imgLarge} src={src} alt={card._id}></img>
      </div>
      <div className={productStyle.infoBox}>
        <div className={productStyle.headerBox}>
          <h2 className={productStyle.name}>{card.name}</h2>
          <p className={productStyle.price}>{card.price} $</p>
        </div>
        <hr></hr>
        <p className={productStyle.about}>{card.data}</p>
        <div className={productStyle.sizesBox}></div>
        <button onClick={addItem} className={productStyle.btn}>
          Add to Card
        </button>
      </div>
    </div>
  );
}
