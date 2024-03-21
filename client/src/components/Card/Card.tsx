import { FC } from "react";
import cardStyle from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { ICard } from "../../services/constants";

const Card: FC<ICard> = (props) => {
  const { image, _id, name, price } = props;
  const navigate = useNavigate();
  function goToNewPage() {
    navigate(`${_id}`, { replace: false, state: { props: props } });
  }
  return (
    <div className={cardStyle.card} onClick={goToNewPage}>
      <img className={cardStyle.img} alt={_id} src={image}></img>
      <p className={cardStyle.name}>{name}</p>
      <p className={cardStyle.price}>{price} $</p>
    </div>
  );
};
export default Card;
