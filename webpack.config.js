const webpackBase = require("./build/webpack/webpack.config.base");
const path = require("path");
const preload = {
  ...webpackBase,

  target: "electron-preload",

  entry: {
    preload: "./shell/preload.ts",
  },

  output: {
    path: path.resolve(__dirname, "./shell"),
  },
};

module.exports = [preload];
