const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  // Inform webpack of root file
  entry: "./src/client/client.js",

  // Inform webpack where to output generated code
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};

module.exports = merge(baseConfig, config);
