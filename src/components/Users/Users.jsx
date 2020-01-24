import React from "react";
import defaultPhoto from "../../assets/images/benderPic.png";
import classes from "./Users.module.css";

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(n => {
          return (
            <span
              className={
                props.currentPage === n ? classes.selectedPage : undefined
              }
              onClick={ev => {
                props.onPageChanged(n);
              }}
            >
              {n}*
            </span>
          );
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <div>
            <img
              className={classes.userPhoto}
              src={u.photos.small !== null ? u.photos.small : defaultPhoto}
              alt=""
            />
          </div>
          <div>
            {u.isFollowed ? (
              <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>Follow</button>
            )}
          </div>
          <div>{u.name}</div>
          <div>
            country: {"u.location.country"} <br />
            city: {"u.location.city"}
          </div>
          <div>{u.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
