import shopStyles from "./Shop.module.css";
import data from "../../utils/data";
import Card from "../Card/Card";
export default function Shop() {
  return (
    <div className={shopStyles.shop}>
      {data
        .slice()
        .reverse()
        .map((obj) => {
          if (obj.id <= 15) {
            return <Card key={obj.image} {...obj}></Card>;
          }
        })}
    </div>
  );
}
