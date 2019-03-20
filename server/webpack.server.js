const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  // Inform webpack that we're building node-safe bundle
  target: "node",

  // Inform webpack of root file
  entry: "./src/index.js",

  // Inform webpack where to output generated code
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  }
};

module.exports = merge(baseConfig, config);
