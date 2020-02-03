import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'enter your message...'}/>
            </div>
            <div>
                <button className={classes.sendButton}>Send message</button></div>
        </form>)
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs;
