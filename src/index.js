import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Root from "./components/Root";
import store from "./store";

import "../styles/app.scss";

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById( "app" )
);
