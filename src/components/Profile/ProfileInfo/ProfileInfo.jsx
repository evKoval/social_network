import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultPhoto from "../../../assets/images/benderPic.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onProfilePhotoSelected = ev => {
    if (ev.target.files.length) {
      savePhoto(ev.target.files[0]);
    }
  };

  return (
    <div className={classes.descriptionBlock}>
      <img src={profile.photos.large || defaultPhoto} alt="" className={classes.mainPhoto} />
      {isOwner && <input type="file" onChange={(ev) => {onProfilePhotoSelected(ev)}} />}
      <div>{profile.fullName}</div>
      <div>{profile.aboutMe}</div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};
export default ProfileInfo;
