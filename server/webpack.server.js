const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // Building a node-safe bundle
  target: "node",

  // Inform webpack of root file
  entry: "./src/index.js",

  // Tell webpack where to output generated code
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // Do not bundle any external node_module libraries in server side bundle
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
