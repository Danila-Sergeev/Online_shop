import shopStyles from "./Shop.module.css";
import data from "../../utils/data";
import Card from "../Card/Card";
import React, { useMemo, useCallback, useState, useEffect } from "react";
import { SortingControl } from "../SortingControl/SortingControl";
import { useSearchParams } from "react-router-dom";
export const ASC = "asc";
export const DESC = "desc";

/* Сортировка товара по цене */

const sortCb = (priceSorting) => {
  if (priceSorting === ASC) {
    return (a, b) => (a.price < b.price ? 1 : a.price > b.price ? -1 : 0);
  } else {
    return (a, b) => (b.price > a.price ? -1 : b.price < a.price ? 1 : 0);
  }
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchPriceParams, setsearchPriceParams] = useSearchParams("");
  /* установка тумблера 'asc' or 'desc' */
  const [priceSorting, setpriceSorting] = useState("");
  const [sortData, setSortData] = useState([]);
  /* считывание инпута поиска */
  const onChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  /* сортировка по поиску */
  useMemo(() => {
    const searchValue = searchParams.get("filter") || "";
    setSortData(
      data.filter(
        (obj) =>
          obj.name
            .toLocaleLowerCase()
            .indexOf(searchValue.toLocaleLowerCase(), 0) > -1
      )
    );
  }, [searchParams]);

  /* запись отфильтрованных данных в sortData */
  const loadSortedData = () => {
    const normalizedData = sortData.sort(sortCb(priceSorting));
    setSortData(normalizedData);
  };

  /* устанавливаем значение priceSorting */
  useEffect(() => {
    if (searchPriceParams.get("count")) {
      setpriceSorting(searchPriceParams.get("count"));
    }
  }, [searchPriceParams]);

  useEffect(() => {
    loadSortedData();
  }, [setsearchPriceParams]);

  /* устанавливаем значение  searchPriceParams*/
  const sortCountries = useCallback(
    (type) => {
      let nextSortingValue;
      switch (type) {
        case "count": {
          nextSortingValue = priceSorting
            ? priceSorting === ASC
              ? DESC
              : ASC
            : ASC;
        }
        default: {
          break;
        }
      }

      setsearchPriceParams({ [type]: nextSortingValue });
    },
    [priceSorting]
  );
  return (
    <div className={shopStyles.shop}>
      <div className={shopStyles.sorting}>
        <input
          className={shopStyles.search}
          placeholder="Search"
          onChange={onChange}
          value={searchParams.get("filter") || ""}
        />
        <SortingControl
          label={"price"}
          value={priceSorting}
          onSort={() => sortCountries("count")}
        />
      </div>

      <div className={shopStyles.itemList}>
        {sortData.map((obj) => {
          if (obj.id <= 15) {
            return <Card key={obj.image} {...obj}></Card>;
          }
        })}
      </div>
    </div>
  );
}
