const path = require("path");
const fs = require("fs");

module.exports = {
  webpack: {
    publicPath: "/",
    rootPath: __dirname,
    entryPath: {
      index: path.join(__dirname, "./example/index.tsx"),
    },
    extraCssPlugin: false,
    imageminPlugin: false,
    htmlPlugin: {
      filename: "index.html",
      template: path.join(__dirname, "./example/index.ejs"),
    },
    definePlugin: {
      Debug: false,
    },
    devServer: {
      https: false,
      disableHostCheck: true,
    },
  },
};
