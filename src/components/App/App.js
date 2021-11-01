import React from "react";
import "./App.scss";

import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import Sign from "../Sign/Sign";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/sign-in">
            <Sign />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
