import React, { useState } from "react";
import classes from "./Paginator.module.css";
import cn from "classnames"

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.Paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}>
          &#8592;
        </button>
      )}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(n => {
          return (
            <span
              key={n}
              // className={classes.pageNumber + " " + (currentPage === n ? classes.selectedPage : undefined) }
              className={cn({ [classes.selectedPage]: currentPage === n }, classes.pageNumber)}
              onClick={ev => {
                onPageChanged(n);
              }}>
              {n}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}>
          &#8594;
        </button>
      )}
    </div>
  );
};

export default Paginator;
