const { merge } = require("webpack-merge");

const commonConfig = require("./config/webpack.common.js");

module.exports = () => {
  const targetEnv = process.env.NODE_ENV || "production";

  const envConfig = require(`./config/webpack.${targetEnv}.js`);

  return merge(commonConfig, envConfig);
};
