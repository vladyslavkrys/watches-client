const paths = require("./paths");

const config = {
  mode: "development",
  devtool: "inline-source-map",
  // This set of options is picked up by webpack-dev-server and can be used to change its behavior in various ways.
  devServer: {
    static: {
      directory: paths.outputPath,
    },
    compress: true,
    liveReload: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    port: 3000,
  },
};

module.exports = config;
