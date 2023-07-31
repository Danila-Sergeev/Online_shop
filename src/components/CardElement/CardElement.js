import cardElementStyles from "./CardElement.module.css";
import data from "../../utils/data";
import React, { useEffect } from "react";
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
        let item = items.props;
        return (
          <div className={cardElementStyles.box} key={items.id4}>
            <img className={cardElementStyles.img} src={item.image}></img>
            <p className={cardElementStyles.name}>{item.name}</p>
            <button
              onClick={() => removeItem(Carditems.id4)}
              className={cardElementStyles.btn}
            >
              <img
                onClick={() => removeItem(items.id4)}
                className={cardElementStyles.bascet}
                src="https://avatars.mds.yandex.net/i?id=13c7dd9528c82e0e90dad5bbd588771eb5d05453-9043236-images-thumbs&n=13"
              ></img>
            </button>
          </div>
        );
      })}
    </div>
  );
}
