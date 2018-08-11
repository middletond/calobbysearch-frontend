import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import App from "./components/App";
import reducer from "./reducers";

import "../styles/app.scss";

const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById( "app" )
);
