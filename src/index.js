import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = state => {
  ReactDOM.render(
    <App appState={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => rerenderEntireTree(store.getState()));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
