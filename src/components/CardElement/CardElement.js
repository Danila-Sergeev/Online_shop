import cardElementStyles from "./CardElement.module.css";
import data from "../../utils/data";
export default function CardElement() {
  return (
    <div className={cardElementStyles.main}>
      {data.map((item) => {
        return (
          <div className={cardElementStyles.box} key={item.image}>
            <img className={cardElementStyles.img} src={item.image}></img>
            <p className={cardElementStyles.name}>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
