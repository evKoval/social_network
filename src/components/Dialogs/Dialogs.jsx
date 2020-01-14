import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  return (
    <div className={`${classes.dialog}`}>
      <NavLink activeClassName={classes.active} to={`/dialogs/${props.id}`}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = props => {
  let dialogs = [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Dima' },
    { id: 4, name: 'Evgeny' },
    { id: 5, name: 'Bob' }
  ];

  let messages = [
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
    { message: "message4" }
  ];

  let dialogElements = dialogs.map(dialog => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));
  let messagesElements = messages.map(message => (
    <Message message={message.message} />
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
          {dialogElements}
      </div>
      <div className={classes.messages}>
          {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
