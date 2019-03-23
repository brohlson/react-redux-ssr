import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="center-align" style={{ padding: "1rem" }}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h3>Home Page</h3>
      <p>This is a bare bones React SSR-from-scratch starter.</p>
      <p>It looks terrible. It's for educational purposes. Relax.</p>
    </div>
  );
};

export default {
  component: Home
};
