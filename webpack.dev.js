const path = require("path");

module.exports = {
  entry: ["whatwg-fetch", "@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./app.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react", "stage-0"]
          }
        }
      },
      {
        test: /\.(s?)css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        include: path.resolve(__dirname, "static")
      }
    ]
  },
  mode: "development",
  devServer: {
    contentBase: "./dist",
    port: 8001,
    historyApiFallback: true
  }
};
