import cardElementStyles from "./CardElement.module.css";
import data from "../../utils/data";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ITEM, RESET_ITEM } from "../../services/actions/cardItems";
export default function CardElement({ onClose }) {
  const Carditems = useSelector((store) => store.cardItem.items);
  const dispatch = useDispatch();
  const removeItem = (id4) => {
    dispatch({ type: REMOVE_ITEM, id4 });
  };
  const resetItem = () => {
    dispatch({ type: RESET_ITEM });
  };
  useEffect(() => {
    if (Carditems.length === 0) {
      onClose();
    }
  }, [removeItem]);
  const fullPrice = useMemo(() => {
    let price = 0;
    Carditems.forEach((item) => (price += item.props.price));
    return price ? price : 0;
  }, [Carditems]);
  let unq = Carditems.filter(
    (elem, index) =>
      Carditems.findIndex((obj) => obj.props.id === elem.props.id) === index
  );
  return (
    <div className={cardElementStyles.main}>
      <button
        onClick={() => resetItem()}
        className={cardElementStyles.resetBtn}
      >
        {" "}
        Reset Card
      </button>
      {Carditems.map((items) => {
        items.props.data = 0;

        /*  подсчет количества повторяющегося товара */

        Carditems.forEach((obj) => {
          if (items.props.image === obj.props.image) {
            items.props.data++;
          }
        });
      })}

      {unq.map((unique) => {
        let uniqueItem = unique.props;
        return (
          <div className={cardElementStyles.box} key={unq.id4}>
            <img className={cardElementStyles.img} src={uniqueItem.image}></img>
            <div className={cardElementStyles.info}>
              <p className={cardElementStyles.name}>{uniqueItem.name}</p>
              <p className={cardElementStyles.price}>{uniqueItem.price} $</p>
            </div>
            <button
              onClick={() => removeItem(Carditems.id4)}
              className={cardElementStyles.btn}
            >
              <img
                onClick={() => removeItem(unq.id4)}
                className={cardElementStyles.bascet}
                src="https://avatars.mds.yandex.net/i?id=13c7dd9528c82e0e90dad5bbd588771eb5d05453-9043236-images-thumbs&n=13"
              ></img>
            </button>
            <p className={cardElementStyles.counter}>{uniqueItem.data}</p>
          </div>
        );
      })}

      <button className={cardElementStyles.priceBtn}>{fullPrice} $</button>
    </div>
  );
}
