import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img className={classes.headerImg}
        src="https://media.istockphoto.com/photos/ski-tracks-on-powder-snow-picture-id927859944"
        alt="background img"
      />

      <div className={classes.descriptionBlock}> avatar + description </div>
    </div>
  );
};
export default ProfileInfo;
