import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>I'm the home container</div>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default {
  component: Home
};
