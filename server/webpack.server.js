const path = require("path");

module.exports = {
  // Inform webpack that we're building node-safe bundle
  target: "node",

  // Inform webpack of root file
  entry: "./src/index.js",

  // Inform webpack where to output generated code
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // Inform webpack it needs to run babel
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
