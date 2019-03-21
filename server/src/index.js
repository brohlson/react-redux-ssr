import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  // Return array of components to be rendered at the given path
  // Map over the array and load the getInitialProps method if it exists
  // Return the manual Redux dispatch actions as an array of promises for the server to resolve
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.getInitialProps ? route.getInitialProps(store) : null;
  });

  // Resolve promises and render the app
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
