import shopStyles from "./Shop.module.css";
import data from "../../utils/data";
import Card from "../Card/Card";
import { SortingControl } from "../SortingControl/SortingControl";
export const ASC = "asc";
export const DESC = "desc";
export default function Shop() {
  const sortCountries = useCallback(
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
  );

  return (
    <div className={shopStyles.shop}>
      <SortingControl
        label={"price"}
        onSort={() => sortCountries("price")}
        value={countrySorting}
        className={shopStyles.BtnFilter}
      ></SortingControl>
      <div className={shopStyles.itemList}>
        {data
          .slice()
          .reverse()
          .map((obj) => {
            if (obj.id <= 15) {
              return <Card key={obj.image} {...obj}></Card>;
            }
          })}
      </div>
    </div>
  );
}
