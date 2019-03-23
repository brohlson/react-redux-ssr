import React from "react";
import App from "./App";
import Home from "./containers/Home";
import Users from "./containers/Users";
import Admins from "./containers/Admins";
import NotFound from "./containers/NotFound";

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
      },
      {
        ...Admins,
        path: "/admins"
      },
      {
        ...NotFound
      }
    ]
  }
];
