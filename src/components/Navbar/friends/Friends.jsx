import React from "react";
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = props => {
  let friendsElements = props.friendList.map(friend => (
    <Friend friend={friend} />
  ));
  return <div className={classes.friends}>
      {friendsElements}
  </div>;
};

export default Friends;
