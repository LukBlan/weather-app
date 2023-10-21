const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    main: "./src/app.js"
  },

  plugins: [
    new HtmlWebpackPlugin({template: "./src/index-template.html"})
  ],

  module: {
    rules: [
      {test: /\.css$/i, use: ["style-loader", "css-loader"],},
    ],
  },

}