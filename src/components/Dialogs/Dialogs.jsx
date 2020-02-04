import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = props => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(dialog => (
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id++}/>
    ));

    let messagesElements = state.messages.map(message => (
        <Message message={message.message} key={message.id++}/>
    ));

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>{dialogElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
};

export default Dialogs;
