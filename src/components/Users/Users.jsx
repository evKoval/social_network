import React from "react";

const Users = props => {
  if (!props.users.length) {
    props.setUsers([
      {
        id: 1,
        fullName: "Evgeny",
        isFollowed: true,
        status: "My status will be here!",
        avaURL:
            "https://lh3.googleusercontent.com/f2W7GOcFBt3wjenyOg5l0u7sKwMP7Pe-kBgTGTmkznZI--qMozGfMkx2Zsi4LqYfSs72ubIH6gM=w128-h128-e365",
        location: {country: "Russia", city: "Novosibirsk"}
      },
      {
        id: 2,
        fullName: "Alex",
        isFollowed: false,
        status: "I have no status",
        avaURL:
            "https://lh3.googleusercontent.com/f2W7GOcFBt3wjenyOg5l0u7sKwMP7Pe-kBgTGTmkznZI--qMozGfMkx2Zsi4LqYfSs72ubIH6gM=w128-h128-e365",
        location: {country: "Ukraine", city: "Kiev"}
      },
      {
        id: 3,
        fullName: "Dmitry",
        isFollowed: true,
        status: "In gym",
        avaURL:
            "https://lh3.googleusercontent.com/f2W7GOcFBt3wjenyOg5l0u7sKwMP7Pe-kBgTGTmkznZI--qMozGfMkx2Zsi4LqYfSs72ubIH6gM=w128-h128-e365",
        location: {country: "Belarus", city: "Minsk"}
      },
      {
        id: 4,
        fullName: "Anatoly",
        isFollowed: false,
        status: "Sleeping",
        avaURL:
            "https://lh3.googleusercontent.com/f2W7GOcFBt3wjenyOg5l0u7sKwMP7Pe-kBgTGTmkznZI--qMozGfMkx2Zsi4LqYfSs72ubIH6gM=w128-h128-e365",
        location: {country: "Russia", city: "Krasnoyarsk"}
      }
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <div>
            <img src={u.avaURL} alt="" />
          </div>
          <div>
            {u.isFollowed
                ?<button onClick={()=>props.unfollow(u.id)}>Unfollow</button>
                :<button onClick={()=>props.follow(u.id)}>Follow</button>}
          </div>
          <div>{u.fullName}</div>
          <div>
            country: {u.location.country} <br/>
            city: {u.location.city}
          </div>
          <div>{u.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
