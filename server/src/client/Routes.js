import React from "react";
import Home from "./containers/Home";
import Users, { getInitialProps } from "./containers/Users";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    getInitialProps,
    path: "/users",
    component: Users
  }
];
