import homeStiles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import Slider from "../Slider/Slider";
import hoveStyles from "./Home.module.css";
import data from "../../utils/data";
import Card from "../Card/Card";
export default function Home() {
  return (
    <div className={homeStiles.home}>
      <Slider />
      <div className={homeStiles.textBox}>
        <p className={hoveStyles.text}>PARKS AND RECREATION</p>
        <NavLink to="/shop" className={homeStiles.link}>
          SHOP NEW
        </NavLink>
      </div>

      <div className={homeStiles.photosBox}>
        <NavLink to="/shop" className={homeStiles.photoBox}>
          {data.map((obj) => {
            if (obj.id === 9) {
              return (
                <img
                  className={homeStiles.img}
                  src={obj.image}
                  alt={obj.name}
                ></img>
              );
            }
          })}
          <div className={hoveStyles.titleBox}>
            <p className={hoveStyles.text}> LEANING IN</p>
            <NavLink to="/shop" className={homeStiles.link}>
              SHOP NEW
            </NavLink>
          </div>
        </NavLink>
        <NavLink to="/shop" className={homeStiles.photoBox}>
          {data.map((obj) => {
            if (obj.id === 7) {
              return (
                <img
                  className={homeStiles.img}
                  src={obj.image}
                  alt={obj.name}
                ></img>
              );
            }
          })}

          <div className={hoveStyles.titleBox}>
            <p className={hoveStyles.text}> LEANING IN</p>
            <NavLink to="/shop" className={homeStiles.link}>
              SHOP NEW
            </NavLink>
          </div>
        </NavLink>
      </div>
      <NavLink to="/shop" className={homeStiles.bar}>
        {data.map((obj) => {
          if (obj.id <= 3) {
            return (
              <div className={homeStiles.card}>
                <Card key={obj.image} {...obj}></Card>
              </div>
            );
          }
        })}
      </NavLink>
    </div>
  );
}
