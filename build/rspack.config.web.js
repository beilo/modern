module.exports = {
  name: 'Client',
  context: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder',
  mode: 'development',
  infrastructureLogging: {
    level: 'error'
  },
  target: [
    'web',
    'es5'
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/build',
    filename: 'js/[name].js',
    chunkFilename: 'js/async/[name].js',
    publicPath: '/',
    pathinfo: false,
    hashFunction: 'xxhash64',
    cssFilename: 'css/[name].css',
    cssChunkFilename: 'css/async/[name].css'
  },
  resolve: {
    alias: {
      root: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder',
      raf: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/raf',
      src: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/src',
      'core-js': '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/core-js@3.30.2/node_modules/core-js'
    },
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.mjs',
      '.json'
    ],
    fallback: {
      assert: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/assert@1.5.0/node_modules/assert/assert.js',
      buffer: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/buffer@4.9.2/node_modules/buffer/index.js',
      child_process: false,
      cluster: false,
      console: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js',
      constants: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/constants-browserify@1.0.0/node_modules/constants-browserify/constants.json',
      crypto: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/crypto-browserify@3.12.0/node_modules/crypto-browserify/index.js',
      dgram: false,
      dns: false,
      domain: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/domain-browser@1.2.0/node_modules/domain-browser/source/index.js',
      events: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/events@3.3.0/node_modules/events/events.js',
      fs: false,
      http: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/stream-http@2.8.3/node_modules/stream-http/index.js',
      https: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/https-browserify@1.0.0/node_modules/https-browserify/index.js',
      module: false,
      net: false,
      os: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/os-browserify@0.3.0/node_modules/os-browserify/browser.js',
      path: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/path-browserify@0.0.1/node_modules/path-browserify/index.js',
      punycode: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/punycode@1.4.1/node_modules/punycode/punycode.js',
      process: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js',
      querystring: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/querystring-es3@0.2.1/node_modules/querystring-es3/index.js',
      readline: false,
      repl: false,
      stream: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/stream-browserify@2.0.2/node_modules/stream-browserify/index.js',
      _stream_duplex: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/readable-stream@2.3.8/node_modules/readable-stream/duplex.js',
      _stream_passthrough: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/readable-stream@2.3.8/node_modules/readable-stream/passthrough.js',
      _stream_readable: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/readable-stream@2.3.8/node_modules/readable-stream/readable.js',
      _stream_transform: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/readable-stream@2.3.8/node_modules/readable-stream/transform.js',
      _stream_writable: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/readable-stream@2.3.8/node_modules/readable-stream/writable.js',
      string_decoder: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/string_decoder@1.3.0/node_modules/string_decoder/lib/string_decoder.js',
      sys: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/util@0.11.1/node_modules/util/util.js',
      timers: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/timers-browserify@2.0.12/node_modules/timers-browserify/main.js',
      tls: false,
      tty: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/tty-browserify@0.0.0/node_modules/tty-browserify/index.js',
      url: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/url@0.11.1/node_modules/url/url.js',
      util: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/util@0.11.1/node_modules/util/util.js',
      vm: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/vm-browserify@1.1.2/node_modules/vm-browserify/index.js',
      zlib: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/browserify-zlib@0.2.0/node_modules/browserify-zlib/lib/index.js'
    },
    tsConfigPath: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/tsconfig.json'
  },
  module: {
    rules: [
      /* config.module.rule('mjs') */
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('font') */
      {
        test: /\.(woff|woff2|eot|ttf|otf|ttc)$/i,
        oneOf: [
          /* config.module.rule('font').oneOf('font-asset-url') */
          {
            type: 'asset',
            resourceQuery: /(__inline=false|url)/,
            generator: {
              filename: 'static/[name].[contenthash:8][ext]'
            },
            parser: {
              dataUrlCondition: {
                maxSize: 0
              }
            }
          },
          /* config.module.rule('font').oneOf('font-asset-inline') */
          {
            type: 'asset/inline',
            resourceQuery: /inline/
          },
          /* config.module.rule('font').oneOf('font-asset') */
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10000
              }
            },
            generator: {
              filename: 'static/[name].[contenthash:8][ext]'
            }
          }
        ]
      },
      /* config.module.rule('image') */
      {
        test: /\.(png|jpg|jpeg|gif|bmp|webp|ico|apng|avif|tiff)$/i,
        oneOf: [
          /* config.module.rule('image').oneOf('image-asset-url') */
          {
            type: 'asset',
            resourceQuery: /(__inline=false|url)/,
            generator: {
              filename: 'static/[name].[contenthash:8][ext]'
            },
            parser: {
              dataUrlCondition: {
                maxSize: 0
              }
            }
          },
          /* config.module.rule('image').oneOf('image-asset-inline') */
          {
            type: 'asset/inline',
            resourceQuery: /inline/
          },
          /* config.module.rule('image').oneOf('image-asset') */
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10000
              }
            },
            generator: {
              filename: 'static/[name].[contenthash:8][ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|mov)$/i,
        oneOf: [
          /* config.module.rule('media').oneOf('media-asset-url') */
          {
            type: 'asset',
            resourceQuery: /(__inline=false|url)/,
            generator: {
              filename: 'static/[name].[contenthash:8][ext]'
            },
            parser: {
              dataUrlCondition: {
                maxSize: 0
              }
            }
          },
          /* config.module.rule('media').oneOf('media-asset-inline') */
          {
            type: 'asset/inline',
            resourceQuery: /inline/
          },
          /* config.module.rule('media').oneOf('media-asset') */
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10000
              }
            },
            generator: {
              filename: 'static/[name].[contenthash:8][ext]'
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.svg$/,
        oneOf: [
          /* config.module.rule('svg').oneOf('svg-asset-url') */
          {
            type: 'asset',
            resourceQuery: /(__inline=false|url)/,
            generator: {
              filename: 'static/[name].[contenthash:8].svg'
            },
            issuer: {
              not: [
                /\.(js|mjs|cjs|jsx)$/,
                /\.(ts|mts|cts|tsx)$/
              ]
            },
            parser: {
              dataUrlCondition: {
                maxSize: 0
              }
            }
          },
          /* config.module.rule('svg').oneOf('svg-asset-inline') */
          {
            type: 'asset/inline',
            resourceQuery: /inline/,
            issuer: {
              not: [
                /\.(js|mjs|cjs|jsx)$/,
                /\.(ts|mts|cts|tsx)$/
              ]
            }
          },
          /* config.module.rule('svg').oneOf('svg-asset') */
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10000
              }
            },
            generator: {
              filename: 'static/[name].[contenthash:8].svg'
            },
            issuer: {
              not: [
                /\.(js|mjs|cjs|jsx)$/,
                /\.(ts|mts|cts|tsx)$/
              ]
            }
          },
          /* config.module.rule('svg').oneOf('svg-inline') */
          {
            type: 'javascript/auto',
            resourceQuery: /inline/,
            use: [
              /* config.module.rule('svg').oneOf('svg-inline').use('url') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/url-loader',
                options: {
                  limit: Infinity,
                  name: 'static/[name].[contenthash:8].svg'
                }
              }
            ]
          },
          /* config.module.rule('svg').oneOf('svg-url') */
          {
            type: 'javascript/auto',
            resourceQuery: /url/,
            use: [
              /* config.module.rule('svg').oneOf('svg-url').use('url') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/url-loader',
                options: {
                  limit: false,
                  name: 'static/[name].[contenthash:8].svg'
                }
              }
            ]
          },
          /* config.module.rule('svg').oneOf('svg') */
          {
            type: 'javascript/auto',
            use: [
              /* config.module.rule('svg').oneOf('svg').use('svgr') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@svgr+webpack@8.0.1/node_modules/@svgr/webpack/dist/index.js',
                options: {
                  svgo: true,
                  svgoConfig: {
                    plugins: [
                      {
                        name: 'preset-default',
                        params: {
                          overrides: {
                            removeViewBox: false
                          }
                        }
                      },
                      'prefixIds'
                    ]
                  }
                }
              },
              /* config.module.rule('svg').oneOf('svg').use('url') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/url-loader',
                options: {
                  limit: 10000,
                  name: 'static/[name].[contenthash:8].svg'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.(js|mjs|cjs|jsx)$|\.(ts|mts|cts|tsx)$/,
        include: [
          {
            and: [
              '/Users/leipeng/Desktop/codemao-leipeng/modern-builder',
              {
                not: /node_modules/
              }
            ]
          }
        ],
        use: [
          /* config.module.rule('js').use('babel') */
          {
            loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/babel-loader',
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              plugins: [
                [
                  {
                    'default': ({
                      types
                    }) => {
                      const styleMapsForFileByName = {};
                      const styleMapsForFileByPath = {};
                      let skip = false;
                      const setupFileForRuntimeResolution = (path, filename) => {
                        const programPath = path.findParent(parentPath => parentPath.isProgram());
                        styleMapsForFileByName[filename].importedHelperIndentifier = programPath.scope.generateUidIdentifier('getClassName');
                        styleMapsForFileByName[filename].styleModuleImportMapIdentifier = programPath.scope.generateUidIdentifier('styleModuleImportMap');
                        programPath.unshiftContainer('body', types.importDeclaration([types.importDefaultSpecifier(styleMapsForFileByName[filename].importedHelperIndentifier)], types.stringLiteral('@dr.pogodin/babel-plugin-react-css-modules/dist/browser/getClassName')));
                        const firstNonImportDeclarationNode = programPath.get('body').find(node => !types.isImportDeclaration(node));
                        firstNonImportDeclarationNode.insertBefore(types.variableDeclaration('const', [types.variableDeclarator(types.cloneNode(styleMapsForFileByName[filename].styleModuleImportMapIdentifier), (0, _createObjectExpression.default)(types, styleMapsForFileByName[filename].styleModuleImportMap))]));
                      };
                    
                      /**
                       * Adds Webpack "hot module accept" code "a-la CommonJS" style,
                       * i.e. using module.hot.
                       * @param {object} path
                       */
                      const addCommonJsWebpackHotModuleAccept = (path, importedPath) => {
                        const test = types.memberExpression(types.identifier('module'), types.identifier('hot'));
                        const consequent = types.blockStatement([types.expressionStatement(types.callExpression(types.memberExpression(types.memberExpression(types.identifier('module'), types.identifier('hot')), types.identifier('accept')), [types.stringLiteral(importedPath), types.functionExpression(null, [], types.blockStatement([types.expressionStatement(types.callExpression(types.identifier('require'), [types.stringLiteral(importedPath)]))]))]))]);
                        const programPath = path.findParent(parentPath => parentPath.isProgram());
                        const firstNonImportDeclarationNode = programPath.get('body').find(node => !types.isImportDeclaration(node));
                        const hotAcceptStatement = types.ifStatement(test, consequent);
                        if (firstNonImportDeclarationNode) {
                          firstNonImportDeclarationNode.insertBefore(hotAcceptStatement);
                        } else {
                          programPath.pushContainer('body', hotAcceptStatement);
                        }
                      };
                    
                      /**
                       * Adds Webpack "hot module accept" code "a-la ESM" style,
                       * i.e. using import.meta.webpackHot
                       * @param {object} path
                       */
                      const addEsmWebpackHotModuleAccept = (path, importedPath) => {
                        const test = types.memberExpression(types.memberExpression(types.identifier('import'), types.identifier('meta')), types.identifier('webpackHot'));
                        const consequent = types.blockStatement([types.expressionStatement(types.callExpression(types.memberExpression(types.memberExpression(types.memberExpression(types.identifier('import'), types.identifier('meta')), types.identifier('webpackHot')), types.identifier('accept')), [types.stringLiteral(importedPath), types.functionExpression(null, [], types.blockStatement([types.expressionStatement(types.callExpression(types.identifier('require'), [types.stringLiteral(importedPath)]))]))]))]);
                        const programPath = path.findParent(parentPath => parentPath.isProgram());
                        const firstNonImportDeclarationNode = programPath.get('body').find(node => !types.isImportDeclaration(node));
                        const hotAcceptStatement = types.ifStatement(test, consequent);
                        if (firstNonImportDeclarationNode) {
                          firstNonImportDeclarationNode.insertBefore(hotAcceptStatement);
                        } else {
                          programPath.pushContainer('body', hotAcceptStatement);
                        }
                      };
                      const loadStyleMap = (name, importedPath, resolvedPath, path, stats) => {
                        const {
                          file: {
                            opts: {
                              filename
                            }
                          },
                          opts: {
                            context,
                            filetypes = {},
                            generateScopedName,
                            transform
                          }
                        } = stats;
                        const mapsByName = styleMapsForFileByName[filename].styleModuleImportMap;
                        let styleMap = mapsByName[name];
                    
                        // In case it was loaded under a different name before.
                        if (!styleMap) {
                          styleMap = styleMapsForFileByPath[filename][importedPath];
                          mapsByName[name] = styleMap;
                        }
                    
                        // Loading a map for the first time.
                        if (!styleMap) {
                          styleMap = (0, _requireCssModule.default)(resolvedPath, {
                            context,
                            filetypes,
                            generateScopedName,
                            transform
                          });
                          mapsByName[name] = styleMap;
                          styleMapsForFileByPath[filename][importedPath] = styleMap;
                          const {
                            replaceImport,
                            webpackHotModuleReloading
                          } = stats.opts;
                    
                          // replaceImport flag means we target server-side environment,
                          // thus client-side Webpack's HMR code should not be injected.
                          if (!replaceImport) {
                            if (webpackHotModuleReloading === 'commonjs') {
                              addCommonJsWebpackHotModuleAccept(path, importedPath);
                            } else if (webpackHotModuleReloading) {
                              addEsmWebpackHotModuleAccept(path, importedPath);
                            }
                          }
                        }
                        return styleMap;
                      };
                      return {
                        inherits: _pluginSyntaxJsx.default,
                        visitor: {
                          // const styles = require('./styles.css');
                          CallExpression(path, stats) {
                            const {
                              callee: {
                                name: calleeName
                              },
                              arguments: args
                            } = path.node;
                            if (skip || calleeName !== 'require' || !args.length || !types.isStringLiteral(args[0])) return;
                            const importedPath = args[0].value;
                            if (notForPlugin(importedPath, stats)) return;
                            const targetResourcePath = getTargetResourcePath(importedPath, stats);
                            const isAssigned = path.parentPath.type === 'VariableDeclarator';
                            const styleImportName = isAssigned ? path.parentPath.node.id.name : importedPath;
                            const styleMap = loadStyleMap(styleImportName, importedPath, targetResourcePath, path, stats);
                            if (stats.opts.replaceImport) {
                              if (isAssigned) {
                                path.replaceWith((0, _createObjectExpression.default)(types, styleMap));
                              } else path.remove();
                            } else if (stats.opts.removeImport) {
                              path.remove();
                            }
                          },
                          // import styles from './style.css';
                          ImportDeclaration(path, stats) {
                            const importedPath = path.node.source.value;
                            if (skip || notForPlugin(importedPath, stats)) return;
                            const targetResourcePath = getTargetResourcePath(importedPath, stats);
                            let styleImportName;
                            if (path.node.specifiers.length === 0) {
                              // use imported file path as import name
                              styleImportName = importedPath;
                            } else if (path.node.specifiers.length === 1) {
                              styleImportName = path.node.specifiers[0].local.name;
                            } else {
                              // eslint-disable-next-line no-console
                              console.warn('Please report your use case. https://github.com/birdofpreyru/babel-plugin-react-css-modules/issues/new?title=Unexpected+use+case.');
                              throw new Error('Unexpected use case.');
                            }
                            const styleMap = loadStyleMap(styleImportName, importedPath, targetResourcePath, path, stats);
                            if (stats.opts.replaceImport) {
                              const {
                                specifiers
                              } = path.node;
                              if (specifiers.length) {
                                if (specifiers.length > 1 || specifiers[0].type !== 'ImportDefaultSpecifier') throw Error('Unsupported kind of import');
                                path.replaceWith(types.variableDeclaration('const', [types.variableDeclarator(types.identifier(specifiers[0].local.name), (0, _createObjectExpression.default)(types, styleMap))]));
                              } else path.remove();
                            } else if (stats.opts.removeImport) {
                              path.remove();
                            }
                          },
                          JSXElement(path, stats) {
                            if (skip) {
                              return;
                            }
                            const {
                              filename
                            } = stats.file.opts;
                            if (stats.opts.exclude && isFilenameExcluded(filename, stats.opts.exclude)) {
                              return;
                            }
                            let {
                              attributeNames
                            } = _optionsDefaults.default;
                            if (stats.opts && stats.opts.attributeNames) {
                              attributeNames = {
                                ...attributeNames,
                                ...stats.opts.attributeNames
                              };
                            }
                            const attributes = path.node.openingElement.attributes.filter(attribute => typeof attribute.name !== 'undefined' && typeof attributeNames[attribute.name.name] === 'string');
                            if (attributes.length === 0) {
                              return;
                            }
                            const {
                              handleMissingStyleName = _optionsDefaults.default.handleMissingStyleName,
                              autoResolveMultipleImports = _optionsDefaults.default.autoResolveMultipleImports
                            } = stats.opts || {};
                            const spreadMap = (0, _createSpreadMapper.default)(path, stats);
                            attributes.forEach(attribute => {
                              const destinationName = attributeNames[attribute.name.name];
                              const options = {
                                autoResolveMultipleImports,
                                handleMissingStyleName
                              };
                              if (types.isStringLiteral(attribute.value)) {
                                (0, _resolveStringLiteral.default)(path, styleMapsForFileByName[filename].styleModuleImportMap, attribute, destinationName, options);
                              } else if (types.isJSXExpressionContainer(attribute.value)) {
                                if (!styleMapsForFileByName[filename].importedHelperIndentifier) {
                                  setupFileForRuntimeResolution(path, filename);
                                }
                                (0, _replaceJsxExpressionContainer.default)(types, path, attribute, destinationName, styleMapsForFileByName[filename].importedHelperIndentifier, types.cloneNode(styleMapsForFileByName[filename].styleModuleImportMapIdentifier), options);
                              }
                              if (spreadMap[destinationName]) {
                                (0, _handleSpreadClassName.default)(path, destinationName, spreadMap[destinationName]);
                              }
                            });
                          },
                          Program(path, stats) {
                            if (!validate(stats.opts)) {
                              // eslint-disable-next-line no-console
                              console.error(validate.errors);
                              throw new Error('Invalid configuration');
                            }
                            const {
                              filename
                            } = stats.file.opts;
                            styleMapsForFileByName[filename] = {
                              styleModuleImportMap: {}
                            };
                            styleMapsForFileByPath[filename] = {};
                            if (stats.opts.skip && !(0, _attributeNameExists.default)(path, stats)) {
                              skip = true;
                            }
                          }
                        }
                      };
                    }
                  },
                  {
                    generateScopedName: '[path][name]--[local]'
                  }
                ]
              ],
              presets: [
                [
                  '@babel/preset-typescript',
                  {
                    allowNamespaces: true,
                    allExtensions: false,
                    allowDeclareFields: true,
                    optimizeConstEnums: true,
                    isTSX: false
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            sideEffects: true,
            use: [
              /* config.module.rule('css').use('postcss') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      function (e){var r=Object.assign({bug4:true,bug6:true,bug81a:true},e);return{postcssPlugin:"postcss-flexbugs-fixes",Once:function(e,a){e.walkDecls((function(e){if(e.value.indexOf("var(")>-1){return}if(e.value==="none"){return}var n=a.list.space(e.value);if(i.indexOf(e.value)>0&&n.length===1){return}if(r.bug4){u(e)}if(r.bug6){s(e)}if(r.bug81a){t(e)}}))}}},
                      e=>{const n=!("preserve"in Object(e))||Boolean(null==e?void 0:e.preserve);if("importFrom"in Object(e))throw new Error('[postcss-custom-properties] "importFrom" is no longer supported');if("exportTo"in Object(e))throw new Error('[postcss-custom-properties] "exportTo" is no longer supported');return{postcssPlugin:"postcss-custom-properties",prepare:()=>{let e=new Map;return{Once:n=>{e=getCustomPropertiesFromRoot(n)},Declaration:o=>{let r=e;if(n&&o.parent){let n=!1;o.parent.each((s=>{o!==s&&"decl"===s.type&&s.variable&&!isDeclarationIgnored(s)&&(n||(r=new Map(e),n=!0),"initial"!==s.value.toLowerCase().trim()?r.set(s.prop,t(s.value)):r.delete(s.prop))}))}transformProperties(o,r,{preserve:n})}}}}},
                      function postcssInitial(i){i=i||{};i.reset=i.reset||"all";i.replace=i.replace||false;var t=n(i.reset==="inherited");var getPropPrevTo=function(i,t){var r=false;t.parent.walkDecls((function(i){if(i.prop===t.prop&&i.value!==t.value){r=true}}));return r};return{postcssPlugin:"postcss-initial",Declaration:function(r){if(!/\binitial\b/.test(r.value)){return}var n=t(r.prop,r.value);if(n.length===0)return;n.forEach((function(i){if(!getPropPrevTo(r.prop,r)){r.cloneBefore(i)}}));if(i.replace===true){r.remove()}}}},
                      function (e){return{postcssPlugin:"postcss-page-break",Declaration(e){if(e.prop.startsWith("break-")&&/^break-(inside|before|after)/.test(e.prop)){if(e.value.search(/column|region/)>=0){return}let r;switch(e.value){case"page":r="always";break;case"avoid-page":r="avoid";break;default:r=e.value}const a="page-"+e.prop;if(e.parent.every((e=>e.prop!==a))){e.cloneBefore({prop:a,value:r})}}}}},
                      ()=>({postcssPlugin:"postcss-font-variant",Once(e){e.walkRules(walkRule)}}),
                      ()=>({postcssPlugin:"postcss-media-minmax",AtRule:{media:e=>{transform(e)},"custom-media":e=>{transform(e)}}}),
                      function w(t){const s=Object(t).noIsPseudoSelector||!1;return{postcssPlugin:"postcss-nesting",Rule(t){W(t,{noIsPseudoSelector:s})}}},
                      {
                        postcssPlugin: 'autoprefixer',
                        prepare(e){let r=loadPrefixes({from:e.opts.from,env:t.env});return{OnceExit(i){timeCapsule(e,r);if(t.remove!==false){r.processor.remove(i,e)}if(t.add!==false){r.processor.add(i,e)}}}},
                        info(e){e=e||{};e.from=e.from||process.cwd();return u(loadPrefixes(e))},
                        options: {
                          flexbox: 'no-2009',
                          overrideBrowserslist: [
                            '> 0.01%',
                            'not dead',
                            'not op_mini all'
                          ]
                        },
                        browsers: [
                          '> 0.01%',
                          'not dead',
                          'not op_mini all'
                        ]
                      }
                    ]
                  },
                  sourceMap: true
                }
              }
            ],
            test: (path) => {
                if (constants_1.NODE_MODULES_REGEX.test(path)) {
                    return constants_1.CSS_MODULES_REGEX.test(path);
                }
                return !constants_1.GLOBAL_CSS_REGEX.test(path);
            },
            type: 'css/module'
          },
          {
            sideEffects: true,
            use: [
              /* config.module.rule('css').use('postcss') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      function (e){var r=Object.assign({bug4:true,bug6:true,bug81a:true},e);return{postcssPlugin:"postcss-flexbugs-fixes",Once:function(e,a){e.walkDecls((function(e){if(e.value.indexOf("var(")>-1){return}if(e.value==="none"){return}var n=a.list.space(e.value);if(i.indexOf(e.value)>0&&n.length===1){return}if(r.bug4){u(e)}if(r.bug6){s(e)}if(r.bug81a){t(e)}}))}}},
                      e=>{const n=!("preserve"in Object(e))||Boolean(null==e?void 0:e.preserve);if("importFrom"in Object(e))throw new Error('[postcss-custom-properties] "importFrom" is no longer supported');if("exportTo"in Object(e))throw new Error('[postcss-custom-properties] "exportTo" is no longer supported');return{postcssPlugin:"postcss-custom-properties",prepare:()=>{let e=new Map;return{Once:n=>{e=getCustomPropertiesFromRoot(n)},Declaration:o=>{let r=e;if(n&&o.parent){let n=!1;o.parent.each((s=>{o!==s&&"decl"===s.type&&s.variable&&!isDeclarationIgnored(s)&&(n||(r=new Map(e),n=!0),"initial"!==s.value.toLowerCase().trim()?r.set(s.prop,t(s.value)):r.delete(s.prop))}))}transformProperties(o,r,{preserve:n})}}}}},
                      function postcssInitial(i){i=i||{};i.reset=i.reset||"all";i.replace=i.replace||false;var t=n(i.reset==="inherited");var getPropPrevTo=function(i,t){var r=false;t.parent.walkDecls((function(i){if(i.prop===t.prop&&i.value!==t.value){r=true}}));return r};return{postcssPlugin:"postcss-initial",Declaration:function(r){if(!/\binitial\b/.test(r.value)){return}var n=t(r.prop,r.value);if(n.length===0)return;n.forEach((function(i){if(!getPropPrevTo(r.prop,r)){r.cloneBefore(i)}}));if(i.replace===true){r.remove()}}}},
                      function (e){return{postcssPlugin:"postcss-page-break",Declaration(e){if(e.prop.startsWith("break-")&&/^break-(inside|before|after)/.test(e.prop)){if(e.value.search(/column|region/)>=0){return}let r;switch(e.value){case"page":r="always";break;case"avoid-page":r="avoid";break;default:r=e.value}const a="page-"+e.prop;if(e.parent.every((e=>e.prop!==a))){e.cloneBefore({prop:a,value:r})}}}}},
                      ()=>({postcssPlugin:"postcss-font-variant",Once(e){e.walkRules(walkRule)}}),
                      ()=>({postcssPlugin:"postcss-media-minmax",AtRule:{media:e=>{transform(e)},"custom-media":e=>{transform(e)}}}),
                      function w(t){const s=Object(t).noIsPseudoSelector||!1;return{postcssPlugin:"postcss-nesting",Rule(t){W(t,{noIsPseudoSelector:s})}}},
                      {
                        postcssPlugin: 'autoprefixer',
                        prepare(e){let r=loadPrefixes({from:e.opts.from,env:t.env});return{OnceExit(i){timeCapsule(e,r);if(t.remove!==false){r.processor.remove(i,e)}if(t.add!==false){r.processor.add(i,e)}}}},
                        info(e){e=e||{};e.from=e.from||process.cwd();return u(loadPrefixes(e))},
                        options: {
                          flexbox: 'no-2009',
                          overrideBrowserslist: [
                            '> 0.01%',
                            'not dead',
                            'not op_mini all'
                          ]
                        },
                        browsers: [
                          '> 0.01%',
                          'not dead',
                          'not op_mini all'
                        ]
                      }
                    ]
                  },
                  sourceMap: true
                }
              }
            ],
            type: 'css'
          }
        ]
      },
      {
        test: /\.less$/,
        oneOf: [
          {
            sideEffects: true,
            use: [
              /* config.module.rule('less').use('postcss') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      function (e){var r=Object.assign({bug4:true,bug6:true,bug81a:true},e);return{postcssPlugin:"postcss-flexbugs-fixes",Once:function(e,a){e.walkDecls((function(e){if(e.value.indexOf("var(")>-1){return}if(e.value==="none"){return}var n=a.list.space(e.value);if(i.indexOf(e.value)>0&&n.length===1){return}if(r.bug4){u(e)}if(r.bug6){s(e)}if(r.bug81a){t(e)}}))}}},
                      e=>{const n=!("preserve"in Object(e))||Boolean(null==e?void 0:e.preserve);if("importFrom"in Object(e))throw new Error('[postcss-custom-properties] "importFrom" is no longer supported');if("exportTo"in Object(e))throw new Error('[postcss-custom-properties] "exportTo" is no longer supported');return{postcssPlugin:"postcss-custom-properties",prepare:()=>{let e=new Map;return{Once:n=>{e=getCustomPropertiesFromRoot(n)},Declaration:o=>{let r=e;if(n&&o.parent){let n=!1;o.parent.each((s=>{o!==s&&"decl"===s.type&&s.variable&&!isDeclarationIgnored(s)&&(n||(r=new Map(e),n=!0),"initial"!==s.value.toLowerCase().trim()?r.set(s.prop,t(s.value)):r.delete(s.prop))}))}transformProperties(o,r,{preserve:n})}}}}},
                      function postcssInitial(i){i=i||{};i.reset=i.reset||"all";i.replace=i.replace||false;var t=n(i.reset==="inherited");var getPropPrevTo=function(i,t){var r=false;t.parent.walkDecls((function(i){if(i.prop===t.prop&&i.value!==t.value){r=true}}));return r};return{postcssPlugin:"postcss-initial",Declaration:function(r){if(!/\binitial\b/.test(r.value)){return}var n=t(r.prop,r.value);if(n.length===0)return;n.forEach((function(i){if(!getPropPrevTo(r.prop,r)){r.cloneBefore(i)}}));if(i.replace===true){r.remove()}}}},
                      function (e){return{postcssPlugin:"postcss-page-break",Declaration(e){if(e.prop.startsWith("break-")&&/^break-(inside|before|after)/.test(e.prop)){if(e.value.search(/column|region/)>=0){return}let r;switch(e.value){case"page":r="always";break;case"avoid-page":r="avoid";break;default:r=e.value}const a="page-"+e.prop;if(e.parent.every((e=>e.prop!==a))){e.cloneBefore({prop:a,value:r})}}}}},
                      ()=>({postcssPlugin:"postcss-font-variant",Once(e){e.walkRules(walkRule)}}),
                      ()=>({postcssPlugin:"postcss-media-minmax",AtRule:{media:e=>{transform(e)},"custom-media":e=>{transform(e)}}}),
                      function w(t){const s=Object(t).noIsPseudoSelector||!1;return{postcssPlugin:"postcss-nesting",Rule(t){W(t,{noIsPseudoSelector:s})}}},
                      {
                        postcssPlugin: 'autoprefixer',
                        prepare(e){let r=loadPrefixes({from:e.opts.from,env:t.env});return{OnceExit(i){timeCapsule(e,r);if(t.remove!==false){r.processor.remove(i,e)}if(t.add!==false){r.processor.add(i,e)}}}},
                        info(e){e=e||{};e.from=e.from||process.cwd();return u(loadPrefixes(e))},
                        options: {
                          flexbox: 'no-2009',
                          overrideBrowserslist: [
                            '> 0.01%',
                            'not dead',
                            'not op_mini all'
                          ]
                        },
                        browsers: [
                          '> 0.01%',
                          'not dead',
                          'not op_mini all'
                        ]
                      }
                    ]
                  },
                  sourceMap: true
                }
              },
              /* config.module.rule('less').use('less') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/less-loader',
                options: {
                  lessOptions: {
                    javascriptEnabled: true
                  },
                  sourceMap: true,
                  implementation: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/less'
                }
              }
            ],
            test: (path) => {
                if (constants_1.NODE_MODULES_REGEX.test(path)) {
                    return constants_1.CSS_MODULES_REGEX.test(path);
                }
                return !constants_1.GLOBAL_CSS_REGEX.test(path);
            },
            type: 'css/module'
          },
          {
            sideEffects: true,
            use: [
              /* config.module.rule('less').use('postcss') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      function (e){var r=Object.assign({bug4:true,bug6:true,bug81a:true},e);return{postcssPlugin:"postcss-flexbugs-fixes",Once:function(e,a){e.walkDecls((function(e){if(e.value.indexOf("var(")>-1){return}if(e.value==="none"){return}var n=a.list.space(e.value);if(i.indexOf(e.value)>0&&n.length===1){return}if(r.bug4){u(e)}if(r.bug6){s(e)}if(r.bug81a){t(e)}}))}}},
                      e=>{const n=!("preserve"in Object(e))||Boolean(null==e?void 0:e.preserve);if("importFrom"in Object(e))throw new Error('[postcss-custom-properties] "importFrom" is no longer supported');if("exportTo"in Object(e))throw new Error('[postcss-custom-properties] "exportTo" is no longer supported');return{postcssPlugin:"postcss-custom-properties",prepare:()=>{let e=new Map;return{Once:n=>{e=getCustomPropertiesFromRoot(n)},Declaration:o=>{let r=e;if(n&&o.parent){let n=!1;o.parent.each((s=>{o!==s&&"decl"===s.type&&s.variable&&!isDeclarationIgnored(s)&&(n||(r=new Map(e),n=!0),"initial"!==s.value.toLowerCase().trim()?r.set(s.prop,t(s.value)):r.delete(s.prop))}))}transformProperties(o,r,{preserve:n})}}}}},
                      function postcssInitial(i){i=i||{};i.reset=i.reset||"all";i.replace=i.replace||false;var t=n(i.reset==="inherited");var getPropPrevTo=function(i,t){var r=false;t.parent.walkDecls((function(i){if(i.prop===t.prop&&i.value!==t.value){r=true}}));return r};return{postcssPlugin:"postcss-initial",Declaration:function(r){if(!/\binitial\b/.test(r.value)){return}var n=t(r.prop,r.value);if(n.length===0)return;n.forEach((function(i){if(!getPropPrevTo(r.prop,r)){r.cloneBefore(i)}}));if(i.replace===true){r.remove()}}}},
                      function (e){return{postcssPlugin:"postcss-page-break",Declaration(e){if(e.prop.startsWith("break-")&&/^break-(inside|before|after)/.test(e.prop)){if(e.value.search(/column|region/)>=0){return}let r;switch(e.value){case"page":r="always";break;case"avoid-page":r="avoid";break;default:r=e.value}const a="page-"+e.prop;if(e.parent.every((e=>e.prop!==a))){e.cloneBefore({prop:a,value:r})}}}}},
                      ()=>({postcssPlugin:"postcss-font-variant",Once(e){e.walkRules(walkRule)}}),
                      ()=>({postcssPlugin:"postcss-media-minmax",AtRule:{media:e=>{transform(e)},"custom-media":e=>{transform(e)}}}),
                      function w(t){const s=Object(t).noIsPseudoSelector||!1;return{postcssPlugin:"postcss-nesting",Rule(t){W(t,{noIsPseudoSelector:s})}}},
                      {
                        postcssPlugin: 'autoprefixer',
                        prepare(e){let r=loadPrefixes({from:e.opts.from,env:t.env});return{OnceExit(i){timeCapsule(e,r);if(t.remove!==false){r.processor.remove(i,e)}if(t.add!==false){r.processor.add(i,e)}}}},
                        info(e){e=e||{};e.from=e.from||process.cwd();return u(loadPrefixes(e))},
                        options: {
                          flexbox: 'no-2009',
                          overrideBrowserslist: [
                            '> 0.01%',
                            'not dead',
                            'not op_mini all'
                          ]
                        },
                        browsers: [
                          '> 0.01%',
                          'not dead',
                          'not op_mini all'
                        ]
                      }
                    ]
                  },
                  sourceMap: true
                }
              },
              /* config.module.rule('less').use('less') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/less-loader',
                options: {
                  lessOptions: {
                    javascriptEnabled: true
                  },
                  sourceMap: true,
                  implementation: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/less'
                }
              }
            ],
            type: 'css'
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        oneOf: [
          {
            sideEffects: true,
            use: [
              /* config.module.rule('sass').use('postcss') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      function (e){var r=Object.assign({bug4:true,bug6:true,bug81a:true},e);return{postcssPlugin:"postcss-flexbugs-fixes",Once:function(e,a){e.walkDecls((function(e){if(e.value.indexOf("var(")>-1){return}if(e.value==="none"){return}var n=a.list.space(e.value);if(i.indexOf(e.value)>0&&n.length===1){return}if(r.bug4){u(e)}if(r.bug6){s(e)}if(r.bug81a){t(e)}}))}}},
                      e=>{const n=!("preserve"in Object(e))||Boolean(null==e?void 0:e.preserve);if("importFrom"in Object(e))throw new Error('[postcss-custom-properties] "importFrom" is no longer supported');if("exportTo"in Object(e))throw new Error('[postcss-custom-properties] "exportTo" is no longer supported');return{postcssPlugin:"postcss-custom-properties",prepare:()=>{let e=new Map;return{Once:n=>{e=getCustomPropertiesFromRoot(n)},Declaration:o=>{let r=e;if(n&&o.parent){let n=!1;o.parent.each((s=>{o!==s&&"decl"===s.type&&s.variable&&!isDeclarationIgnored(s)&&(n||(r=new Map(e),n=!0),"initial"!==s.value.toLowerCase().trim()?r.set(s.prop,t(s.value)):r.delete(s.prop))}))}transformProperties(o,r,{preserve:n})}}}}},
                      function postcssInitial(i){i=i||{};i.reset=i.reset||"all";i.replace=i.replace||false;var t=n(i.reset==="inherited");var getPropPrevTo=function(i,t){var r=false;t.parent.walkDecls((function(i){if(i.prop===t.prop&&i.value!==t.value){r=true}}));return r};return{postcssPlugin:"postcss-initial",Declaration:function(r){if(!/\binitial\b/.test(r.value)){return}var n=t(r.prop,r.value);if(n.length===0)return;n.forEach((function(i){if(!getPropPrevTo(r.prop,r)){r.cloneBefore(i)}}));if(i.replace===true){r.remove()}}}},
                      function (e){return{postcssPlugin:"postcss-page-break",Declaration(e){if(e.prop.startsWith("break-")&&/^break-(inside|before|after)/.test(e.prop)){if(e.value.search(/column|region/)>=0){return}let r;switch(e.value){case"page":r="always";break;case"avoid-page":r="avoid";break;default:r=e.value}const a="page-"+e.prop;if(e.parent.every((e=>e.prop!==a))){e.cloneBefore({prop:a,value:r})}}}}},
                      ()=>({postcssPlugin:"postcss-font-variant",Once(e){e.walkRules(walkRule)}}),
                      ()=>({postcssPlugin:"postcss-media-minmax",AtRule:{media:e=>{transform(e)},"custom-media":e=>{transform(e)}}}),
                      function w(t){const s=Object(t).noIsPseudoSelector||!1;return{postcssPlugin:"postcss-nesting",Rule(t){W(t,{noIsPseudoSelector:s})}}},
                      {
                        postcssPlugin: 'autoprefixer',
                        prepare(e){let r=loadPrefixes({from:e.opts.from,env:t.env});return{OnceExit(i){timeCapsule(e,r);if(t.remove!==false){r.processor.remove(i,e)}if(t.add!==false){r.processor.add(i,e)}}}},
                        info(e){e=e||{};e.from=e.from||process.cwd();return u(loadPrefixes(e))},
                        options: {
                          flexbox: 'no-2009',
                          overrideBrowserslist: [
                            '> 0.01%',
                            'not dead',
                            'not op_mini all'
                          ]
                        },
                        browsers: [
                          '> 0.01%',
                          'not dead',
                          'not op_mini all'
                        ]
                      }
                    ]
                  },
                  sourceMap: true
                }
              },
              /* config.module.rule('sass').use('sass') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/sass-loader',
                options: {
                  sourceMap: true,
                  implementation: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/sass'
                }
              }
            ],
            test: (path) => {
                if (constants_1.NODE_MODULES_REGEX.test(path)) {
                    return constants_1.CSS_MODULES_REGEX.test(path);
                }
                return !constants_1.GLOBAL_CSS_REGEX.test(path);
            },
            type: 'css/module'
          },
          {
            sideEffects: true,
            use: [
              /* config.module.rule('sass').use('postcss') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      function (e){var r=Object.assign({bug4:true,bug6:true,bug81a:true},e);return{postcssPlugin:"postcss-flexbugs-fixes",Once:function(e,a){e.walkDecls((function(e){if(e.value.indexOf("var(")>-1){return}if(e.value==="none"){return}var n=a.list.space(e.value);if(i.indexOf(e.value)>0&&n.length===1){return}if(r.bug4){u(e)}if(r.bug6){s(e)}if(r.bug81a){t(e)}}))}}},
                      e=>{const n=!("preserve"in Object(e))||Boolean(null==e?void 0:e.preserve);if("importFrom"in Object(e))throw new Error('[postcss-custom-properties] "importFrom" is no longer supported');if("exportTo"in Object(e))throw new Error('[postcss-custom-properties] "exportTo" is no longer supported');return{postcssPlugin:"postcss-custom-properties",prepare:()=>{let e=new Map;return{Once:n=>{e=getCustomPropertiesFromRoot(n)},Declaration:o=>{let r=e;if(n&&o.parent){let n=!1;o.parent.each((s=>{o!==s&&"decl"===s.type&&s.variable&&!isDeclarationIgnored(s)&&(n||(r=new Map(e),n=!0),"initial"!==s.value.toLowerCase().trim()?r.set(s.prop,t(s.value)):r.delete(s.prop))}))}transformProperties(o,r,{preserve:n})}}}}},
                      function postcssInitial(i){i=i||{};i.reset=i.reset||"all";i.replace=i.replace||false;var t=n(i.reset==="inherited");var getPropPrevTo=function(i,t){var r=false;t.parent.walkDecls((function(i){if(i.prop===t.prop&&i.value!==t.value){r=true}}));return r};return{postcssPlugin:"postcss-initial",Declaration:function(r){if(!/\binitial\b/.test(r.value)){return}var n=t(r.prop,r.value);if(n.length===0)return;n.forEach((function(i){if(!getPropPrevTo(r.prop,r)){r.cloneBefore(i)}}));if(i.replace===true){r.remove()}}}},
                      function (e){return{postcssPlugin:"postcss-page-break",Declaration(e){if(e.prop.startsWith("break-")&&/^break-(inside|before|after)/.test(e.prop)){if(e.value.search(/column|region/)>=0){return}let r;switch(e.value){case"page":r="always";break;case"avoid-page":r="avoid";break;default:r=e.value}const a="page-"+e.prop;if(e.parent.every((e=>e.prop!==a))){e.cloneBefore({prop:a,value:r})}}}}},
                      ()=>({postcssPlugin:"postcss-font-variant",Once(e){e.walkRules(walkRule)}}),
                      ()=>({postcssPlugin:"postcss-media-minmax",AtRule:{media:e=>{transform(e)},"custom-media":e=>{transform(e)}}}),
                      function w(t){const s=Object(t).noIsPseudoSelector||!1;return{postcssPlugin:"postcss-nesting",Rule(t){W(t,{noIsPseudoSelector:s})}}},
                      {
                        postcssPlugin: 'autoprefixer',
                        prepare(e){let r=loadPrefixes({from:e.opts.from,env:t.env});return{OnceExit(i){timeCapsule(e,r);if(t.remove!==false){r.processor.remove(i,e)}if(t.add!==false){r.processor.add(i,e)}}}},
                        info(e){e=e||{};e.from=e.from||process.cwd();return u(loadPrefixes(e))},
                        options: {
                          flexbox: 'no-2009',
                          overrideBrowserslist: [
                            '> 0.01%',
                            'not dead',
                            'not op_mini all'
                          ]
                        },
                        browsers: [
                          '> 0.01%',
                          'not dead',
                          'not op_mini all'
                        ]
                      }
                    ]
                  },
                  sourceMap: true
                }
              },
              /* config.module.rule('sass').use('sass') */
              {
                loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/sass-loader',
                options: {
                  sourceMap: true,
                  implementation: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/sass'
                }
              }
            ],
            type: 'css'
          }
        ]
      },
      /* config.module.rule('toml') */
      {
        type: 'javascript/auto',
        test: /\.toml$/,
        use: [
          /* config.module.rule('toml').use('toml') */
          {
            loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/toml-loader'
          }
        ]
      },
      /* config.module.rule('yaml') */
      {
        type: 'javascript/auto',
        test: /\.ya?ml$/,
        use: [
          /* config.module.rule('yaml').use('yaml') */
          {
            loader: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/@modern-js+builder-shared@2.23.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.3/node_modules/@modern-js/builder-shared/compiled/yaml-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'builder-runtime'
    },
    splitChunks: {
      chunks: 'all',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        'lib-react': {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          priority: 0,
          name: 'lib-react',
          reuseExistingChunk: true
        },
        'lib-router': {
          test: /[\\/]node_modules[\\/](react-router|react-router-dom|@remix-run\/router|history)[\\/]/,
          priority: 0,
          name: 'lib-router',
          reuseExistingChunk: true
        },
        'lib-lodash': {
          test: /[\\/]node_modules[\\/](lodash|lodash-es)[\\/]/,
          priority: 0,
          name: 'lib-lodash',
          reuseExistingChunk: true
        },
        'lib-axios': {
          test: /[\\/]node_modules[\\/](axios|axios-.+)[\\/]/,
          priority: 0,
          name: 'lib-axios',
          reuseExistingChunk: true
        },
        'lib-polyfill': {
          test: /[\\/]node_modules[\\/](core-js|@babel\/runtime|@swc\/helpers)[\\/]/,
          priority: 0,
          name: 'lib-polyfill',
          reuseExistingChunk: true
        }
      }
    },
    minimize: false
  },
  plugins: [
    /* config.plugin('html-index') */
    new HtmlRspackPlugin(
      {
        chunks: [
          'index'
        ],
        inject: 'head',
        minify: {
          collapseWhitespace: true,
          removeComments: false,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        filename: 'index.html',
        template: '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/example/index.ejs',
        templateParameters: (compilation, assets, assetTags, pluginOptions) => {
            const defaultOptions = {
                compilation,
                webpackConfig: compilation.options,
                htmlWebpackPlugin: {
                    tags: assetTags,
                    files: assets,
                    options: pluginOptions,
                },
                ...baseParameters,
            };
            return applyOptionsChain(defaultOptions, templateParams);
        },
        scriptLoading: 'defer',
        loading: {
          html: Buffer.from('PGRpdiBjbGFzcz0ibG9hZGluZyI+CiAgPGltZyBzcmM9Imh0dHBzOi8vc3RhdGljLmNvZGVtYW8uY24vbG9hZGluZy5naWYiIGFsdD0iIj4KICA8cD7liqDovb3kuK0uLi48L3A+CjwvZGl2Pg==', 'base64'),
          css: '<style>html, body, #root {\n  width: 100%;\n  height: 100%;\n}\n.loading {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.loading img {\n  width: auto;\n  height: auto;\n}\n.loading p {\n  text-align: center;\n  font-size: 14px;\n}</style>'
        },
        cache: false
      }
    ),
    /* config.plugin('rspack-core-js-entry') */
    new RspackVirtualModulePlugin(
      {
        'rspack-polyfill.js': 'import \'core-js\''
      }
    )
  ],
  entry: {
    index: [
      'rspack-polyfill.js',
      '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/example/index.tsx'
    ]
  },
  builtins: {
    define: {
      'process.env.NODE_ENV': '"development"',
      'process.env.ASSET_PREFIX': '""',
      DEBUG: true,
      Debug: false
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        localIdentName: '[path][name]--[local]',
        exportsOnly: false
      }
    },
    progress: {
      prefix: 'Client'
    },
    react: {
      development: true,
      refresh: true,
      runtime: 'automatic'
    },
    decorator: {
      legacy: true
    },
    presetEnv: {
      targets: [
        '> 0.01%',
        'not dead',
        'not op_mini all'
      ],
      mode: 'entry',
      coreJs: '3.30'
    },
    pluginImport: [
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ],
    provide: {
      Buffer: [
        '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/buffer@4.9.2/node_modules/buffer/index.js',
        'Buffer'
      ],
      process: [
        '/Users/leipeng/Desktop/codemao-leipeng/modern-builder/node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js'
      ]
    }
  },
  devServer: {
    hot: true
  }
}