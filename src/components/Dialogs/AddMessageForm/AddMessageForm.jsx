import {Field, reduxForm} from "redux-form";
import classes from "../Dialogs.module.css";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength30]} component={Textarea} name={'newMessageBody'} placeholder={'enter your message...'}/>
            </div>
            <div>
                <button className={classes.sendButton}>Send message</button></div>
        </form>)
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);