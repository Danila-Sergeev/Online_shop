import cardStyle from "./Card.module.css";
export default function Card(props) {
  return (
    <div className={cardStyle.card}>
      <img className={cardStyle.img} src={props.image}></img>
      <p className={cardStyle.name}>{props.name}</p>
      <p className={cardStyle.price}>{props.price} $</p>
    </div>
  );
}
