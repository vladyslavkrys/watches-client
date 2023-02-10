// Once the bundled javascript file is created we need to tell webpack to inject it as a script tag to the HTML file.
// To do that we first need to install a webpack plugin that will help us do it.
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

const config = {
  entry: paths.entryPoint,
  output: {
    filename: "bundle.js",
    path: paths.outputPath,
  },

  module: {
    // We now need to tell webpack to transpile javascript files using babel before bundling them.
    // To do that we need to define some rules for the module bundling.
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // Here we have 2 presets @babel/preset-env for transpiling ES2015+ syntax and
          // we have @babel/preset-react for transpiling react code.
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ico|png|jp(e*)g|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
    ],
  },
  // You could write write import like import App from "./App"; instead of import App from “./App.jsx”`;
  resolve: {
    extensions: [".jsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.template,
      favicon: paths.favicon,
    }),
  ],
};

module.exports = config;
