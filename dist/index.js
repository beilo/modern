"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const path = require("path");
const builder_1 = require("@modern-js/builder");
const builder_rspack_provider_1 = require("@modern-js/builder-rspack-provider");
const builder_plugin_node_polyfill_1 = require("@modern-js/builder-plugin-node-polyfill");
const isDev = process.env.NODE_ENV === "development";
const config_1 = require("./config");
const root = config_1.config.rootPath || process.cwd();
const provider = (0, builder_rspack_provider_1.builderRspackProvider)({
    builderConfig: {
        source: {
            alias: {
                root: root,
                raf: path.resolve(root, "node_modules/raf/"),
                src: path.resolve(root, "src"),
                ...(config_1.config.alias || {}),
            },
            define: {
                DEBUG: config_1.config.isDev,
                ...config_1.config.definePlugin,
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
            assetPrefix: config_1.config.publicPath,
            cssModuleLocalIdentName: config_1.config.cssScopeName,
            disableCssModuleExtension: true,
            disableTsChecker: true,
            distPath: {
                root: config_1.config.buildPath,
                html: "",
                js: "js",
                css: "css",
                svg: "static",
                font: "static",
                image: "static",
                media: "static",
            },
            externals: config_1.config.externals,
        },
        performance: {
            removeConsole: isDev ? false : ["log", "warn"],
            removeMomentLocale: true,
        },
        html: {
            disableHtmlFolder: true,
        },
        tools: {
            htmlPlugin: {
                loading: config_1.config.loading,
                cache: false,
                minify: {
                    collapseWhitespace: true,
                    removeComments: false,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                },
                ...config_1.config.htmlPlugin,
            },
            postcss: (opts) => {
                if (config_1.config.postScssPlugins) {
                    config_1.config.postScssPlugins.forEach((plugin) => {
                        opts.postcssOptions.plugins.push(require(plugin.name)(plugin.options || {}));
                    });
                }
            },
            babel(_, { addPlugins, removePresets, addPresets }) {
                addPlugins([
                    [
                        require(require.resolve("@dr.pogodin/babel-plugin-react-css-modules")),
                        {
                            generateScopedName: config_1.config.cssScopeName,
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
            ...config_1.config.devServer,
            port: Number(config_1.config.devServer.port) || 8080,
        },
    },
});
async function main() {
    const builder = await (0, builder_1.createBuilder)(provider, {
        target: config_1.config.target,
        entry: config_1.config.entryPath,
    });
    builder.addPlugins([(0, builder_plugin_node_polyfill_1.builderPluginNodePolyfill)()]);
    // 这俩不能一起用
    // await builder.inspectConfig({
    //   writeToDisk: true,
    //   verbose: true,
    // });
    await builder.startDevServer();
}
exports.main = main;
//# sourceMappingURL=index.js.map