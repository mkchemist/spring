const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const MergeWebpackConfig = require("webpack-merge");
const DefaultWebpackConfig = require("./webpack.config");

const buidlConfig = MergeWebpackConfig(DefaultWebpackConfig, {
  mode: "production",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    pathinfo: true
  },
  devtool: "#source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: true
        }
      }),
      new OptimizeCssAssetsWebpackPlugin()
    ],
    mergeDuplicateChunks: true
  },
  plugins: [new CleanWebpackPlugin()]
});

module.exports = buidlConfig;
