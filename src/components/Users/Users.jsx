import React from "react";
import defaultPhoto from "../../assets/images/benderPic.png";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
              {n+' '}
            </span>
                    );
                })}
            </div>
            {props.users.map(u => (
                <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}><img
                            className={classes.userPhoto}
                            src={u.photos.small !== null ? u.photos.small : defaultPhoto}
                            alt=""
                        /></NavLink>
                    </div>
                    <div>
                        {u.followed ? (
                            <button onClick={() => {
                                axios
                                    .delete(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "807c9c53-5ee2-4058-a475-cb30805d36e4",
                                            }
                                        }
                                    )
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                            }}>Unfollow</button>

                        ) : (
                            <button onClick={() => {
                                axios
                                    .post(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "807c9c53-5ee2-4058-a475-cb30805d36e4",
                                            }
                                        }
                                    )
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    })
                            }}>Follow</button>)}
                    </div>
                    <div>{u.name}</div>
                    <div>
                        country: {"u.location.country"} <br/>
                        city: {"u.location.city"}
                    </div>
                    <div>{u.status}</div>
                </div>
            ))}
        </div>
    );
};

export default Users;
