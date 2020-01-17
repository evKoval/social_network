import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = props => {
  return (
    <div className={`${classes.dialog}`}>
      <NavLink activeClassName={classes.active} to={`/dialogs/${props.id}`}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
