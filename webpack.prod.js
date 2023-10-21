const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/app.js",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
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