// Entry point for client side app
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";
import reducers from "./reducers";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api"
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

// Hydrate the server-rendered html template with client side React code
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#app__root")
);
