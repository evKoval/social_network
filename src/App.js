import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        {/*<Navbar friendList={props.appState.sidebar.friendList} />*/}
        <Navbar friendList={[]} />
        <div className="appWrapperContent">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
