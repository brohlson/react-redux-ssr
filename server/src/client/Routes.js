import React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home";
import Users from "./containers/Users";

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
    </div>
  );
};
