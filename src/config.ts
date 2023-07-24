import { merge } from "lodash";
const path = require("path");
const fs = require("fs");

const isDev = process.env.NODE_ENV !== "production";

export const defaultConfig = {
  isDev,
  loading: {
    html: fs.readFileSync(path.join(__dirname, "./loading/index.html")),
    css: `<style>${fs.readFileSync(
      path.join(__dirname, "./loading/index.css")
    )}</style>`,
  },
  alias: {
    root: process.cwd(),
    raf: path.resolve(process.cwd(), "node_modules/raf/"),
  },
  target: "web",
  dropConsole: true,
  rootPath: process.cwd(),
  entryPath: { index: path.resolve(process.cwd(), "src/index.tsx") },
  buildPath: path.resolve(process.cwd(), "build"),
  publicPath: "/",
  assetsPublicPath: "/",
  devServer: {
    port: 8080,
    open: true,
  },
  svgr: false,
  cssScopeName: '[path][name]--[local]',
  // cssScopeName: isDev ? "[path][name]__[local]" : "[local]__[hash:base64:5]", // css module 和react-css-module的计算方式不是一致的,hash
  analyzePlugin: false,
  hardSourcePlugin: false,
  extraCssPlugin: true,
  imageminPlugin: true,
  htmlPlugin: {
    filename: "index.html",
    template: path.resolve(process.cwd(), "src/index.ejs"),
  },
};

let configName = "mlz-pack.js";
let subConfig = {};

try {
  const jsPath = path.resolve(process.cwd(), configName);
  const jsPathContent = require(jsPath);
  subConfig = jsPathContent.webpack || {};
} catch (e) {
  console.log(`Failed to load ${configName}: `, e);
}

const config = merge({}, defaultConfig, subConfig);

export { config };
