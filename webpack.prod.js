const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]-[contenthash].js"
  },

  optimization: {
    minimize: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index-template.html",
      minify: {
        removeComments: true,
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: "[name]-[contenthash].css"}),
    new CssMinimizerPlugin()
  ],

  module: {
    rules: [
      {test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"],},
    ],
  },

}