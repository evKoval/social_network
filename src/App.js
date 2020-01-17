import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friendList={props.appState.friendList} />
        <div className="appWrapperContent">
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.appState.dialogsPage} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.appState.profilePage}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
