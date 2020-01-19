import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "My first post", likeCounter: 1 },
        { id: 2, message: "My 2nd post", likeCounter: 2 }
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
        { id: 1, message: "message1" },
        { id: 2, message: "message2" },
        { id: 3, message: "message3" },
        { id: 4, message: "message4" }
      ],
      newMessageBody: ""
    },
    sidebar: {
      friendList: [{ name: "Anna" }, { name: "Andrei" }, { name: "Foma" }]
    }
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
    this.getState().profilePage = profileReducer(
      this.getState().profilePage,
      action
    );
    this.getState().dialogsPage = dialogsReducer(
      this.getState().dialogsPage,
      action
    );
    this.getState().sidebar = sidebarReducer(this.getState().sidebar, action);

    this._callSubscriber(this.getState());
  }
};

export default store;

window.state = store._state;
