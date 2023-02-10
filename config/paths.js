const path = require("path");

module.exports = {
  entryPoint: path.resolve(__dirname, "../src", "./index.js"),

  outputPath: path.resolve(
    __dirname,
    "..",
    process.env.BUILD_OUTPUT_DIR || "./build"
  ),

  template: path.resolve(__dirname, "..", "public/index.html"),
  favicon: path.resolve(__dirname, "..", "public/favicon.ico"),
};
