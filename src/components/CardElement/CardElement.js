import cardElementStyles from "./CardElement.module.css";
import data from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
export default function CardElement() {
  const Carditems = useSelector((store) => store.cardItem.items);
  return (
    <div className={cardElementStyles.main}>
      {Carditems.map((items) => {
        let item = items.props;
        return (
          <div className={cardElementStyles.box} key={items.id4}>
            <img className={cardElementStyles.img} src={item.image}></img>
            <p className={cardElementStyles.name}>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
