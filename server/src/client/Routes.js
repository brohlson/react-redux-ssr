import React from "react";
import App from "./App";
import Home from "./containers/Home";
import Users from "./containers/Users";

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: "/",
        exact: true
      },
      {
        ...Users,
        path: "/users"
      }
    ]
  }
];
