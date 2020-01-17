import React from "react";
import classes from "./Friend.module.css";

export default props => {
  return (
    <div className={classes.friend}>
      <div className={classes.avatar}></div>
      <div className={classes.name}>{props.friend.name}</div>
    </div>
  );
};
