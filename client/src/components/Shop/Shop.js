import shopStyles from "./Shop.module.css";
import data from "../../utils/data";
import Card from "../Card/Card";
import { SortingControl } from "../SortingControl/SortingControl";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCards } from "../../services/actions/cards";
import { useSelector } from "react-redux";
export const ASC = "asc";
export const DESC = "desc";
const Shop = ({ cards }) => {
  const [card, setCard] = useState([]);

  return (
    <div className={shopStyles.shop}>
      <div className={shopStyles.itemList}>
        {cards.map((obj) => {
          return <Card key={obj.image} {...obj}></Card>;
        })}
      </div>
    </div>
  );
};
export default Shop;
