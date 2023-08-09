import cardStyle from "./Card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  function goToNewPage() {
    navigate("/product", { replace: false, state: { props: props } });
  }
  return (
    <div className={cardStyle.card} onClick={goToNewPage}>
      <img className={cardStyle.img} src={props.image}></img>
      <p className={cardStyle.name}>{props.name}</p>
      <p className={cardStyle.price}>{props.price} $</p>
    </div>
  );
}
