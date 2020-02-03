import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

  return (
    <div>
      <img className={classes.headerImg}
        src="https://media.istockphoto.com/photos/ski-tracks-on-powder-snow-picture-id927859944"
        alt="background img"
      />

      <div className={classes.descriptionBlock}>
          <img src={props.profile.photos.large} alt=""/>
          <div>{props.profile.fullName}</div>
          <div>{props.profile.aboutMe}</div>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};
export default ProfileInfo;
