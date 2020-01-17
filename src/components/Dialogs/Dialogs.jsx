import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogElements = props.state.dialogs.map(dialog => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));
  let messagesElements = props.state.messages.map(message => (
    <Message message={message.message} />
  ));

  let messageTextArea = React.createRef();
  let sendMessage = () => {
    let message = messageTextArea.current.value;
    alert(`Message "${message}" sent`);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <textarea ref={messageTextArea} rows="5"></textarea>
      <div>
        <button className={classes.sendButton} onClick={sendMessage}>
          Send message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
