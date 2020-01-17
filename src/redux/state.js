let rerenderEntireTree = () => {
  console.log("state changed");
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCounter: Math.floor(Math.random() * 100)
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updatePostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "My first post", likeCounter: 1 },
      { id: 2, message: "My 2nd post", likeCounter: 2 },
      { id: 3, message: "My 3rd post", likeCounter: 3 },
      { id: 4, message: "My 4th post", likeCounter: 4 }
    ],
    newPostText: "FLUX ME!!!"
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Chuck" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Dima" },
      { id: 4, name: "Evgeny" },
      { id: 5, name: "Bob" }
    ],
    messages: [
      { message: "message1" },
      { message: "message2" },
      { message: "message3" },
      { message: "message4" }
    ]
  },
  friendList: [{ name: "Anna" }, { name: "Andrei" }, { name: "Foma" }]
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
