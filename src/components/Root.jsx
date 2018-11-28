import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../containers/Header";
import App from "./App";
import About from "./About";
import SearchTips from "./SearchTips";

const Root = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/search-tips" component={SearchTips} />
          <Route path="/about" component={About} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  )
};

export default Root;
