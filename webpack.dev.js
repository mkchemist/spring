const path = require("path");
const merge = require("webpack-merge");
const defaultWebpackConfig = require("./webpack.config");

const devConfig = merge(defaultWebpackConfig, {
  mode: "development",
  devServer: {
    port: 9000
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist")
  }
});

module.exports = devConfig;
