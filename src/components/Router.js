import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import ProblemContainer from "./ProblemContainer";
import ProblemList from "./ProblemList";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/problems/:problemId" component={ProblemContainer} />
      <Route path="/problems" component={ProblemList} />
      <Route path="/queries/:query?" component={ProblemList} />
    </Switch>
  </BrowserRouter>
);

export default Router;
