import cardElementStyles from "./CardElement.module.css";
import data from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
export default function CardElement() {
  const Carditems = useSelector((store) => store.cardItem.items);
  return (
    <div className={cardElementStyles.main}>
      {Carditems.map((item) => {
        return (
          <div className={cardElementStyles.box} key={item.props.image}>
            <img className={cardElementStyles.img} src={item.props.image}></img>
            <p className={cardElementStyles.name}>{item.props.name}</p>
          </div>
        );
      })}
    </div>
  );
}
