const path = require('path');

module.exports = {
  entry: "/src/app.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },
  module: {
    rules: [
      {test: /\.css$/i, use: ["style-loader", "css-loader"],},
    ],
  },
}