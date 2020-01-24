import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        {/*<Navbar friendList={props.appState.sidebar.friendList} />*/}
        <Navbar friendList={[]} />
        <div className="appWrapperContent">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
