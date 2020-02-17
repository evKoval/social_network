import React from "react";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import styles from "./ProfileInfo.module.css";
import s from "../../common/FormsControls/FormsControls.module.css";



const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save </button>
      </div>
      {error && <div className={s.formSummaryError}>{error}</div>}


      <div>
        <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job:</b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills:</b>
        {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
      </div>
      <div>
        <b>About me:</b>
        {createField("About me...", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key} className={styles.contact}>
              <b>{key}:</b> {createField(key, "contacts."+key, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const profileDataFormRedux = reduxForm({ form: "editProfile" })(ProfileDataForm);
export default profileDataFormRedux;
