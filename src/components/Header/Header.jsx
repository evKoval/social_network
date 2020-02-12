import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={classes.header}>
      <img
        src="https://www.iconninja.com/ico/128/react-js-react-logo-js-11722.ico"
        alt="logo"
      />
      React social network
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logout}>LogOut</button>{" "}
          </div>
        ) : (
          <NavLink to="/login">LogIn</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
