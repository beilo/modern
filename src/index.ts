const path = require("path");
import { createBuilder } from "@modern-js/builder";
import { builderRspackProvider } from "@modern-js/builder-rspack-provider";
import { builderPluginNodePolyfill } from "@modern-js/builder-plugin-node-polyfill";

const isDev = process.env.NODE_ENV === "development";
import { config } from "./config";
const root = config.rootPath || process.cwd();

const provider = builderRspackProvider({
  builderConfig: {
    source: {
      alias: {
        root: root,
        raf: path.resolve(root, "node_modules/raf/"),
        src: path.resolve(root, "src"),
        ...(config.alias || {}),
      },
      define: {
        DEBUG: config.isDev,
        ...config.definePlugin,
      },
      transformImport: [
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true,
        },
      ],
    },
    output: {
      assetPrefix: config.publicPath,
      cssModuleLocalIdentName: config.cssScopeName,
      disableCssModuleExtension: true,
      disableTsChecker: true,
      distPath: {
        root: config.buildPath,
        html: "",
        js: "js",
        css: "css",
        svg: "static",
        font: "static",
        image: "static",
        media: "static",
      },
      externals: config.externals,
    },
    performance: {
      removeConsole: isDev ? false : ["log", "warn"],
      removeMomentLocale: true,
    } as any,
    html: {
      disableHtmlFolder: true,
    },
    tools: {
      htmlPlugin: {
        loading: config.loading,
        cache: false,
        minify: {
          collapseWhitespace: true,
          removeComments: false,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
        ...config.htmlPlugin,
      },
      postcss: (opts) => {
        if (config.postScssPlugins) {
          config.postScssPlugins.forEach((plugin) => {
            opts.postcssOptions.plugins.push(
              require(plugin.name)(plugin.options || {})
            );
          });
        }
      },
      babel(_, { addPlugins, removePresets, addPresets }) {
        addPlugins([
          [
            require(require.resolve(
              "@dr.pogodin/babel-plugin-react-css-modules"
            )),
            {
              generateScopedName: config.cssScopeName,
              webpackHotModuleReloading: true,
              handleMissingStyleName: "warn",
              autoResolveMultipleImports: true,
              filetypes: {
                ".scss": {
                  syntax: require.resolve("postcss-scss"),
                },
                ".less": {
                  syntax: require.resolve("postcss-less"),
                },
              },
            },
          ],
        ]);
        removePresets(["@babel/preset-typescript"]);
        addPresets([
          [
            "@babel/preset-typescript",
            {
              allowNamespaces: true,
              allExtensions: false,
              allowDeclareFields: true,
              optimizeConstEnums: true,
              isTSX: false,
            },
          ],
        ]);
      },
    },
    dev: {
      ...config.devServer,
      port: Number(config.devServer.port) || 8080,
    },
  },
});

export async function main() {
  const builder = await createBuilder(provider, {
    target: config.target,
    entry: config.entryPath,
  });

  builder.addPlugins([builderPluginNodePolyfill()]);

  // 这俩不能一起用
  // await builder.inspectConfig({
  //   writeToDisk: true,
  //   verbose: true,
  // });
  await builder.startDevServer();
}
