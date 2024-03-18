import shopStyles from "./Shop.module.css";
import data from "../../utils/data";
import Card from "../Card/Card";
import { SortingControl } from "../SortingControl/SortingControl";
import React, { useCallback, useEffect, useState } from "react";
import { fetchCard } from "src/http/cardAPI";
import { useDispatch } from "react-redux";
import { getCards } from "../../services/actions/cards";
import { useSelector } from "react-redux";
export const ASC = "asc";
export const DESC = "desc";
const Shop = () => {
  /* const sortCountries = useCallback(
    (type) => {
      let nextSortingValue;
      switch (type) {
        case "price": {
          nextSortingValue = countrySorting
            ? countrySorting === ASC
              ? DESC
              : ASC
            : ASC;
          break;
        }

        default: {
          break;
        }
      }

      setSearchParams({ [type]: nextSortingValue });
    },
    [personCountSorting, countrySorting]
  ); */
  const [card, setCard] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);
  const cards = useSelector((store) => store.cards.cards);
  console.log(cards);

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
