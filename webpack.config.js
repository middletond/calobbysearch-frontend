const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      },
      {
        test: /\.(s?)css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: "[name].css",
  //     chunkFilename: "[id].css"
  //   })
  // ],
  mode: "development",
  devServer: {
    contentBase: "./",
    port: 8001
  }
};
