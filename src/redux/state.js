let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCounter: Math.floor(Math.random() * 100)
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this.getState());
    } else if (action.type === "UPDATE-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this.getState());
    }
  }
};
export default store;
