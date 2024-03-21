import homeStiles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import Slider from "../../Slider/Slider";
import hoveStyles from "./Home.module.css";
import Card from "../../Card/Card";
import React, { FC } from "react";
import { ICard } from "../../../services/constants";
import { useSelector } from "react-redux";

const Home: FC = () => {
  const cards = useSelector((store: any) => store.cards.cards);

  return (
    <div className={homeStiles.home}>
      <Slider cards={cards} />
      <div className={homeStiles.textBox}>
        <p className={hoveStyles.text}>PARKS AND RECREATION</p>
        <NavLink to="/shop" className={homeStiles.link}>
          SHOP NEW
        </NavLink>
      </div>

      <div className={homeStiles.photosBox}>
        <NavLink to="/shop" className={homeStiles.photoBox}>
          {cards.map((obj: ICard) => {
            if (obj._id === "65f842e9de75bbed6040ad60") {
              return (
                <img
                  key={obj.image}
                  className={homeStiles.img}
                  src={obj.image}
                  alt={obj.name}
                ></img>
              );
            }
          })}
          <div className={hoveStyles.titleBox}>
            <p className={hoveStyles.text}> LEANING IN</p>
            <p /* to="/shop" */ className={homeStiles.link}>SHOP NEW</p>
          </div>
        </NavLink>
        <NavLink to="/shop" className={homeStiles.photoBox}>
          {cards.map((obj: ICard) => {
            if (obj._id === "65f84421f94d8f70388f9c15") {
              return (
                <img
                  key={obj.image}
                  className={homeStiles.img}
                  src={obj.image}
                  alt={obj.name}
                ></img>
              );
            }
          })}

          <div className={hoveStyles.titleBox}>
            <p className={hoveStyles.text}> LEANING IN</p>
            <p /* to="/shop" */ className={homeStiles.link}>SHOP NEW</p>
          </div>
        </NavLink>
      </div>
      <NavLink to="/shop" className={homeStiles.bar}>
        {cards.map((obj: ICard) => {
          if (obj.price <= 2000) {
            return (
              <div key={obj.image} className={homeStiles.card}>
                <Card key={obj.image} {...obj}></Card>
              </div>
            );
          }
        })}
      </NavLink>
    </div>
  );
};
export default Home;
