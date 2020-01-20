import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = props => {
  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map(dialog => (
    <DialogItem id={dialog.id} name={dialog.name} key={dialog.id++}/>
  ));

  let messagesElements = state.messages.map(message => (
    <Message message={message.message} key={message.id++}/>
  ));

  const sendMessage = () => props.sendMessage();

  const onMessageChange = ev => {
    let text = ev.target.value;
    props.updateNewMessageBody(text);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <textarea
        value={state.newMessageBody}
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
