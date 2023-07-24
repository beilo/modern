(self['webpackChunk_beilo_modern'] = self['webpackChunk_beilo_modern'] || []).push([["index"], {
"./example/styles.css": function (module, exports, __webpack_require__) {
module.exports = {
  "container": "example-styles--container",
  "container": "example-styles--container",
  "title": "example-styles--title",
  "title": "example-styles--title",
};
},
"./example/index.tsx": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Component;
    }
});
var _jsxdevruntime = __webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js");
__webpack_require__("./example/styles.css");
var _index = __webpack_require__.ir(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"));
var _index1 = __webpack_require__.ir(__webpack_require__("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"));
var _utilsts = __webpack_require__.ir(__webpack_require__("./example/utils.ts"));
_utilsts.local_storage;
function Component() {
    return (0, _jsxdevruntime.jsxDEV)("div", {
        className: "example-styles--container",
        children: [
            (0, _jsxdevruntime.jsxDEV)("h1", {
                className: "title",
                children: "Example"
            }, void 0, false, {
                fileName: "</Users/leipeng/Desktop/codemao-leipeng/modern-builder/example/index.tsx>",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            (0, _jsxdevruntime.jsxDEV)("p", {
                className: "example-styles--title",
                children: "Sample text paragraph."
            }, void 0, false, {
                fileName: "</Users/leipeng/Desktop/codemao-leipeng/modern-builder/example/index.tsx>",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "</Users/leipeng/Desktop/codemao-leipeng/modern-builder/example/index.tsx>",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = Component;
_index1.default.render((0, _jsxdevruntime.jsxDEV)(Component, {}, void 0, false, {
    fileName: "</Users/leipeng/Desktop/codemao-leipeng/modern-builder/example/index.tsx>",
    lineNumber: 12,
    columnNumber: 17
}, void 0), document.getElementById("root"));
var _c;
$RefreshReg$(_c, "Component");
function $RefreshReg$(type, id) {
    __webpack_require__.m.$ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
    __webpack_require__.m.$ReactRefreshRuntime$.refresh(module.id, module.hot);
});
},
"./example/utils.ts": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "local_storage", {
    enumerable: true,
    get: function() {
        return local_storage;
    }
});
var local_storage = {
    clear: function clear() {
        localStorage.clear();
    },
    remove_item: function remove_item(key) {
        localStorage.removeItem(key);
    },
    set_item: function set_item(key, value) {
        localStorage.setItem(key, value);
    },
    get_item: function get_item(key) {
        return localStorage.getItem(key) || "";
    },
    get_length: function get_length() {
        return localStorage.length;
    },
    get_key: function get_key(index) {
        return localStorage.key(index);
    },
    format_item: function format_item(key, initValue) {
        var obj = initValue || {};
        try {
            obj = JSON.parse(this.get_item(key));
        } catch (err) {
            console.log(err);
        }
        return obj;
    }
};
},

},function(__webpack_require__) {
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId) }
__webpack_require__.O(0, ["defaultVendors","lib-polyfill","lib-react",], function() {
        return __webpack_exec__("./node_modules/.pnpm/@rspack+dev-client@0.2.2_react-refresh@0.14.0_webpack@5.87.0/node_modules/@rspack/dev-client/dist/reactRefresh.js"), __webpack_exec__("./node_modules/.pnpm/@modern-js+server@2.23.0_react-dom@18.2.0_react@18.2.0/node_modules/@modern-js/server/dist/cjs/dev-tools/dev-middleware/hmr-client/index.js?&path=/webpack-hmr&port=8080"), __webpack_exec__("./node_modules/rspack-virtual-module-GpZcp3/rspack-polyfill.js"), __webpack_exec__("./example/index.tsx");
      });
var __webpack_exports__ = __webpack_require__.O();

}
]);
//# sourceMappingURL=index.js.map