import React from "react";
import Home from "./containers/Home";
import Users from "./containers/Users";

export default [
  {
    ...Home,
    path: "/",
    exact: true
  },
  {
    ...Users,
    path: "/users"
  }
];
