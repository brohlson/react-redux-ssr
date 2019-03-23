import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";
import Routes from "../client/Routes";

const helmet = Helmet.renderStatic();

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `
<html>
  <head>
    ${helmet.title.toString()}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  </head>
  <body>
    <div id="app__root">${content}</div>
    <script>
      window.INITIAL_STATE = ${serialize(store.getState())}
    </script>
    <script src="bundle.js"></script>
  </body>
</html>
  `;
};
