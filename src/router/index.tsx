import React from "react";
import * as App from "../App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <nav>
        <h1 id="site-title">Playground - @himenon/openapi-typescript-code-generator@{process.env.GENERATOR_VERSION}</h1>
      </nav>
      <Switch>
        <Route path="/">
          <App.Container />
        </Route>
      </Switch>
    </Router>
  );
};
