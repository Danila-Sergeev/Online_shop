import shopStyles from "./Shop.module.css";
import data from "../../utils/data";
import Card from "../Card/Card";
export default function Shop() {
  return (
    <div className={shopStyles.shop}>
      {data.map((obj) => {
        if (obj.id <= 15) {
          return (
            <div>
              <Card key={obj.id} {...obj}></Card>
            </div>
          );
        }
      })}
      <img src=""></img>
    </div>
  );
}
