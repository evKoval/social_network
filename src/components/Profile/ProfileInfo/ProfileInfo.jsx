import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultPhoto from "../../../assets/images/benderPic.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onProfilePhotoSelected = ev => {
    if (ev.target.files.length) {
      savePhoto(ev.target.files[0]);
    }
  };

  const onSubmit = formData => {
    const promise = saveProfile(formData);
    promise.then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={classes.descriptionBlock}>
      <img src={profile.photos.large || defaultPhoto} alt="" className={classes.mainPhoto} /><br></br>
      {isOwner && (
        <input
          type="file"
          onChange={ev => {
            onProfilePhotoSelected(ev);
          }}
        />
      )}
      {editMode ? (
        <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>Skills:</b> {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>About me:</b>
        {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}:</b> <a href={contactValue}>{contactValue}</a>
    </div>
  );
};

export default ProfileInfo;
