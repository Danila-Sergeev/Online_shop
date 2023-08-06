import cardElementStyles from "./CardElement.module.css";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREASE_COUNT,
  REMOVE_ITEM,
  RESET_ITEM,
  ADD_ITEM,
} from "../../services/actions/cardItems";
import { v4 as uuidv4 } from "uuid";
export default function CardElement({ onClose }) {
  /*  получаем данные из хранилища */
  const Carditems = useSelector((store) => store.cardItem.items);
  const CarditemsUnq = useSelector((store) => store.cardItem.unq);
  /*  console.log(Carditems);
  console.log(CarditemsUnq); */
  const dispatch = useDispatch();
  /* функция удвления одного элемента корзины */
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, id });
  };
  /* функция удаления всех элементов корзины */
  const resetItem = () => {
    dispatch({ type: RESET_ITEM });
  };
  /* функция уменьшения количество определенного товара */
  const decreaseItem = (id4, props) => {
    dispatch({ type: DECREASE_COUNT, item: { props, id4 } });
  };
  const emptyCart = () => {
    return (
      <div>
        <p>корзина пуста</p>
      </div>
    );
  };
  /*  useEffect(() => {
    if (Carditems.length === 0) {
      return (
        <div>
          <p>корзина пуста</p>
        </div>
      );
    }
  }, [removeItem]); */
  const length = Carditems.length;
  const addItem = (props) => {
    dispatch({
      type: ADD_ITEM,
      item: { props, id4: uuidv4(), id5: uuidv4(), length },
    });
  };
  const fullPrice = useMemo(() => {
    let price = 0;
    Carditems.forEach((item) => (price += item.props.price));
    return price ? price : 0;
  }, [Carditems]);

  return Carditems.length === 0 ? (
    <div className={cardElementStyles.emptyBox}>
      <p className={cardElementStyles.emptyTitle}>CART IS EMPTY</p>
    </div>
  ) : (
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
        console.log(items.id4);
        /*  подсчет количества повторяющегося товара */

        Carditems.forEach((obj) => {
          if (items.props.image === obj.props.image) {
            items.props.data++;
          }
        });
      })}
      {CarditemsUnq.map((unique) => {
        let uniqueItem = unique.props;
        console.log(unique.id4);
        return (
          <div className={cardElementStyles.box} key={unique.id4}>
            <img className={cardElementStyles.img} src={uniqueItem.image}></img>
            <div className={cardElementStyles.info}>
              <p className={cardElementStyles.name}>{uniqueItem.name}</p>
              <p className={cardElementStyles.price}>{uniqueItem.price} $</p>
              <div className={cardElementStyles.counterBox}>
                <button
                  className={cardElementStyles.plusminus}
                  onClick={() => decreaseItem(unique.id4, uniqueItem)}
                >
                  -
                </button>
                <p className={cardElementStyles.counter}>{uniqueItem.data}</p>
                <button
                  className={cardElementStyles.plusminus}
                  onClick={() => addItem(uniqueItem)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeItem(uniqueItem.id)}
              className={cardElementStyles.btn}
            >
              <img
                onClick={() => removeItem(uniqueItem.id)}
                className={cardElementStyles.bascet}
                src="https://avatars.mds.yandex.net/i?id=13c7dd9528c82e0e90dad5bbd588771eb5d05453-9043236-images-thumbs&n=13"
              ></img>
            </button>
          </div>
        );
      })}
      <button className={cardElementStyles.priceBtn}>{fullPrice} $</button>
    </div>
  );
}
