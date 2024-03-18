import shopStyles from "./Shop.module.css";
import data from "../../utils/data";
import Card from "../Card/Card";
import { SortingControl } from "../SortingControl/SortingControl";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCards } from "../../services/actions/cards";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
export const ASC = "asc";
export const DESC = "desc";
const Shop = ({ cards }) => {
  const [card, setCard] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 15;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = cards.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cards.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cards.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={shopStyles.shop}>
      <div className={shopStyles.itemList}>
        {currentItems.map((obj) => {
          return <Card key={obj.image} {...obj}></Card>;
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={shopStyles.pagination}
        pageLinkClassName={shopStyles.page_num}
        previousLinkClassName={shopStyles.page_num}
        nextLinkClassName={shopStyles.page_num}
        activeLinkClassName={shopStyles.active}
      />
    </div>
  );
};
export default Shop;
