import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter, HashRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { Provider } from "react-redux";
import store from "./redux/reduxStore";
import { withSuspense } from "./hoc/withSuspense";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar friendList={[]} />
        <div className="appWrapperContent">
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userID?" render={withSuspense(ProfileContainer)} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainApp = props => {
  return (
    <HashRouter>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL} > */}
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
