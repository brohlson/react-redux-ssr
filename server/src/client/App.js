import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { authFetchCurrentUser } from "./actions";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  getInitialProps: ({ dispatch }) => dispatch(authFetchCurrentUser()),
  component: App
};
