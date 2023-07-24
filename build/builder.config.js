module.exports = {
  dev: {
    hmr: true,
    https: false,
    port: 8080,
    assetPrefix: '/',
    startUrl: false,
    progressBar: true,
    host: '0.0.0.0',
    open: true,
    disableHostCheck: true
  },
  html: {
    inject: 'head',
    mountId: 'root',
    crossorigin: false,
    disableHtmlFolder: true,
    scriptLoading: 'defer'
  },
  source: {
    alias: {
      root: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder',
      raf: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/raf',
      src: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/src'
    },
    preEntry: [],
    globalVars: {},
    compileJsDataURI: true,
    define: {
      DEBUG: true,
      Debug: false
    },
    transformImport: [
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ]
  },
  output: {
    distPath: {
      root: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/build',
      js: 'js',
      css: 'css',
      svg: 'static',
      font: 'static',
      html: '',
      wasm: 'static/wasm',
      image: 'static',
      media: 'static',
      server: 'bundles',
      worker: 'worker'
    },
    filename: {},
    charset: 'ascii',
    polyfill: 'entry',
    dataUriLimit: {
      svg: 10000,
      font: 10000,
      image: 10000,
      media: 10000
    },
    legalComments: 'linked',
    cleanDistPath: true,
    svgDefaultExport: 'url',
    disableSvgr: false,
    disableCssExtract: false,
    disableMinimize: false,
    disableSourceMap: {
      js: false,
      css: undefined
    },
    disableTsChecker: true,
    disableFilenameHash: false,
    disableCssModuleExtension: true,
    disableInlineRuntimeChunk: false,
    enableAssetFallback: false,
    enableAssetManifest: false,
    enableLatestDecorators: false,
    enableCssModuleTSDeclaration: false,
    enableInlineScripts: false,
    enableInlineStyles: false,
    assetPrefix: '/',
    cssModuleLocalIdentName: '[path][name]--[local]',
    externals: undefined
  },
  tools: {
    tsChecker: {},
    htmlPlugin: {
      loading: {
        html: Buffer.from('PGRpdiBjbGFzcz0ibG9hZGluZyI+CiAgPGltZyBzcmM9Imh0dHBzOi8vc3RhdGljLmNvZGVtYW8uY24vbG9hZGluZy5naWYiIGFsdD0iIj4KICA8cD7liqDovb3kuK0uLi48L3A+CjwvZGl2Pg==', 'base64'),
        css: '<style>html, body, #root {\n  width: 100%;\n  height: 100%;\n}\n.loading {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.loading img {\n  width: auto;\n  height: auto;\n}\n.loading p {\n  text-align: center;\n  font-size: 14px;\n}</style>'
      },
      cache: false,
      minify: {
        collapseWhitespace: true,
        removeComments: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      filename: 'index.html',
      template: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/example/index.ejs'
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
    }
  },
  security: {
    nonce: '',
    checkSyntax: false
  },
  performance: {
    buildCache: true,
    printFileSize: true,
    removeConsole: [
      'log',
      'warn'
    ],
    chunkSplit: {
      strategy: 'split-by-experience'
    },
    removeMomentLocale: true
  }
}