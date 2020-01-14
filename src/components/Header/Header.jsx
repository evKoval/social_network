import React from "react";
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://www.iconninja.com/ico/128/react-js-react-logo-js-11722.ico"
        alt="logo"
      />
    </header>
  );
};

export default Header;
