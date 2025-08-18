const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config();

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: "/", 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,        
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", 
    }),
    new webpack.DefinePlugin({
      "process.env.API_BASE_URL": JSON.stringify(process.env.API_BASE_URL),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 5000,
    open: true,
    hot: true,
  },
};