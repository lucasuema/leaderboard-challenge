"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Leaderboard_tsx",{

/***/ "./src/components/Leaderboard.tsx":
/*!****************************************!*\
  !*** ./src/components/Leaderboard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Leaderboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/lucasuema/Desktop/lc/leaderboard-challenge/src/components/Leaderboard.tsx\";\n\n\nfunction Leaderboard(_ref) {\n  var _this = this;\n\n  var mappedBalanceState = _ref.mappedBalanceState,\n      userLcBalance = _ref.userLcBalance;\n  // const [showLcLeaderboard, setShowLcLeaderboard] = useState(false);\n  // const toggleLeaderboard = () => {\n  //   setShowLcLeaderboard(!showLcLeaderboard);\n  // };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3984701516\" + \" \" + \"button-wrapper\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3984701516\" + \" \" + \"tokens\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-3984701516\" + \" \" + \"token\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"jsx-3984701516\" + \" \" + \"balance\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"jsx-3984701516\" + \" \" + \"result\",\n          children: userLcBalance > 50 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-3984701516\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"jsx-3984701516\" + \" \" + \"wrapper\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-3984701516\" + \" \" + \"result\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: \"jsx-3984701516\",\n                  children: mappedBalanceState.map(function (u, key) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"jsx-3984701516\" + \" \" + \"result-leaderboard\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"jsx-3984701516\",\n                        children: [key <= 2 && \"👑\", \" \", u.name, \": \", u.balance, \" \", \"(\" + \"$\" + Math.trunc(u.balance * 0.1) + \")\"]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 38,\n                        columnNumber: 31\n                      }, _this)\n                    }, key, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 37,\n                      columnNumber: 29\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 34,\n                  columnNumber: 23\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3984701516\",\n      children: \".wrapper.jsx-3984701516{background:#fbfaf6;border:1px solid #000000;box-sizing:border-box;border-radius:10px;width:400px;max-height:200px;overflow-y:auto;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding-top:300px;margin:0px auto 40px;padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:\\\"Recoleta Regular DEMO\\\";}.balance.jsx-3984701516{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.button-wrapper.jsx-3984701516{margin:0px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-family:\\\"Recoleta Regular DEMO\\\";}button.jsx-3984701516{background:black;float:left;color:white;border:none;border-radius:10px;padding:15px;cursor:pointer;font-family:\\\"Recoleta Regular DEMO\\\";}.result.jsx-3984701516{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:0px;font-size:20px;font-family:\\\"Recoleta Regular DEMO\\\";}.result-leaderboard.jsx-3984701516{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:left;-webkit-box-align:left;-ms-flex-align:left;align-items:left;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;margin-top:0px;font-size:20px;font-family:\\\"Recoleta Regular DEMO\\\";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc3VlbWEvRGVza3RvcC9sYy9sZWFkZXJib2FyZC1jaGFsbGVuZ2Uvc3JjL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEa0IsQUFHOEIsQUFpQk4sQUFHUSxBQVFKLEFBVUosQUFRQSxpQkFqQkYsRUE1QmMsRUFvQlosT0FTRCxZQUNBLElBN0JVLFFBOEJILGNBN0JBLEtBOEJOLEdBZmYsQUFxQnFCLEFBUUYsVUFiRixDQTlCSCxVQWtCTyxFQWpCRixFQThCbUIsZUE3QnBCLGdCQUNXLEtBNkI3Qix3QkFZdUIsUUFSRSxxQkFqQkEsK0NBZkwsZUF5Q0gsR0F4Q00sWUF5Q04sQ0FUQSxRQS9CRixNQXlDdUIsQ0FUckIsTUEvQkYsQUFhTSxTQW1CaUIsb0JBU3RDLGdCQVJBLHdCQW5Cc0MsS0FiakIsK0JBY3JCLDhEQWJ3Qiw4RUFDYyxvQ0FDdEMiLCJmaWxlIjoiL1VzZXJzL2x1Y2FzdWVtYS9EZXNrdG9wL2xjL2xlYWRlcmJvYXJkLWNoYWxsZW5nZS9zcmMvY29tcG9uZW50cy9MZWFkZXJib2FyZC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbnR5cGUgUHJvcFR5cGVzID0ge1xuICBtYXBwZWRCYWxhbmNlU3RhdGU6IEFjY291bnRUeXBlW107XG4gIHVzZXJMY0JhbGFuY2U6IE51bWJlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcmJvYXJkKHtcbiAgbWFwcGVkQmFsYW5jZVN0YXRlLFxuICB1c2VyTGNCYWxhbmNlLFxufTogUHJvcFR5cGVzKSB7XG4gIC8vIGNvbnN0IFtzaG93TGNMZWFkZXJib2FyZCwgc2V0U2hvd0xjTGVhZGVyYm9hcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnN0IHRvZ2dsZUxlYWRlcmJvYXJkID0gKCkgPT4ge1xuICAvLyAgIHNldFNob3dMY0xlYWRlcmJvYXJkKCFzaG93TGNMZWFkZXJib2FyZCk7XG4gIC8vIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlTGVhZGVyYm9hcmR9PlxuICAgICAgICAgIFNlZSBMZWFkZXJib2FyZFxuICAgICAgICA8L2J1dHRvbj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW5zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGFuY2VcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICAgICAge3VzZXJMY0JhbGFuY2UgPiA1MCAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge21hcHBlZEJhbGFuY2VTdGF0ZS5tYXAoKHUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInJlc3VsdC1sZWFkZXJib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7a2V5IDw9IDIgJiYgXCLwn5GRXCJ9IHt1Lm5hbWV9OiB7dS5iYWxhbmNlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiKFwiICsgXCIkXCIgKyBNYXRoLnRydW5jKHUuYmFsYW5jZSAqIDAuMSkgKyBcIilcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZiZmFmNjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gNDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJlY29sZXRhIFJlZ3VsYXIgREVNT1wiO1xuICAgICAgICB9XG4gICAgICAgIC5iYWxhbmNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0byA0MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJlY29sZXRhIFJlZ3VsYXIgREVNT1wiO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJlY29sZXRhIFJlZ3VsYXIgREVNT1wiO1xuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJlY29sZXRhIFJlZ3VsYXIgREVNT1wiO1xuICAgICAgICB9XG4gICAgICAgIC5yZXN1bHQtbGVhZGVyYm9hcmQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmVjb2xldGEgUmVndWxhciBERU1PXCI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn0iXX0= */\\n/*@ sourceURL=/Users/lucasuema/Desktop/lc/leaderboard-challenge/src/components/Leaderboard.tsx */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true);\n}\n_c = Leaderboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Leaderboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MZWFkZXJib2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRZSxTQUFTQyxXQUFULE9BR0Q7QUFBQTs7QUFBQSxNQUZaQyxrQkFFWSxRQUZaQSxrQkFFWTtBQUFBLE1BRFpDLGFBQ1ksUUFEWkEsYUFDWTtBQUNaO0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDBDQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSwwQ0FBZSxRQUFmO0FBQUEsNkJBQ0U7QUFBQSw0Q0FBZSxPQUFmO0FBQUEsZ0NBQ0U7QUFBQSw4Q0FBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLDhDQUFlLFFBQWY7QUFBQSxvQkFDR0EsYUFBYSxHQUFHLEVBQWhCLGlCQUNDO0FBQUE7QUFBQSxtQ0FFSTtBQUFBLGtEQUFlLFNBQWY7QUFBQSxxQ0FDRTtBQUFBLG9EQUFlLFFBQWY7QUFBQSx1Q0FDRTtBQUFBO0FBQUEsNEJBQ0dELGtCQUFrQixDQUFDRSxHQUFuQixDQUF1QixVQUFDQyxDQUFELEVBQUlDLEdBQUosRUFBWTtBQUNsQyx3Q0FDRTtBQUFBLDBEQUF5QixvQkFBekI7QUFBQSw2Q0FDRTtBQUFBO0FBQUEsbUNBQ0dBLEdBQUcsSUFBSSxDQUFQLElBQVksSUFEZixPQUNzQkQsQ0FBQyxDQUFDRSxJQUR4QixRQUNnQ0YsQ0FBQyxDQUFDRyxPQURsQyxFQUMyQyxHQUQzQyxFQUVHLE1BQU0sR0FBTixHQUFZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsQ0FBQyxDQUFDRyxPQUFGLEdBQVksR0FBdkIsQ0FBWixHQUEwQyxHQUY3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFBVUYsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGO0FBUUQsbUJBVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQThGRDtLQXZHdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xlYWRlcmJvYXJkLnRzeD82NjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxudHlwZSBQcm9wVHlwZXMgPSB7XG4gIG1hcHBlZEJhbGFuY2VTdGF0ZTogQWNjb3VudFR5cGVbXTtcbiAgdXNlckxjQmFsYW5jZTogTnVtYmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhZGVyYm9hcmQoe1xuICBtYXBwZWRCYWxhbmNlU3RhdGUsXG4gIHVzZXJMY0JhbGFuY2UsXG59OiBQcm9wVHlwZXMpIHtcbiAgLy8gY29uc3QgW3Nob3dMY0xlYWRlcmJvYXJkLCBzZXRTaG93TGNMZWFkZXJib2FyZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gY29uc3QgdG9nZ2xlTGVhZGVyYm9hcmQgPSAoKSA9PiB7XG4gIC8vICAgc2V0U2hvd0xjTGVhZGVyYm9hcmQoIXNob3dMY0xlYWRlcmJvYXJkKTtcbiAgLy8gfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxuICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVMZWFkZXJib2FyZH0+XG4gICAgICAgICAgU2VlIExlYWRlcmJvYXJkXG4gICAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFsYW5jZVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICB7dXNlckxjQmFsYW5jZSA+IDUwICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFwcGVkQmFsYW5jZVN0YXRlLm1hcCgodSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwicmVzdWx0LWxlYWRlcmJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtrZXkgPD0gMiAmJiBcIvCfkZFcIn0ge3UubmFtZX06IHt1LmJhbGFuY2V9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIoXCIgKyBcIiRcIiArIE1hdGgudHJ1bmModS5iYWxhbmNlICogMC4xKSArIFwiKVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYWY2O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0byA0MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmVjb2xldGEgUmVndWxhciBERU1PXCI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbGFuY2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDQwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmVjb2xldGEgUmVndWxhciBERU1PXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmVjb2xldGEgUmVndWxhciBERU1PXCI7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3VsdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUmVjb2xldGEgUmVndWxhciBERU1PXCI7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3VsdC1sZWFkZXJib2FyZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogbGVmdDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSZWNvbGV0YSBSZWd1bGFyIERFTU9cIjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxlYWRlcmJvYXJkIiwibWFwcGVkQmFsYW5jZVN0YXRlIiwidXNlckxjQmFsYW5jZSIsIm1hcCIsInUiLCJrZXkiLCJuYW1lIiwiYmFsYW5jZSIsIk1hdGgiLCJ0cnVuYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Leaderboard.tsx\n");

/***/ })

});