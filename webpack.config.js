var path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader" },
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: "babel-loader" },
    { test: /\.css$/,
      loader: "style-loader!css-loader" }
    ]
  }
};
