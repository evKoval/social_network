import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageActionCreator,
  updateMessageBodyActionCreator
} from "../../redux/dialogsReducer";

const Dialogs = props => {
  let dialogElements = props.state.dialogs.map(dialog => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));
  let messagesElements = props.state.messages.map(message => (
    <Message message={message.message} />
  ));

  const sendMessage = () => props.dispatch(sendMessageActionCreator());

  const onMessageChange = ev => {
    let text = ev.target.value;
    props.dispatch(updateMessageBodyActionCreator(text));
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <textarea
        value={props.state.newMessageBody}
        onChange={onMessageChange}
        placeholder="Enter your message"
      ></textarea>
      <div>
        <button className={classes.sendButton} onClick={sendMessage}>
          Send message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
