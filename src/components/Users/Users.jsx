import React from "react";
import * as axios from "axios";
import defaultPhoto from "../../assets/images/benderPic.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map(u => (
          <div key={u.id}>
            <div>
              <img
                src={u.photos.small !== null ? u.photos.small : defaultPhoto}
                alt=""
              />
            </div>
            <div>
              {u.isFollowed ? (
                <button onClick={() => this.props.unfollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
  }
}

export default Users;
