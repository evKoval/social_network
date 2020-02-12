import React from "react";
import classes from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map(n => {
        return (
          <span
            key={n}
            className={currentPage === n ? classes.selectedPage : undefined}
            onClick={ev => {
              onPageChanged(n);
            }}
          >
            {n + " "}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
