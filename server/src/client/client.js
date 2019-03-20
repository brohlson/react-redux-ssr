// Entry point for client side app
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

// Hydrate the server-rendered html template with client side React code
ReactDOM.hydrate(<Home />, document.querySelector("#app__root"));
