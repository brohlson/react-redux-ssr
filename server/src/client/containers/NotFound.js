import React from "react";
import { Helmet } from "react-helmet";

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="center-align" style={{ padding: "1rem" }}>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1>404</h1>
    </div>
  );
};

export default {
  component: NotFound
};
