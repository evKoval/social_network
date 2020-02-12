import React from "react";
import defaultPhoto from "../../assets/images/benderPic.png";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";

const User = ({ user, isFollowingProgress, unfollow, follow }) => {
  return (
    <div>
      <div>
        <NavLink to={"/profile/" + user.id}>
          <img
            className={classes.userPhoto}
            src={user.photos.small !== null ? user.photos.small : defaultPhoto}
            alt=""
          />
        </NavLink>
      </div>
      <div>
        {user.followed ? (
          <button
            disabled={isFollowingProgress.some(id => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            unfollow
          </button>
        ) : (
          <button
            disabled={isFollowingProgress.some(id => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div>{user.name}</div>
      <div>{user.status}</div>
    </div>
  );
};

export default User;
