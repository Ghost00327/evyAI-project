window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ = true;
window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__ = false;
window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ = [{ type: 1, value: 7, isEnabled: true }];
window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__ = true;
window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__ = false;
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object") module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object") exports["ReactDevToolsBackend"] = factory();
  else root["ReactDevToolsBackend"] = factory();
})(window, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/ module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", { enumerable: true, value: value });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__((__webpack_require__.s = 32));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (process) {
          /* unused harmony export alphaSortKeys */
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () {
            return getAllEnumerableKeys;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function () {
            return getWrappedDisplayName;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () {
            return getDisplayName;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function () {
            return getUID;
          });
          /* unused harmony export utfDecodeString */
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function () {
            return utfEncodeString;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function () {
            return printOperationsArray;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () {
            return getDefaultComponentFilters;
          });
          /* unused harmony export getSavedComponentFilters */
          /* unused harmony export setSavedComponentFilters */
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
            return castBool;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
            return castBrowserTheme;
          });
          /* unused harmony export getAppendComponentStack */
          /* unused harmony export getBreakOnConsoleErrors */
          /* unused harmony export getHideConsoleLogsInStrictMode */
          /* unused harmony export getShowInlineWarningsAndErrors */
          /* unused harmony export getDefaultOpenInEditorURL */
          /* unused harmony export getOpenInEditorURL */
          /* unused harmony export separateDisplayNameAndHOCs */
          /* unused harmony export shallowDiffers */
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function () {
            return getInObject;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () {
            return deletePathInObject;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function () {
            return renamePathInObject;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function () {
            return setInObject;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function () {
            return getDataType;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function () {
            return getDisplayNameForReactElement;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () {
            return formatDataForPreview;
          });
          /* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
          /* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            lru_cache__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
          /* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            react_is__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var shared_ReactSymbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
          /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
          /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
          /* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
          /* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
          /* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          function _toConsumableArray(arr) {
            return (
              _arrayWithoutHoles(arr) ||
              _iterableToArray(arr) ||
              _unsupportedIterableToArray(arr) ||
              _nonIterableSpread()
            );
          }

          function _nonIterableSpread() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }

          function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          }

          function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
          }

          function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          }

          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }

          /**
           * Copyright (c) Meta Platforms, Inc. and affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *
           */

          // $FlowFixMe[method-unbinding]
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var cachedDisplayNames = new WeakMap(); // On large trees, encoding takes significant time.
          // Try to reuse the already encoded strings.

          var encodedStringCache = new lru_cache__WEBPACK_IMPORTED_MODULE_0___default.a({
            max: 1000,
          });
          function alphaSortKeys(a, b) {
            if (a.toString() > b.toString()) {
              return 1;
            } else if (b.toString() > a.toString()) {
              return -1;
            } else {
              return 0;
            }
          }
          function getAllEnumerableKeys(obj) {
            var keys = new Set();
            var current = obj;

            var _loop = function _loop() {
              var currentKeys = [].concat(
                _toConsumableArray(Object.keys(current)),
                _toConsumableArray(Object.getOwnPropertySymbols(current))
              );
              var descriptors = Object.getOwnPropertyDescriptors(current);
              currentKeys.forEach(function (key) {
                // $FlowFixMe: key can be a Symbol https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
                if (descriptors[key].enumerable) {
                  keys.add(key);
                }
              });
              current = Object.getPrototypeOf(current);
            };

            while (current != null) {
              _loop();
            }

            return keys;
          } // Mirror https://github.com/facebook/react/blob/7c21bf72ace77094fd1910cc350a548287ef8350/packages/shared/getComponentName.js#L27-L37

          function getWrappedDisplayName(outerType, innerType, wrapperName, fallbackName) {
            var displayName = outerType.displayName;
            return displayName || "".concat(wrapperName, "(").concat(getDisplayName(innerType, fallbackName), ")");
          }
          function getDisplayName(type) {
            var fallbackName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Anonymous";
            var nameFromCache = cachedDisplayNames.get(type);

            if (nameFromCache != null) {
              return nameFromCache;
            }

            var displayName = fallbackName; // The displayName property is not guaranteed to be a string.
            // It's only safe to use for our purposes if it's a string.
            // github.com/facebook/react-devtools/issues/803

            if (typeof type.displayName === "string") {
              displayName = type.displayName;
            } else if (typeof type.name === "string" && type.name !== "") {
              displayName = type.name;
            }

            cachedDisplayNames.set(type, displayName);
            return displayName;
          }
          var uidCounter = 0;
          function getUID() {
            return ++uidCounter;
          }
          function utfDecodeString(array) {
            // Avoid spreading the array (e.g. String.fromCodePoint(...array))
            // Functions arguments are first placed on the stack before the function is called
            // which throws a RangeError for large arrays.
            // See github.com/facebook/react/issues/22293
            var string = "";

            for (var i = 0; i < array.length; i++) {
              var char = array[i];
              string += String.fromCodePoint(char);
            }

            return string;
          }

          function surrogatePairToCodePoint(charCode1, charCode2) {
            return ((charCode1 & 0x3ff) << 10) + (charCode2 & 0x3ff) + 0x10000;
          } // Credit for this encoding approach goes to Tim Down:
          // https://stackoverflow.com/questions/4877326/how-can-i-tell-if-a-string-contains-multibyte-characters-in-javascript

          function utfEncodeString(string) {
            var cached = encodedStringCache.get(string);

            if (cached !== undefined) {
              return cached;
            }

            var encoded = [];
            var i = 0;
            var charCode;

            while (i < string.length) {
              charCode = string.charCodeAt(i); // Handle multibyte unicode characters (like emoji).

              if ((charCode & 0xf800) === 0xd800) {
                encoded.push(surrogatePairToCodePoint(charCode, string.charCodeAt(++i)));
              } else {
                encoded.push(charCode);
              }

              ++i;
            }

            encodedStringCache.set(string, encoded);
            return encoded;
          }
          function printOperationsArray(operations) {
            // The first two values are always rendererID and rootID
            var rendererID = operations[0];
            var rootID = operations[1];
            var logs = ["operations for renderer:".concat(rendererID, " and root:").concat(rootID)];
            var i = 2; // Reassemble the string table.

            var stringTable = [
              null, // ID = 0 corresponds to the null string.
            ];
            var stringTableSize = operations[i++];
            var stringTableEnd = i + stringTableSize;

            while (i < stringTableEnd) {
              var nextLength = operations[i++];
              var nextString = utfDecodeString(operations.slice(i, i + nextLength));
              stringTable.push(nextString);
              i += nextLength;
            }

            while (i < operations.length) {
              var operation = operations[i];

              switch (operation) {
                case _constants__WEBPACK_IMPORTED_MODULE_3__[/* TREE_OPERATION_ADD */ "l"]: {
                  var _id = operations[i + 1];
                  var type = operations[i + 2];
                  i += 3;

                  if (type === _types__WEBPACK_IMPORTED_MODULE_4__[/* ElementTypeRoot */ "m"]) {
                    logs.push("Add new root node ".concat(_id));
                    i++; // isStrictModeCompliant

                    i++; // supportsProfiling

                    i++; // supportsStrictMode

                    i++; // hasOwnerMetadata
                  } else {
                    var parentID = operations[i];
                    i++;
                    i++; // ownerID

                    var displayNameStringID = operations[i];
                    var displayName = stringTable[displayNameStringID];
                    i++;
                    i++; // key

                    logs.push(
                      "Add node "
                        .concat(_id, " (")
                        .concat(displayName || "null", ") as child of ")
                        .concat(parentID)
                    );
                  }

                  break;
                }

                case _constants__WEBPACK_IMPORTED_MODULE_3__[/* TREE_OPERATION_REMOVE */ "m"]: {
                  var removeLength = operations[i + 1];
                  i += 2;

                  for (var removeIndex = 0; removeIndex < removeLength; removeIndex++) {
                    var _id2 = operations[i];
                    i += 1;
                    logs.push("Remove node ".concat(_id2));
                  }

                  break;
                }

                case _constants__WEBPACK_IMPORTED_MODULE_3__[/* TREE_OPERATION_REMOVE_ROOT */ "n"]: {
                  i += 1;
                  logs.push("Remove root ".concat(rootID));
                  break;
                }

                case _constants__WEBPACK_IMPORTED_MODULE_3__[/* TREE_OPERATION_SET_SUBTREE_MODE */ "p"]: {
                  var _id3 = operations[i + 1];
                  var mode = operations[i + 1];
                  i += 3;
                  logs.push("Mode ".concat(mode, " set for subtree with root ").concat(_id3));
                  break;
                }

                case _constants__WEBPACK_IMPORTED_MODULE_3__[/* TREE_OPERATION_REORDER_CHILDREN */ "o"]: {
                  var _id4 = operations[i + 1];
                  var numChildren = operations[i + 2];
                  i += 3;
                  var children = operations.slice(i, i + numChildren);
                  i += numChildren;
                  logs.push("Re-order node ".concat(_id4, " children ").concat(children.join(",")));
                  break;
                }

                case _constants__WEBPACK_IMPORTED_MODULE_3__[/* TREE_OPERATION_UPDATE_TREE_BASE_DURATION */ "r"]:
                  // Base duration updates are only sent while profiling is in progress.
                  // We can ignore them at this point.
                  // The profiler UI uses them lazily in order to generate the tree.
                  i += 3;
                  break;

                case _constants__WEBPACK_IMPORTED_MODULE_3__[/* TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS */ "q"]:
                  var id = operations[i + 1];
                  var numErrors = operations[i + 2];
                  var numWarnings = operations[i + 3];
                  i += 4;
                  logs.push(
                    "Node ".concat(id, " has ").concat(numErrors, " errors and ").concat(numWarnings, " warnings")
                  );
                  break;

                default:
                  throw Error('Unsupported Bridge operation "'.concat(operation, '"'));
              }
            }

            console.log(logs.join("\n  "));
          }
          function getDefaultComponentFilters() {
            return [
              {
                type: _types__WEBPACK_IMPORTED_MODULE_4__[/* ComponentFilterElementType */ "b"],
                value: _types__WEBPACK_IMPORTED_MODULE_4__[/* ElementTypeHostComponent */ "i"],
                isEnabled: true,
              },
            ];
          }
          function getSavedComponentFilters() {
            try {
              var raw = Object(_storage__WEBPACK_IMPORTED_MODULE_5__[/* localStorageGetItem */ "a"])(
                _constants__WEBPACK_IMPORTED_MODULE_3__[/* LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY */ "a"]
              );

              if (raw != null) {
                return JSON.parse(raw);
              }
            } catch (error) {}

            return getDefaultComponentFilters();
          }
          function setSavedComponentFilters(componentFilters) {
            Object(_storage__WEBPACK_IMPORTED_MODULE_5__[/* localStorageSetItem */ "b"])(
              _constants__WEBPACK_IMPORTED_MODULE_3__[/* LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY */ "a"],
              JSON.stringify(componentFilters)
            );
          }

          function parseBool(s) {
            if (s === "true") {
              return true;
            }

            if (s === "false") {
              return false;
            }
          }

          function castBool(v) {
            if (v === true || v === false) {
              return v;
            }
          }
          function castBrowserTheme(v) {
            if (v === "light" || v === "dark" || v === "auto") {
              return v;
            }
          }
          function getAppendComponentStack() {
            var _parseBool;

            var raw = Object(_storage__WEBPACK_IMPORTED_MODULE_5__[/* localStorageGetItem */ "a"])(
              _constants__WEBPACK_IMPORTED_MODULE_3__[/* LOCAL_STORAGE_SHOULD_APPEND_COMPONENT_STACK_KEY */ "d"]
            );
            return (_parseBool = parseBool(raw)) !== null && _parseBool !== void 0 ? _parseBool : true;
          }
          function getBreakOnConsoleErrors() {
            var _parseBool2;

            var raw = Object(_storage__WEBPACK_IMPORTED_MODULE_5__[/* localStorageGetItem */ "a"])(
              _constants__WEBPACK_IMPORTED_MODULE_3__[/* LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS */ "e"]
            );
            return (_parseBool2 = parseBool(raw)) !== null && _parseBool2 !== void 0 ? _parseBool2 : false;
          }
          function getHideConsoleLogsInStrictMode() {
            var _parseBool3;

            var raw = Object(_storage__WEBPACK_IMPORTED_MODULE_5__[/* localStorageGetItem */ "a"])(
              _constants__WEBPACK_IMPORTED_MODULE_3__[/* LOCAL_STORAGE_HIDE_CONSOLE_LOGS_IN_STRICT_MODE */ "b"]
            );
            return (_parseBool3 = parseBool(raw)) !== null && _parseBool3 !== void 0 ? _parseBool3 : false;
          }
          function getShowInlineWarningsAndErrors() {
            var _parseBool4;

            var raw = Object(_storage__WEBPACK_IMPORTED_MODULE_5__[/* localStorageGetItem */ "a"])(
              _constants__WEBPACK_IMPORTED_MODULE_3__[/* LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY */ "f"]
            );
            return (_parseBool4 = parseBool(raw)) !== null && _parseBool4 !== void 0 ? _parseBool4 : true;
          }
          function getDefaultOpenInEditorURL() {
            return typeof process.env.EDITOR_URL === "string" ? process.env.EDITOR_URL : "";
          }
          function getOpenInEditorURL() {
            try {
              var raw = Object(_storage__WEBPACK_IMPORTED_MODULE_5__[/* localStorageGetItem */ "a"])(
                _constants__WEBPACK_IMPORTED_MODULE_3__[/* LOCAL_STORAGE_OPEN_IN_EDITOR_URL */ "c"]
              );

              if (raw != null) {
                return JSON.parse(raw);
              }
            } catch (error) {}

            return getDefaultOpenInEditorURL();
          }
          function separateDisplayNameAndHOCs(displayName, type) {
            if (displayName === null) {
              return [null, null];
            }

            var hocDisplayNames = null;

            switch (type) {
              case _types__WEBPACK_IMPORTED_MODULE_4__[/* ElementTypeClass */ "e"]:
              case _types__WEBPACK_IMPORTED_MODULE_4__[/* ElementTypeForwardRef */ "g"]:
              case _types__WEBPACK_IMPORTED_MODULE_4__[/* ElementTypeFunction */ "h"]:
              case _types__WEBPACK_IMPORTED_MODULE_4__[/* ElementTypeMemo */ "j"]:
                if (displayName.indexOf("(") >= 0) {
                  var matches = displayName.match(/[^()]+/g);

                  if (matches != null) {
                    displayName = matches.pop();
                    hocDisplayNames = matches;
                  }
                }

                break;

              default:
                break;
            }

            return [displayName, hocDisplayNames];
          } // Pulled from react-compat
          // https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349

          function shallowDiffers(prev, next) {
            for (var attribute in prev) {
              if (!(attribute in next)) {
                return true;
              }
            }

            for (var _attribute in next) {
              if (prev[_attribute] !== next[_attribute]) {
                return true;
              }
            }

            return false;
          }
          function getInObject(object, path) {
            return path.reduce(function (reduced, attr) {
              if (reduced) {
                if (hasOwnProperty.call(reduced, attr)) {
                  return reduced[attr];
                }

                if (typeof reduced[Symbol.iterator] === "function") {
                  // Convert iterable to array and return array[index]
                  //
                  // TRICKY
                  // Don't use [...spread] syntax for this purpose.
                  // This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
                  // Other types (e.g. typed arrays, Sets) will not spread correctly.
                  return Array.from(reduced)[attr];
                }
              }

              return null;
            }, object);
          }
          function deletePathInObject(object, path) {
            var length = path.length;
            var last = path[length - 1];

            if (object != null) {
              var parent = getInObject(object, path.slice(0, length - 1));

              if (parent) {
                if (Object(_isArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(parent)) {
                  parent.splice(last, 1);
                } else {
                  delete parent[last];
                }
              }
            }
          }
          function renamePathInObject(object, oldPath, newPath) {
            var length = oldPath.length;

            if (object != null) {
              var parent = getInObject(object, oldPath.slice(0, length - 1));

              if (parent) {
                var lastOld = oldPath[length - 1];
                var lastNew = newPath[length - 1];
                parent[lastNew] = parent[lastOld];

                if (Object(_isArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(parent)) {
                  parent.splice(lastOld, 1);
                } else {
                  delete parent[lastOld];
                }
              }
            }
          }
          function setInObject(object, path, value) {
            var length = path.length;
            var last = path[length - 1];

            if (object != null) {
              var parent = getInObject(object, path.slice(0, length - 1));

              if (parent) {
                parent[last] = value;
              }
            }
          }

          /**
           * Get a enhanced/artificial type string based on the object instance
           */
          function getDataType(data) {
            if (data === null) {
              return "null";
            } else if (data === undefined) {
              return "undefined";
            }

            if (Object(react_is__WEBPACK_IMPORTED_MODULE_1__["isElement"])(data)) {
              return "react_element";
            }

            if (typeof HTMLElement !== "undefined" && data instanceof HTMLElement) {
              return "html_element";
            }

            var type = _typeof(data);

            switch (type) {
              case "bigint":
                return "bigint";

              case "boolean":
                return "boolean";

              case "function":
                return "function";

              case "number":
                if (Number.isNaN(data)) {
                  return "nan";
                } else if (!Number.isFinite(data)) {
                  return "infinity";
                } else {
                  return "number";
                }

              case "object":
                if (Object(_isArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(data)) {
                  return "array";
                } else if (ArrayBuffer.isView(data)) {
                  return hasOwnProperty.call(data.constructor, "BYTES_PER_ELEMENT") ? "typed_array" : "data_view";
                } else if (data.constructor && data.constructor.name === "ArrayBuffer") {
                  // HACK This ArrayBuffer check is gross; is there a better way?
                  // We could try to create a new DataView with the value.
                  // If it doesn't error, we know it's an ArrayBuffer,
                  // but this seems kind of awkward and expensive.
                  return "array_buffer";
                } else if (typeof data[Symbol.iterator] === "function") {
                  var iterator = data[Symbol.iterator]();

                  if (!iterator) {
                    // Proxies might break assumptoins about iterators.
                    // See github.com/facebook/react/issues/21654
                  } else {
                    return iterator === data ? "opaque_iterator" : "iterator";
                  }
                } else if (data.constructor && data.constructor.name === "RegExp") {
                  return "regexp";
                } else {
                  // $FlowFixMe[method-unbinding]
                  var toStringValue = Object.prototype.toString.call(data);

                  if (toStringValue === "[object Date]") {
                    return "date";
                  } else if (toStringValue === "[object HTMLAllCollection]") {
                    return "html_all_collection";
                  }
                }

                return "object";

              case "string":
                return "string";

              case "symbol":
                return "symbol";

              case "undefined":
                if (
                  // $FlowFixMe[method-unbinding]
                  Object.prototype.toString.call(data) === "[object HTMLAllCollection]"
                ) {
                  return "html_all_collection";
                }

                return "undefined";

              default:
                return "unknown";
            }
          }
          function getDisplayNameForReactElement(element) {
            var elementType = Object(react_is__WEBPACK_IMPORTED_MODULE_1__["typeOf"])(element);

            switch (elementType) {
              case react_is__WEBPACK_IMPORTED_MODULE_1__["ContextConsumer"]:
                return "ContextConsumer";

              case react_is__WEBPACK_IMPORTED_MODULE_1__["ContextProvider"]:
                return "ContextProvider";

              case react_is__WEBPACK_IMPORTED_MODULE_1__["ForwardRef"]:
                return "ForwardRef";

              case react_is__WEBPACK_IMPORTED_MODULE_1__["Fragment"]:
                return "Fragment";

              case react_is__WEBPACK_IMPORTED_MODULE_1__["Lazy"]:
                return "Lazy";

              case react_is__WEBPACK_IMPORTED_MODULE_1__["Memo"]:
                return "Memo";

              case react_is__WEBPACK_IMPORTED_MODULE_1__["Portal"]:
                return "Portal";

              case react_is__WEBPACK_IMPORTED_MODULE_1__["Profiler"]:
                return "Profiler";

              case react_is__WEBPACK_IMPORTED_MODULE_1__["StrictMode"]:
                return "StrictMode";

              case react_is__WEBPACK_IMPORTED_MODULE_1__["Suspense"]:
                return "Suspense";

              case shared_ReactSymbols__WEBPACK_IMPORTED_MODULE_2__[/* REACT_SUSPENSE_LIST_TYPE */ "a"]:
                return "SuspenseList";

              case shared_ReactSymbols__WEBPACK_IMPORTED_MODULE_2__[/* REACT_TRACING_MARKER_TYPE */ "b"]:
                return "TracingMarker";

              default:
                var type = element.type;

                if (typeof type === "string") {
                  return type;
                } else if (typeof type === "function") {
                  return getDisplayName(type, "Anonymous");
                } else if (type != null) {
                  return "NotImplementedInDevtools";
                } else {
                  return "Element";
                }
            }
          }
          var MAX_PREVIEW_STRING_LENGTH = 50;

          function truncateForDisplay(string) {
            var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_PREVIEW_STRING_LENGTH;

            if (string.length > length) {
              return string.substr(0, length) + "…";
            } else {
              return string;
            }
          } // Attempts to mimic Chrome's inline preview for values.
          // For example, the following value...
          //   {
          //      foo: 123,
          //      bar: "abc",
          //      baz: [true, false],
          //      qux: { ab: 1, cd: 2 }
          //   };
          //
          // Would show a preview of...
          //   {foo: 123, bar: "abc", baz: Array(2), qux: {…}}
          //
          // And the following value...
          //   [
          //     123,
          //     "abc",
          //     [true, false],
          //     { foo: 123, bar: "abc" }
          //   ];
          //
          // Would show a preview of...
          //   [123, "abc", Array(2), {…}]

          function formatDataForPreview(data, showFormattedValue) {
            if (
              data != null &&
              hasOwnProperty.call(data, _hydration__WEBPACK_IMPORTED_MODULE_6__[/* meta */ "b"].type)
            ) {
              return showFormattedValue
                ? data[_hydration__WEBPACK_IMPORTED_MODULE_6__[/* meta */ "b"].preview_long]
                : data[_hydration__WEBPACK_IMPORTED_MODULE_6__[/* meta */ "b"].preview_short];
            }

            var type = getDataType(data);

            switch (type) {
              case "html_element":
                return "<".concat(truncateForDisplay(data.tagName.toLowerCase()), " />");

              case "function":
                return truncateForDisplay("\u0192 ".concat(typeof data.name === "function" ? "" : data.name, "() {}"));

              case "string":
                return '"'.concat(data, '"');

              case "bigint":
                return truncateForDisplay(data.toString() + "n");

              case "regexp":
                return truncateForDisplay(data.toString());

              case "symbol":
                return truncateForDisplay(data.toString());

              case "react_element":
                return "<".concat(truncateForDisplay(getDisplayNameForReactElement(data) || "Unknown"), " />");

              case "array_buffer":
                return "ArrayBuffer(".concat(data.byteLength, ")");

              case "data_view":
                return "DataView(".concat(data.buffer.byteLength, ")");

              case "array":
                if (showFormattedValue) {
                  var formatted = "";

                  for (var i = 0; i < data.length; i++) {
                    if (i > 0) {
                      formatted += ", ";
                    }

                    formatted += formatDataForPreview(data[i], false);

                    if (formatted.length > MAX_PREVIEW_STRING_LENGTH) {
                      // Prevent doing a lot of unnecessary iteration...
                      break;
                    }
                  }

                  return "[".concat(truncateForDisplay(formatted), "]");
                } else {
                  var length = hasOwnProperty.call(data, _hydration__WEBPACK_IMPORTED_MODULE_6__[/* meta */ "b"].size)
                    ? data[_hydration__WEBPACK_IMPORTED_MODULE_6__[/* meta */ "b"].size]
                    : data.length;
                  return "Array(".concat(length, ")");
                }

              case "typed_array":
                var shortName = "".concat(data.constructor.name, "(").concat(data.length, ")");

                if (showFormattedValue) {
                  var _formatted = "";

                  for (var _i = 0; _i < data.length; _i++) {
                    if (_i > 0) {
                      _formatted += ", ";
                    }

                    _formatted += data[_i];

                    if (_formatted.length > MAX_PREVIEW_STRING_LENGTH) {
                      // Prevent doing a lot of unnecessary iteration...
                      break;
                    }
                  }

                  return "".concat(shortName, " [").concat(truncateForDisplay(_formatted), "]");
                } else {
                  return shortName;
                }

              case "iterator":
                var name = data.constructor.name;

                if (showFormattedValue) {
                  // TRICKY
                  // Don't use [...spread] syntax for this purpose.
                  // This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
                  // Other types (e.g. typed arrays, Sets) will not spread correctly.
                  var array = Array.from(data);
                  var _formatted2 = "";

                  for (var _i2 = 0; _i2 < array.length; _i2++) {
                    var entryOrEntries = array[_i2];

                    if (_i2 > 0) {
                      _formatted2 += ", ";
                    } // TRICKY
                    // Browsers display Maps and Sets differently.
                    // To mimic their behavior, detect if we've been given an entries tuple.
                    //   Map(2) {"abc" => 123, "def" => 123}
                    //   Set(2) {"abc", 123}

                    if (Object(_isArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(entryOrEntries)) {
                      var key = formatDataForPreview(entryOrEntries[0], true);
                      var value = formatDataForPreview(entryOrEntries[1], false);
                      _formatted2 += "".concat(key, " => ").concat(value);
                    } else {
                      _formatted2 += formatDataForPreview(entryOrEntries, false);
                    }

                    if (_formatted2.length > MAX_PREVIEW_STRING_LENGTH) {
                      // Prevent doing a lot of unnecessary iteration...
                      break;
                    }
                  }

                  return "".concat(name, "(").concat(data.size, ") {").concat(truncateForDisplay(_formatted2), "}");
                } else {
                  return "".concat(name, "(").concat(data.size, ")");
                }

              case "opaque_iterator": {
                return data[Symbol.toStringTag];
              }

              case "date":
                return data.toString();

              case "object":
                if (showFormattedValue) {
                  var keys = Array.from(getAllEnumerableKeys(data)).sort(alphaSortKeys);
                  var _formatted3 = "";

                  for (var _i3 = 0; _i3 < keys.length; _i3++) {
                    var _key = keys[_i3];

                    if (_i3 > 0) {
                      _formatted3 += ", ";
                    }

                    _formatted3 += "".concat(_key.toString(), ": ").concat(formatDataForPreview(data[_key], false));

                    if (_formatted3.length > MAX_PREVIEW_STRING_LENGTH) {
                      // Prevent doing a lot of unnecessary iteration...
                      break;
                    }
                  }

                  return "{".concat(truncateForDisplay(_formatted3), "}");
                } else {
                  return "{…}";
                }

              case "boolean":
              case "number":
              case "infinity":
              case "nan":
              case "null":
              case "undefined":
                return data;

              default:
                try {
                  return truncateForDisplay(String(data));
                } catch (error) {
                  return "unserializable";
                }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(17)));

        /***/
      },
      /* 1 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () {
          return ElementTypeClass;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function () {
          return ElementTypeContext;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () {
          return ElementTypeFunction;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () {
          return ElementTypeForwardRef;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function () {
          return ElementTypeHostComponent;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function () {
          return ElementTypeMemo;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function () {
          return ElementTypeOtherOrUnknown;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function () {
          return ElementTypeProfiler;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function () {
          return ElementTypeRoot;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function () {
          return ElementTypeSuspense;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function () {
          return ElementTypeSuspenseList;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function () {
          return ElementTypeTracingMarker;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
          return ComponentFilterElementType;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
          return ComponentFilterDisplayName;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () {
          return ComponentFilterLocation;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () {
          return ComponentFilterHOC;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function () {
          return StrictMode;
        });
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        // WARNING
        // The values below are referenced by ComponentFilters (which are saved via localStorage).
        // Do not change them or it will break previously saved user customizations.
        // If new element types are added, use new numbers rather than re-ordering existing ones.
        //
        // Changing these types is also a backwards breaking change for the standalone shell,
        // since the frontend and backend must share the same values-
        // and the backend is embedded in certain environments (like React Native).
        var ElementTypeClass = 1;
        var ElementTypeContext = 2;
        var ElementTypeFunction = 5;
        var ElementTypeForwardRef = 6;
        var ElementTypeHostComponent = 7;
        var ElementTypeMemo = 8;
        var ElementTypeOtherOrUnknown = 9;
        var ElementTypeProfiler = 10;
        var ElementTypeRoot = 11;
        var ElementTypeSuspense = 12;
        var ElementTypeSuspenseList = 13;
        var ElementTypeTracingMarker = 14; // Different types of elements displayed in the Elements tree.
        // These types may be used to visually distinguish types,
        // or to enable/disable certain functionality.

        // WARNING
        // The values below are referenced by ComponentFilters (which are saved via localStorage).
        // Do not change them or it will break previously saved user customizations.
        // If new filter types are added, use new numbers rather than re-ordering existing ones.
        var ComponentFilterElementType = 1;
        var ComponentFilterDisplayName = 2;
        var ComponentFilterLocation = 3;
        var ComponentFilterHOC = 4;
        var StrictMode = 1;

        /***/
      },
      /* 2 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export CHROME_WEBSTORE_EXTENSION_ID */
        /* unused harmony export INTERNAL_EXTENSION_ID */
        /* unused harmony export LOCAL_EXTENSION_ID */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function () {
          return __DEBUG__;
        });
        /* unused harmony export __PERFORMANCE_PROFILE__ */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function () {
          return TREE_OPERATION_ADD;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function () {
          return TREE_OPERATION_REMOVE;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function () {
          return TREE_OPERATION_REORDER_CHILDREN;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function () {
          return TREE_OPERATION_UPDATE_TREE_BASE_DURATION;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function () {
          return TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function () {
          return TREE_OPERATION_REMOVE_ROOT;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function () {
          return TREE_OPERATION_SET_SUBTREE_MODE;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () {
          return PROFILING_FLAG_BASIC_SUPPORT;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () {
          return PROFILING_FLAG_TIMELINE_SUPPORT;
        });
        /* unused harmony export LOCAL_STORAGE_DEFAULT_TAB_KEY */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
          return LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function () {
          return SESSION_STORAGE_LAST_SELECTION_KEY;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () {
          return LOCAL_STORAGE_OPEN_IN_EDITOR_URL;
        });
        /* unused harmony export LOCAL_STORAGE_PARSE_HOOK_NAMES_KEY */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function () {
          return SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function () {
          return SESSION_STORAGE_RELOAD_AND_PROFILE_KEY;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () {
          return LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS;
        });
        /* unused harmony export LOCAL_STORAGE_BROWSER_THEME */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () {
          return LOCAL_STORAGE_SHOULD_APPEND_COMPONENT_STACK_KEY;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function () {
          return LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY;
        });
        /* unused harmony export LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
          return LOCAL_STORAGE_HIDE_CONSOLE_LOGS_IN_STRICT_MODE;
        });
        /* unused harmony export PROFILER_EXPORT_VERSION */
        /* unused harmony export CHANGE_LOG_URL */
        /* unused harmony export UNSUPPORTED_VERSION_URL */
        /* unused harmony export REACT_DEVTOOLS_WORKPLACE_URL */
        /* unused harmony export THEME_STYLES */
        /* unused harmony export COMFORTABLE_LINE_HEIGHT */
        /* unused harmony export COMPACT_LINE_HEIGHT */
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        var CHROME_WEBSTORE_EXTENSION_ID = "fmkadmapgofadopljbjfkapdkoienihi";
        var INTERNAL_EXTENSION_ID = "dnjnjgbfilfphmojnmhliehogmojhclc";
        var LOCAL_EXTENSION_ID = "ikiahnapldjmdmpkmfhjdjilojjhgcbf"; // Flip this flag to true to enable verbose console debug logging.

        var __DEBUG__ = false; // Flip this flag to true to enable performance.mark() and performance.measure() timings.

        var __PERFORMANCE_PROFILE__ = false;
        var TREE_OPERATION_ADD = 1;
        var TREE_OPERATION_REMOVE = 2;
        var TREE_OPERATION_REORDER_CHILDREN = 3;
        var TREE_OPERATION_UPDATE_TREE_BASE_DURATION = 4;
        var TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS = 5;
        var TREE_OPERATION_REMOVE_ROOT = 6;
        var TREE_OPERATION_SET_SUBTREE_MODE = 7;
        var PROFILING_FLAG_BASIC_SUPPORT = 1;
        var PROFILING_FLAG_TIMELINE_SUPPORT = 2;
        var LOCAL_STORAGE_DEFAULT_TAB_KEY = "React::DevTools::defaultTab";
        var LOCAL_STORAGE_COMPONENT_FILTER_PREFERENCES_KEY = "React::DevTools::componentFilters";
        var SESSION_STORAGE_LAST_SELECTION_KEY = "React::DevTools::lastSelection";
        var LOCAL_STORAGE_OPEN_IN_EDITOR_URL = "React::DevTools::openInEditorUrl";
        var LOCAL_STORAGE_PARSE_HOOK_NAMES_KEY = "React::DevTools::parseHookNames";
        var SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY = "React::DevTools::recordChangeDescriptions";
        var SESSION_STORAGE_RELOAD_AND_PROFILE_KEY = "React::DevTools::reloadAndProfile";
        var LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS = "React::DevTools::breakOnConsoleErrors";
        var LOCAL_STORAGE_BROWSER_THEME = "React::DevTools::theme";
        var LOCAL_STORAGE_SHOULD_APPEND_COMPONENT_STACK_KEY = "React::DevTools::appendComponentStack";
        var LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY = "React::DevTools::showInlineWarningsAndErrors";
        var LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY = "React::DevTools::traceUpdatesEnabled";
        var LOCAL_STORAGE_HIDE_CONSOLE_LOGS_IN_STRICT_MODE = "React::DevTools::hideConsoleLogsInStrictMode";
        var PROFILER_EXPORT_VERSION = 5;
        var CHANGE_LOG_URL = "https://github.com/facebook/react/blob/main/packages/react-devtools/CHANGELOG.md";
        var UNSUPPORTED_VERSION_URL =
          "https://reactjs.org/blog/2019/08/15/new-react-devtools.html#how-do-i-get-the-old-version-back";
        var REACT_DEVTOOLS_WORKPLACE_URL = "https://fburl.com/react-devtools-workplace-group";
        var THEME_STYLES = {
          light: {
            "--color-attribute-name": "#ef6632",
            "--color-attribute-name-not-editable": "#23272f",
            "--color-attribute-name-inverted": "rgba(255, 255, 255, 0.7)",
            "--color-attribute-value": "#1a1aa6",
            "--color-attribute-value-inverted": "#ffffff",
            "--color-attribute-editable-value": "#1a1aa6",
            "--color-background": "#ffffff",
            "--color-background-hover": "rgba(0, 136, 250, 0.1)",
            "--color-background-inactive": "#e5e5e5",
            "--color-background-invalid": "#fff0f0",
            "--color-background-selected": "#0088fa",
            "--color-button-background": "#ffffff",
            "--color-button-background-focus": "#ededed",
            "--color-button": "#5f6673",
            "--color-button-disabled": "#cfd1d5",
            "--color-button-active": "#0088fa",
            "--color-button-focus": "#23272f",
            "--color-button-hover": "#23272f",
            "--color-border": "#eeeeee",
            "--color-commit-did-not-render-fill": "#cfd1d5",
            "--color-commit-did-not-render-fill-text": "#000000",
            "--color-commit-did-not-render-pattern": "#cfd1d5",
            "--color-commit-did-not-render-pattern-text": "#333333",
            "--color-commit-gradient-0": "#37afa9",
            "--color-commit-gradient-1": "#63b19e",
            "--color-commit-gradient-2": "#80b393",
            "--color-commit-gradient-3": "#97b488",
            "--color-commit-gradient-4": "#abb67d",
            "--color-commit-gradient-5": "#beb771",
            "--color-commit-gradient-6": "#cfb965",
            "--color-commit-gradient-7": "#dfba57",
            "--color-commit-gradient-8": "#efbb49",
            "--color-commit-gradient-9": "#febc38",
            "--color-commit-gradient-text": "#000000",
            "--color-component-name": "#6a51b2",
            "--color-component-name-inverted": "#ffffff",
            "--color-component-badge-background": "rgba(0, 0, 0, 0.1)",
            "--color-component-badge-background-inverted": "rgba(255, 255, 255, 0.25)",
            "--color-component-badge-count": "#777d88",
            "--color-component-badge-count-inverted": "rgba(255, 255, 255, 0.7)",
            "--color-console-error-badge-text": "#ffffff",
            "--color-console-error-background": "#fff0f0",
            "--color-console-error-border": "#ffd6d6",
            "--color-console-error-icon": "#eb3941",
            "--color-console-error-text": "#fe2e31",
            "--color-console-warning-badge-text": "#000000",
            "--color-console-warning-background": "#fffbe5",
            "--color-console-warning-border": "#fff5c1",
            "--color-console-warning-icon": "#f4bd00",
            "--color-console-warning-text": "#64460c",
            "--color-context-background": "rgba(0,0,0,.9)",
            "--color-context-background-hover": "rgba(255, 255, 255, 0.1)",
            "--color-context-background-selected": "#178fb9",
            "--color-context-border": "#3d424a",
            "--color-context-text": "#ffffff",
            "--color-context-text-selected": "#ffffff",
            "--color-dim": "#777d88",
            "--color-dimmer": "#cfd1d5",
            "--color-dimmest": "#eff0f1",
            "--color-error-background": "hsl(0, 100%, 97%)",
            "--color-error-border": "hsl(0, 100%, 92%)",
            "--color-error-text": "#ff0000",
            "--color-expand-collapse-toggle": "#777d88",
            "--color-link": "#0000ff",
            "--color-modal-background": "rgba(255, 255, 255, 0.75)",
            "--color-bridge-version-npm-background": "#eff0f1",
            "--color-bridge-version-npm-text": "#000000",
            "--color-bridge-version-number": "#0088fa",
            "--color-primitive-hook-badge-background": "#e5e5e5",
            "--color-primitive-hook-badge-text": "#5f6673",
            "--color-record-active": "#fc3a4b",
            "--color-record-hover": "#3578e5",
            "--color-record-inactive": "#0088fa",
            "--color-resize-bar": "#eeeeee",
            "--color-resize-bar-active": "#dcdcdc",
            "--color-resize-bar-border": "#d1d1d1",
            "--color-resize-bar-dot": "#333333",
            "--color-timeline-internal-module": "#d1d1d1",
            "--color-timeline-internal-module-hover": "#c9c9c9",
            "--color-timeline-internal-module-text": "#444",
            "--color-timeline-native-event": "#ccc",
            "--color-timeline-native-event-hover": "#aaa",
            "--color-timeline-network-primary": "#fcf3dc",
            "--color-timeline-network-primary-hover": "#f0e7d1",
            "--color-timeline-network-secondary": "#efc457",
            "--color-timeline-network-secondary-hover": "#e3ba52",
            "--color-timeline-priority-background": "#f6f6f6",
            "--color-timeline-priority-border": "#eeeeee",
            "--color-timeline-user-timing": "#c9cacd",
            "--color-timeline-user-timing-hover": "#93959a",
            "--color-timeline-react-idle": "#d3e5f6",
            "--color-timeline-react-idle-hover": "#c3d9ef",
            "--color-timeline-react-render": "#9fc3f3",
            "--color-timeline-react-render-hover": "#83afe9",
            "--color-timeline-react-render-text": "#11365e",
            "--color-timeline-react-commit": "#c88ff0",
            "--color-timeline-react-commit-hover": "#b281d6",
            "--color-timeline-react-commit-text": "#3e2c4a",
            "--color-timeline-react-layout-effects": "#b281d6",
            "--color-timeline-react-layout-effects-hover": "#9d71bd",
            "--color-timeline-react-layout-effects-text": "#3e2c4a",
            "--color-timeline-react-passive-effects": "#b281d6",
            "--color-timeline-react-passive-effects-hover": "#9d71bd",
            "--color-timeline-react-passive-effects-text": "#3e2c4a",
            "--color-timeline-react-schedule": "#9fc3f3",
            "--color-timeline-react-schedule-hover": "#2683E2",
            "--color-timeline-react-suspense-rejected": "#f1cc14",
            "--color-timeline-react-suspense-rejected-hover": "#ffdf37",
            "--color-timeline-react-suspense-resolved": "#a6e59f",
            "--color-timeline-react-suspense-resolved-hover": "#89d281",
            "--color-timeline-react-suspense-unresolved": "#c9cacd",
            "--color-timeline-react-suspense-unresolved-hover": "#93959a",
            "--color-timeline-thrown-error": "#ee1638",
            "--color-timeline-thrown-error-hover": "#da1030",
            "--color-timeline-text-color": "#000000",
            "--color-timeline-text-dim-color": "#ccc",
            "--color-timeline-react-work-border": "#eeeeee",
            "--color-search-match": "yellow",
            "--color-search-match-current": "#f7923b",
            "--color-selected-tree-highlight-active": "rgba(0, 136, 250, 0.1)",
            "--color-selected-tree-highlight-inactive": "rgba(0, 0, 0, 0.05)",
            "--color-scroll-caret": "rgba(150, 150, 150, 0.5)",
            "--color-tab-selected-border": "#0088fa",
            "--color-text": "#000000",
            "--color-text-invalid": "#ff0000",
            "--color-text-selected": "#ffffff",
            "--color-toggle-background-invalid": "#fc3a4b",
            "--color-toggle-background-on": "#0088fa",
            "--color-toggle-background-off": "#cfd1d5",
            "--color-toggle-text": "#ffffff",
            "--color-warning-background": "#fb3655",
            "--color-warning-background-hover": "#f82042",
            "--color-warning-text-color": "#ffffff",
            "--color-warning-text-color-inverted": "#fd4d69",
            // The styles below should be kept in sync with 'root.css'
            // They are repeated there because they're used by e.g. tooltips or context menus
            // which get rendered outside of the DOM subtree (where normal theme/styles are written).
            "--color-scroll-thumb": "#c2c2c2",
            "--color-scroll-track": "#fafafa",
            "--color-tooltip-background": "rgba(0, 0, 0, 0.9)",
            "--color-tooltip-text": "#ffffff",
          },
          dark: {
            "--color-attribute-name": "#9d87d2",
            "--color-attribute-name-not-editable": "#ededed",
            "--color-attribute-name-inverted": "#282828",
            "--color-attribute-value": "#cedae0",
            "--color-attribute-value-inverted": "#ffffff",
            "--color-attribute-editable-value": "yellow",
            "--color-background": "#282c34",
            "--color-background-hover": "rgba(255, 255, 255, 0.1)",
            "--color-background-inactive": "#3d424a",
            "--color-background-invalid": "#5c0000",
            "--color-background-selected": "#178fb9",
            "--color-button-background": "#282c34",
            "--color-button-background-focus": "#3d424a",
            "--color-button": "#afb3b9",
            "--color-button-active": "#61dafb",
            "--color-button-disabled": "#4f5766",
            "--color-button-focus": "#a2e9fc",
            "--color-button-hover": "#ededed",
            "--color-border": "#3d424a",
            "--color-commit-did-not-render-fill": "#777d88",
            "--color-commit-did-not-render-fill-text": "#000000",
            "--color-commit-did-not-render-pattern": "#666c77",
            "--color-commit-did-not-render-pattern-text": "#ffffff",
            "--color-commit-gradient-0": "#37afa9",
            "--color-commit-gradient-1": "#63b19e",
            "--color-commit-gradient-2": "#80b393",
            "--color-commit-gradient-3": "#97b488",
            "--color-commit-gradient-4": "#abb67d",
            "--color-commit-gradient-5": "#beb771",
            "--color-commit-gradient-6": "#cfb965",
            "--color-commit-gradient-7": "#dfba57",
            "--color-commit-gradient-8": "#efbb49",
            "--color-commit-gradient-9": "#febc38",
            "--color-commit-gradient-text": "#000000",
            "--color-component-name": "#61dafb",
            "--color-component-name-inverted": "#282828",
            "--color-component-badge-background": "rgba(255, 255, 255, 0.25)",
            "--color-component-badge-background-inverted": "rgba(0, 0, 0, 0.25)",
            "--color-component-badge-count": "#8f949d",
            "--color-component-badge-count-inverted": "rgba(255, 255, 255, 0.7)",
            "--color-console-error-badge-text": "#000000",
            "--color-console-error-background": "#290000",
            "--color-console-error-border": "#5c0000",
            "--color-console-error-icon": "#eb3941",
            "--color-console-error-text": "#fc7f7f",
            "--color-console-warning-badge-text": "#000000",
            "--color-console-warning-background": "#332b00",
            "--color-console-warning-border": "#665500",
            "--color-console-warning-icon": "#f4bd00",
            "--color-console-warning-text": "#f5f2ed",
            "--color-context-background": "rgba(255,255,255,.95)",
            "--color-context-background-hover": "rgba(0, 136, 250, 0.1)",
            "--color-context-background-selected": "#0088fa",
            "--color-context-border": "#eeeeee",
            "--color-context-text": "#000000",
            "--color-context-text-selected": "#ffffff",
            "--color-dim": "#8f949d",
            "--color-dimmer": "#777d88",
            "--color-dimmest": "#4f5766",
            "--color-error-background": "#200",
            "--color-error-border": "#900",
            "--color-error-text": "#f55",
            "--color-expand-collapse-toggle": "#8f949d",
            "--color-link": "#61dafb",
            "--color-modal-background": "rgba(0, 0, 0, 0.75)",
            "--color-bridge-version-npm-background": "rgba(0, 0, 0, 0.25)",
            "--color-bridge-version-npm-text": "#ffffff",
            "--color-bridge-version-number": "yellow",
            "--color-primitive-hook-badge-background": "rgba(0, 0, 0, 0.25)",
            "--color-primitive-hook-badge-text": "rgba(255, 255, 255, 0.7)",
            "--color-record-active": "#fc3a4b",
            "--color-record-hover": "#a2e9fc",
            "--color-record-inactive": "#61dafb",
            "--color-resize-bar": "#282c34",
            "--color-resize-bar-active": "#31363f",
            "--color-resize-bar-border": "#3d424a",
            "--color-resize-bar-dot": "#cfd1d5",
            "--color-timeline-internal-module": "#303542",
            "--color-timeline-internal-module-hover": "#363b4a",
            "--color-timeline-internal-module-text": "#7f8899",
            "--color-timeline-native-event": "#b2b2b2",
            "--color-timeline-native-event-hover": "#949494",
            "--color-timeline-network-primary": "#fcf3dc",
            "--color-timeline-network-primary-hover": "#e3dbc5",
            "--color-timeline-network-secondary": "#efc457",
            "--color-timeline-network-secondary-hover": "#d6af4d",
            "--color-timeline-priority-background": "#1d2129",
            "--color-timeline-priority-border": "#282c34",
            "--color-timeline-user-timing": "#c9cacd",
            "--color-timeline-user-timing-hover": "#93959a",
            "--color-timeline-react-idle": "#3d485b",
            "--color-timeline-react-idle-hover": "#465269",
            "--color-timeline-react-render": "#2683E2",
            "--color-timeline-react-render-hover": "#1a76d4",
            "--color-timeline-react-render-text": "#11365e",
            "--color-timeline-react-commit": "#731fad",
            "--color-timeline-react-commit-hover": "#611b94",
            "--color-timeline-react-commit-text": "#e5c1ff",
            "--color-timeline-react-layout-effects": "#611b94",
            "--color-timeline-react-layout-effects-hover": "#51167a",
            "--color-timeline-react-layout-effects-text": "#e5c1ff",
            "--color-timeline-react-passive-effects": "#611b94",
            "--color-timeline-react-passive-effects-hover": "#51167a",
            "--color-timeline-react-passive-effects-text": "#e5c1ff",
            "--color-timeline-react-schedule": "#2683E2",
            "--color-timeline-react-schedule-hover": "#1a76d4",
            "--color-timeline-react-suspense-rejected": "#f1cc14",
            "--color-timeline-react-suspense-rejected-hover": "#e4c00f",
            "--color-timeline-react-suspense-resolved": "#a6e59f",
            "--color-timeline-react-suspense-resolved-hover": "#89d281",
            "--color-timeline-react-suspense-unresolved": "#c9cacd",
            "--color-timeline-react-suspense-unresolved-hover": "#93959a",
            "--color-timeline-thrown-error": "#fb3655",
            "--color-timeline-thrown-error-hover": "#f82042",
            "--color-timeline-text-color": "#282c34",
            "--color-timeline-text-dim-color": "#555b66",
            "--color-timeline-react-work-border": "#3d424a",
            "--color-search-match": "yellow",
            "--color-search-match-current": "#f7923b",
            "--color-selected-tree-highlight-active": "rgba(23, 143, 185, 0.15)",
            "--color-selected-tree-highlight-inactive": "rgba(255, 255, 255, 0.05)",
            "--color-scroll-caret": "#4f5766",
            "--color-shadow": "rgba(0, 0, 0, 0.5)",
            "--color-tab-selected-border": "#178fb9",
            "--color-text": "#ffffff",
            "--color-text-invalid": "#ff8080",
            "--color-text-selected": "#ffffff",
            "--color-toggle-background-invalid": "#fc3a4b",
            "--color-toggle-background-on": "#178fb9",
            "--color-toggle-background-off": "#777d88",
            "--color-toggle-text": "#ffffff",
            "--color-warning-background": "#ee1638",
            "--color-warning-background-hover": "#da1030",
            "--color-warning-text-color": "#ffffff",
            "--color-warning-text-color-inverted": "#ee1638",
            // The styles below should be kept in sync with 'root.css'
            // They are repeated there because they're used by e.g. tooltips or context menus
            // which get rendered outside of the DOM subtree (where normal theme/styles are written).
            "--color-scroll-thumb": "#afb3b9",
            "--color-scroll-track": "#313640",
            "--color-tooltip-background": "rgba(255, 255, 255, 0.95)",
            "--color-tooltip-text": "#000000",
          },
          compact: {
            "--font-size-monospace-small": "9px",
            "--font-size-monospace-normal": "11px",
            "--font-size-monospace-large": "15px",
            "--font-size-sans-small": "10px",
            "--font-size-sans-normal": "12px",
            "--font-size-sans-large": "14px",
            "--line-height-data": "18px",
          },
          comfortable: {
            "--font-size-monospace-small": "10px",
            "--font-size-monospace-normal": "13px",
            "--font-size-monospace-large": "17px",
            "--font-size-sans-small": "12px",
            "--font-size-sans-normal": "14px",
            "--font-size-sans-large": "16px",
            "--line-height-data": "22px",
          },
        }; // HACK
        //
        // Sometimes the inline target is rendered before root styles are applied,
        // which would result in e.g. NaN itemSize being passed to react-window list.

        var COMFORTABLE_LINE_HEIGHT = parseInt(THEME_STYLES.comfortable["--line-height-data"], 10);
        var COMPACT_LINE_HEIGHT = parseInt(THEME_STYLES.compact["--line-height-data"], 10);

        /***/
      },
      /* 3 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
          return CONCURRENT_MODE_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
          return CONCURRENT_MODE_SYMBOL_STRING;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () {
          return CONTEXT_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () {
          return CONTEXT_SYMBOL_STRING;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function () {
          return SERVER_CONTEXT_SYMBOL_STRING;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () {
          return DEPRECATED_ASYNC_MODE_SYMBOL_STRING;
        });
        /* unused harmony export ELEMENT_NUMBER */
        /* unused harmony export ELEMENT_SYMBOL_STRING */
        /* unused harmony export DEBUG_TRACING_MODE_NUMBER */
        /* unused harmony export DEBUG_TRACING_MODE_SYMBOL_STRING */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function () {
          return FORWARD_REF_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () {
          return FORWARD_REF_SYMBOL_STRING;
        });
        /* unused harmony export FRAGMENT_NUMBER */
        /* unused harmony export FRAGMENT_SYMBOL_STRING */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () {
          return LAZY_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function () {
          return LAZY_SYMBOL_STRING;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function () {
          return MEMO_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function () {
          return MEMO_SYMBOL_STRING;
        });
        /* unused harmony export PORTAL_NUMBER */
        /* unused harmony export PORTAL_SYMBOL_STRING */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function () {
          return PROFILER_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function () {
          return PROFILER_SYMBOL_STRING;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function () {
          return PROVIDER_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function () {
          return PROVIDER_SYMBOL_STRING;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function () {
          return SCOPE_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function () {
          return SCOPE_SYMBOL_STRING;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function () {
          return STRICT_MODE_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function () {
          return STRICT_MODE_SYMBOL_STRING;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function () {
          return SUSPENSE_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function () {
          return SUSPENSE_SYMBOL_STRING;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function () {
          return SUSPENSE_LIST_NUMBER;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function () {
          return SUSPENSE_LIST_SYMBOL_STRING;
        });
        /* unused harmony export SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED_SYMBOL_STRING */
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        // This list should be kept updated to reflect additions to 'shared/ReactSymbols'.
        // DevTools can't import symbols from 'shared/ReactSymbols' directly for two reasons:
        // 1. DevTools requires symbols which may have been deleted in more recent versions (e.g. concurrent mode)
        // 2. DevTools must support both Symbol and numeric forms of each symbol;
        //    Since e.g. standalone DevTools runs in a separate process, it can't rely on its own ES capabilities.
        var CONCURRENT_MODE_NUMBER = 0xeacf;
        var CONCURRENT_MODE_SYMBOL_STRING = "Symbol(react.concurrent_mode)";
        var CONTEXT_NUMBER = 0xeace;
        var CONTEXT_SYMBOL_STRING = "Symbol(react.context)";
        var SERVER_CONTEXT_SYMBOL_STRING = "Symbol(react.server_context)";
        var DEPRECATED_ASYNC_MODE_SYMBOL_STRING = "Symbol(react.async_mode)";
        var ELEMENT_NUMBER = 0xeac7;
        var ELEMENT_SYMBOL_STRING = "Symbol(react.element)";
        var DEBUG_TRACING_MODE_NUMBER = 0xeae1;
        var DEBUG_TRACING_MODE_SYMBOL_STRING = "Symbol(react.debug_trace_mode)";
        var FORWARD_REF_NUMBER = 0xead0;
        var FORWARD_REF_SYMBOL_STRING = "Symbol(react.forward_ref)";
        var FRAGMENT_NUMBER = 0xeacb;
        var FRAGMENT_SYMBOL_STRING = "Symbol(react.fragment)";
        var LAZY_NUMBER = 0xead4;
        var LAZY_SYMBOL_STRING = "Symbol(react.lazy)";
        var MEMO_NUMBER = 0xead3;
        var MEMO_SYMBOL_STRING = "Symbol(react.memo)";
        var PORTAL_NUMBER = 0xeaca;
        var PORTAL_SYMBOL_STRING = "Symbol(react.portal)";
        var PROFILER_NUMBER = 0xead2;
        var PROFILER_SYMBOL_STRING = "Symbol(react.profiler)";
        var PROVIDER_NUMBER = 0xeacd;
        var PROVIDER_SYMBOL_STRING = "Symbol(react.provider)";
        var SCOPE_NUMBER = 0xead7;
        var SCOPE_SYMBOL_STRING = "Symbol(react.scope)";
        var STRICT_MODE_NUMBER = 0xeacc;
        var STRICT_MODE_SYMBOL_STRING = "Symbol(react.strict_mode)";
        var SUSPENSE_NUMBER = 0xead1;
        var SUSPENSE_SYMBOL_STRING = "Symbol(react.suspense)";
        var SUSPENSE_LIST_NUMBER = 0xead8;
        var SUSPENSE_LIST_SYMBOL_STRING = "Symbol(react.suspense_list)";
        var SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED_SYMBOL_STRING = "Symbol(react.server_context.defaultValue)";

        /***/
      },
      /* 4 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
          return cleanForBridge;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
          return copyToClipboard;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () {
          return copyWithDelete;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () {
          return copyWithRename;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () {
          return copyWithSet;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () {
          return getEffectDurations;
        });
        /* unused harmony export serializeToString */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () {
          return formatWithStyles;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function () {
          return format;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function () {
          return isSynchronousXHRSupported;
        });
        /* harmony import */ var clipboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
        /* harmony import */ var clipboard_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(clipboard_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
        /* harmony import */ var shared_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        /**
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

        function cleanForBridge(data, isPathAllowed) {
          var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

          if (data !== null) {
            var cleanedPaths = [];
            var unserializablePaths = [];
            var cleanedData = Object(_hydration__WEBPACK_IMPORTED_MODULE_1__[/* dehydrate */ "a"])(
              data,
              cleanedPaths,
              unserializablePaths,
              path,
              isPathAllowed
            );
            return {
              data: cleanedData,
              cleaned: cleanedPaths,
              unserializable: unserializablePaths,
            };
          } else {
            return null;
          }
        }
        function copyToClipboard(value) {
          var safeToCopy = serializeToString(value);
          var text = safeToCopy === undefined ? "undefined" : safeToCopy;
          var clipboardCopyText = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.clipboardCopyText; // On Firefox navigator.clipboard.writeText has to be called from
          // the content script js code (because it requires the clipboardWrite
          // permission to be allowed out of a "user handling" callback),
          // clipboardCopyText is an helper injected into the page from.
          // injectGlobalHook.

          if (typeof clipboardCopyText === "function") {
            clipboardCopyText(text).catch(function (err) {});
          } else {
            Object(clipboard_js__WEBPACK_IMPORTED_MODULE_0__["copy"])(text);
          }
        }
        function copyWithDelete(obj, path) {
          var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var key = path[index];
          var updated = Object(shared_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj)
            ? obj.slice()
            : _objectSpread({}, obj);

          if (index + 1 === path.length) {
            if (Object(shared_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(updated)) {
              updated.splice(key, 1);
            } else {
              delete updated[key];
            }
          } else {
            // $FlowFixMe number or string is fine here
            updated[key] = copyWithDelete(obj[key], path, index + 1);
          }

          return updated;
        } // This function expects paths to be the same except for the final value.
        // e.g. ['path', 'to', 'foo'] and ['path', 'to', 'bar']

        function copyWithRename(obj, oldPath, newPath) {
          var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var oldKey = oldPath[index];
          var updated = Object(shared_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj)
            ? obj.slice()
            : _objectSpread({}, obj);

          if (index + 1 === oldPath.length) {
            var newKey = newPath[index]; // $FlowFixMe number or string is fine here

            updated[newKey] = updated[oldKey];

            if (Object(shared_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(updated)) {
              updated.splice(oldKey, 1);
            } else {
              delete updated[oldKey];
            }
          } else {
            // $FlowFixMe number or string is fine here
            updated[oldKey] = copyWithRename(obj[oldKey], oldPath, newPath, index + 1);
          }

          return updated;
        }
        function copyWithSet(obj, path, value) {
          var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

          if (index >= path.length) {
            return value;
          }

          var key = path[index];
          var updated = Object(shared_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj)
            ? obj.slice()
            : _objectSpread({}, obj); // $FlowFixMe number or string is fine here

          updated[key] = copyWithSet(obj[key], path, value, index + 1);
          return updated;
        }
        function getEffectDurations(root) {
          // Profiling durations are only available for certain builds.
          // If available, they'll be stored on the HostRoot.
          var effectDuration = null;
          var passiveEffectDuration = null;
          var hostRoot = root.current;

          if (hostRoot != null) {
            var stateNode = hostRoot.stateNode;

            if (stateNode != null) {
              effectDuration = stateNode.effectDuration != null ? stateNode.effectDuration : null;
              passiveEffectDuration = stateNode.passiveEffectDuration != null ? stateNode.passiveEffectDuration : null;
            }
          }

          return {
            effectDuration: effectDuration,
            passiveEffectDuration: passiveEffectDuration,
          };
        }
        function serializeToString(data) {
          var cache = new Set(); // Use a custom replacer function to protect against circular references.

          return JSON.stringify(data, function (key, value) {
            if (_typeof(value) === "object" && value !== null) {
              if (cache.has(value)) {
                return;
              }

              cache.add(value);
            } // $FlowFixMe

            if (typeof value === "bigint") {
              return value.toString() + "n";
            }

            return value;
          });
        } // Formats an array of args with a style for console methods, using
        // the following algorithm:
        //     1. The first param is a string that contains %c
        //          - Bail out and return the args without modifying the styles.
        //            We don't want to affect styles that the developer deliberately set.
        //     2. The first param is a string that doesn't contain %c but contains
        //        string formatting
        //          - [`%c${args[0]}`, style, ...args.slice(1)]
        //          - Note: we assume that the string formatting that the developer uses
        //            is correct.
        //     3. The first param is a string that doesn't contain string formatting
        //        OR is not a string
        //          - Create a formatting string where:
        //                 boolean, string, symbol -> %s
        //                 number -> %f OR %i depending on if it's an int or float
        //                 default -> %o

        function formatWithStyles(inputArgs, style) {
          if (
            inputArgs === undefined ||
            inputArgs === null ||
            inputArgs.length === 0 || // Matches any of %c but not %%c
            (typeof inputArgs[0] === "string" && inputArgs[0].match(/([^%]|^)(%c)/g)) ||
            style === undefined
          ) {
            return inputArgs;
          } // Matches any of %(o|O|d|i|s|f), but not %%(o|O|d|i|s|f)

          var REGEXP = /([^%]|^)((%%)*)(%([oOdisf]))/g;

          if (typeof inputArgs[0] === "string" && inputArgs[0].match(REGEXP)) {
            return ["%c".concat(inputArgs[0]), style].concat(_toConsumableArray(inputArgs.slice(1)));
          } else {
            var firstArg = inputArgs.reduce(function (formatStr, elem, i) {
              if (i > 0) {
                formatStr += " ";
              }

              switch (_typeof(elem)) {
                case "string":
                case "boolean":
                case "symbol":
                  return (formatStr += "%s");

                case "number":
                  var formatting = Number.isInteger(elem) ? "%i" : "%f";
                  return (formatStr += formatting);

                default:
                  return (formatStr += "%o");
              }
            }, "%c");
            return [firstArg, style].concat(_toConsumableArray(inputArgs));
          }
        } // based on https://github.com/tmpfs/format-util/blob/0e62d430efb0a1c51448709abd3e2406c14d8401/format.js#L1
        // based on https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions
        // Implements s, d, i and f placeholders
        // NOTE: KEEP IN SYNC with src/hook.js

        function format(maybeMessage) {
          for (
            var _len = arguments.length, inputArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
            _key < _len;
            _key++
          ) {
            inputArgs[_key - 1] = arguments[_key];
          }

          var args = inputArgs.slice();
          var formatted = String(maybeMessage); // If the first argument is a string, check for substitutions.

          if (typeof maybeMessage === "string") {
            if (args.length) {
              var REGEXP = /(%?)(%([jds]))/g;
              formatted = formatted.replace(REGEXP, function (match, escaped, ptn, flag) {
                var arg = args.shift();

                switch (flag) {
                  case "s":
                    arg += "";
                    break;

                  case "d":
                  case "i":
                    arg = parseInt(arg, 10).toString();
                    break;

                  case "f":
                    arg = parseFloat(arg).toString();
                    break;
                }

                if (!escaped) {
                  return arg;
                }

                args.unshift(arg);
                return match;
              });
            }
          } // Arguments that remain after formatting.

          if (args.length) {
            for (var i = 0; i < args.length; i++) {
              formatted += " " + String(args[i]);
            }
          } // Update escaped %% values.

          formatted = formatted.replace(/%{2,2}/g, "%");
          return String(formatted);
        }
        function isSynchronousXHRSupported() {
          return !!(
            window.document &&
            window.document.featurePolicy &&
            window.document.featurePolicy.allowsFeature("sync-xhr")
          );
        }

        /***/
      },
      /* 5 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
          return localStorageGetItem;
        });
        /* unused harmony export localStorageRemoveItem */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
          return localStorageSetItem;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () {
          return sessionStorageGetItem;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () {
          return sessionStorageRemoveItem;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () {
          return sessionStorageSetItem;
        });
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        function localStorageGetItem(key) {
          try {
            return localStorage.getItem(key);
          } catch (error) {
            return null;
          }
        }
        function localStorageRemoveItem(key) {
          try {
            localStorage.removeItem(key);
          } catch (error) {}
        }
        function localStorageSetItem(key, value) {
          try {
            return localStorage.setItem(key, value);
          } catch (error) {}
        }
        function sessionStorageGetItem(key) {
          try {
            return sessionStorage.getItem(key);
          } catch (error) {
            return null;
          }
        }
        function sessionStorageRemoveItem(key) {
          try {
            sessionStorage.removeItem(key);
          } catch (error) {}
        }
        function sessionStorageSetItem(key, value) {
          try {
            return sessionStorage.setItem(key, value);
          } catch (error) {}
        }

        /***/
      },
      /* 6 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        var isArray = Array.isArray;
        /* harmony default export */ __webpack_exports__["a"] = isArray;

        /***/
      },
      /* 7 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        if (true) {
          module.exports = __webpack_require__(26);
        } else {
        }

        /***/
      },
      /* 8 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (global) {
          /* unused harmony export isStringComponentStack */
          /* unused harmony export dangerous_setTargetConsoleForTesting */
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () {
            return registerRenderer;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
            return patch;
          });
          /* unused harmony export unpatch */
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () {
            return patchForStrictMode;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () {
            return unpatchForStrictMode;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
            return patchConsoleUsingWindowValues;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function () {
            return writeConsolePatchSettingsToWindow;
          });
          /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
          /* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
          /* harmony import */ var _DevToolsFiberComponentStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
          /* harmony import */ var react_devtools_feature_flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
          /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
          function _toConsumableArray(arr) {
            return (
              _arrayWithoutHoles(arr) ||
              _iterableToArray(arr) ||
              _unsupportedIterableToArray(arr) ||
              _nonIterableSpread()
            );
          }

          function _nonIterableSpread() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }

          function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
          }

          function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          }

          function _createForOfIteratorHelper(o, allowArrayLike) {
            var it;
            if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
              if (
                Array.isArray(o) ||
                (it = _unsupportedIterableToArray(o)) ||
                (allowArrayLike && o && typeof o.length === "number")
              ) {
                if (it) o = it;
                var i = 0;
                var F = function F() {};
                return {
                  s: F,
                  n: function n() {
                    if (i >= o.length) return { done: true };
                    return { done: false, value: o[i++] };
                  },
                  e: function e(_e) {
                    throw _e;
                  },
                  f: F,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var normalCompletion = true,
              didErr = false,
              err;
            return {
              s: function s() {
                it = o[Symbol.iterator]();
              },
              n: function n() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
              },
              e: function e(_e2) {
                didErr = true;
                err = _e2;
              },
              f: function f() {
                try {
                  if (!normalCompletion && it.return != null) it.return();
                } finally {
                  if (didErr) throw err;
                }
              },
            };
          }

          function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          }

          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }

          /**
           * Copyright (c) Meta Platforms, Inc. and affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *
           */

          var OVERRIDE_CONSOLE_METHODS = ["error", "trace", "warn"];
          var DIMMED_NODE_CONSOLE_COLOR = "\x1b[2m%s\x1b[0m"; // React's custom built component stack strings match "\s{4}in"
          // Chrome's prefix matches "\s{4}at"

          var PREFIX_REGEX = /\s{4}(in|at)\s{1}/; // Firefox and Safari have no prefix ("")
          // but we can fallback to looking for location info (e.g. "foo.js:12:345")

          var ROW_COLUMN_NUMBER_REGEX = /:\d+:\d+(\n|$)/;
          function isStringComponentStack(text) {
            return PREFIX_REGEX.test(text) || ROW_COLUMN_NUMBER_REGEX.test(text);
          }
          var STYLE_DIRECTIVE_REGEX = /^%c/; // This function tells whether or not the arguments for a console
          // method has been overridden by the patchForStrictMode function.
          // If it has we'll need to do some special formatting of the arguments
          // so the console color stays consistent

          function isStrictModeOverride(args, method) {
            return (
              args.length >= 2 &&
              STYLE_DIRECTIVE_REGEX.test(args[0]) &&
              args[1] === "color: ".concat(getConsoleColor(method) || "")
            );
          }

          function getConsoleColor(method) {
            switch (method) {
              case "warn":
                return consoleSettingsRef.browserTheme === "light"
                  ? "rgba(250, 180, 50, 0.75)"
                  : "rgba(250, 180, 50, 0.5)";

              case "error":
                return consoleSettingsRef.browserTheme === "light"
                  ? "rgba(250, 123, 130, 0.75)"
                  : "rgba(250, 123, 130, 0.5)";

              case "log":
              default:
                return consoleSettingsRef.browserTheme === "light"
                  ? "rgba(125, 125, 125, 0.75)"
                  : "rgba(125, 125, 125, 0.5)";
            }
          }

          var injectedRenderers = new Map();
          var targetConsole = console;
          var targetConsoleMethods = {};

          for (var method in console) {
            targetConsoleMethods[method] = console[method];
          }

          var unpatchFn = null;
          var isNode = false;

          try {
            isNode = undefined === global;
          } catch (error) {} // Enables e.g. Jest tests to inject a mock console object.

          function dangerous_setTargetConsoleForTesting(targetConsoleForTesting) {
            targetConsole = targetConsoleForTesting;
            targetConsoleMethods = {};

            for (var _method in targetConsole) {
              targetConsoleMethods[_method] = console[_method];
            }
          } // v16 renderers should use this method to inject internals necessary to generate a component stack.
          // These internals will be used if the console is patched.
          // Injecting them separately allows the console to easily be patched or un-patched later (at runtime).

          function registerRenderer(renderer, onErrorOrWarning) {
            var currentDispatcherRef = renderer.currentDispatcherRef,
              getCurrentFiber = renderer.getCurrentFiber,
              findFiberByHostInstance = renderer.findFiberByHostInstance,
              version = renderer.version; // Ignore React v15 and older because they don't expose a component stack anyway.

            if (typeof findFiberByHostInstance !== "function") {
              return;
            } // currentDispatcherRef gets injected for v16.8+ to support hooks inspection.
            // getCurrentFiber gets injected for v16.9+.

            if (currentDispatcherRef != null && typeof getCurrentFiber === "function") {
              var _getInternalReactCons = Object(
                  _renderer__WEBPACK_IMPORTED_MODULE_1__[/* getInternalReactConstants */ "b"]
                )(version),
                ReactTypeOfWork = _getInternalReactCons.ReactTypeOfWork;

              injectedRenderers.set(renderer, {
                currentDispatcherRef: currentDispatcherRef,
                getCurrentFiber: getCurrentFiber,
                workTagMap: ReactTypeOfWork,
                onErrorOrWarning: onErrorOrWarning,
              });
            }
          }
          var consoleSettingsRef = {
            appendComponentStack: false,
            breakOnConsoleErrors: false,
            showInlineWarningsAndErrors: false,
            hideConsoleLogsInStrictMode: false,
            browserTheme: "dark",
          };
          // Patches console methods to append component stack for the current fiber.
          // Call unpatch() to remove the injected behavior.
          function patch(_ref) {
            var appendComponentStack = _ref.appendComponentStack,
              breakOnConsoleErrors = _ref.breakOnConsoleErrors,
              showInlineWarningsAndErrors = _ref.showInlineWarningsAndErrors,
              hideConsoleLogsInStrictMode = _ref.hideConsoleLogsInStrictMode,
              browserTheme = _ref.browserTheme;
            // Settings may change after we've patched the console.
            // Using a shared ref allows the patch function to read the latest values.
            consoleSettingsRef.appendComponentStack = appendComponentStack;
            consoleSettingsRef.breakOnConsoleErrors = breakOnConsoleErrors;
            consoleSettingsRef.showInlineWarningsAndErrors = showInlineWarningsAndErrors;
            consoleSettingsRef.hideConsoleLogsInStrictMode = hideConsoleLogsInStrictMode;
            consoleSettingsRef.browserTheme = browserTheme;

            if (appendComponentStack || breakOnConsoleErrors || showInlineWarningsAndErrors) {
              if (unpatchFn !== null) {
                // Don't patch twice.
                return;
              }

              var originalConsoleMethods = {};

              unpatchFn = function unpatchFn() {
                for (var _method2 in originalConsoleMethods) {
                  try {
                    targetConsole[_method2] = originalConsoleMethods[_method2];
                  } catch (error) {}
                }
              };

              OVERRIDE_CONSOLE_METHODS.forEach(function (method) {
                try {
                  var originalMethod = (originalConsoleMethods[method] = targetConsole[method]
                    .__REACT_DEVTOOLS_ORIGINAL_METHOD__
                    ? targetConsole[method].__REACT_DEVTOOLS_ORIGINAL_METHOD__
                    : targetConsole[method]);

                  var overrideMethod = function overrideMethod() {
                    var shouldAppendWarningStack = false;

                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                      args[_key] = arguments[_key];
                    }

                    if (method !== "log") {
                      if (consoleSettingsRef.appendComponentStack) {
                        var lastArg = args.length > 0 ? args[args.length - 1] : null;
                        var alreadyHasComponentStack = typeof lastArg === "string" && isStringComponentStack(lastArg); // If we are ever called with a string that already has a component stack,
                        // e.g. a React error/warning, don't append a second stack.

                        shouldAppendWarningStack = !alreadyHasComponentStack;
                      }
                    }

                    var shouldShowInlineWarningsAndErrors =
                      consoleSettingsRef.showInlineWarningsAndErrors && (method === "error" || method === "warn"); // Search for the first renderer that has a current Fiber.
                    // We don't handle the edge case of stacks for more than one (e.g. interleaved renderers?)
                    // eslint-disable-next-line no-for-of-loops/no-for-of-loops

                    var _iterator = _createForOfIteratorHelper(injectedRenderers.values()),
                      _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        var _step$value = _step.value,
                          currentDispatcherRef = _step$value.currentDispatcherRef,
                          getCurrentFiber = _step$value.getCurrentFiber,
                          onErrorOrWarning = _step$value.onErrorOrWarning,
                          workTagMap = _step$value.workTagMap;
                        var current = getCurrentFiber();

                        if (current != null) {
                          try {
                            if (shouldShowInlineWarningsAndErrors) {
                              // patch() is called by two places: (1) the hook and (2) the renderer backend.
                              // The backend is what implements a message queue, so it's the only one that injects onErrorOrWarning.
                              if (typeof onErrorOrWarning === "function") {
                                onErrorOrWarning(
                                  current,
                                  method, // Copy args before we mutate them (e.g. adding the component stack)
                                  args.slice()
                                );
                              }
                            }

                            if (shouldAppendWarningStack) {
                              var componentStack = Object(
                                _DevToolsFiberComponentStack__WEBPACK_IMPORTED_MODULE_2__[
                                  /* getStackByFiberInDevAndProd */ "b"
                                ]
                              )(workTagMap, current, currentDispatcherRef);

                              if (componentStack !== "") {
                                if (isStrictModeOverride(args, method)) {
                                  args[0] = "".concat(args[0], " %s");
                                  args.push(componentStack);
                                } else {
                                  args.push(componentStack);
                                }
                              }
                            }
                          } catch (error) {
                            // Don't let a DevTools or React internal error interfere with logging.
                            setTimeout(function () {
                              throw error;
                            }, 0);
                          } finally {
                            break;
                          }
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    if (consoleSettingsRef.breakOnConsoleErrors) {
                      // --- Welcome to debugging with React DevTools ---
                      // This debugger statement means that you've enabled the "break on warnings" feature.
                      // Use the browser's Call Stack panel to step out of this override function-
                      // to where the original warning or error was logged.
                      // eslint-disable-next-line no-debugger
                      debugger;
                    }

                    originalMethod.apply(void 0, args);
                  };

                  overrideMethod.__REACT_DEVTOOLS_ORIGINAL_METHOD__ = originalMethod;
                  originalMethod.__REACT_DEVTOOLS_OVERRIDE_METHOD__ = overrideMethod;
                  targetConsole[method] = overrideMethod;
                } catch (error) {}
              });
            } else {
              unpatch();
            }
          } // Removed component stack patch from console methods.

          function unpatch() {
            if (unpatchFn !== null) {
              unpatchFn();
              unpatchFn = null;
            }
          }
          var unpatchForStrictModeFn = null; // NOTE: KEEP IN SYNC with src/hook.js:patchConsoleForInitialRenderInStrictMode

          function patchForStrictMode() {
            if (
              react_devtools_feature_flags__WEBPACK_IMPORTED_MODULE_3__[
                /* consoleManagedByDevToolsDuringStrictMode */ "a"
              ]
            ) {
              var overrideConsoleMethods = ["error", "group", "groupCollapsed", "info", "log", "trace", "warn"];

              if (unpatchForStrictModeFn !== null) {
                // Don't patch twice.
                return;
              }

              var originalConsoleMethods = {};

              unpatchForStrictModeFn = function unpatchForStrictModeFn() {
                for (var _method3 in originalConsoleMethods) {
                  try {
                    targetConsole[_method3] = originalConsoleMethods[_method3];
                  } catch (error) {}
                }
              };

              overrideConsoleMethods.forEach(function (method) {
                try {
                  var originalMethod = (originalConsoleMethods[method] = targetConsole[method]
                    .__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__
                    ? targetConsole[method].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__
                    : targetConsole[method]);

                  var overrideMethod = function overrideMethod() {
                    if (!consoleSettingsRef.hideConsoleLogsInStrictMode) {
                      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                      }

                      // Dim the text color of the double logs if we're not
                      // hiding them.
                      if (isNode) {
                        originalMethod(
                          DIMMED_NODE_CONSOLE_COLOR,
                          _utils__WEBPACK_IMPORTED_MODULE_0__[/* format */ "f"].apply(void 0, args)
                        );
                      } else {
                        var color = getConsoleColor(method);

                        if (color) {
                          originalMethod.apply(
                            void 0,
                            _toConsumableArray(
                              Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatWithStyles */ "g"])(
                                args,
                                "color: ".concat(color)
                              )
                            )
                          );
                        } else {
                          throw Error("Console color is not defined");
                        }
                      }
                    }
                  };

                  overrideMethod.__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ = originalMethod;
                  originalMethod.__REACT_DEVTOOLS_STRICT_MODE_OVERRIDE_METHOD__ = overrideMethod;
                  targetConsole[method] = overrideMethod;
                } catch (error) {}
              });
            }
          } // NOTE: KEEP IN SYNC with src/hook.js:unpatchConsoleForInitialRenderInStrictMode

          function unpatchForStrictMode() {
            if (
              react_devtools_feature_flags__WEBPACK_IMPORTED_MODULE_3__[
                /* consoleManagedByDevToolsDuringStrictMode */ "a"
              ]
            ) {
              if (unpatchForStrictModeFn !== null) {
                unpatchForStrictModeFn();
                unpatchForStrictModeFn = null;
              }
            }
          }
          function patchConsoleUsingWindowValues() {
            var _castBool, _castBool2, _castBool3, _castBool4, _castBrowserTheme;

            var appendComponentStack =
              (_castBool = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* castBool */ "a"])(
                window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__
              )) !== null && _castBool !== void 0
                ? _castBool
                : true;
            var breakOnConsoleErrors =
              (_castBool2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* castBool */ "a"])(
                window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__
              )) !== null && _castBool2 !== void 0
                ? _castBool2
                : false;
            var showInlineWarningsAndErrors =
              (_castBool3 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* castBool */ "a"])(
                window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__
              )) !== null && _castBool3 !== void 0
                ? _castBool3
                : true;
            var hideConsoleLogsInStrictMode =
              (_castBool4 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* castBool */ "a"])(
                window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__
              )) !== null && _castBool4 !== void 0
                ? _castBool4
                : false;
            var browserTheme =
              (_castBrowserTheme = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* castBrowserTheme */ "b"])(
                window.__REACT_DEVTOOLS_BROWSER_THEME__
              )) !== null && _castBrowserTheme !== void 0
                ? _castBrowserTheme
                : "dark";
            patch({
              appendComponentStack: appendComponentStack,
              breakOnConsoleErrors: breakOnConsoleErrors,
              showInlineWarningsAndErrors: showInlineWarningsAndErrors,
              hideConsoleLogsInStrictMode: hideConsoleLogsInStrictMode,
              browserTheme: browserTheme,
            });
          } // After receiving cached console patch settings from React Native, we set them on window.
          // When the console is initially patched (in renderer.js and hook.js), these values are read.
          // The browser extension (etc.) sets these values on window, but through another method.

          function writeConsolePatchSettingsToWindow(settings) {
            window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ = settings.appendComponentStack;
            window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__ = settings.breakOnConsoleErrors;
            window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__ = settings.showInlineWarningsAndErrors;
            window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__ = settings.hideConsoleLogsInStrictMode;
            window.__REACT_DEVTOOLS_BROWSER_THEME__ = settings.browserTheme;
          }
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(13)));

        /***/
      },
      /* 9 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

        function isArray(a) {
          return isArrayImpl(a);
        }

        /* harmony default export */ __webpack_exports__["a"] = isArray;

        /***/
      },
      /* 10 */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (process) {
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          exports = module.exports = SemVer;
          var debug;
          /* istanbul ignore next */

          if (
            (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" &&
            process.env &&
            process.env.NODE_DEBUG &&
            /\bsemver\b/i.test(process.env.NODE_DEBUG)
          ) {
            debug = function debug() {
              var args = Array.prototype.slice.call(arguments, 0);
              args.unshift("SEMVER");
              console.log.apply(console, args);
            };
          } else {
            debug = function debug() {};
          } // Note: this is the semver.org version of the spec that it implements
          // Not necessarily the package version of this code.

          exports.SEMVER_SPEC_VERSION = "2.0.0";
          var MAX_LENGTH = 256;
          var MAX_SAFE_INTEGER =
            Number.MAX_SAFE_INTEGER ||
            /* istanbul ignore next */
            9007199254740991; // Max safe segment length for coercion.

          var MAX_SAFE_COMPONENT_LENGTH = 16; // The actual regexps go on exports.re

          var re = (exports.re = []);
          var src = (exports.src = []);
          var t = (exports.tokens = {});
          var R = 0;

          function tok(n) {
            t[n] = R++;
          } // The following Regular Expressions can be used for tokenizing,
          // validating, and parsing SemVer version strings.
          // ## Numeric Identifier
          // A single `0`, or a non-zero digit followed by zero or more digits.

          tok("NUMERICIDENTIFIER");
          src[t.NUMERICIDENTIFIER] = "0|[1-9]\\d*";
          tok("NUMERICIDENTIFIERLOOSE");
          src[t.NUMERICIDENTIFIERLOOSE] = "[0-9]+"; // ## Non-numeric Identifier
          // Zero or more digits, followed by a letter or hyphen, and then zero or
          // more letters, digits, or hyphens.

          tok("NONNUMERICIDENTIFIER");
          src[t.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*"; // ## Main Version
          // Three dot-separated numeric identifiers.

          tok("MAINVERSION");
          src[t.MAINVERSION] =
            "(" +
            src[t.NUMERICIDENTIFIER] +
            ")\\." +
            "(" +
            src[t.NUMERICIDENTIFIER] +
            ")\\." +
            "(" +
            src[t.NUMERICIDENTIFIER] +
            ")";
          tok("MAINVERSIONLOOSE");
          src[t.MAINVERSIONLOOSE] =
            "(" +
            src[t.NUMERICIDENTIFIERLOOSE] +
            ")\\." +
            "(" +
            src[t.NUMERICIDENTIFIERLOOSE] +
            ")\\." +
            "(" +
            src[t.NUMERICIDENTIFIERLOOSE] +
            ")"; // ## Pre-release Version Identifier
          // A numeric identifier, or a non-numeric identifier.

          tok("PRERELEASEIDENTIFIER");
          src[t.PRERELEASEIDENTIFIER] = "(?:" + src[t.NUMERICIDENTIFIER] + "|" + src[t.NONNUMERICIDENTIFIER] + ")";
          tok("PRERELEASEIDENTIFIERLOOSE");
          src[t.PRERELEASEIDENTIFIERLOOSE] =
            "(?:" + src[t.NUMERICIDENTIFIERLOOSE] + "|" + src[t.NONNUMERICIDENTIFIER] + ")"; // ## Pre-release Version
          // Hyphen, followed by one or more dot-separated pre-release version
          // identifiers.

          tok("PRERELEASE");
          src[t.PRERELEASE] = "(?:-(" + src[t.PRERELEASEIDENTIFIER] + "(?:\\." + src[t.PRERELEASEIDENTIFIER] + ")*))";
          tok("PRERELEASELOOSE");
          src[t.PRERELEASELOOSE] =
            "(?:-?(" + src[t.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + src[t.PRERELEASEIDENTIFIERLOOSE] + ")*))"; // ## Build Metadata Identifier
          // Any combination of digits, letters, or hyphens.

          tok("BUILDIDENTIFIER");
          src[t.BUILDIDENTIFIER] = "[0-9A-Za-z-]+"; // ## Build Metadata
          // Plus sign, followed by one or more period-separated build metadata
          // identifiers.

          tok("BUILD");
          src[t.BUILD] = "(?:\\+(" + src[t.BUILDIDENTIFIER] + "(?:\\." + src[t.BUILDIDENTIFIER] + ")*))"; // ## Full Version String
          // A main version, followed optionally by a pre-release version and
          // build metadata.
          // Note that the only major, minor, patch, and pre-release sections of
          // the version string are capturing groups.  The build metadata is not a
          // capturing group, because it should not ever be used in version
          // comparison.

          tok("FULL");
          tok("FULLPLAIN");
          src[t.FULLPLAIN] = "v?" + src[t.MAINVERSION] + src[t.PRERELEASE] + "?" + src[t.BUILD] + "?";
          src[t.FULL] = "^" + src[t.FULLPLAIN] + "$"; // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
          // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
          // common in the npm registry.

          tok("LOOSEPLAIN");
          src[t.LOOSEPLAIN] = "[v=\\s]*" + src[t.MAINVERSIONLOOSE] + src[t.PRERELEASELOOSE] + "?" + src[t.BUILD] + "?";
          tok("LOOSE");
          src[t.LOOSE] = "^" + src[t.LOOSEPLAIN] + "$";
          tok("GTLT");
          src[t.GTLT] = "((?:<|>)?=?)"; // Something like "2.*" or "1.2.x".
          // Note that "x.x" is a valid xRange identifer, meaning "any version"
          // Only the first item is strictly required.

          tok("XRANGEIDENTIFIERLOOSE");
          src[t.XRANGEIDENTIFIERLOOSE] = src[t.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
          tok("XRANGEIDENTIFIER");
          src[t.XRANGEIDENTIFIER] = src[t.NUMERICIDENTIFIER] + "|x|X|\\*";
          tok("XRANGEPLAIN");
          src[t.XRANGEPLAIN] =
            "[v=\\s]*(" +
            src[t.XRANGEIDENTIFIER] +
            ")" +
            "(?:\\.(" +
            src[t.XRANGEIDENTIFIER] +
            ")" +
            "(?:\\.(" +
            src[t.XRANGEIDENTIFIER] +
            ")" +
            "(?:" +
            src[t.PRERELEASE] +
            ")?" +
            src[t.BUILD] +
            "?" +
            ")?)?";
          tok("XRANGEPLAINLOOSE");
          src[t.XRANGEPLAINLOOSE] =
            "[v=\\s]*(" +
            src[t.XRANGEIDENTIFIERLOOSE] +
            ")" +
            "(?:\\.(" +
            src[t.XRANGEIDENTIFIERLOOSE] +
            ")" +
            "(?:\\.(" +
            src[t.XRANGEIDENTIFIERLOOSE] +
            ")" +
            "(?:" +
            src[t.PRERELEASELOOSE] +
            ")?" +
            src[t.BUILD] +
            "?" +
            ")?)?";
          tok("XRANGE");
          src[t.XRANGE] = "^" + src[t.GTLT] + "\\s*" + src[t.XRANGEPLAIN] + "$";
          tok("XRANGELOOSE");
          src[t.XRANGELOOSE] = "^" + src[t.GTLT] + "\\s*" + src[t.XRANGEPLAINLOOSE] + "$"; // Coercion.
          // Extract anything that could conceivably be a part of a valid semver

          tok("COERCE");
          src[t.COERCE] =
            "(^|[^\\d])" +
            "(\\d{1," +
            MAX_SAFE_COMPONENT_LENGTH +
            "})" +
            "(?:\\.(\\d{1," +
            MAX_SAFE_COMPONENT_LENGTH +
            "}))?" +
            "(?:\\.(\\d{1," +
            MAX_SAFE_COMPONENT_LENGTH +
            "}))?" +
            "(?:$|[^\\d])";
          tok("COERCERTL");
          re[t.COERCERTL] = new RegExp(src[t.COERCE], "g"); // Tilde ranges.
          // Meaning is "reasonably at or greater than"

          tok("LONETILDE");
          src[t.LONETILDE] = "(?:~>?)";
          tok("TILDETRIM");
          src[t.TILDETRIM] = "(\\s*)" + src[t.LONETILDE] + "\\s+";
          re[t.TILDETRIM] = new RegExp(src[t.TILDETRIM], "g");
          var tildeTrimReplace = "$1~";
          tok("TILDE");
          src[t.TILDE] = "^" + src[t.LONETILDE] + src[t.XRANGEPLAIN] + "$";
          tok("TILDELOOSE");
          src[t.TILDELOOSE] = "^" + src[t.LONETILDE] + src[t.XRANGEPLAINLOOSE] + "$"; // Caret ranges.
          // Meaning is "at least and backwards compatible with"

          tok("LONECARET");
          src[t.LONECARET] = "(?:\\^)";
          tok("CARETTRIM");
          src[t.CARETTRIM] = "(\\s*)" + src[t.LONECARET] + "\\s+";
          re[t.CARETTRIM] = new RegExp(src[t.CARETTRIM], "g");
          var caretTrimReplace = "$1^";
          tok("CARET");
          src[t.CARET] = "^" + src[t.LONECARET] + src[t.XRANGEPLAIN] + "$";
          tok("CARETLOOSE");
          src[t.CARETLOOSE] = "^" + src[t.LONECARET] + src[t.XRANGEPLAINLOOSE] + "$"; // A simple gt/lt/eq thing, or just "" to indicate "any version"

          tok("COMPARATORLOOSE");
          src[t.COMPARATORLOOSE] = "^" + src[t.GTLT] + "\\s*(" + src[t.LOOSEPLAIN] + ")$|^$";
          tok("COMPARATOR");
          src[t.COMPARATOR] = "^" + src[t.GTLT] + "\\s*(" + src[t.FULLPLAIN] + ")$|^$"; // An expression to strip any whitespace between the gtlt and the thing
          // it modifies, so that `> 1.2.3` ==> `>1.2.3`

          tok("COMPARATORTRIM");
          src[t.COMPARATORTRIM] = "(\\s*)" + src[t.GTLT] + "\\s*(" + src[t.LOOSEPLAIN] + "|" + src[t.XRANGEPLAIN] + ")"; // this one has to use the /g flag

          re[t.COMPARATORTRIM] = new RegExp(src[t.COMPARATORTRIM], "g");
          var comparatorTrimReplace = "$1$2$3"; // Something like `1.2.3 - 1.2.4`
          // Note that these all use the loose form, because they'll be
          // checked against either the strict or loose comparator form
          // later.

          tok("HYPHENRANGE");
          src[t.HYPHENRANGE] =
            "^\\s*(" + src[t.XRANGEPLAIN] + ")" + "\\s+-\\s+" + "(" + src[t.XRANGEPLAIN] + ")" + "\\s*$";
          tok("HYPHENRANGELOOSE");
          src[t.HYPHENRANGELOOSE] =
            "^\\s*(" + src[t.XRANGEPLAINLOOSE] + ")" + "\\s+-\\s+" + "(" + src[t.XRANGEPLAINLOOSE] + ")" + "\\s*$"; // Star ranges basically just allow anything at all.

          tok("STAR");
          src[t.STAR] = "(<|>)?=?\\s*\\*"; // Compile to actual regexp objects.
          // All are flag-free, unless they were created above with a flag.

          for (var i = 0; i < R; i++) {
            debug(i, src[i]);

            if (!re[i]) {
              re[i] = new RegExp(src[i]);
            }
          }

          exports.parse = parse;

          function parse(version, options) {
            if (!options || _typeof(options) !== "object") {
              options = {
                loose: !!options,
                includePrerelease: false,
              };
            }

            if (version instanceof SemVer) {
              return version;
            }

            if (typeof version !== "string") {
              return null;
            }

            if (version.length > MAX_LENGTH) {
              return null;
            }

            var r = options.loose ? re[t.LOOSE] : re[t.FULL];

            if (!r.test(version)) {
              return null;
            }

            try {
              return new SemVer(version, options);
            } catch (er) {
              return null;
            }
          }

          exports.valid = valid;

          function valid(version, options) {
            var v = parse(version, options);
            return v ? v.version : null;
          }

          exports.clean = clean;

          function clean(version, options) {
            var s = parse(version.trim().replace(/^[=v]+/, ""), options);
            return s ? s.version : null;
          }

          exports.SemVer = SemVer;

          function SemVer(version, options) {
            if (!options || _typeof(options) !== "object") {
              options = {
                loose: !!options,
                includePrerelease: false,
              };
            }

            if (version instanceof SemVer) {
              if (version.loose === options.loose) {
                return version;
              } else {
                version = version.version;
              }
            } else if (typeof version !== "string") {
              throw new TypeError("Invalid Version: " + version);
            }

            if (version.length > MAX_LENGTH) {
              throw new TypeError("version is longer than " + MAX_LENGTH + " characters");
            }

            if (!(this instanceof SemVer)) {
              return new SemVer(version, options);
            }

            debug("SemVer", version, options);
            this.options = options;
            this.loose = !!options.loose;
            var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);

            if (!m) {
              throw new TypeError("Invalid Version: " + version);
            }

            this.raw = version; // these are actually numbers

            this.major = +m[1];
            this.minor = +m[2];
            this.patch = +m[3];

            if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
              throw new TypeError("Invalid major version");
            }

            if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
              throw new TypeError("Invalid minor version");
            }

            if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
              throw new TypeError("Invalid patch version");
            } // numberify any prerelease numeric ids

            if (!m[4]) {
              this.prerelease = [];
            } else {
              this.prerelease = m[4].split(".").map(function (id) {
                if (/^[0-9]+$/.test(id)) {
                  var num = +id;

                  if (num >= 0 && num < MAX_SAFE_INTEGER) {
                    return num;
                  }
                }

                return id;
              });
            }

            this.build = m[5] ? m[5].split(".") : [];
            this.format();
          }

          SemVer.prototype.format = function () {
            this.version = this.major + "." + this.minor + "." + this.patch;

            if (this.prerelease.length) {
              this.version += "-" + this.prerelease.join(".");
            }

            return this.version;
          };

          SemVer.prototype.toString = function () {
            return this.version;
          };

          SemVer.prototype.compare = function (other) {
            debug("SemVer.compare", this.version, this.options, other);

            if (!(other instanceof SemVer)) {
              other = new SemVer(other, this.options);
            }

            return this.compareMain(other) || this.comparePre(other);
          };

          SemVer.prototype.compareMain = function (other) {
            if (!(other instanceof SemVer)) {
              other = new SemVer(other, this.options);
            }

            return (
              compareIdentifiers(this.major, other.major) ||
              compareIdentifiers(this.minor, other.minor) ||
              compareIdentifiers(this.patch, other.patch)
            );
          };

          SemVer.prototype.comparePre = function (other) {
            if (!(other instanceof SemVer)) {
              other = new SemVer(other, this.options);
            } // NOT having a prerelease is > having one

            if (this.prerelease.length && !other.prerelease.length) {
              return -1;
            } else if (!this.prerelease.length && other.prerelease.length) {
              return 1;
            } else if (!this.prerelease.length && !other.prerelease.length) {
              return 0;
            }

            var i = 0;

            do {
              var a = this.prerelease[i];
              var b = other.prerelease[i];
              debug("prerelease compare", i, a, b);

              if (a === undefined && b === undefined) {
                return 0;
              } else if (b === undefined) {
                return 1;
              } else if (a === undefined) {
                return -1;
              } else if (a === b) {
                continue;
              } else {
                return compareIdentifiers(a, b);
              }
            } while (++i);
          };

          SemVer.prototype.compareBuild = function (other) {
            if (!(other instanceof SemVer)) {
              other = new SemVer(other, this.options);
            }

            var i = 0;

            do {
              var a = this.build[i];
              var b = other.build[i];
              debug("prerelease compare", i, a, b);

              if (a === undefined && b === undefined) {
                return 0;
              } else if (b === undefined) {
                return 1;
              } else if (a === undefined) {
                return -1;
              } else if (a === b) {
                continue;
              } else {
                return compareIdentifiers(a, b);
              }
            } while (++i);
          }; // preminor will bump the version up to the next minor release, and immediately
          // down to pre-release. premajor and prepatch work the same way.

          SemVer.prototype.inc = function (release, identifier) {
            switch (release) {
              case "premajor":
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc("pre", identifier);
                break;

              case "preminor":
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc("pre", identifier);
                break;

              case "prepatch":
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc("patch", identifier);
                this.inc("pre", identifier);
                break;
              // If the input is a non-prerelease version, this acts the same as
              // prepatch.

              case "prerelease":
                if (this.prerelease.length === 0) {
                  this.inc("patch", identifier);
                }

                this.inc("pre", identifier);
                break;

              case "major":
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                  this.major++;
                }

                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;

              case "minor":
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) {
                  this.minor++;
                }

                this.patch = 0;
                this.prerelease = [];
                break;

              case "patch":
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) {
                  this.patch++;
                }

                this.prerelease = [];
                break;
              // This probably shouldn't be used publicly.
              // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.

              case "pre":
                if (this.prerelease.length === 0) {
                  this.prerelease = [0];
                } else {
                  var i = this.prerelease.length;

                  while (--i >= 0) {
                    if (typeof this.prerelease[i] === "number") {
                      this.prerelease[i]++;
                      i = -2;
                    }
                  }

                  if (i === -1) {
                    // didn't increment anything
                    this.prerelease.push(0);
                  }
                }

                if (identifier) {
                  // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                  // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                  if (this.prerelease[0] === identifier) {
                    if (isNaN(this.prerelease[1])) {
                      this.prerelease = [identifier, 0];
                    }
                  } else {
                    this.prerelease = [identifier, 0];
                  }
                }

                break;

              default:
                throw new Error("invalid increment argument: " + release);
            }

            this.format();
            this.raw = this.version;
            return this;
          };

          exports.inc = inc;

          function inc(version, release, loose, identifier) {
            if (typeof loose === "string") {
              identifier = loose;
              loose = undefined;
            }

            try {
              return new SemVer(version, loose).inc(release, identifier).version;
            } catch (er) {
              return null;
            }
          }

          exports.diff = diff;

          function diff(version1, version2) {
            if (eq(version1, version2)) {
              return null;
            } else {
              var v1 = parse(version1);
              var v2 = parse(version2);
              var prefix = "";

              if (v1.prerelease.length || v2.prerelease.length) {
                prefix = "pre";
                var defaultResult = "prerelease";
              }

              for (var key in v1) {
                if (key === "major" || key === "minor" || key === "patch") {
                  if (v1[key] !== v2[key]) {
                    return prefix + key;
                  }
                }
              }

              return defaultResult; // may be undefined
            }
          }

          exports.compareIdentifiers = compareIdentifiers;
          var numeric = /^[0-9]+$/;

          function compareIdentifiers(a, b) {
            var anum = numeric.test(a);
            var bnum = numeric.test(b);

            if (anum && bnum) {
              a = +a;
              b = +b;
            }

            return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
          }

          exports.rcompareIdentifiers = rcompareIdentifiers;

          function rcompareIdentifiers(a, b) {
            return compareIdentifiers(b, a);
          }

          exports.major = major;

          function major(a, loose) {
            return new SemVer(a, loose).major;
          }

          exports.minor = minor;

          function minor(a, loose) {
            return new SemVer(a, loose).minor;
          }

          exports.patch = patch;

          function patch(a, loose) {
            return new SemVer(a, loose).patch;
          }

          exports.compare = compare;

          function compare(a, b, loose) {
            return new SemVer(a, loose).compare(new SemVer(b, loose));
          }

          exports.compareLoose = compareLoose;

          function compareLoose(a, b) {
            return compare(a, b, true);
          }

          exports.compareBuild = compareBuild;

          function compareBuild(a, b, loose) {
            var versionA = new SemVer(a, loose);
            var versionB = new SemVer(b, loose);
            return versionA.compare(versionB) || versionA.compareBuild(versionB);
          }

          exports.rcompare = rcompare;

          function rcompare(a, b, loose) {
            return compare(b, a, loose);
          }

          exports.sort = sort;

          function sort(list, loose) {
            return list.sort(function (a, b) {
              return exports.compareBuild(a, b, loose);
            });
          }

          exports.rsort = rsort;

          function rsort(list, loose) {
            return list.sort(function (a, b) {
              return exports.compareBuild(b, a, loose);
            });
          }

          exports.gt = gt;

          function gt(a, b, loose) {
            return compare(a, b, loose) > 0;
          }

          exports.lt = lt;

          function lt(a, b, loose) {
            return compare(a, b, loose) < 0;
          }

          exports.eq = eq;

          function eq(a, b, loose) {
            return compare(a, b, loose) === 0;
          }

          exports.neq = neq;

          function neq(a, b, loose) {
            return compare(a, b, loose) !== 0;
          }

          exports.gte = gte;

          function gte(a, b, loose) {
            return compare(a, b, loose) >= 0;
          }

          exports.lte = lte;

          function lte(a, b, loose) {
            return compare(a, b, loose) <= 0;
          }

          exports.cmp = cmp;

          function cmp(a, op, b, loose) {
            switch (op) {
              case "===":
                if (_typeof(a) === "object") a = a.version;
                if (_typeof(b) === "object") b = b.version;
                return a === b;

              case "!==":
                if (_typeof(a) === "object") a = a.version;
                if (_typeof(b) === "object") b = b.version;
                return a !== b;

              case "":
              case "=":
              case "==":
                return eq(a, b, loose);

              case "!=":
                return neq(a, b, loose);

              case ">":
                return gt(a, b, loose);

              case ">=":
                return gte(a, b, loose);

              case "<":
                return lt(a, b, loose);

              case "<=":
                return lte(a, b, loose);

              default:
                throw new TypeError("Invalid operator: " + op);
            }
          }

          exports.Comparator = Comparator;

          function Comparator(comp, options) {
            if (!options || _typeof(options) !== "object") {
              options = {
                loose: !!options,
                includePrerelease: false,
              };
            }

            if (comp instanceof Comparator) {
              if (comp.loose === !!options.loose) {
                return comp;
              } else {
                comp = comp.value;
              }
            }

            if (!(this instanceof Comparator)) {
              return new Comparator(comp, options);
            }

            debug("comparator", comp, options);
            this.options = options;
            this.loose = !!options.loose;
            this.parse(comp);

            if (this.semver === ANY) {
              this.value = "";
            } else {
              this.value = this.operator + this.semver.version;
            }

            debug("comp", this);
          }

          var ANY = {};

          Comparator.prototype.parse = function (comp) {
            var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
            var m = comp.match(r);

            if (!m) {
              throw new TypeError("Invalid comparator: " + comp);
            }

            this.operator = m[1] !== undefined ? m[1] : "";

            if (this.operator === "=") {
              this.operator = "";
            } // if it literally is just '>' or '' then allow anything.

            if (!m[2]) {
              this.semver = ANY;
            } else {
              this.semver = new SemVer(m[2], this.options.loose);
            }
          };

          Comparator.prototype.toString = function () {
            return this.value;
          };

          Comparator.prototype.test = function (version) {
            debug("Comparator.test", version, this.options.loose);

            if (this.semver === ANY || version === ANY) {
              return true;
            }

            if (typeof version === "string") {
              try {
                version = new SemVer(version, this.options);
              } catch (er) {
                return false;
              }
            }

            return cmp(version, this.operator, this.semver, this.options);
          };

          Comparator.prototype.intersects = function (comp, options) {
            if (!(comp instanceof Comparator)) {
              throw new TypeError("a Comparator is required");
            }

            if (!options || _typeof(options) !== "object") {
              options = {
                loose: !!options,
                includePrerelease: false,
              };
            }

            var rangeTmp;

            if (this.operator === "") {
              if (this.value === "") {
                return true;
              }

              rangeTmp = new Range(comp.value, options);
              return satisfies(this.value, rangeTmp, options);
            } else if (comp.operator === "") {
              if (comp.value === "") {
                return true;
              }

              rangeTmp = new Range(this.value, options);
              return satisfies(comp.semver, rangeTmp, options);
            }

            var sameDirectionIncreasing =
              (this.operator === ">=" || this.operator === ">") && (comp.operator === ">=" || comp.operator === ">");
            var sameDirectionDecreasing =
              (this.operator === "<=" || this.operator === "<") && (comp.operator === "<=" || comp.operator === "<");
            var sameSemVer = this.semver.version === comp.semver.version;
            var differentDirectionsInclusive =
              (this.operator === ">=" || this.operator === "<=") && (comp.operator === ">=" || comp.operator === "<=");
            var oppositeDirectionsLessThan =
              cmp(this.semver, "<", comp.semver, options) &&
              (this.operator === ">=" || this.operator === ">") &&
              (comp.operator === "<=" || comp.operator === "<");
            var oppositeDirectionsGreaterThan =
              cmp(this.semver, ">", comp.semver, options) &&
              (this.operator === "<=" || this.operator === "<") &&
              (comp.operator === ">=" || comp.operator === ">");
            return (
              sameDirectionIncreasing ||
              sameDirectionDecreasing ||
              (sameSemVer && differentDirectionsInclusive) ||
              oppositeDirectionsLessThan ||
              oppositeDirectionsGreaterThan
            );
          };

          exports.Range = Range;

          function Range(range, options) {
            if (!options || _typeof(options) !== "object") {
              options = {
                loose: !!options,
                includePrerelease: false,
              };
            }

            if (range instanceof Range) {
              if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
              } else {
                return new Range(range.raw, options);
              }
            }

            if (range instanceof Comparator) {
              return new Range(range.value, options);
            }

            if (!(this instanceof Range)) {
              return new Range(range, options);
            }

            this.options = options;
            this.loose = !!options.loose;
            this.includePrerelease = !!options.includePrerelease; // First, split based on boolean or ||

            this.raw = range;
            this.set = range
              .split(/\s*\|\|\s*/)
              .map(function (range) {
                return this.parseRange(range.trim());
              }, this)
              .filter(function (c) {
                // throw out any that are not relevant for whatever reason
                return c.length;
              });

            if (!this.set.length) {
              throw new TypeError("Invalid SemVer Range: " + range);
            }

            this.format();
          }

          Range.prototype.format = function () {
            this.range = this.set
              .map(function (comps) {
                return comps.join(" ").trim();
              })
              .join("||")
              .trim();
            return this.range;
          };

          Range.prototype.toString = function () {
            return this.range;
          };

          Range.prototype.parseRange = function (range) {
            var loose = this.options.loose;
            range = range.trim(); // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

            var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
            range = range.replace(hr, hyphenReplace);
            debug("hyphen replace", range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

            range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
            debug("comparator trim", range, re[t.COMPARATORTRIM]); // `~ 1.2.3` => `~1.2.3`

            range = range.replace(re[t.TILDETRIM], tildeTrimReplace); // `^ 1.2.3` => `^1.2.3`

            range = range.replace(re[t.CARETTRIM], caretTrimReplace); // normalize spaces

            range = range.split(/\s+/).join(" "); // At this point, the range is completely trimmed and
            // ready to be split into comparators.

            var compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
            var set = range
              .split(" ")
              .map(function (comp) {
                return parseComparator(comp, this.options);
              }, this)
              .join(" ")
              .split(/\s+/);

            if (this.options.loose) {
              // in loose mode, throw out any that are not valid comparators
              set = set.filter(function (comp) {
                return !!comp.match(compRe);
              });
            }

            set = set.map(function (comp) {
              return new Comparator(comp, this.options);
            }, this);
            return set;
          };

          Range.prototype.intersects = function (range, options) {
            if (!(range instanceof Range)) {
              throw new TypeError("a Range is required");
            }

            return this.set.some(function (thisComparators) {
              return (
                isSatisfiable(thisComparators, options) &&
                range.set.some(function (rangeComparators) {
                  return (
                    isSatisfiable(rangeComparators, options) &&
                    thisComparators.every(function (thisComparator) {
                      return rangeComparators.every(function (rangeComparator) {
                        return thisComparator.intersects(rangeComparator, options);
                      });
                    })
                  );
                })
              );
            });
          }; // take a set of comparators and determine whether there
          // exists a version which can satisfy it

          function isSatisfiable(comparators, options) {
            var result = true;
            var remainingComparators = comparators.slice();
            var testComparator = remainingComparators.pop();

            while (result && remainingComparators.length) {
              result = remainingComparators.every(function (otherComparator) {
                return testComparator.intersects(otherComparator, options);
              });
              testComparator = remainingComparators.pop();
            }

            return result;
          } // Mostly just for testing and legacy API reasons

          exports.toComparators = toComparators;

          function toComparators(range, options) {
            return new Range(range, options).set.map(function (comp) {
              return comp
                .map(function (c) {
                  return c.value;
                })
                .join(" ")
                .trim()
                .split(" ");
            });
          } // comprised of xranges, tildes, stars, and gtlt's at this point.
          // already replaced the hyphen ranges
          // turn into a set of JUST comparators.

          function parseComparator(comp, options) {
            debug("comp", comp, options);
            comp = replaceCarets(comp, options);
            debug("caret", comp);
            comp = replaceTildes(comp, options);
            debug("tildes", comp);
            comp = replaceXRanges(comp, options);
            debug("xrange", comp);
            comp = replaceStars(comp, options);
            debug("stars", comp);
            return comp;
          }

          function isX(id) {
            return !id || id.toLowerCase() === "x" || id === "*";
          } // ~, ~> --> * (any, kinda silly)
          // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
          // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
          // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
          // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
          // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0

          function replaceTildes(comp, options) {
            return comp
              .trim()
              .split(/\s+/)
              .map(function (comp) {
                return replaceTilde(comp, options);
              })
              .join(" ");
          }

          function replaceTilde(comp, options) {
            var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
            return comp.replace(r, function (_, M, m, p, pr) {
              debug("tilde", comp, _, M, m, p, pr);
              var ret;

              if (isX(M)) {
                ret = "";
              } else if (isX(m)) {
                ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
              } else if (isX(p)) {
                // ~1.2 == >=1.2.0 <1.3.0
                ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
              } else if (pr) {
                debug("replaceTilde pr", pr);
                ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + (+m + 1) + ".0";
              } else {
                // ~1.2.3 == >=1.2.3 <1.3.0
                ret = ">=" + M + "." + m + "." + p + " <" + M + "." + (+m + 1) + ".0";
              }

              debug("tilde return", ret);
              return ret;
            });
          } // ^ --> * (any, kinda silly)
          // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
          // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
          // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
          // ^1.2.3 --> >=1.2.3 <2.0.0
          // ^1.2.0 --> >=1.2.0 <2.0.0

          function replaceCarets(comp, options) {
            return comp
              .trim()
              .split(/\s+/)
              .map(function (comp) {
                return replaceCaret(comp, options);
              })
              .join(" ");
          }

          function replaceCaret(comp, options) {
            debug("caret", comp, options);
            var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
            return comp.replace(r, function (_, M, m, p, pr) {
              debug("caret", comp, _, M, m, p, pr);
              var ret;

              if (isX(M)) {
                ret = "";
              } else if (isX(m)) {
                ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
              } else if (isX(p)) {
                if (M === "0") {
                  ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
                } else {
                  ret = ">=" + M + "." + m + ".0 <" + (+M + 1) + ".0.0";
                }
              } else if (pr) {
                debug("replaceCaret pr", pr);

                if (M === "0") {
                  if (m === "0") {
                    ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + m + "." + (+p + 1);
                  } else {
                    ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + (+m + 1) + ".0";
                  }
                } else {
                  ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + (+M + 1) + ".0.0";
                }
              } else {
                debug("no pr");

                if (M === "0") {
                  if (m === "0") {
                    ret = ">=" + M + "." + m + "." + p + " <" + M + "." + m + "." + (+p + 1);
                  } else {
                    ret = ">=" + M + "." + m + "." + p + " <" + M + "." + (+m + 1) + ".0";
                  }
                } else {
                  ret = ">=" + M + "." + m + "." + p + " <" + (+M + 1) + ".0.0";
                }
              }

              debug("caret return", ret);
              return ret;
            });
          }

          function replaceXRanges(comp, options) {
            debug("replaceXRanges", comp, options);
            return comp
              .split(/\s+/)
              .map(function (comp) {
                return replaceXRange(comp, options);
              })
              .join(" ");
          }

          function replaceXRange(comp, options) {
            comp = comp.trim();
            var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
            return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
              debug("xRange", comp, ret, gtlt, M, m, p, pr);
              var xM = isX(M);
              var xm = xM || isX(m);
              var xp = xm || isX(p);
              var anyX = xp;

              if (gtlt === "=" && anyX) {
                gtlt = "";
              } // if we're including prereleases in the match, then we need
              // to fix this to -0, the lowest possible prerelease value

              pr = options.includePrerelease ? "-0" : "";

              if (xM) {
                if (gtlt === ">" || gtlt === "<") {
                  // nothing is allowed
                  ret = "<0.0.0-0";
                } else {
                  // nothing is forbidden
                  ret = "*";
                }
              } else if (gtlt && anyX) {
                // we know patch is an x, because we have any x at all.
                // replace X with 0
                if (xm) {
                  m = 0;
                }

                p = 0;

                if (gtlt === ">") {
                  // >1 => >=2.0.0
                  // >1.2 => >=1.3.0
                  // >1.2.3 => >= 1.2.4
                  gtlt = ">=";

                  if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                  } else {
                    m = +m + 1;
                    p = 0;
                  }
                } else if (gtlt === "<=") {
                  // <=0.7.x is actually <0.8.0, since any 0.7.x should
                  // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                  gtlt = "<";

                  if (xm) {
                    M = +M + 1;
                  } else {
                    m = +m + 1;
                  }
                }

                ret = gtlt + M + "." + m + "." + p + pr;
              } else if (xm) {
                ret = ">=" + M + ".0.0" + pr + " <" + (+M + 1) + ".0.0" + pr;
              } else if (xp) {
                ret = ">=" + M + "." + m + ".0" + pr + " <" + M + "." + (+m + 1) + ".0" + pr;
              }

              debug("xRange return", ret);
              return ret;
            });
          } // Because * is AND-ed with everything else in the comparator,
          // and '' means "any version", just remove the *s entirely.

          function replaceStars(comp, options) {
            debug("replaceStars", comp, options); // Looseness is ignored here.  star is always as loose as it gets!

            return comp.trim().replace(re[t.STAR], "");
          } // This function is passed to string.replace(re[t.HYPHENRANGE])
          // M, m, patch, prerelease, build
          // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
          // 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
          // 1.2 - 3.4 => >=1.2.0 <3.5.0

          function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
            if (isX(fM)) {
              from = "";
            } else if (isX(fm)) {
              from = ">=" + fM + ".0.0";
            } else if (isX(fp)) {
              from = ">=" + fM + "." + fm + ".0";
            } else {
              from = ">=" + from;
            }

            if (isX(tM)) {
              to = "";
            } else if (isX(tm)) {
              to = "<" + (+tM + 1) + ".0.0";
            } else if (isX(tp)) {
              to = "<" + tM + "." + (+tm + 1) + ".0";
            } else if (tpr) {
              to = "<=" + tM + "." + tm + "." + tp + "-" + tpr;
            } else {
              to = "<=" + to;
            }

            return (from + " " + to).trim();
          } // if ANY of the sets match ALL of its comparators, then pass

          Range.prototype.test = function (version) {
            if (!version) {
              return false;
            }

            if (typeof version === "string") {
              try {
                version = new SemVer(version, this.options);
              } catch (er) {
                return false;
              }
            }

            for (var i = 0; i < this.set.length; i++) {
              if (testSet(this.set[i], version, this.options)) {
                return true;
              }
            }

            return false;
          };

          function testSet(set, version, options) {
            for (var i = 0; i < set.length; i++) {
              if (!set[i].test(version)) {
                return false;
              }
            }

            if (version.prerelease.length && !options.includePrerelease) {
              // Find the set of versions that are allowed to have prereleases
              // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
              // That should allow `1.2.3-pr.2` to pass.
              // However, `1.2.4-alpha.notready` should NOT be allowed,
              // even though it's within the range set by the comparators.
              for (i = 0; i < set.length; i++) {
                debug(set[i].semver);

                if (set[i].semver === ANY) {
                  continue;
                }

                if (set[i].semver.prerelease.length > 0) {
                  var allowed = set[i].semver;

                  if (
                    allowed.major === version.major &&
                    allowed.minor === version.minor &&
                    allowed.patch === version.patch
                  ) {
                    return true;
                  }
                }
              } // Version has a -pre, but it's not one of the ones we like.

              return false;
            }

            return true;
          }

          exports.satisfies = satisfies;

          function satisfies(version, range, options) {
            try {
              range = new Range(range, options);
            } catch (er) {
              return false;
            }

            return range.test(version);
          }

          exports.maxSatisfying = maxSatisfying;

          function maxSatisfying(versions, range, options) {
            var max = null;
            var maxSV = null;

            try {
              var rangeObj = new Range(range, options);
            } catch (er) {
              return null;
            }

            versions.forEach(function (v) {
              if (rangeObj.test(v)) {
                // satisfies(v, range, options)
                if (!max || maxSV.compare(v) === -1) {
                  // compare(max, v, true)
                  max = v;
                  maxSV = new SemVer(max, options);
                }
              }
            });
            return max;
          }

          exports.minSatisfying = minSatisfying;

          function minSatisfying(versions, range, options) {
            var min = null;
            var minSV = null;

            try {
              var rangeObj = new Range(range, options);
            } catch (er) {
              return null;
            }

            versions.forEach(function (v) {
              if (rangeObj.test(v)) {
                // satisfies(v, range, options)
                if (!min || minSV.compare(v) === 1) {
                  // compare(min, v, true)
                  min = v;
                  minSV = new SemVer(min, options);
                }
              }
            });
            return min;
          }

          exports.minVersion = minVersion;

          function minVersion(range, loose) {
            range = new Range(range, loose);
            var minver = new SemVer("0.0.0");

            if (range.test(minver)) {
              return minver;
            }

            minver = new SemVer("0.0.0-0");

            if (range.test(minver)) {
              return minver;
            }

            minver = null;

            for (var i = 0; i < range.set.length; ++i) {
              var comparators = range.set[i];
              comparators.forEach(function (comparator) {
                // Clone to avoid manipulating the comparator's semver object.
                var compver = new SemVer(comparator.semver.version);

                switch (comparator.operator) {
                  case ">":
                    if (compver.prerelease.length === 0) {
                      compver.patch++;
                    } else {
                      compver.prerelease.push(0);
                    }

                    compver.raw = compver.format();

                  /* fallthrough */

                  case "":
                  case ">=":
                    if (!minver || gt(minver, compver)) {
                      minver = compver;
                    }

                    break;

                  case "<":
                  case "<=":
                    /* Ignore maximum versions */
                    break;

                  /* istanbul ignore next */

                  default:
                    throw new Error("Unexpected operation: " + comparator.operator);
                }
              });
            }

            if (minver && range.test(minver)) {
              return minver;
            }

            return null;
          }

          exports.validRange = validRange;

          function validRange(range, options) {
            try {
              // Return '*' instead of '' so that truthiness works.
              // This will throw if it's invalid anyway
              return new Range(range, options).range || "*";
            } catch (er) {
              return null;
            }
          } // Determine if version is less than all the versions possible in the range

          exports.ltr = ltr;

          function ltr(version, range, options) {
            return outside(version, range, "<", options);
          } // Determine if version is greater than all the versions possible in the range.

          exports.gtr = gtr;

          function gtr(version, range, options) {
            return outside(version, range, ">", options);
          }

          exports.outside = outside;

          function outside(version, range, hilo, options) {
            version = new SemVer(version, options);
            range = new Range(range, options);
            var gtfn, ltefn, ltfn, comp, ecomp;

            switch (hilo) {
              case ">":
                gtfn = gt;
                ltefn = lte;
                ltfn = lt;
                comp = ">";
                ecomp = ">=";
                break;

              case "<":
                gtfn = lt;
                ltefn = gte;
                ltfn = gt;
                comp = "<";
                ecomp = "<=";
                break;

              default:
                throw new TypeError('Must provide a hilo val of "<" or ">"');
            } // If it satisifes the range it is not outside

            if (satisfies(version, range, options)) {
              return false;
            } // From now on, variable terms are as if we're in "gtr" mode.
            // but note that everything is flipped for the "ltr" function.

            for (var i = 0; i < range.set.length; ++i) {
              var comparators = range.set[i];
              var high = null;
              var low = null;
              comparators.forEach(function (comparator) {
                if (comparator.semver === ANY) {
                  comparator = new Comparator(">=0.0.0");
                }

                high = high || comparator;
                low = low || comparator;

                if (gtfn(comparator.semver, high.semver, options)) {
                  high = comparator;
                } else if (ltfn(comparator.semver, low.semver, options)) {
                  low = comparator;
                }
              }); // If the edge version comparator has a operator then our version
              // isn't outside it

              if (high.operator === comp || high.operator === ecomp) {
                return false;
              } // If the lowest version comparator has an operator and our version
              // is less than it then it isn't higher than the range

              if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
                return false;
              } else if (low.operator === ecomp && ltfn(version, low.semver)) {
                return false;
              }
            }

            return true;
          }

          exports.prerelease = prerelease;

          function prerelease(version, options) {
            var parsed = parse(version, options);
            return parsed && parsed.prerelease.length ? parsed.prerelease : null;
          }

          exports.intersects = intersects;

          function intersects(r1, r2, options) {
            r1 = new Range(r1, options);
            r2 = new Range(r2, options);
            return r1.intersects(r2);
          }

          exports.coerce = coerce;

          function coerce(version, options) {
            if (version instanceof SemVer) {
              return version;
            }

            if (typeof version === "number") {
              version = String(version);
            }

            if (typeof version !== "string") {
              return null;
            }

            options = options || {};
            var match = null;

            if (!options.rtl) {
              match = version.match(re[t.COERCE]);
            } else {
              // Find the right-most coercible string that does not share
              // a terminus with a more left-ward coercible string.
              // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
              //
              // Walk through the string checking with a /g regexp
              // Manually set the index so as to pick up overlapping matches.
              // Stop when we get a match that ends at the string end, since no
              // coercible string can be more right-ward without the same terminus.
              var next;

              while (
                (next = re[t.COERCERTL].exec(version)) &&
                (!match || match.index + match[0].length !== version.length)
              ) {
                if (!match || next.index + next[0].length !== match.index + match[0].length) {
                  match = next;
                }

                re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
              } // leave it in a clean state

              re[t.COERCERTL].lastIndex = -1;
            }

            if (match === null) {
              return null;
            }

            return parse(match[2] + "." + (match[3] || "0") + "." + (match[4] || "0"), options);
          }
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(17)));

        /***/
      },
      /* 11 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
          return meta;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
          return dehydrate;
        });
        /* unused harmony export fillInPath */
        /* unused harmony export hydrate */
        /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        var meta = {
          inspectable: Symbol("inspectable"),
          inspected: Symbol("inspected"),
          name: Symbol("name"),
          preview_long: Symbol("preview_long"),
          preview_short: Symbol("preview_short"),
          readonly: Symbol("readonly"),
          size: Symbol("size"),
          type: Symbol("type"),
          unserializable: Symbol("unserializable"),
        };
        // This threshold determines the depth at which the bridge "dehydrates" nested data.
        // Dehydration means that we don't serialize the data for e.g. postMessage or stringify,
        // unless the frontend explicitly requests it (e.g. a user clicks to expand a props object).
        //
        // Reducing this threshold will improve the speed of initial component inspection,
        // but may decrease the responsiveness of expanding objects/arrays to inspect further.
        var LEVEL_THRESHOLD = 2;
        /**
         * Generate the dehydrated metadata for complex object instances
         */

        function createDehydrated(type, inspectable, data, cleaned, path) {
          cleaned.push(path);
          var dehydrated = {
            inspectable: inspectable,
            type: type,
            preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
            preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, false),
            name: !data.constructor || data.constructor.name === "Object" ? "" : data.constructor.name,
          };

          if (type === "array" || type === "typed_array") {
            dehydrated.size = data.length;
          } else if (type === "object") {
            dehydrated.size = Object.keys(data).length;
          }

          if (type === "iterator" || type === "typed_array") {
            dehydrated.readonly = true;
          }

          return dehydrated;
        }
        /**
         * Strip out complex data (instances, functions, and data nested > LEVEL_THRESHOLD levels deep).
         * The paths of the stripped out objects are appended to the `cleaned` list.
         * On the other side of the barrier, the cleaned list is used to "re-hydrate" the cleaned representation into
         * an object with symbols as attributes, so that a sanitized object can be distinguished from a normal object.
         *
         * Input: {"some": {"attr": fn()}, "other": AnInstance}
         * Output: {
         *   "some": {
         *     "attr": {"name": the fn.name, type: "function"}
         *   },
         *   "other": {
         *     "name": "AnInstance",
         *     "type": "object",
         *   },
         * }
         * and cleaned = [["some", "attr"], ["other"]]
         */

        function dehydrate(data, cleaned, unserializable, path, isPathAllowed) {
          var level = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
          var type = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getDataType */ "f"])(data);
          var isPathAllowedCheck;

          switch (type) {
            case "html_element":
              cleaned.push(path);
              return {
                inspectable: false,
                preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, false),
                preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
                name: data.tagName,
                type: type,
              };

            case "function":
              cleaned.push(path);
              return {
                inspectable: false,
                preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, false),
                preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
                name: typeof data.name === "function" || !data.name ? "function" : data.name,
                type: type,
              };

            case "string":
              isPathAllowedCheck = isPathAllowed(path);

              if (isPathAllowedCheck) {
                return data;
              } else {
                return data.length <= 500 ? data : data.slice(0, 500) + "...";
              }

            case "bigint":
              cleaned.push(path);
              return {
                inspectable: false,
                preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, false),
                preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
                name: data.toString(),
                type: type,
              };

            case "symbol":
              cleaned.push(path);
              return {
                inspectable: false,
                preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, false),
                preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
                name: data.toString(),
                type: type,
              };
            // React Elements aren't very inspector-friendly,
            // and often contain private fields or circular references.

            case "react_element":
              cleaned.push(path);
              return {
                inspectable: false,
                preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, false),
                preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
                name:
                  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getDisplayNameForReactElement */ "i"])(data) ||
                  "Unknown",
                type: type,
              };
            // ArrayBuffers error if you try to inspect them.

            case "array_buffer":
            case "data_view":
              cleaned.push(path);
              return {
                inspectable: false,
                preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, false),
                preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
                name: type === "data_view" ? "DataView" : "ArrayBuffer",
                size: data.byteLength,
                type: type,
              };

            case "array":
              isPathAllowedCheck = isPathAllowed(path);

              if (level >= LEVEL_THRESHOLD && !isPathAllowedCheck) {
                return createDehydrated(type, true, data, cleaned, path);
              }

              return data.map(function (item, i) {
                return dehydrate(
                  item,
                  cleaned,
                  unserializable,
                  path.concat([i]),
                  isPathAllowed,
                  isPathAllowedCheck ? 1 : level + 1
                );
              });

            case "html_all_collection":
            case "typed_array":
            case "iterator":
              isPathAllowedCheck = isPathAllowed(path);

              if (level >= LEVEL_THRESHOLD && !isPathAllowedCheck) {
                return createDehydrated(type, true, data, cleaned, path);
              } else {
                var unserializableValue = {
                  unserializable: true,
                  type: type,
                  readonly: true,
                  size: type === "typed_array" ? data.length : undefined,
                  preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(
                    data,
                    false
                  ),
                  preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
                  name: !data.constructor || data.constructor.name === "Object" ? "" : data.constructor.name,
                }; // TRICKY
                // Don't use [...spread] syntax for this purpose.
                // This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
                // Other types (e.g. typed arrays, Sets) will not spread correctly.

                Array.from(data).forEach(function (item, i) {
                  return (unserializableValue[i] = dehydrate(
                    item,
                    cleaned,
                    unserializable,
                    path.concat([i]),
                    isPathAllowed,
                    isPathAllowedCheck ? 1 : level + 1
                  ));
                });
                unserializable.push(path);
                return unserializableValue;
              }

            case "opaque_iterator":
              cleaned.push(path);
              return {
                inspectable: false,
                preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, false),
                preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
                name: data[Symbol.toStringTag],
                type: type,
              };

            case "date":
              cleaned.push(path);
              return {
                inspectable: false,
                preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, false),
                preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
                name: data.toString(),
                type: type,
              };

            case "regexp":
              cleaned.push(path);
              return {
                inspectable: false,
                preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, false),
                preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "d"])(data, true),
                name: data.toString(),
                type: type,
              };

            case "object":
              isPathAllowedCheck = isPathAllowed(path);

              if (level >= LEVEL_THRESHOLD && !isPathAllowedCheck) {
                return createDehydrated(type, true, data, cleaned, path);
              } else {
                var object = {};
                Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getAllEnumerableKeys */ "e"])(data).forEach(function (
                  key
                ) {
                  var name = key.toString();
                  object[name] = dehydrate(
                    data[key],
                    cleaned,
                    unserializable,
                    path.concat([name]),
                    isPathAllowed,
                    isPathAllowedCheck ? 1 : level + 1
                  );
                });
                return object;
              }

            case "infinity":
            case "nan":
            case "undefined":
              // Some values are lossy when sent through a WebSocket.
              // We dehydrate+rehydrate them to preserve their type.
              cleaned.push(path);
              return {
                type: type,
              };

            default:
              return data;
          }
        }
        function fillInPath(object, data, path, value) {
          var target = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getInObject */ "j"])(object, path);

          if (target != null) {
            if (!target[meta.unserializable]) {
              delete target[meta.inspectable];
              delete target[meta.inspected];
              delete target[meta.name];
              delete target[meta.preview_long];
              delete target[meta.preview_short];
              delete target[meta.readonly];
              delete target[meta.size];
              delete target[meta.type];
            }
          }

          if (value !== null && data.unserializable.length > 0) {
            var unserializablePath = data.unserializable[0];
            var isMatch = unserializablePath.length === path.length;

            for (var i = 0; i < path.length; i++) {
              if (path[i] !== unserializablePath[i]) {
                isMatch = false;
                break;
              }
            }

            if (isMatch) {
              upgradeUnserializable(value, value);
            }
          }

          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* setInObject */ "o"])(object, path, value);
        }
        function hydrate(object, cleaned, unserializable) {
          cleaned.forEach(function (path) {
            var length = path.length;
            var last = path[length - 1];
            var parent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getInObject */ "j"])(
              object,
              path.slice(0, length - 1)
            );

            if (!parent || !parent.hasOwnProperty(last)) {
              return;
            }

            var value = parent[last];

            if (!value) {
              return;
            } else if (value.type === "infinity") {
              parent[last] = Infinity;
            } else if (value.type === "nan") {
              parent[last] = NaN;
            } else if (value.type === "undefined") {
              parent[last] = undefined;
            } else {
              // Replace the string keys with Symbols so they're non-enumerable.
              var replaced = {};
              replaced[meta.inspectable] = !!value.inspectable;
              replaced[meta.inspected] = false;
              replaced[meta.name] = value.name;
              replaced[meta.preview_long] = value.preview_long;
              replaced[meta.preview_short] = value.preview_short;
              replaced[meta.size] = value.size;
              replaced[meta.readonly] = !!value.readonly;
              replaced[meta.type] = value.type;
              parent[last] = replaced;
            }
          });
          unserializable.forEach(function (path) {
            var length = path.length;
            var last = path[length - 1];
            var parent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getInObject */ "j"])(
              object,
              path.slice(0, length - 1)
            );

            if (!parent || !parent.hasOwnProperty(last)) {
              return;
            }

            var node = parent[last];

            var replacement = _objectSpread({}, node);

            upgradeUnserializable(replacement, node);
            parent[last] = replacement;
          });
          return object;
        }

        function upgradeUnserializable(destination, source) {
          var _Object$definePropert;

          Object.defineProperties(
            destination,
            ((_Object$definePropert = {}),
            _defineProperty(_Object$definePropert, meta.inspected, {
              configurable: true,
              enumerable: false,
              value: !!source.inspected,
            }),
            _defineProperty(_Object$definePropert, meta.name, {
              configurable: true,
              enumerable: false,
              value: source.name,
            }),
            _defineProperty(_Object$definePropert, meta.preview_long, {
              configurable: true,
              enumerable: false,
              value: source.preview_long,
            }),
            _defineProperty(_Object$definePropert, meta.preview_short, {
              configurable: true,
              enumerable: false,
              value: source.preview_short,
            }),
            _defineProperty(_Object$definePropert, meta.size, {
              configurable: true,
              enumerable: false,
              value: source.size,
            }),
            _defineProperty(_Object$definePropert, meta.readonly, {
              configurable: true,
              enumerable: false,
              value: !!source.readonly,
            }),
            _defineProperty(_Object$definePropert, meta.type, {
              configurable: true,
              enumerable: false,
              value: source.type,
            }),
            _defineProperty(_Object$definePropert, meta.unserializable, {
              configurable: true,
              enumerable: false,
              value: !!source.unserializable,
            }),
            _Object$definePropert)
          );
          delete destination.inspected;
          delete destination.name;
          delete destination.preview_long;
          delete destination.preview_short;
          delete destination.size;
          delete destination.readonly;
          delete destination.type;
          delete destination.unserializable;
        }

        /***/
      },
      /* 12 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
          return consoleManagedByDevToolsDuringStrictMode;
        });
        /* unused harmony export enableLogger */
        /* unused harmony export enableNamedHooksFeature */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
          return enableProfilerChangedHookIndices;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () {
          return enableStyleXFeatures;
        });
        /* unused harmony export isInternalFacebookBuild */
        /* unused harmony export enableProfilerComponentTree */
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        /************************************************************************
         * This file is forked between different DevTools implementations.
         * It should never be imported directly!
         * It should always be imported from "react-devtools-feature-flags".
         ************************************************************************/
        var consoleManagedByDevToolsDuringStrictMode = false;
        var enableLogger = false;
        var enableNamedHooksFeature = true;
        var enableProfilerChangedHookIndices = true;
        var enableStyleXFeatures = false;
        var isInternalFacebookBuild = false;
        var enableProfilerComponentTree = true;
        /************************************************************************
         * Do not edit the code below.
         * It ensures this fork exports the same types as the default flags file.
         ************************************************************************/

        // Flow magic to verify the exports of this file match the original version.
        null;

        /***/
      },
      /* 13 */
      /***/ function (module, exports) {
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        var g; // This works in non-strict mode

        g = (function () {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
        } // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },
      /* 14 */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (global) {
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          /**
           * lodash (Custom Build) <https://lodash.com/>
           * Build: `lodash modularize exports="npm" -o ./`
           * Copyright jQuery Foundation and other contributors <https://jquery.org/>
           * Released under MIT license <https://lodash.com/license>
           * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
           * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
           */

          /** Used as the `TypeError` message for "Functions" methods. */
          var FUNC_ERROR_TEXT = "Expected a function";
          /** Used as references for various `Number` constants. */

          var NAN = 0 / 0;
          /** `Object#toString` result references. */

          var symbolTag = "[object Symbol]";
          /** Used to match leading and trailing whitespace. */

          var reTrim = /^\s+|\s+$/g;
          /** Used to detect bad signed hexadecimal string values. */

          var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
          /** Used to detect binary string values. */

          var reIsBinary = /^0b[01]+$/i;
          /** Used to detect octal string values. */

          var reIsOctal = /^0o[0-7]+$/i;
          /** Built-in method references without a dependency on `root`. */

          var freeParseInt = parseInt;
          /** Detect free variable `global` from Node.js. */

          var freeGlobal =
            (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" &&
            global &&
            global.Object === Object &&
            global;
          /** Detect free variable `self`. */

          var freeSelf =
            (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" &&
            self &&
            self.Object === Object &&
            self;
          /** Used as a reference to the global object. */

          var root = freeGlobal || freeSelf || Function("return this")();
          /** Used for built-in method references. */

          var objectProto = Object.prototype;
          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */

          var objectToString = objectProto.toString;
          /* Built-in method references for those with the same name as other `lodash` methods. */

          var nativeMax = Math.max,
            nativeMin = Math.min;
          /**
           * Gets the timestamp of the number of milliseconds that have elapsed since
           * the Unix epoch (1 January 1970 00:00:00 UTC).
           *
           * @static
           * @memberOf _
           * @since 2.4.0
           * @category Date
           * @returns {number} Returns the timestamp.
           * @example
           *
           * _.defer(function(stamp) {
           *   console.log(_.now() - stamp);
           * }, _.now());
           * // => Logs the number of milliseconds it took for the deferred invocation.
           */

          var now = function now() {
            return root.Date.now();
          };
          /**
           * Creates a debounced function that delays invoking `func` until after `wait`
           * milliseconds have elapsed since the last time the debounced function was
           * invoked. The debounced function comes with a `cancel` method to cancel
           * delayed `func` invocations and a `flush` method to immediately invoke them.
           * Provide `options` to indicate whether `func` should be invoked on the
           * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
           * with the last arguments provided to the debounced function. Subsequent
           * calls to the debounced function return the result of the last `func`
           * invocation.
           *
           * **Note:** If `leading` and `trailing` options are `true`, `func` is
           * invoked on the trailing edge of the timeout only if the debounced function
           * is invoked more than once during the `wait` timeout.
           *
           * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
           * until to the next tick, similar to `setTimeout` with a timeout of `0`.
           *
           * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
           * for details over the differences between `_.debounce` and `_.throttle`.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Function
           * @param {Function} func The function to debounce.
           * @param {number} [wait=0] The number of milliseconds to delay.
           * @param {Object} [options={}] The options object.
           * @param {boolean} [options.leading=false]
           *  Specify invoking on the leading edge of the timeout.
           * @param {number} [options.maxWait]
           *  The maximum time `func` is allowed to be delayed before it's invoked.
           * @param {boolean} [options.trailing=true]
           *  Specify invoking on the trailing edge of the timeout.
           * @returns {Function} Returns the new debounced function.
           * @example
           *
           * // Avoid costly calculations while the window size is in flux.
           * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
           *
           * // Invoke `sendMail` when clicked, debouncing subsequent calls.
           * jQuery(element).on('click', _.debounce(sendMail, 300, {
           *   'leading': true,
           *   'trailing': false
           * }));
           *
           * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
           * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
           * var source = new EventSource('/stream');
           * jQuery(source).on('message', debounced);
           *
           * // Cancel the trailing debounced invocation.
           * jQuery(window).on('popstate', debounced.cancel);
           */

          function debounce(func, wait, options) {
            var lastArgs,
              lastThis,
              maxWait,
              result,
              timerId,
              lastCallTime,
              lastInvokeTime = 0,
              leading = false,
              maxing = false,
              trailing = true;

            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }

            wait = toNumber(wait) || 0;

            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }

            function invokeFunc(time) {
              var args = lastArgs,
                thisArg = lastThis;
              lastArgs = lastThis = undefined;
              lastInvokeTime = time;
              result = func.apply(thisArg, args);
              return result;
            }

            function leadingEdge(time) {
              // Reset any `maxWait` timer.
              lastInvokeTime = time; // Start the timer for the trailing edge.

              timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

              return leading ? invokeFunc(time) : result;
            }

            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime,
                result = wait - timeSinceLastCall;
              return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
            }

            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
              // trailing edge, the system time has gone backwards and we're treating
              // it as the trailing edge, or we've hit the `maxWait` limit.

              return (
                lastCallTime === undefined ||
                timeSinceLastCall >= wait ||
                timeSinceLastCall < 0 ||
                (maxing && timeSinceLastInvoke >= maxWait)
              );
            }

            function timerExpired() {
              var time = now();

              if (shouldInvoke(time)) {
                return trailingEdge(time);
              } // Restart the timer.

              timerId = setTimeout(timerExpired, remainingWait(time));
            }

            function trailingEdge(time) {
              timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
              // debounced at least once.

              if (trailing && lastArgs) {
                return invokeFunc(time);
              }

              lastArgs = lastThis = undefined;
              return result;
            }

            function cancel() {
              if (timerId !== undefined) {
                clearTimeout(timerId);
              }

              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined;
            }

            function flush() {
              return timerId === undefined ? result : trailingEdge(now());
            }

            function debounced() {
              var time = now(),
                isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;

              if (isInvoking) {
                if (timerId === undefined) {
                  return leadingEdge(lastCallTime);
                }

                if (maxing) {
                  // Handle invocations in a tight loop.
                  timerId = setTimeout(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }

              if (timerId === undefined) {
                timerId = setTimeout(timerExpired, wait);
              }

              return result;
            }

            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          /**
           * Creates a throttled function that only invokes `func` at most once per
           * every `wait` milliseconds. The throttled function comes with a `cancel`
           * method to cancel delayed `func` invocations and a `flush` method to
           * immediately invoke them. Provide `options` to indicate whether `func`
           * should be invoked on the leading and/or trailing edge of the `wait`
           * timeout. The `func` is invoked with the last arguments provided to the
           * throttled function. Subsequent calls to the throttled function return the
           * result of the last `func` invocation.
           *
           * **Note:** If `leading` and `trailing` options are `true`, `func` is
           * invoked on the trailing edge of the timeout only if the throttled function
           * is invoked more than once during the `wait` timeout.
           *
           * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
           * until to the next tick, similar to `setTimeout` with a timeout of `0`.
           *
           * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
           * for details over the differences between `_.throttle` and `_.debounce`.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Function
           * @param {Function} func The function to throttle.
           * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
           * @param {Object} [options={}] The options object.
           * @param {boolean} [options.leading=true]
           *  Specify invoking on the leading edge of the timeout.
           * @param {boolean} [options.trailing=true]
           *  Specify invoking on the trailing edge of the timeout.
           * @returns {Function} Returns the new throttled function.
           * @example
           *
           * // Avoid excessively updating the position while scrolling.
           * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
           *
           * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
           * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
           * jQuery(element).on('click', throttled);
           *
           * // Cancel the trailing throttled invocation.
           * jQuery(window).on('popstate', throttled.cancel);
           */

          function throttle(func, wait, options) {
            var leading = true,
              trailing = true;

            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }

            if (isObject(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }

            return debounce(func, wait, {
              leading: leading,
              maxWait: wait,
              trailing: trailing,
            });
          }
          /**
           * Checks if `value` is the
           * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
           * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(_.noop);
           * // => true
           *
           * _.isObject(null);
           * // => false
           */

          function isObject(value) {
            var type = _typeof(value);

            return !!value && (type == "object" || type == "function");
          }
          /**
           * Checks if `value` is object-like. A value is object-like if it's not `null`
           * and has a `typeof` result of "object".
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
           * @example
           *
           * _.isObjectLike({});
           * // => true
           *
           * _.isObjectLike([1, 2, 3]);
           * // => true
           *
           * _.isObjectLike(_.noop);
           * // => false
           *
           * _.isObjectLike(null);
           * // => false
           */

          function isObjectLike(value) {
            return !!value && _typeof(value) == "object";
          }
          /**
           * Checks if `value` is classified as a `Symbol` primitive or object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
           * @example
           *
           * _.isSymbol(Symbol.iterator);
           * // => true
           *
           * _.isSymbol('abc');
           * // => false
           */

          function isSymbol(value) {
            return _typeof(value) == "symbol" || (isObjectLike(value) && objectToString.call(value) == symbolTag);
          }
          /**
           * Converts `value` to a number.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to process.
           * @returns {number} Returns the number.
           * @example
           *
           * _.toNumber(3.2);
           * // => 3.2
           *
           * _.toNumber(Number.MIN_VALUE);
           * // => 5e-324
           *
           * _.toNumber(Infinity);
           * // => Infinity
           *
           * _.toNumber('3.2');
           * // => 3.2
           */

          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }

            if (isSymbol(value)) {
              return NAN;
            }

            if (isObject(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }

            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }

            value = value.replace(reTrim, "");
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value)
              ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
              : reIsBadHex.test(value)
              ? NAN
              : +value;
          }

          module.exports = throttle;
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(13)));

        /***/
      },
      /* 15 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, "b", function () {
          return /* binding */ getInternalReactConstants;
        });
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return /* binding */ attach;
        });

        // EXTERNAL MODULE: ../react-devtools-shared/node_modules/semver/semver.js
        var semver = __webpack_require__(10);

        // EXTERNAL MODULE: ../react-devtools-shared/src/types.js
        var types = __webpack_require__(1);

        // EXTERNAL MODULE: ../react-devtools-shared/src/utils.js
        var utils = __webpack_require__(0);

        // EXTERNAL MODULE: ../react-devtools-shared/src/storage.js
        var storage = __webpack_require__(5);

        // EXTERNAL MODULE: ../react-devtools-shared/src/backend/utils.js
        var backend_utils = __webpack_require__(4);

        // EXTERNAL MODULE: ../react-devtools-shared/src/constants.js
        var constants = __webpack_require__(2);

        // EXTERNAL MODULE: /Users/mengdi/workspace/git/react-release/build/oss-experimental/react-debug-tools/index.js
        var react_debug_tools = __webpack_require__(21);

        // EXTERNAL MODULE: ../react-devtools-shared/src/backend/console.js
        var backend_console = __webpack_require__(8);

        // EXTERNAL MODULE: ../react-devtools-shared/src/backend/ReactSymbols.js
        var ReactSymbols = __webpack_require__(3);

        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/ReactFiberFlags.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        // This list of flags must be synced with the following file:
        // https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberFlags.js
        var NoFlags =
          /*                      */
          0;
        var PerformedWork =
          /*                */
          1;
        var Placement =
          /*                    */
          2;
        var DidCapture =
          /*                   */
          128;
        var Hydrating =
          /*                    */
          4096;
        // EXTERNAL MODULE: ../react-devtools-shared/src/config/DevToolsFeatureFlags.core-oss.js
        var DevToolsFeatureFlags_core_oss = __webpack_require__(12);

        // CONCATENATED MODULE: ../shared/objectIs.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        /**
         * inlined Object.is polyfill to avoid requiring consumers ship their own
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
         */
        function is(x, y) {
          return (
            (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
          );
        }

        var objectIs = typeof Object.is === "function" ? Object.is : is; // $FlowFixMe[method-unbinding]
        /* harmony default export */ var shared_objectIs = objectIs;
        // CONCATENATED MODULE: ../shared/hasOwnProperty.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        // $FlowFixMe[method-unbinding]
        var hasOwnProperty_hasOwnProperty = Object.prototype.hasOwnProperty;
        /* harmony default export */ var shared_hasOwnProperty = hasOwnProperty_hasOwnProperty;
        // EXTERNAL MODULE: ../react-devtools-shared/src/isArray.js
        var isArray = __webpack_require__(6);

        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/StyleX/utils.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        var cachedStyleNameToValueMap = new Map();
        function getStyleXData(data) {
          var sources = new Set();
          var resolvedStyles = {};
          crawlData(data, sources, resolvedStyles);
          return {
            sources: Array.from(sources).sort(),
            resolvedStyles: resolvedStyles,
          };
        }
        function crawlData(data, sources, resolvedStyles) {
          if (data == null) {
            return;
          }

          if (Object(isArray["a" /* default */])(data)) {
            data.forEach(function (entry) {
              if (entry == null) {
                return;
              }

              if (Object(isArray["a" /* default */])(entry)) {
                crawlData(entry, sources, resolvedStyles);
              } else {
                crawlObjectProperties(entry, sources, resolvedStyles);
              }
            });
          } else {
            crawlObjectProperties(data, sources, resolvedStyles);
          }

          resolvedStyles = Object.fromEntries(Object.entries(resolvedStyles).sort());
        }

        function crawlObjectProperties(entry, sources, resolvedStyles) {
          var keys = Object.keys(entry);
          keys.forEach(function (key) {
            var value = entry[key];

            if (typeof value === "string") {
              if (key === value) {
                // Special case; this key is the name of the style's source/file/module.
                sources.add(key);
              } else {
                resolvedStyles[key] = getPropertyValueForStyleName(value);
              }
            } else {
              var nestedStyle = {};
              resolvedStyles[key] = nestedStyle;
              crawlData([value], sources, nestedStyle);
            }
          });
        }

        function getPropertyValueForStyleName(styleName) {
          if (cachedStyleNameToValueMap.has(styleName)) {
            return cachedStyleNameToValueMap.get(styleName);
          }

          for (var styleSheetIndex = 0; styleSheetIndex < document.styleSheets.length; styleSheetIndex++) {
            var styleSheet = document.styleSheets[styleSheetIndex]; // $FlowFixMe Flow doesn't konw about these properties

            var rules = styleSheet.rules || styleSheet.cssRules; // $FlowFixMe `rules` is mixed

            for (var ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
              // $FlowFixMe `rules` is mixed
              var rule = rules[ruleIndex]; // $FlowFixMe Flow doesn't konw about these properties

              var cssText = rule.cssText,
                selectorText = rule.selectorText,
                style = rule.style;

              if (selectorText != null) {
                if (selectorText.startsWith(".".concat(styleName))) {
                  var match = cssText.match(/{ *([a-z\-]+):/);

                  if (match !== null) {
                    var property = match[1];
                    var value = style.getPropertyValue(property);
                    cachedStyleNameToValueMap.set(styleName, value);
                    return value;
                  } else {
                    return null;
                  }
                }
              }
            }
          }

          return null;
        }
        // EXTERNAL MODULE: ../shared/isArray.js
        var shared_isArray = __webpack_require__(9);

        // CONCATENATED MODULE: ../react-devtools-timeline/src/constants.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        var REACT_TOTAL_NUM_LANES = 31; // Increment this number any time a backwards breaking change is made to the profiler metadata.

        var SCHEDULING_PROFILER_VERSION = 1;
        var SNAPSHOT_MAX_HEIGHT = 60;
        // EXTERNAL MODULE: ../react-devtools-shared/src/backend/DevToolsFiberComponentStack.js + 2 modules
        var DevToolsFiberComponentStack = __webpack_require__(16);

        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/profilingHooks.js
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        // Add padding to the start/stop time of the profile.
        // This makes the UI nicer to use.

        var TIME_OFFSET = 10;
        var performanceTarget = null; // If performance exists and supports the subset of the User Timing API that we require.

        var supportsUserTiming =
          typeof performance !== "undefined" && // $FlowFixMe[method-unbinding]
          typeof performance.mark === "function" && // $FlowFixMe[method-unbinding]
          typeof performance.clearMarks === "function";
        var supportsUserTimingV3 = false;

        if (supportsUserTiming) {
          var CHECK_V3_MARK = "__v3";
          var markOptions = {};
          Object.defineProperty(markOptions, "startTime", {
            get: function get() {
              supportsUserTimingV3 = true;
              return 0;
            },
            set: function set() {},
          });

          try {
            // $FlowFixMe: Flow expects the User Timing level 2 API.
            performance.mark(CHECK_V3_MARK, markOptions);
          } catch (error) {
            // Ignore
          } finally {
            performance.clearMarks(CHECK_V3_MARK);
          }
        }

        if (supportsUserTimingV3) {
          performanceTarget = performance;
        } // Some environments (e.g. React Native / Hermes) don't support the performance API yet.

        var getCurrentTime = // $FlowFixMe[method-unbinding]
          (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" &&
          typeof performance.now === "function"
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              }; // Mocking the Performance Object (and User Timing APIs) for testing is fragile.
        // This API allows tests to directly override the User Timing APIs.

        function setPerformanceMock_ONLY_FOR_TESTING(performanceMock) {
          performanceTarget = performanceMock;
          supportsUserTiming = performanceMock !== null;
          supportsUserTimingV3 = performanceMock !== null;
        }
        function createProfilingHooks(_ref) {
          var getDisplayNameForFiber = _ref.getDisplayNameForFiber,
            getIsProfiling = _ref.getIsProfiling,
            getLaneLabelMap = _ref.getLaneLabelMap,
            workTagMap = _ref.workTagMap,
            currentDispatcherRef = _ref.currentDispatcherRef,
            reactVersion = _ref.reactVersion;
          var currentBatchUID = 0;
          var currentReactComponentMeasure = null;
          var currentReactMeasuresStack = [];
          var currentTimelineData = null;
          var currentFiberStacks = new Map();
          var isProfiling = false;
          var nextRenderShouldStartNewBatch = false;

          function getRelativeTime() {
            var currentTime = getCurrentTime();

            if (currentTimelineData) {
              if (currentTimelineData.startTime === 0) {
                currentTimelineData.startTime = currentTime - TIME_OFFSET;
              }

              return currentTime - currentTimelineData.startTime;
            }

            return 0;
          }

          function getInternalModuleRanges() {
            /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
            if (
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.getInternalModuleRanges === "function"
            ) {
              // Ask the DevTools hook for module ranges that may have been reported by the current renderer(s).
              // Don't do this eagerly like the laneToLabelMap,
              // because some modules might not yet have registered their boundaries when the renderer is injected.
              var ranges = __REACT_DEVTOOLS_GLOBAL_HOOK__.getInternalModuleRanges(); // This check would not be required,
              // except that it's possible for things to override __REACT_DEVTOOLS_GLOBAL_HOOK__.

              if (Object(shared_isArray["a" /* default */])(ranges)) {
                return ranges;
              }
            }

            return null;
          }

          function getTimelineData() {
            return currentTimelineData;
          }

          function laneToLanesArray(lanes) {
            var lanesArray = [];
            var lane = 1;

            for (var index = 0; index < REACT_TOTAL_NUM_LANES; index++) {
              if (lane & lanes) {
                lanesArray.push(lane);
              }

              lane *= 2;
            }

            return lanesArray;
          }

          var laneToLabelMap = typeof getLaneLabelMap === "function" ? getLaneLabelMap() : null;

          function markMetadata() {
            markAndClear("--react-version-".concat(reactVersion));
            markAndClear("--profiler-version-".concat(SCHEDULING_PROFILER_VERSION));
            var ranges = getInternalModuleRanges();

            if (ranges) {
              for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];

                if (Object(shared_isArray["a" /* default */])(range) && range.length === 2) {
                  var _ranges$i = _slicedToArray(ranges[i], 2),
                    startStackFrame = _ranges$i[0],
                    stopStackFrame = _ranges$i[1];

                  markAndClear("--react-internal-module-start-".concat(startStackFrame));
                  markAndClear("--react-internal-module-stop-".concat(stopStackFrame));
                }
              }
            }

            if (laneToLabelMap != null) {
              var labels = Array.from(laneToLabelMap.values()).join(",");
              markAndClear("--react-lane-labels-".concat(labels));
            }
          }

          function markAndClear(markName) {
            // This method won't be called unless these functions are defined, so we can skip the extra typeof check.
            performanceTarget.mark(markName);
            performanceTarget.clearMarks(markName);
          }

          function recordReactMeasureStarted(type, lanes) {
            // Decide what depth thi work should be rendered at, based on what's on the top of the stack.
            // It's okay to render over top of "idle" work but everything else should be on its own row.
            var depth = 0;

            if (currentReactMeasuresStack.length > 0) {
              var top = currentReactMeasuresStack[currentReactMeasuresStack.length - 1];
              depth = top.type === "render-idle" ? top.depth : top.depth + 1;
            }

            var lanesArray = laneToLanesArray(lanes);
            var reactMeasure = {
              type: type,
              batchUID: currentBatchUID,
              depth: depth,
              lanes: lanesArray,
              timestamp: getRelativeTime(),
              duration: 0,
            };
            currentReactMeasuresStack.push(reactMeasure);

            if (currentTimelineData) {
              var _currentTimelineData = currentTimelineData,
                batchUIDToMeasuresMap = _currentTimelineData.batchUIDToMeasuresMap,
                laneToReactMeasureMap = _currentTimelineData.laneToReactMeasureMap;
              var reactMeasures = batchUIDToMeasuresMap.get(currentBatchUID);

              if (reactMeasures != null) {
                reactMeasures.push(reactMeasure);
              } else {
                batchUIDToMeasuresMap.set(currentBatchUID, [reactMeasure]);
              }

              lanesArray.forEach(function (lane) {
                reactMeasures = laneToReactMeasureMap.get(lane);

                if (reactMeasures) {
                  reactMeasures.push(reactMeasure);
                }
              });
            }
          }

          function recordReactMeasureCompleted(type) {
            var currentTime = getRelativeTime();

            if (currentReactMeasuresStack.length === 0) {
              console.error(
                'Unexpected type "%s" completed at %sms while currentReactMeasuresStack is empty.',
                type,
                currentTime
              ); // Ignore work "completion" user timing mark that doesn't complete anything

              return;
            }

            var top = currentReactMeasuresStack.pop();

            if (top.type !== type) {
              console.error(
                'Unexpected type "%s" completed at %sms before "%s" completed.',
                type,
                currentTime,
                top.type
              );
            } // $FlowFixMe This property should not be writable outside of this function.

            top.duration = currentTime - top.timestamp;

            if (currentTimelineData) {
              currentTimelineData.duration = getRelativeTime() + TIME_OFFSET;
            }
          }

          function markCommitStarted(lanes) {
            if (isProfiling) {
              recordReactMeasureStarted("commit", lanes); // TODO (timeline) Re-think this approach to "batching"; I don't think it works for Suspense or pre-rendering.
              // This issue applies to the User Timing data also.

              nextRenderShouldStartNewBatch = true;
            }

            if (supportsUserTimingV3) {
              markAndClear("--commit-start-".concat(lanes)); // Some metadata only needs to be logged once per session,
              // but if profiling information is being recorded via the Performance tab,
              // DevTools has no way of knowing when the recording starts.
              // Because of that, we log thie type of data periodically (once per commit).

              markMetadata();
            }
          }

          function markCommitStopped() {
            if (isProfiling) {
              recordReactMeasureCompleted("commit");
              recordReactMeasureCompleted("render-idle");
            }

            if (supportsUserTimingV3) {
              markAndClear("--commit-stop");
            }
          }

          function markComponentRenderStarted(fiber) {
            if (isProfiling || supportsUserTimingV3) {
              var componentName = getDisplayNameForFiber(fiber) || "Unknown";

              if (isProfiling) {
                // TODO (timeline) Record and cache component stack
                if (isProfiling) {
                  currentReactComponentMeasure = {
                    componentName: componentName,
                    duration: 0,
                    timestamp: getRelativeTime(),
                    type: "render",
                    warning: null,
                  };
                }
              }

              if (supportsUserTimingV3) {
                markAndClear("--component-render-start-".concat(componentName));
              }
            }
          }

          function markComponentRenderStopped() {
            if (isProfiling) {
              if (currentReactComponentMeasure) {
                if (currentTimelineData) {
                  currentTimelineData.componentMeasures.push(currentReactComponentMeasure);
                } // $FlowFixMe[incompatible-use] found when upgrading Flow

                currentReactComponentMeasure.duration = getRelativeTime() - currentReactComponentMeasure.timestamp; // $FlowFixMe[incompatible-use] found when upgrading Flow
                currentReactComponentMeasure = null;
              }
            }

            if (supportsUserTimingV3) {
              markAndClear("--component-render-stop");
            }
          }

          function markComponentLayoutEffectMountStarted(fiber) {
            if (isProfiling || supportsUserTimingV3) {
              var componentName = getDisplayNameForFiber(fiber) || "Unknown";

              if (isProfiling) {
                // TODO (timeline) Record and cache component stack
                if (isProfiling) {
                  currentReactComponentMeasure = {
                    componentName: componentName,
                    duration: 0,
                    timestamp: getRelativeTime(),
                    type: "layout-effect-mount",
                    warning: null,
                  };
                }
              }

              if (supportsUserTimingV3) {
                markAndClear("--component-layout-effect-mount-start-".concat(componentName));
              }
            }
          }

          function markComponentLayoutEffectMountStopped() {
            if (isProfiling) {
              if (currentReactComponentMeasure) {
                if (currentTimelineData) {
                  currentTimelineData.componentMeasures.push(currentReactComponentMeasure);
                } // $FlowFixMe[incompatible-use] found when upgrading Flow

                currentReactComponentMeasure.duration = getRelativeTime() - currentReactComponentMeasure.timestamp; // $FlowFixMe[incompatible-use] found when upgrading Flow
                currentReactComponentMeasure = null;
              }
            }

            if (supportsUserTimingV3) {
              markAndClear("--component-layout-effect-mount-stop");
            }
          }

          function markComponentLayoutEffectUnmountStarted(fiber) {
            if (isProfiling || supportsUserTimingV3) {
              var componentName = getDisplayNameForFiber(fiber) || "Unknown";

              if (isProfiling) {
                // TODO (timeline) Record and cache component stack
                if (isProfiling) {
                  currentReactComponentMeasure = {
                    componentName: componentName,
                    duration: 0,
                    timestamp: getRelativeTime(),
                    type: "layout-effect-unmount",
                    warning: null,
                  };
                }
              }

              if (supportsUserTimingV3) {
                markAndClear("--component-layout-effect-unmount-start-".concat(componentName));
              }
            }
          }

          function markComponentLayoutEffectUnmountStopped() {
            if (isProfiling) {
              if (currentReactComponentMeasure) {
                if (currentTimelineData) {
                  currentTimelineData.componentMeasures.push(currentReactComponentMeasure);
                } // $FlowFixMe[incompatible-use] found when upgrading Flow

                currentReactComponentMeasure.duration = getRelativeTime() - currentReactComponentMeasure.timestamp; // $FlowFixMe[incompatible-use] found when upgrading Flow
                currentReactComponentMeasure = null;
              }
            }

            if (supportsUserTimingV3) {
              markAndClear("--component-layout-effect-unmount-stop");
            }
          }

          function markComponentPassiveEffectMountStarted(fiber) {
            if (isProfiling || supportsUserTimingV3) {
              var componentName = getDisplayNameForFiber(fiber) || "Unknown";

              if (isProfiling) {
                // TODO (timeline) Record and cache component stack
                if (isProfiling) {
                  currentReactComponentMeasure = {
                    componentName: componentName,
                    duration: 0,
                    timestamp: getRelativeTime(),
                    type: "passive-effect-mount",
                    warning: null,
                  };
                }
              }

              if (supportsUserTimingV3) {
                markAndClear("--component-passive-effect-mount-start-".concat(componentName));
              }
            }
          }

          function markComponentPassiveEffectMountStopped() {
            if (isProfiling) {
              if (currentReactComponentMeasure) {
                if (currentTimelineData) {
                  currentTimelineData.componentMeasures.push(currentReactComponentMeasure);
                } // $FlowFixMe[incompatible-use] found when upgrading Flow

                currentReactComponentMeasure.duration = getRelativeTime() - currentReactComponentMeasure.timestamp; // $FlowFixMe[incompatible-use] found when upgrading Flow
                currentReactComponentMeasure = null;
              }
            }

            if (supportsUserTimingV3) {
              markAndClear("--component-passive-effect-mount-stop");
            }
          }

          function markComponentPassiveEffectUnmountStarted(fiber) {
            if (isProfiling || supportsUserTimingV3) {
              var componentName = getDisplayNameForFiber(fiber) || "Unknown";

              if (isProfiling) {
                // TODO (timeline) Record and cache component stack
                if (isProfiling) {
                  currentReactComponentMeasure = {
                    componentName: componentName,
                    duration: 0,
                    timestamp: getRelativeTime(),
                    type: "passive-effect-unmount",
                    warning: null,
                  };
                }
              }

              if (supportsUserTimingV3) {
                markAndClear("--component-passive-effect-unmount-start-".concat(componentName));
              }
            }
          }

          function markComponentPassiveEffectUnmountStopped() {
            if (isProfiling) {
              if (currentReactComponentMeasure) {
                if (currentTimelineData) {
                  currentTimelineData.componentMeasures.push(currentReactComponentMeasure);
                } // $FlowFixMe[incompatible-use] found when upgrading Flow

                currentReactComponentMeasure.duration = getRelativeTime() - currentReactComponentMeasure.timestamp; // $FlowFixMe[incompatible-use] found when upgrading Flow
                currentReactComponentMeasure = null;
              }
            }

            if (supportsUserTimingV3) {
              markAndClear("--component-passive-effect-unmount-stop");
            }
          }

          function markComponentErrored(fiber, thrownValue, lanes) {
            if (isProfiling || supportsUserTimingV3) {
              var componentName = getDisplayNameForFiber(fiber) || "Unknown";
              var phase = fiber.alternate === null ? "mount" : "update";
              var message = "";

              if (
                thrownValue !== null &&
                _typeof(thrownValue) === "object" &&
                typeof thrownValue.message === "string"
              ) {
                message = thrownValue.message;
              } else if (typeof thrownValue === "string") {
                message = thrownValue;
              }

              if (isProfiling) {
                // TODO (timeline) Record and cache component stack
                if (currentTimelineData) {
                  currentTimelineData.thrownErrors.push({
                    componentName: componentName,
                    message: message,
                    phase: phase,
                    timestamp: getRelativeTime(),
                    type: "thrown-error",
                  });
                }
              }

              if (supportsUserTimingV3) {
                markAndClear("--error-".concat(componentName, "-").concat(phase, "-").concat(message));
              }
            }
          }

          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map; // $FlowFixMe: Flow cannot handle polymorphic WeakMaps

          var wakeableIDs = new PossiblyWeakMap();
          var wakeableID = 0;

          function getWakeableID(wakeable) {
            if (!wakeableIDs.has(wakeable)) {
              wakeableIDs.set(wakeable, wakeableID++);
            }

            return wakeableIDs.get(wakeable);
          }

          function markComponentSuspended(fiber, wakeable, lanes) {
            if (isProfiling || supportsUserTimingV3) {
              var eventType = wakeableIDs.has(wakeable) ? "resuspend" : "suspend";
              var id = getWakeableID(wakeable);
              var componentName = getDisplayNameForFiber(fiber) || "Unknown";
              var phase = fiber.alternate === null ? "mount" : "update"; // Following the non-standard fn.displayName convention,
              // frameworks like Relay may also annotate Promises with a displayName,
              // describing what operation/data the thrown Promise is related to.
              // When this is available we should pass it along to the Timeline.

              var displayName = wakeable.displayName || "";
              var suspenseEvent = null;

              if (isProfiling) {
                // TODO (timeline) Record and cache component stack
                suspenseEvent = {
                  componentName: componentName,
                  depth: 0,
                  duration: 0,
                  id: "".concat(id),
                  phase: phase,
                  promiseName: displayName,
                  resolution: "unresolved",
                  timestamp: getRelativeTime(),
                  type: "suspense",
                  warning: null,
                };

                if (currentTimelineData) {
                  currentTimelineData.suspenseEvents.push(suspenseEvent);
                }
              }

              if (supportsUserTimingV3) {
                markAndClear(
                  "--suspense-"
                    .concat(eventType, "-")
                    .concat(id, "-")
                    .concat(componentName, "-")
                    .concat(phase, "-")
                    .concat(lanes, "-")
                    .concat(displayName)
                );
              }

              wakeable.then(
                function () {
                  if (suspenseEvent) {
                    suspenseEvent.duration = getRelativeTime() - suspenseEvent.timestamp;
                    suspenseEvent.resolution = "resolved";
                  }

                  if (supportsUserTimingV3) {
                    markAndClear("--suspense-resolved-".concat(id, "-").concat(componentName));
                  }
                },
                function () {
                  if (suspenseEvent) {
                    suspenseEvent.duration = getRelativeTime() - suspenseEvent.timestamp;
                    suspenseEvent.resolution = "rejected";
                  }

                  if (supportsUserTimingV3) {
                    markAndClear("--suspense-rejected-".concat(id, "-").concat(componentName));
                  }
                }
              );
            }
          }

          function markLayoutEffectsStarted(lanes) {
            if (isProfiling) {
              recordReactMeasureStarted("layout-effects", lanes);
            }

            if (supportsUserTimingV3) {
              markAndClear("--layout-effects-start-".concat(lanes));
            }
          }

          function markLayoutEffectsStopped() {
            if (isProfiling) {
              recordReactMeasureCompleted("layout-effects");
            }

            if (supportsUserTimingV3) {
              markAndClear("--layout-effects-stop");
            }
          }

          function markPassiveEffectsStarted(lanes) {
            if (isProfiling) {
              recordReactMeasureStarted("passive-effects", lanes);
            }

            if (supportsUserTimingV3) {
              markAndClear("--passive-effects-start-".concat(lanes));
            }
          }

          function markPassiveEffectsStopped() {
            if (isProfiling) {
              recordReactMeasureCompleted("passive-effects");
            }

            if (supportsUserTimingV3) {
              markAndClear("--passive-effects-stop");
            }
          }

          function markRenderStarted(lanes) {
            if (isProfiling) {
              if (nextRenderShouldStartNewBatch) {
                nextRenderShouldStartNewBatch = false;
                currentBatchUID++;
              } // If this is a new batch of work, wrap an "idle" measure around it.
              // Log it before the "render" measure to preserve the stack ordering.

              if (
                currentReactMeasuresStack.length === 0 ||
                currentReactMeasuresStack[currentReactMeasuresStack.length - 1].type !== "render-idle"
              ) {
                recordReactMeasureStarted("render-idle", lanes);
              }

              recordReactMeasureStarted("render", lanes);
            }

            if (supportsUserTimingV3) {
              markAndClear("--render-start-".concat(lanes));
            }
          }

          function markRenderYielded() {
            if (isProfiling) {
              recordReactMeasureCompleted("render");
            }

            if (supportsUserTimingV3) {
              markAndClear("--render-yield");
            }
          }

          function markRenderStopped() {
            if (isProfiling) {
              recordReactMeasureCompleted("render");
            }

            if (supportsUserTimingV3) {
              markAndClear("--render-stop");
            }
          }

          function markRenderScheduled(lane) {
            if (isProfiling) {
              if (currentTimelineData) {
                currentTimelineData.schedulingEvents.push({
                  lanes: laneToLanesArray(lane),
                  timestamp: getRelativeTime(),
                  type: "schedule-render",
                  warning: null,
                });
              }
            }

            if (supportsUserTimingV3) {
              markAndClear("--schedule-render-".concat(lane));
            }
          }

          function markForceUpdateScheduled(fiber, lane) {
            if (isProfiling || supportsUserTimingV3) {
              var componentName = getDisplayNameForFiber(fiber) || "Unknown";

              if (isProfiling) {
                // TODO (timeline) Record and cache component stack
                if (currentTimelineData) {
                  currentTimelineData.schedulingEvents.push({
                    componentName: componentName,
                    lanes: laneToLanesArray(lane),
                    timestamp: getRelativeTime(),
                    type: "schedule-force-update",
                    warning: null,
                  });
                }
              }

              if (supportsUserTimingV3) {
                markAndClear("--schedule-forced-update-".concat(lane, "-").concat(componentName));
              }
            }
          }

          function getParentFibers(fiber) {
            var parents = [];
            var parent = fiber;

            while (parent !== null) {
              parents.push(parent);
              parent = parent.return;
            }

            return parents;
          }

          function markStateUpdateScheduled(fiber, lane) {
            if (isProfiling || supportsUserTimingV3) {
              var componentName = getDisplayNameForFiber(fiber) || "Unknown";

              if (isProfiling) {
                // TODO (timeline) Record and cache component stack
                if (currentTimelineData) {
                  var event = {
                    componentName: componentName,
                    // Store the parent fibers so we can post process
                    // them after we finish profiling
                    lanes: laneToLanesArray(lane),
                    timestamp: getRelativeTime(),
                    type: "schedule-state-update",
                    warning: null,
                  };
                  currentFiberStacks.set(event, getParentFibers(fiber)); // $FlowFixMe[incompatible-use] found when upgrading Flow

                  currentTimelineData.schedulingEvents.push(event);
                }
              }

              if (supportsUserTimingV3) {
                markAndClear("--schedule-state-update-".concat(lane, "-").concat(componentName));
              }
            }
          }

          function toggleProfilingStatus(value) {
            if (isProfiling !== value) {
              isProfiling = value;

              if (isProfiling) {
                var internalModuleSourceToRanges = new Map();

                if (supportsUserTimingV3) {
                  var ranges = getInternalModuleRanges();

                  if (ranges) {
                    for (var i = 0; i < ranges.length; i++) {
                      var range = ranges[i];

                      if (Object(shared_isArray["a" /* default */])(range) && range.length === 2) {
                        var _ranges$i2 = _slicedToArray(ranges[i], 2),
                          startStackFrame = _ranges$i2[0],
                          stopStackFrame = _ranges$i2[1];

                        markAndClear("--react-internal-module-start-".concat(startStackFrame));
                        markAndClear("--react-internal-module-stop-".concat(stopStackFrame));
                      }
                    }
                  }
                }

                var laneToReactMeasureMap = new Map();
                var lane = 1;

                for (var index = 0; index < REACT_TOTAL_NUM_LANES; index++) {
                  laneToReactMeasureMap.set(lane, []);
                  lane *= 2;
                }

                currentBatchUID = 0;
                currentReactComponentMeasure = null;
                currentReactMeasuresStack = [];
                currentFiberStacks = new Map();
                currentTimelineData = {
                  // Session wide metadata; only collected once.
                  internalModuleSourceToRanges: internalModuleSourceToRanges,
                  laneToLabelMap: laneToLabelMap || new Map(),
                  reactVersion: reactVersion,
                  // Data logged by React during profiling session.
                  componentMeasures: [],
                  schedulingEvents: [],
                  suspenseEvents: [],
                  thrownErrors: [],
                  // Data inferred based on what React logs.
                  batchUIDToMeasuresMap: new Map(),
                  duration: 0,
                  laneToReactMeasureMap: laneToReactMeasureMap,
                  startTime: 0,
                  // Data only available in Chrome profiles.
                  flamechart: [],
                  nativeEvents: [],
                  networkMeasures: [],
                  otherUserTimingMarks: [],
                  snapshots: [],
                  snapshotHeight: 0,
                };
                nextRenderShouldStartNewBatch = true;
              } else {
                // Postprocess Profile data
                if (currentTimelineData !== null) {
                  currentTimelineData.schedulingEvents.forEach(function (event) {
                    if (event.type === "schedule-state-update") {
                      // TODO(luna): We can optimize this by creating a map of
                      // fiber to component stack instead of generating the stack
                      // for every fiber every time
                      var fiberStack = currentFiberStacks.get(event);

                      if (fiberStack && currentDispatcherRef != null) {
                        event.componentStack = fiberStack.reduce(function (trace, fiber) {
                          return (
                            trace +
                            Object(DevToolsFiberComponentStack["a" /* describeFiber */])(
                              workTagMap,
                              fiber,
                              currentDispatcherRef
                            )
                          );
                        }, "");
                      }
                    }
                  });
                } // Clear the current fiber stacks so we don't hold onto the fibers
                // in memory after profiling finishes

                currentFiberStacks.clear();
              }
            }
          }

          return {
            getTimelineData: getTimelineData,
            profilingHooks: {
              markCommitStarted: markCommitStarted,
              markCommitStopped: markCommitStopped,
              markComponentRenderStarted: markComponentRenderStarted,
              markComponentRenderStopped: markComponentRenderStopped,
              markComponentPassiveEffectMountStarted: markComponentPassiveEffectMountStarted,
              markComponentPassiveEffectMountStopped: markComponentPassiveEffectMountStopped,
              markComponentPassiveEffectUnmountStarted: markComponentPassiveEffectUnmountStarted,
              markComponentPassiveEffectUnmountStopped: markComponentPassiveEffectUnmountStopped,
              markComponentLayoutEffectMountStarted: markComponentLayoutEffectMountStarted,
              markComponentLayoutEffectMountStopped: markComponentLayoutEffectMountStopped,
              markComponentLayoutEffectUnmountStarted: markComponentLayoutEffectUnmountStarted,
              markComponentLayoutEffectUnmountStopped: markComponentLayoutEffectUnmountStopped,
              markComponentErrored: markComponentErrored,
              markComponentSuspended: markComponentSuspended,
              markLayoutEffectsStarted: markLayoutEffectsStarted,
              markLayoutEffectsStopped: markLayoutEffectsStopped,
              markPassiveEffectsStarted: markPassiveEffectsStarted,
              markPassiveEffectsStopped: markPassiveEffectsStopped,
              markRenderStarted: markRenderStarted,
              markRenderYielded: markRenderYielded,
              markRenderStopped: markRenderStopped,
              markRenderScheduled: markRenderScheduled,
              markForceUpdateScheduled: markForceUpdateScheduled,
              markStateUpdateScheduled: markStateUpdateScheduled,
            },
            toggleProfilingStatus: toggleProfilingStatus,
          };
        }
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/renderer.js
        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }
          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function renderer_slicedToArray(arr, i) {
          return (
            renderer_arrayWithHoles(arr) ||
            renderer_iterableToArrayLimit(arr, i) ||
            renderer_unsupportedIterableToArray(arr, i) ||
            renderer_nonIterableRest()
          );
        }

        function renderer_nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function renderer_iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function renderer_arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            renderer_unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return renderer_arrayLikeToArray(arr);
        }

        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it;
          if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (
              Array.isArray(o) ||
              (it = renderer_unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === "number")
            ) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e2) {
                  throw _e2;
                },
                f: F,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = o[Symbol.iterator]();
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e3) {
              didErr = true;
              err = _e3;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }

        function renderer_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return renderer_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return renderer_arrayLikeToArray(o, minLen);
        }

        function renderer_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function renderer_typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            renderer_typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            renderer_typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return renderer_typeof(obj);
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        function getFiberFlags(fiber) {
          // The name of this field changed from "effectTag" to "flags"
          return fiber.flags !== undefined ? fiber.flags : fiber.effectTag;
        } // Some environments (e.g. React Native / Hermes) don't support the performance API yet.

        var renderer_getCurrentTime = // $FlowFixMe[method-unbinding]
          (typeof performance === "undefined" ? "undefined" : renderer_typeof(performance)) === "object" &&
          typeof performance.now === "function"
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              };
        function getInternalReactConstants(version) {
          // **********************************************************
          // The section below is copied from files in React repo.
          // Keep it in sync, and add version guards if it changes.
          //
          // Technically these priority levels are invalid for versions before 16.9,
          // but 16.9 is the first version to report priority level to DevTools,
          // so we can avoid checking for earlier versions and support pre-16.9 canary releases in the process.
          var ReactPriorityLevels = {
            ImmediatePriority: 99,
            UserBlockingPriority: 98,
            NormalPriority: 97,
            LowPriority: 96,
            IdlePriority: 95,
            NoPriority: 90,
          };

          if (Object(semver["gt"])(version, "17.0.2")) {
            ReactPriorityLevels = {
              ImmediatePriority: 1,
              UserBlockingPriority: 2,
              NormalPriority: 3,
              LowPriority: 4,
              IdlePriority: 5,
              NoPriority: 0,
            };
          }

          var StrictModeBits = 0;

          if (Object(semver["gte"])(version, "18.0.0-alpha")) {
            // 18+
            StrictModeBits = 24;
          } else if (Object(semver["gte"])(version, "16.9.0")) {
            // 16.9 - 17
            StrictModeBits = 1;
          } else if (Object(semver["gte"])(version, "16.3.0")) {
            // 16.3 - 16.8
            StrictModeBits = 2;
          }

          var ReactTypeOfWork = null; // **********************************************************
          // The section below is copied from files in React repo.
          // Keep it in sync, and add version guards if it changes.
          //
          // TODO Update the gt() check below to be gte() whichever the next version number is.
          // Currently the version in Git is 17.0.2 (but that version has not been/may not end up being released).

          if (Object(semver["gt"])(version, "17.0.1")) {
            ReactTypeOfWork = {
              CacheComponent: 24,
              // Experimental
              ClassComponent: 1,
              ContextConsumer: 9,
              ContextProvider: 10,
              CoroutineComponent: -1,
              // Removed
              CoroutineHandlerPhase: -1,
              // Removed
              DehydratedSuspenseComponent: 18,
              // Behind a flag
              ForwardRef: 11,
              Fragment: 7,
              FunctionComponent: 0,
              HostComponent: 5,
              HostPortal: 4,
              HostRoot: 3,
              HostResource: 26,
              // In reality, 18.2+. But doesn't hurt to include it here
              HostSingleton: 27,
              // Same as above
              HostText: 6,
              IncompleteClassComponent: 17,
              IndeterminateComponent: 2,
              LazyComponent: 16,
              LegacyHiddenComponent: 23,
              MemoComponent: 14,
              Mode: 8,
              OffscreenComponent: 22,
              // Experimental
              Profiler: 12,
              ScopeComponent: 21,
              // Experimental
              SimpleMemoComponent: 15,
              SuspenseComponent: 13,
              SuspenseListComponent: 19,
              // Experimental
              TracingMarkerComponent: 25,
              // Experimental - This is technically in 18 but we don't
              // want to fork again so we're adding it here instead
              YieldComponent: -1, // Removed
            };
          } else if (Object(semver["gte"])(version, "17.0.0-alpha")) {
            ReactTypeOfWork = {
              CacheComponent: -1,
              // Doesn't exist yet
              ClassComponent: 1,
              ContextConsumer: 9,
              ContextProvider: 10,
              CoroutineComponent: -1,
              // Removed
              CoroutineHandlerPhase: -1,
              // Removed
              DehydratedSuspenseComponent: 18,
              // Behind a flag
              ForwardRef: 11,
              Fragment: 7,
              FunctionComponent: 0,
              HostComponent: 5,
              HostPortal: 4,
              HostRoot: 3,
              HostResource: -1,
              // Doesn't exist yet
              HostSingleton: -1,
              // Doesn't exist yet
              HostText: 6,
              IncompleteClassComponent: 17,
              IndeterminateComponent: 2,
              LazyComponent: 16,
              LegacyHiddenComponent: 24,
              MemoComponent: 14,
              Mode: 8,
              OffscreenComponent: 23,
              // Experimental
              Profiler: 12,
              ScopeComponent: 21,
              // Experimental
              SimpleMemoComponent: 15,
              SuspenseComponent: 13,
              SuspenseListComponent: 19,
              // Experimental
              TracingMarkerComponent: -1,
              // Doesn't exist yet
              YieldComponent: -1, // Removed
            };
          } else if (Object(semver["gte"])(version, "16.6.0-beta.0")) {
            ReactTypeOfWork = {
              CacheComponent: -1,
              // Doesn't exist yet
              ClassComponent: 1,
              ContextConsumer: 9,
              ContextProvider: 10,
              CoroutineComponent: -1,
              // Removed
              CoroutineHandlerPhase: -1,
              // Removed
              DehydratedSuspenseComponent: 18,
              // Behind a flag
              ForwardRef: 11,
              Fragment: 7,
              FunctionComponent: 0,
              HostComponent: 5,
              HostPortal: 4,
              HostRoot: 3,
              HostResource: -1,
              // Doesn't exist yet
              HostSingleton: -1,
              // Doesn't exist yet
              HostText: 6,
              IncompleteClassComponent: 17,
              IndeterminateComponent: 2,
              LazyComponent: 16,
              LegacyHiddenComponent: -1,
              MemoComponent: 14,
              Mode: 8,
              OffscreenComponent: -1,
              // Experimental
              Profiler: 12,
              ScopeComponent: -1,
              // Experimental
              SimpleMemoComponent: 15,
              SuspenseComponent: 13,
              SuspenseListComponent: 19,
              // Experimental
              TracingMarkerComponent: -1,
              // Doesn't exist yet
              YieldComponent: -1, // Removed
            };
          } else if (Object(semver["gte"])(version, "16.4.3-alpha")) {
            ReactTypeOfWork = {
              CacheComponent: -1,
              // Doesn't exist yet
              ClassComponent: 2,
              ContextConsumer: 11,
              ContextProvider: 12,
              CoroutineComponent: -1,
              // Removed
              CoroutineHandlerPhase: -1,
              // Removed
              DehydratedSuspenseComponent: -1,
              // Doesn't exist yet
              ForwardRef: 13,
              Fragment: 9,
              FunctionComponent: 0,
              HostComponent: 7,
              HostPortal: 6,
              HostRoot: 5,
              HostResource: -1,
              // Doesn't exist yet
              HostSingleton: -1,
              // Doesn't exist yet
              HostText: 8,
              IncompleteClassComponent: -1,
              // Doesn't exist yet
              IndeterminateComponent: 4,
              LazyComponent: -1,
              // Doesn't exist yet
              LegacyHiddenComponent: -1,
              MemoComponent: -1,
              // Doesn't exist yet
              Mode: 10,
              OffscreenComponent: -1,
              // Experimental
              Profiler: 15,
              ScopeComponent: -1,
              // Experimental
              SimpleMemoComponent: -1,
              // Doesn't exist yet
              SuspenseComponent: 16,
              SuspenseListComponent: -1,
              // Doesn't exist yet
              TracingMarkerComponent: -1,
              // Doesn't exist yet
              YieldComponent: -1, // Removed
            };
          } else {
            ReactTypeOfWork = {
              CacheComponent: -1,
              // Doesn't exist yet
              ClassComponent: 2,
              ContextConsumer: 12,
              ContextProvider: 13,
              CoroutineComponent: 7,
              CoroutineHandlerPhase: 8,
              DehydratedSuspenseComponent: -1,
              // Doesn't exist yet
              ForwardRef: 14,
              Fragment: 10,
              FunctionComponent: 1,
              HostComponent: 5,
              HostPortal: 4,
              HostRoot: 3,
              HostResource: -1,
              // Doesn't exist yet
              HostSingleton: -1,
              // Doesn't exist yet
              HostText: 6,
              IncompleteClassComponent: -1,
              // Doesn't exist yet
              IndeterminateComponent: 0,
              LazyComponent: -1,
              // Doesn't exist yet
              LegacyHiddenComponent: -1,
              MemoComponent: -1,
              // Doesn't exist yet
              Mode: 11,
              OffscreenComponent: -1,
              // Experimental
              Profiler: 15,
              ScopeComponent: -1,
              // Experimental
              SimpleMemoComponent: -1,
              // Doesn't exist yet
              SuspenseComponent: 16,
              SuspenseListComponent: -1,
              // Doesn't exist yet
              TracingMarkerComponent: -1,
              // Doesn't exist yet
              YieldComponent: 9,
            };
          } // **********************************************************
          // End of copied code.
          // **********************************************************

          function getTypeSymbol(type) {
            var symbolOrNumber = renderer_typeof(type) === "object" && type !== null ? type.$$typeof : type;
            return renderer_typeof(symbolOrNumber) === "symbol" // $FlowFixMe `toString()` doesn't match the type signature?
              ? symbolOrNumber.toString()
              : symbolOrNumber;
          }

          var _ReactTypeOfWork = ReactTypeOfWork,
            CacheComponent = _ReactTypeOfWork.CacheComponent,
            ClassComponent = _ReactTypeOfWork.ClassComponent,
            IncompleteClassComponent = _ReactTypeOfWork.IncompleteClassComponent,
            FunctionComponent = _ReactTypeOfWork.FunctionComponent,
            IndeterminateComponent = _ReactTypeOfWork.IndeterminateComponent,
            ForwardRef = _ReactTypeOfWork.ForwardRef,
            HostRoot = _ReactTypeOfWork.HostRoot,
            HostResource = _ReactTypeOfWork.HostResource,
            HostSingleton = _ReactTypeOfWork.HostSingleton,
            HostComponent = _ReactTypeOfWork.HostComponent,
            HostPortal = _ReactTypeOfWork.HostPortal,
            HostText = _ReactTypeOfWork.HostText,
            Fragment = _ReactTypeOfWork.Fragment,
            LazyComponent = _ReactTypeOfWork.LazyComponent,
            LegacyHiddenComponent = _ReactTypeOfWork.LegacyHiddenComponent,
            MemoComponent = _ReactTypeOfWork.MemoComponent,
            OffscreenComponent = _ReactTypeOfWork.OffscreenComponent,
            Profiler = _ReactTypeOfWork.Profiler,
            ScopeComponent = _ReactTypeOfWork.ScopeComponent,
            SimpleMemoComponent = _ReactTypeOfWork.SimpleMemoComponent,
            SuspenseComponent = _ReactTypeOfWork.SuspenseComponent,
            SuspenseListComponent = _ReactTypeOfWork.SuspenseListComponent,
            TracingMarkerComponent = _ReactTypeOfWork.TracingMarkerComponent;

          function resolveFiberType(type) {
            var typeSymbol = getTypeSymbol(type);

            switch (typeSymbol) {
              case ReactSymbols["j" /* MEMO_NUMBER */]:
              case ReactSymbols["k" /* MEMO_SYMBOL_STRING */]:
                // recursively resolving memo type in case of memo(forwardRef(Component))
                return resolveFiberType(type.type);

              case ReactSymbols["f" /* FORWARD_REF_NUMBER */]:
              case ReactSymbols["g" /* FORWARD_REF_SYMBOL_STRING */]:
                return type.render;

              default:
                return type;
            }
          } // NOTICE Keep in sync with shouldFilterFiber() and other get*ForFiber methods

          function getDisplayNameForFiber(fiber) {
            var elementType = fiber.elementType,
              type = fiber.type,
              tag = fiber.tag;
            var resolvedType = type;

            if (renderer_typeof(type) === "object" && type !== null) {
              resolvedType = resolveFiberType(type);
            }

            var resolvedContext = null;

            switch (tag) {
              case CacheComponent:
                return "Cache";

              case ClassComponent:
              case IncompleteClassComponent:
                return Object(utils["h" /* getDisplayName */])(resolvedType);

              case FunctionComponent:
              case IndeterminateComponent:
                return Object(utils["h" /* getDisplayName */])(resolvedType);

              case ForwardRef:
                return Object(utils["l" /* getWrappedDisplayName */])(
                  elementType,
                  resolvedType,
                  "ForwardRef",
                  "Anonymous"
                );

              case HostRoot:
                var fiberRoot = fiber.stateNode;

                if (fiberRoot != null && fiberRoot._debugRootType !== null) {
                  return fiberRoot._debugRootType;
                }

                return null;

              case HostComponent:
              case HostSingleton:
              case HostResource:
                return type;

              case HostPortal:
              case HostText:
                return null;

              case Fragment:
                return "Fragment";

              case LazyComponent:
                // This display name will not be user visible.
                // Once a Lazy component loads its inner component, React replaces the tag and type.
                // This display name will only show up in console logs when DevTools DEBUG mode is on.
                return "Lazy";

              case MemoComponent:
              case SimpleMemoComponent:
                // Display name in React does not use `Memo` as a wrapper but fallback name.
                return Object(utils["l" /* getWrappedDisplayName */])(elementType, resolvedType, "Memo", "Anonymous");

              case SuspenseComponent:
                return "Suspense";

              case LegacyHiddenComponent:
                return "LegacyHidden";

              case OffscreenComponent:
                return "Offscreen";

              case ScopeComponent:
                return "Scope";

              case SuspenseListComponent:
                return "SuspenseList";

              case Profiler:
                return "Profiler";

              case TracingMarkerComponent:
                return "TracingMarker";

              default:
                var typeSymbol = getTypeSymbol(type);

                switch (typeSymbol) {
                  case ReactSymbols["a" /* CONCURRENT_MODE_NUMBER */]:
                  case ReactSymbols["b" /* CONCURRENT_MODE_SYMBOL_STRING */]:
                  case ReactSymbols["e" /* DEPRECATED_ASYNC_MODE_SYMBOL_STRING */]:
                    return null;

                  case ReactSymbols["n" /* PROVIDER_NUMBER */]:
                  case ReactSymbols["o" /* PROVIDER_SYMBOL_STRING */]:
                    // 16.3.0 exposed the context object as "context"
                    // PR #12501 changed it to "_context" for 16.3.1+
                    // NOTE Keep in sync with inspectElementRaw()
                    resolvedContext = fiber.type._context || fiber.type.context;
                    return "".concat(resolvedContext.displayName || "Context", ".Provider");

                  case ReactSymbols["c" /* CONTEXT_NUMBER */]:
                  case ReactSymbols["d" /* CONTEXT_SYMBOL_STRING */]:
                  case ReactSymbols["r" /* SERVER_CONTEXT_SYMBOL_STRING */]:
                    // 16.3-16.5 read from "type" because the Consumer is the actual context object.
                    // 16.6+ should read from "type._context" because Consumer can be different (in DEV).
                    // NOTE Keep in sync with inspectElementRaw()
                    resolvedContext = fiber.type._context || fiber.type; // NOTE: TraceUpdatesBackendManager depends on the name ending in '.Consumer'
                    // If you change the name, figure out a more resilient way to detect it.

                    return "".concat(resolvedContext.displayName || "Context", ".Consumer");

                  case ReactSymbols["s" /* STRICT_MODE_NUMBER */]:
                  case ReactSymbols["t" /* STRICT_MODE_SYMBOL_STRING */]:
                    return null;

                  case ReactSymbols["l" /* PROFILER_NUMBER */]:
                  case ReactSymbols["m" /* PROFILER_SYMBOL_STRING */]:
                    return "Profiler(".concat(fiber.memoizedProps.id, ")");

                  case ReactSymbols["p" /* SCOPE_NUMBER */]:
                  case ReactSymbols["q" /* SCOPE_SYMBOL_STRING */]:
                    return "Scope";

                  default:
                    // Unknown element type.
                    // This may mean a new element type that has not yet been added to DevTools.
                    return null;
                }
            }
          }

          return {
            getDisplayNameForFiber: getDisplayNameForFiber,
            getTypeSymbol: getTypeSymbol,
            ReactPriorityLevels: ReactPriorityLevels,
            ReactTypeOfWork: ReactTypeOfWork,
            StrictModeBits: StrictModeBits,
          };
        } // Map of one or more Fibers in a pair to their unique id number.
        // We track both Fibers to support Fast Refresh,
        // which may forcefully replace one of the pair as part of hot reloading.
        // In that case it's still important to be able to locate the previous ID during subsequent renders.

        var fiberToIDMap = new Map(); // Map of id to one (arbitrary) Fiber in a pair.
        // This Map is used to e.g. get the display name for a Fiber or schedule an update,
        // operations that should be the same whether the current and work-in-progress Fiber is used.

        var idToArbitraryFiberMap = new Map();
        function attach(hook, rendererID, renderer, global) {
          // Newer versions of the reconciler package also specific reconciler version.
          // If that version number is present, use it.
          // Third party renderer versions may not match the reconciler version,
          // and the latter is what's important in terms of tags and symbols.
          var version = renderer.reconcilerVersion || renderer.version;

          var _getInternalReactCons = getInternalReactConstants(version),
            getDisplayNameForFiber = _getInternalReactCons.getDisplayNameForFiber,
            getTypeSymbol = _getInternalReactCons.getTypeSymbol,
            ReactPriorityLevels = _getInternalReactCons.ReactPriorityLevels,
            ReactTypeOfWork = _getInternalReactCons.ReactTypeOfWork,
            StrictModeBits = _getInternalReactCons.StrictModeBits;

          var CacheComponent = ReactTypeOfWork.CacheComponent,
            ClassComponent = ReactTypeOfWork.ClassComponent,
            ContextConsumer = ReactTypeOfWork.ContextConsumer,
            DehydratedSuspenseComponent = ReactTypeOfWork.DehydratedSuspenseComponent,
            ForwardRef = ReactTypeOfWork.ForwardRef,
            Fragment = ReactTypeOfWork.Fragment,
            FunctionComponent = ReactTypeOfWork.FunctionComponent,
            HostRoot = ReactTypeOfWork.HostRoot,
            HostResource = ReactTypeOfWork.HostResource,
            HostSingleton = ReactTypeOfWork.HostSingleton,
            HostPortal = ReactTypeOfWork.HostPortal,
            HostComponent = ReactTypeOfWork.HostComponent,
            HostText = ReactTypeOfWork.HostText,
            IncompleteClassComponent = ReactTypeOfWork.IncompleteClassComponent,
            IndeterminateComponent = ReactTypeOfWork.IndeterminateComponent,
            LegacyHiddenComponent = ReactTypeOfWork.LegacyHiddenComponent,
            MemoComponent = ReactTypeOfWork.MemoComponent,
            OffscreenComponent = ReactTypeOfWork.OffscreenComponent,
            SimpleMemoComponent = ReactTypeOfWork.SimpleMemoComponent,
            SuspenseComponent = ReactTypeOfWork.SuspenseComponent,
            SuspenseListComponent = ReactTypeOfWork.SuspenseListComponent,
            TracingMarkerComponent = ReactTypeOfWork.TracingMarkerComponent;
          var ImmediatePriority = ReactPriorityLevels.ImmediatePriority,
            UserBlockingPriority = ReactPriorityLevels.UserBlockingPriority,
            NormalPriority = ReactPriorityLevels.NormalPriority,
            LowPriority = ReactPriorityLevels.LowPriority,
            IdlePriority = ReactPriorityLevels.IdlePriority,
            NoPriority = ReactPriorityLevels.NoPriority;
          var getLaneLabelMap = renderer.getLaneLabelMap,
            injectProfilingHooks = renderer.injectProfilingHooks,
            overrideHookState = renderer.overrideHookState,
            overrideHookStateDeletePath = renderer.overrideHookStateDeletePath,
            overrideHookStateRenamePath = renderer.overrideHookStateRenamePath,
            overrideProps = renderer.overrideProps,
            overridePropsDeletePath = renderer.overridePropsDeletePath,
            overridePropsRenamePath = renderer.overridePropsRenamePath,
            scheduleRefresh = renderer.scheduleRefresh,
            setErrorHandler = renderer.setErrorHandler,
            setSuspenseHandler = renderer.setSuspenseHandler,
            scheduleUpdate = renderer.scheduleUpdate;
          var supportsTogglingError = typeof setErrorHandler === "function" && typeof scheduleUpdate === "function";
          var supportsTogglingSuspense =
            typeof setSuspenseHandler === "function" && typeof scheduleUpdate === "function";

          if (typeof scheduleRefresh === "function") {
            // When Fast Refresh updates a component, the frontend may need to purge cached information.
            // For example, ASTs cached for the component (for named hooks) may no longer be valid.
            // Send a signal to the frontend to purge this cached information.
            // The "fastRefreshScheduled" dispatched is global (not Fiber or even Renderer specific).
            // This is less effecient since it means the front-end will need to purge the entire cache,
            // but this is probably an okay trade off in order to reduce coupling between the DevTools and Fast Refresh.
            renderer.scheduleRefresh = function () {
              try {
                hook.emit("fastRefreshScheduled");
              } finally {
                return scheduleRefresh.apply(void 0, arguments);
              }
            };
          }

          var getTimelineData = null;
          var toggleProfilingStatus = null;

          if (typeof injectProfilingHooks === "function") {
            var response = createProfilingHooks({
              getDisplayNameForFiber: getDisplayNameForFiber,
              getIsProfiling: function getIsProfiling() {
                return isProfiling;
              },
              getLaneLabelMap: getLaneLabelMap,
              currentDispatcherRef: renderer.currentDispatcherRef,
              workTagMap: ReactTypeOfWork,
              reactVersion: version,
            }); // Pass the Profiling hooks to the reconciler for it to call during render.

            injectProfilingHooks(response.profilingHooks); // Hang onto this toggle so we can notify the external methods of profiling status changes.

            getTimelineData = response.getTimelineData;
            toggleProfilingStatus = response.toggleProfilingStatus;
          } // Tracks Fibers with recently changed number of error/warning messages.
          // These collections store the Fiber rather than the ID,
          // in order to avoid generating an ID for Fibers that never get mounted
          // (due to e.g. Suspense or error boundaries).
          // onErrorOrWarning() adds Fibers and recordPendingErrorsAndWarnings() later clears them.

          var fibersWithChangedErrorOrWarningCounts = new Set();
          var pendingFiberToErrorsMap = new Map();
          var pendingFiberToWarningsMap = new Map(); // Mapping of fiber IDs to error/warning messages and counts.

          var fiberIDToErrorsMap = new Map();
          var fiberIDToWarningsMap = new Map();

          function clearErrorsAndWarnings() {
            // eslint-disable-next-line no-for-of-loops/no-for-of-loops
            var _iterator = _createForOfIteratorHelper(fiberIDToErrorsMap.keys()),
              _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var id = _step.value;

                var _fiber = idToArbitraryFiberMap.get(id);

                if (_fiber != null) {
                  fibersWithChangedErrorOrWarningCounts.add(_fiber);
                  updateMostRecentlyInspectedElementIfNecessary(id);
                }
              } // eslint-disable-next-line no-for-of-loops/no-for-of-loops
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var _iterator2 = _createForOfIteratorHelper(fiberIDToWarningsMap.keys()),
              _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var _id = _step2.value;

                var _fiber2 = idToArbitraryFiberMap.get(_id);

                if (_fiber2 != null) {
                  fibersWithChangedErrorOrWarningCounts.add(_fiber2);
                  updateMostRecentlyInspectedElementIfNecessary(_id);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            fiberIDToErrorsMap.clear();
            fiberIDToWarningsMap.clear();
            flushPendingEvents();
          }

          function clearMessageCountHelper(fiberID, pendingFiberToMessageCountMap, fiberIDToMessageCountMap) {
            var fiber = idToArbitraryFiberMap.get(fiberID);

            if (fiber != null) {
              // Throw out any pending changes.
              pendingFiberToErrorsMap.delete(fiber);

              if (fiberIDToMessageCountMap.has(fiberID)) {
                fiberIDToMessageCountMap.delete(fiberID); // If previous flushed counts have changed, schedule an update too.

                fibersWithChangedErrorOrWarningCounts.add(fiber);
                flushPendingEvents();
                updateMostRecentlyInspectedElementIfNecessary(fiberID);
              } else {
                fibersWithChangedErrorOrWarningCounts.delete(fiber);
              }
            }
          }

          function clearErrorsForFiberID(fiberID) {
            clearMessageCountHelper(fiberID, pendingFiberToErrorsMap, fiberIDToErrorsMap);
          }

          function clearWarningsForFiberID(fiberID) {
            clearMessageCountHelper(fiberID, pendingFiberToWarningsMap, fiberIDToWarningsMap);
          }

          function updateMostRecentlyInspectedElementIfNecessary(fiberID) {
            if (mostRecentlyInspectedElement !== null && mostRecentlyInspectedElement.id === fiberID) {
              hasElementUpdatedSinceLastInspected = true;
            }
          } // Called when an error or warning is logged during render, commit, or passive (including unmount functions).

          function onErrorOrWarning(fiber, type, args) {
            if (type === "error") {
              var maybeID = getFiberIDUnsafe(fiber); // if this is an error simulated by us to trigger error boundary, ignore

              if (maybeID != null && forceErrorForFiberIDs.get(maybeID) === true) {
                return;
              }
            }

            var message = backend_utils["f" /* format */].apply(void 0, _toConsumableArray(args));

            if (constants["s" /* __DEBUG__ */]) {
              debug("onErrorOrWarning", fiber, null, "".concat(type, ': "').concat(message, '"'));
            } // Mark this Fiber as needed its warning/error count updated during the next flush.

            fibersWithChangedErrorOrWarningCounts.add(fiber); // Track the warning/error for later.

            var fiberMap = type === "error" ? pendingFiberToErrorsMap : pendingFiberToWarningsMap;
            var messageMap = fiberMap.get(fiber);

            if (messageMap != null) {
              var count = messageMap.get(message) || 0;
              messageMap.set(message, count + 1);
            } else {
              fiberMap.set(fiber, new Map([[message, 1]]));
            } // Passive effects may trigger errors or warnings too;
            // In this case, we should wait until the rest of the passive effects have run,
            // but we shouldn't wait until the next commit because that might be a long time.
            // This would also cause "tearing" between an inspected Component and the tree view.
            // Then again we don't want to flush too soon because this could be an error during async rendering.
            // Use a debounce technique to ensure that we'll eventually flush.

            flushPendingErrorsAndWarningsAfterDelay();
          } // Patching the console enables DevTools to do a few useful things:
          // * Append component stacks to warnings and error messages
          // * Disable logging during re-renders to inspect hooks (see inspectHooksOfFiber)

          Object(backend_console["d" /* registerRenderer */])(renderer, onErrorOrWarning); // The renderer interface can't read these preferences directly,
          // because it is stored in localStorage within the context of the extension.
          // It relies on the extension to pass the preference through via the global.

          Object(backend_console["b" /* patchConsoleUsingWindowValues */])();

          var debug = function debug(name, fiber, parentFiber) {
            var extraString = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

            if (constants["s" /* __DEBUG__ */]) {
              var displayName = fiber.tag + ":" + (getDisplayNameForFiber(fiber) || "null");
              var maybeID = getFiberIDUnsafe(fiber) || "<no id>";
              var parentDisplayName = parentFiber
                ? parentFiber.tag + ":" + (getDisplayNameForFiber(parentFiber) || "null")
                : "";
              var maybeParentID = parentFiber ? getFiberIDUnsafe(parentFiber) || "<no-id>" : "";
              console.groupCollapsed(
                "[renderer] %c"
                  .concat(name, " %c")
                  .concat(displayName, " (")
                  .concat(maybeID, ") %c")
                  .concat(parentFiber ? "".concat(parentDisplayName, " (").concat(maybeParentID, ")") : "", " %c")
                  .concat(extraString),
                "color: red; font-weight: bold;",
                "color: blue;",
                "color: purple;",
                "color: black;"
              );
              console.log(new Error().stack.split("\n").slice(1).join("\n"));
              console.groupEnd();
            }
          }; // Configurable Components tree filters.

          var hideElementsWithDisplayNames = new Set();
          var hideElementsWithPaths = new Set();
          var hideElementsWithTypes = new Set(); // Highlight updates

          var traceUpdatesEnabled = false;
          var traceUpdatesForNodes = new Set();

          function applyComponentFilters(componentFilters) {
            hideElementsWithTypes.clear();
            hideElementsWithDisplayNames.clear();
            hideElementsWithPaths.clear();
            componentFilters.forEach(function (componentFilter) {
              if (!componentFilter.isEnabled) {
                return;
              }

              switch (componentFilter.type) {
                case types["a" /* ComponentFilterDisplayName */]:
                  if (componentFilter.isValid && componentFilter.value !== "") {
                    hideElementsWithDisplayNames.add(new RegExp(componentFilter.value, "i"));
                  }

                  break;

                case types["b" /* ComponentFilterElementType */]:
                  hideElementsWithTypes.add(componentFilter.value);
                  break;

                case types["d" /* ComponentFilterLocation */]:
                  if (componentFilter.isValid && componentFilter.value !== "") {
                    hideElementsWithPaths.add(new RegExp(componentFilter.value, "i"));
                  }

                  break;

                case types["c" /* ComponentFilterHOC */]:
                  hideElementsWithDisplayNames.add(new RegExp("\\("));
                  break;

                default:
                  console.warn('Invalid component filter type "'.concat(componentFilter.type, '"'));
                  break;
              }
            });
          } // The renderer interface can't read saved component filters directly,
          // because they are stored in localStorage within the context of the extension.
          // Instead it relies on the extension to pass filters through.

          if (window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ != null) {
            applyComponentFilters(window.__REACT_DEVTOOLS_COMPONENT_FILTERS__);
          } else {
            // Unfortunately this feature is not expected to work for React Native for now.
            // It would be annoying for us to spam YellowBox warnings with unactionable stuff,
            // so for now just skip this message...
            //console.warn('⚛️ DevTools: Could not locate saved component filters');
            // Fallback to assuming the default filters in this case.
            applyComponentFilters(Object(utils["g" /* getDefaultComponentFilters */])());
          } // If necessary, we can revisit optimizing this operation.
          // For example, we could add a new recursive unmount tree operation.
          // The unmount operations are already significantly smaller than mount operations though.
          // This is something to keep in mind for later.

          function updateComponentFilters(componentFilters) {
            if (isProfiling) {
              // Re-mounting a tree while profiling is in progress might break a lot of assumptions.
              // If necessary, we could support this- but it doesn't seem like a necessary use case.
              throw Error("Cannot modify filter preferences while profiling");
            } // Recursively unmount all roots.

            hook.getFiberRoots(rendererID).forEach(function (root) {
              currentRootID = getOrGenerateFiberID(root.current); // The TREE_OPERATION_REMOVE_ROOT operation serves two purposes:
              // 1. It avoids sending unnecessary bridge traffic to clear a root.
              // 2. It preserves Fiber IDs when remounting (below) which in turn ID to error/warning mapping.

              pushOperation(constants["n" /* TREE_OPERATION_REMOVE_ROOT */]);
              flushPendingEvents(root);
              currentRootID = -1;
            });
            applyComponentFilters(componentFilters); // Reset pseudo counters so that new path selections will be persisted.

            rootDisplayNameCounter.clear(); // Recursively re-mount all roots with new filter criteria applied.

            hook.getFiberRoots(rendererID).forEach(function (root) {
              currentRootID = getOrGenerateFiberID(root.current);
              setRootPseudoKey(currentRootID, root.current);
              mountFiberRecursively(root.current, null, false, false);
              flushPendingEvents(root);
              currentRootID = -1;
            }); // Also re-evaluate all error and warning counts given the new filters.

            reevaluateErrorsAndWarnings();
            flushPendingEvents();
          } // NOTICE Keep in sync with get*ForFiber methods

          function shouldFilterFiber(fiber) {
            var _debugSource = fiber._debugSource,
              tag = fiber.tag,
              type = fiber.type,
              key = fiber.key;

            switch (tag) {
              case DehydratedSuspenseComponent:
                // TODO: ideally we would show dehydrated Suspense immediately.
                // However, it has some special behavior (like disconnecting
                // an alternate and turning into real Suspense) which breaks DevTools.
                // For now, ignore it, and only show it once it gets hydrated.
                // https://github.com/bvaughn/react-devtools-experimental/issues/197
                return true;

              case HostPortal:
              case HostText:
              case LegacyHiddenComponent:
              case OffscreenComponent:
                return true;

              case HostRoot:
                // It is never valid to filter the root element.
                return false;

              case Fragment:
                return key === null;

              default:
                var typeSymbol = getTypeSymbol(type);

                switch (typeSymbol) {
                  case ReactSymbols["a" /* CONCURRENT_MODE_NUMBER */]:
                  case ReactSymbols["b" /* CONCURRENT_MODE_SYMBOL_STRING */]:
                  case ReactSymbols["e" /* DEPRECATED_ASYNC_MODE_SYMBOL_STRING */]:
                  case ReactSymbols["s" /* STRICT_MODE_NUMBER */]:
                  case ReactSymbols["t" /* STRICT_MODE_SYMBOL_STRING */]:
                    return true;

                  default:
                    break;
                }
            }

            var elementType = getElementTypeForFiber(fiber);

            if (hideElementsWithTypes.has(elementType)) {
              return true;
            }

            if (hideElementsWithDisplayNames.size > 0) {
              var displayName = getDisplayNameForFiber(fiber);

              if (displayName != null) {
                // eslint-disable-next-line no-for-of-loops/no-for-of-loops
                var _iterator3 = _createForOfIteratorHelper(hideElementsWithDisplayNames),
                  _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    var displayNameRegExp = _step3.value;

                    if (displayNameRegExp.test(displayName)) {
                      return true;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            }

            if (_debugSource != null && hideElementsWithPaths.size > 0) {
              var fileName = _debugSource.fileName; // eslint-disable-next-line no-for-of-loops/no-for-of-loops

              var _iterator4 = _createForOfIteratorHelper(hideElementsWithPaths),
                _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  var pathRegExp = _step4.value;

                  if (pathRegExp.test(fileName)) {
                    return true;
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }

            return false;
          } // NOTICE Keep in sync with shouldFilterFiber() and other get*ForFiber methods

          function getElementTypeForFiber(fiber) {
            var type = fiber.type,
              tag = fiber.tag;

            switch (tag) {
              case ClassComponent:
              case IncompleteClassComponent:
                return types["e" /* ElementTypeClass */];

              case FunctionComponent:
              case IndeterminateComponent:
                return types["h" /* ElementTypeFunction */];

              case ForwardRef:
                return types["g" /* ElementTypeForwardRef */];

              case HostRoot:
                return types["m" /* ElementTypeRoot */];

              case HostComponent:
              case HostResource:
              case HostSingleton:
                return types["i" /* ElementTypeHostComponent */];

              case HostPortal:
              case HostText:
              case Fragment:
                return types["k" /* ElementTypeOtherOrUnknown */];

              case MemoComponent:
              case SimpleMemoComponent:
                return types["j" /* ElementTypeMemo */];

              case SuspenseComponent:
                return types["n" /* ElementTypeSuspense */];

              case SuspenseListComponent:
                return types["o" /* ElementTypeSuspenseList */];

              case TracingMarkerComponent:
                return types["p" /* ElementTypeTracingMarker */];

              default:
                var typeSymbol = getTypeSymbol(type);

                switch (typeSymbol) {
                  case ReactSymbols["a" /* CONCURRENT_MODE_NUMBER */]:
                  case ReactSymbols["b" /* CONCURRENT_MODE_SYMBOL_STRING */]:
                  case ReactSymbols["e" /* DEPRECATED_ASYNC_MODE_SYMBOL_STRING */]:
                    return types["k" /* ElementTypeOtherOrUnknown */];

                  case ReactSymbols["n" /* PROVIDER_NUMBER */]:
                  case ReactSymbols["o" /* PROVIDER_SYMBOL_STRING */]:
                    return types["f" /* ElementTypeContext */];

                  case ReactSymbols["c" /* CONTEXT_NUMBER */]:
                  case ReactSymbols["d" /* CONTEXT_SYMBOL_STRING */]:
                    return types["f" /* ElementTypeContext */];

                  case ReactSymbols["s" /* STRICT_MODE_NUMBER */]:
                  case ReactSymbols["t" /* STRICT_MODE_SYMBOL_STRING */]:
                    return types["k" /* ElementTypeOtherOrUnknown */];

                  case ReactSymbols["l" /* PROFILER_NUMBER */]:
                  case ReactSymbols["m" /* PROFILER_SYMBOL_STRING */]:
                    return types["l" /* ElementTypeProfiler */];

                  default:
                    return types["k" /* ElementTypeOtherOrUnknown */];
                }
            }
          } // When profiling is supported, we store the latest tree base durations for each Fiber.
          // This is so that we can quickly capture a snapshot of those values if profiling starts.
          // If we didn't store these values, we'd have to crawl the tree when profiling started,
          // and use a slow path to find each of the current Fibers.

          var idToTreeBaseDurationMap = new Map(); // When profiling is supported, we store the latest tree base durations for each Fiber.
          // This map enables us to filter these times by root when sending them to the frontend.

          var idToRootMap = new Map(); // When a mount or update is in progress, this value tracks the root that is being operated on.

          var currentRootID = -1; // Returns the unique ID for a Fiber or generates and caches a new one if the Fiber hasn't been seen before.
          // Once this method has been called for a Fiber, untrackFiberID() should always be called later to avoid leaking.

          function getOrGenerateFiberID(fiber) {
            var id = null;

            if (fiberToIDMap.has(fiber)) {
              id = fiberToIDMap.get(fiber);
            } else {
              var _alternate = fiber.alternate;

              if (_alternate !== null && fiberToIDMap.has(_alternate)) {
                id = fiberToIDMap.get(_alternate);
              }
            }

            var didGenerateID = false;

            if (id === null) {
              didGenerateID = true;
              id = Object(utils["k" /* getUID */])();
            } // This refinement is for Flow purposes only.

            var refinedID = id; // Make sure we're tracking this Fiber
            // e.g. if it just mounted or an error was logged during initial render.

            if (!fiberToIDMap.has(fiber)) {
              fiberToIDMap.set(fiber, refinedID);
              idToArbitraryFiberMap.set(refinedID, fiber);
            } // Also make sure we're tracking its alternate,
            // e.g. in case this is the first update after mount.

            var alternate = fiber.alternate;

            if (alternate !== null) {
              if (!fiberToIDMap.has(alternate)) {
                fiberToIDMap.set(alternate, refinedID);
              }
            }

            if (constants["s" /* __DEBUG__ */]) {
              if (didGenerateID) {
                debug("getOrGenerateFiberID()", fiber, fiber.return, "Generated a new UID");
              }
            }

            return refinedID;
          } // Returns an ID if one has already been generated for the Fiber or throws.

          function getFiberIDThrows(fiber) {
            var maybeID = getFiberIDUnsafe(fiber);

            if (maybeID !== null) {
              return maybeID;
            }

            throw Error('Could not find ID for Fiber "'.concat(getDisplayNameForFiber(fiber) || "", '"'));
          } // Returns an ID if one has already been generated for the Fiber or null if one has not been generated.
          // Use this method while e.g. logging to avoid over-retaining Fibers.

          function getFiberIDUnsafe(fiber) {
            if (fiberToIDMap.has(fiber)) {
              return fiberToIDMap.get(fiber);
            } else {
              var alternate = fiber.alternate;

              if (alternate !== null && fiberToIDMap.has(alternate)) {
                return fiberToIDMap.get(alternate);
              }
            }

            return null;
          } // Removes a Fiber (and its alternate) from the Maps used to track their id.
          // This method should always be called when a Fiber is unmounting.

          function untrackFiberID(fiber) {
            if (constants["s" /* __DEBUG__ */]) {
              debug("untrackFiberID()", fiber, fiber.return, "schedule after delay");
            } // Untrack Fibers after a slight delay in order to support a Fast Refresh edge case:
            // 1. Component type is updated and Fast Refresh schedules an update+remount.
            // 2. flushPendingErrorsAndWarningsAfterDelay() runs, sees the old Fiber is no longer mounted
            //    (it's been disconnected by Fast Refresh), and calls untrackFiberID() to clear it from the Map.
            // 3. React flushes pending passive effects before it runs the next render,
            //    which logs an error or warning, which causes a new ID to be generated for this Fiber.
            // 4. DevTools now tries to unmount the old Component with the new ID.
            //
            // The underlying problem here is the premature clearing of the Fiber ID,
            // but DevTools has no way to detect that a given Fiber has been scheduled for Fast Refresh.
            // (The "_debugNeedsRemount" flag won't necessarily be set.)
            //
            // The best we can do is to delay untracking by a small amount,
            // and give React time to process the Fast Refresh delay.

            untrackFibersSet.add(fiber); // React may detach alternate pointers during unmount;
            // Since our untracking code is async, we should explicily track the pending alternate here as well.

            var alternate = fiber.alternate;

            if (alternate !== null) {
              untrackFibersSet.add(alternate);
            }

            if (untrackFibersTimeoutID === null) {
              untrackFibersTimeoutID = setTimeout(untrackFibers, 1000);
            }
          }

          var untrackFibersSet = new Set();
          var untrackFibersTimeoutID = null;

          function untrackFibers() {
            if (untrackFibersTimeoutID !== null) {
              clearTimeout(untrackFibersTimeoutID);
              untrackFibersTimeoutID = null;
            }

            untrackFibersSet.forEach(function (fiber) {
              var fiberID = getFiberIDUnsafe(fiber);

              if (fiberID !== null) {
                idToArbitraryFiberMap.delete(fiberID); // Also clear any errors/warnings associated with this fiber.

                clearErrorsForFiberID(fiberID);
                clearWarningsForFiberID(fiberID);
              }

              fiberToIDMap.delete(fiber);
              var alternate = fiber.alternate;

              if (alternate !== null) {
                fiberToIDMap.delete(alternate);
              }

              if (forceErrorForFiberIDs.has(fiberID)) {
                forceErrorForFiberIDs.delete(fiberID);

                if (forceErrorForFiberIDs.size === 0 && setErrorHandler != null) {
                  setErrorHandler(shouldErrorFiberAlwaysNull);
                }
              }
            });
            untrackFibersSet.clear();
          }

          function getChangeDescription(prevFiber, nextFiber) {
            switch (getElementTypeForFiber(nextFiber)) {
              case types["e" /* ElementTypeClass */]:
              case types["h" /* ElementTypeFunction */]:
              case types["j" /* ElementTypeMemo */]:
              case types["g" /* ElementTypeForwardRef */]:
                if (prevFiber === null) {
                  return {
                    context: null,
                    didHooksChange: false,
                    isFirstMount: true,
                    props: null,
                    state: null,
                  };
                } else {
                  var data = {
                    context: getContextChangedKeys(nextFiber),
                    didHooksChange: false,
                    isFirstMount: false,
                    props: getChangedKeys(prevFiber.memoizedProps, nextFiber.memoizedProps),
                    state: getChangedKeys(prevFiber.memoizedState, nextFiber.memoizedState),
                  }; // Only traverse the hooks list once, depending on what info we're returning.

                  if (DevToolsFeatureFlags_core_oss["b" /* enableProfilerChangedHookIndices */]) {
                    var indices = getChangedHooksIndices(prevFiber.memoizedState, nextFiber.memoizedState);
                    data.hooks = indices;
                    data.didHooksChange = indices !== null && indices.length > 0;
                  } else {
                    data.didHooksChange = didHooksChange(prevFiber.memoizedState, nextFiber.memoizedState);
                  }

                  return data;
                }

              default:
                return null;
            }
          }

          function updateContextsForFiber(fiber) {
            switch (getElementTypeForFiber(fiber)) {
              case types["e" /* ElementTypeClass */]:
              case types["g" /* ElementTypeForwardRef */]:
              case types["h" /* ElementTypeFunction */]:
              case types["j" /* ElementTypeMemo */]:
                if (idToContextsMap !== null) {
                  var id = getFiberIDThrows(fiber);
                  var contexts = getContextsForFiber(fiber);

                  if (contexts !== null) {
                    // $FlowFixMe[incompatible-use] found when upgrading Flow
                    idToContextsMap.set(id, contexts);
                  }
                }

                break;

              default:
                break;
            }
          } // Differentiates between a null context value and no context.

          var NO_CONTEXT = {};

          function getContextsForFiber(fiber) {
            var legacyContext = NO_CONTEXT;
            var modernContext = NO_CONTEXT;

            switch (getElementTypeForFiber(fiber)) {
              case types["e" /* ElementTypeClass */]:
                var instance = fiber.stateNode;

                if (instance != null) {
                  if (instance.constructor && instance.constructor.contextType != null) {
                    modernContext = instance.context;
                  } else {
                    legacyContext = instance.context;

                    if (legacyContext && Object.keys(legacyContext).length === 0) {
                      legacyContext = NO_CONTEXT;
                    }
                  }
                }

                return [legacyContext, modernContext];

              case types["g" /* ElementTypeForwardRef */]:
              case types["h" /* ElementTypeFunction */]:
              case types["j" /* ElementTypeMemo */]:
                var dependencies = fiber.dependencies;

                if (dependencies && dependencies.firstContext) {
                  modernContext = dependencies.firstContext;
                }

                return [legacyContext, modernContext];

              default:
                return null;
            }
          } // Record all contexts at the time profiling is started.
          // Fibers only store the current context value,
          // so we need to track them separately in order to determine changed keys.

          function crawlToInitializeContextsMap(fiber) {
            var id = getFiberIDUnsafe(fiber); // Not all Fibers in the subtree have mounted yet.
            // For example, Offscreen (hidden) or Suspense (suspended) subtrees won't yet be tracked.
            // We can safely skip these subtrees.

            if (id !== null) {
              updateContextsForFiber(fiber);
              var current = fiber.child;

              while (current !== null) {
                crawlToInitializeContextsMap(current);
                current = current.sibling;
              }
            }
          }

          function getContextChangedKeys(fiber) {
            if (idToContextsMap !== null) {
              var id = getFiberIDThrows(fiber); // $FlowFixMe[incompatible-use] found when upgrading Flow

              var prevContexts = idToContextsMap.has(id) // $FlowFixMe[incompatible-use] found when upgrading Flow
                ? idToContextsMap.get(id)
                : null;
              var nextContexts = getContextsForFiber(fiber);

              if (prevContexts == null || nextContexts == null) {
                return null;
              }

              var _prevContexts = renderer_slicedToArray(prevContexts, 2),
                prevLegacyContext = _prevContexts[0],
                prevModernContext = _prevContexts[1];

              var _nextContexts = renderer_slicedToArray(nextContexts, 2),
                nextLegacyContext = _nextContexts[0],
                nextModernContext = _nextContexts[1];

              switch (getElementTypeForFiber(fiber)) {
                case types["e" /* ElementTypeClass */]:
                  if (prevContexts && nextContexts) {
                    if (nextLegacyContext !== NO_CONTEXT) {
                      return getChangedKeys(prevLegacyContext, nextLegacyContext);
                    } else if (nextModernContext !== NO_CONTEXT) {
                      return prevModernContext !== nextModernContext;
                    }
                  }

                  break;

                case types["g" /* ElementTypeForwardRef */]:
                case types["h" /* ElementTypeFunction */]:
                case types["j" /* ElementTypeMemo */]:
                  if (nextModernContext !== NO_CONTEXT) {
                    var prevContext = prevModernContext;
                    var nextContext = nextModernContext;

                    while (prevContext && nextContext) {
                      // Note this only works for versions of React that support this key (e.v. 18+)
                      // For older versions, there's no good way to read the current context value after render has completed.
                      // This is because React maintains a stack of context values during render,
                      // but by the time DevTools is called, render has finished and the stack is empty.
                      if (!shared_objectIs(prevContext.memoizedValue, nextContext.memoizedValue)) {
                        return true;
                      }

                      prevContext = prevContext.next;
                      nextContext = nextContext.next;
                    }

                    return false;
                  }

                  break;

                default:
                  break;
              }
            }

            return null;
          }

          function isHookThatCanScheduleUpdate(hookObject) {
            var queue = hookObject.queue;

            if (!queue) {
              return false;
            }

            var boundHasOwnProperty = shared_hasOwnProperty.bind(queue); // Detect the shape of useState() or useReducer()
            // using the attributes that are unique to these hooks
            // but also stable (e.g. not tied to current Lanes implementation)

            var isStateOrReducer =
              boundHasOwnProperty("pending") && boundHasOwnProperty("dispatch") && typeof queue.dispatch === "function"; // Detect useSyncExternalStore()

            var isSyncExternalStore =
              boundHasOwnProperty("value") &&
              boundHasOwnProperty("getSnapshot") &&
              typeof queue.getSnapshot === "function"; // These are the only types of hooks that can schedule an update.

            return isStateOrReducer || isSyncExternalStore;
          }

          function didStatefulHookChange(prev, next) {
            var prevMemoizedState = prev.memoizedState;
            var nextMemoizedState = next.memoizedState;

            if (isHookThatCanScheduleUpdate(prev)) {
              return prevMemoizedState !== nextMemoizedState;
            }

            return false;
          }

          function didHooksChange(prev, next) {
            if (prev == null || next == null) {
              return false;
            } // We can't report anything meaningful for hooks changes.

            if (
              next.hasOwnProperty("baseState") &&
              next.hasOwnProperty("memoizedState") &&
              next.hasOwnProperty("next") &&
              next.hasOwnProperty("queue")
            ) {
              while (next !== null) {
                if (didStatefulHookChange(prev, next)) {
                  return true;
                } else {
                  next = next.next;
                  prev = prev.next;
                }
              }
            }

            return false;
          }

          function getChangedHooksIndices(prev, next) {
            if (DevToolsFeatureFlags_core_oss["b" /* enableProfilerChangedHookIndices */]) {
              if (prev == null || next == null) {
                return null;
              }

              var indices = [];
              var index = 0;

              if (
                next.hasOwnProperty("baseState") &&
                next.hasOwnProperty("memoizedState") &&
                next.hasOwnProperty("next") &&
                next.hasOwnProperty("queue")
              ) {
                while (next !== null) {
                  if (didStatefulHookChange(prev, next)) {
                    indices.push(index);
                  }

                  next = next.next;
                  prev = prev.next;
                  index++;
                }
              }

              return indices;
            }

            return null;
          }

          function getChangedKeys(prev, next) {
            if (prev == null || next == null) {
              return null;
            } // We can't report anything meaningful for hooks changes.

            if (
              next.hasOwnProperty("baseState") &&
              next.hasOwnProperty("memoizedState") &&
              next.hasOwnProperty("next") &&
              next.hasOwnProperty("queue")
            ) {
              return null;
            }

            var keys = new Set([].concat(_toConsumableArray(Object.keys(prev)), _toConsumableArray(Object.keys(next))));
            var changedKeys = []; // eslint-disable-next-line no-for-of-loops/no-for-of-loops

            var _iterator5 = _createForOfIteratorHelper(keys),
              _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                var key = _step5.value;

                if (prev[key] !== next[key]) {
                  changedKeys.push(key);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return changedKeys;
          } // eslint-disable-next-line no-unused-vars

          function didFiberRender(prevFiber, nextFiber) {
            switch (nextFiber.tag) {
              case ClassComponent:
              case FunctionComponent:
              case ContextConsumer:
              case MemoComponent:
              case SimpleMemoComponent:
              case ForwardRef:
                // For types that execute user code, we check PerformedWork effect.
                // We don't reflect bailouts (either referential or sCU) in DevTools.
                // eslint-disable-next-line no-bitwise
                return (getFiberFlags(nextFiber) & PerformedWork) === PerformedWork;
              // Note: ContextConsumer only gets PerformedWork effect in 16.3.3+
              // so it won't get highlighted with React 16.3.0 to 16.3.2.

              default:
                // For host components and other types, we compare inputs
                // to determine whether something is an update.
                return (
                  prevFiber.memoizedProps !== nextFiber.memoizedProps ||
                  prevFiber.memoizedState !== nextFiber.memoizedState ||
                  prevFiber.ref !== nextFiber.ref
                );
            }
          }

          var pendingOperations = [];
          var pendingRealUnmountedIDs = [];
          var pendingSimulatedUnmountedIDs = [];
          var pendingOperationsQueue = [];
          var pendingStringTable = new Map();
          var pendingStringTableLength = 0;
          var pendingUnmountedRootID = null;

          function pushOperation(op) {
            if (false) {
            }

            pendingOperations.push(op);
          }

          function shouldBailoutWithPendingOperations() {
            if (isProfiling) {
              if (currentCommitProfilingMetadata != null && currentCommitProfilingMetadata.durations.length > 0) {
                return false;
              }
            }

            return (
              pendingOperations.length === 0 &&
              pendingRealUnmountedIDs.length === 0 &&
              pendingSimulatedUnmountedIDs.length === 0 &&
              pendingUnmountedRootID === null
            );
          }

          function flushOrQueueOperations(operations) {
            if (shouldBailoutWithPendingOperations()) {
              return;
            }

            if (pendingOperationsQueue !== null) {
              pendingOperationsQueue.push(operations);
            } else {
              hook.emit("operations", operations);
            }
          }

          var flushPendingErrorsAndWarningsAfterDelayTimeoutID = null;

          function clearPendingErrorsAndWarningsAfterDelay() {
            if (flushPendingErrorsAndWarningsAfterDelayTimeoutID !== null) {
              clearTimeout(flushPendingErrorsAndWarningsAfterDelayTimeoutID);
              flushPendingErrorsAndWarningsAfterDelayTimeoutID = null;
            }
          }

          function flushPendingErrorsAndWarningsAfterDelay() {
            clearPendingErrorsAndWarningsAfterDelay();
            flushPendingErrorsAndWarningsAfterDelayTimeoutID = setTimeout(function () {
              flushPendingErrorsAndWarningsAfterDelayTimeoutID = null;

              if (pendingOperations.length > 0) {
                // On the off chance that something else has pushed pending operations,
                // we should bail on warnings; it's probably not safe to push midway.
                return;
              }

              recordPendingErrorsAndWarnings();

              if (shouldBailoutWithPendingOperations()) {
                // No warnings or errors to flush; we can bail out early here too.
                return;
              } // We can create a smaller operations array than flushPendingEvents()
              // because we only need to flush warning and error counts.
              // Only a few pieces of fixed information are required up front.

              var operations = new Array(3 + pendingOperations.length);
              operations[0] = rendererID;
              operations[1] = currentRootID;
              operations[2] = 0; // String table size

              for (var j = 0; j < pendingOperations.length; j++) {
                operations[3 + j] = pendingOperations[j];
              }

              flushOrQueueOperations(operations);
              pendingOperations.length = 0;
            }, 1000);
          }

          function reevaluateErrorsAndWarnings() {
            fibersWithChangedErrorOrWarningCounts.clear();
            fiberIDToErrorsMap.forEach(function (countMap, fiberID) {
              var fiber = idToArbitraryFiberMap.get(fiberID);

              if (fiber != null) {
                fibersWithChangedErrorOrWarningCounts.add(fiber);
              }
            });
            fiberIDToWarningsMap.forEach(function (countMap, fiberID) {
              var fiber = idToArbitraryFiberMap.get(fiberID);

              if (fiber != null) {
                fibersWithChangedErrorOrWarningCounts.add(fiber);
              }
            });
            recordPendingErrorsAndWarnings();
          }

          function mergeMapsAndGetCountHelper(fiber, fiberID, pendingFiberToMessageCountMap, fiberIDToMessageCountMap) {
            var newCount = 0;
            var messageCountMap = fiberIDToMessageCountMap.get(fiberID);
            var pendingMessageCountMap = pendingFiberToMessageCountMap.get(fiber);

            if (pendingMessageCountMap != null) {
              if (messageCountMap == null) {
                messageCountMap = pendingMessageCountMap;
                fiberIDToMessageCountMap.set(fiberID, pendingMessageCountMap);
              } else {
                // This Flow refinement should not be necessary and yet...
                var refinedMessageCountMap = messageCountMap;
                pendingMessageCountMap.forEach(function (pendingCount, message) {
                  var previousCount = refinedMessageCountMap.get(message) || 0;
                  refinedMessageCountMap.set(message, previousCount + pendingCount);
                });
              }
            }

            if (!shouldFilterFiber(fiber)) {
              if (messageCountMap != null) {
                messageCountMap.forEach(function (count) {
                  newCount += count;
                });
              }
            }

            pendingFiberToMessageCountMap.delete(fiber);
            return newCount;
          }

          function recordPendingErrorsAndWarnings() {
            clearPendingErrorsAndWarningsAfterDelay();
            fibersWithChangedErrorOrWarningCounts.forEach(function (fiber) {
              var fiberID = getFiberIDUnsafe(fiber);

              if (fiberID === null) {
                // Don't send updates for Fibers that didn't mount due to e.g. Suspense or an error boundary.
              } else {
                var errorCount = mergeMapsAndGetCountHelper(
                  fiber,
                  fiberID,
                  pendingFiberToErrorsMap,
                  fiberIDToErrorsMap
                );
                var warningCount = mergeMapsAndGetCountHelper(
                  fiber,
                  fiberID,
                  pendingFiberToWarningsMap,
                  fiberIDToWarningsMap
                );
                pushOperation(constants["q" /* TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS */]);
                pushOperation(fiberID);
                pushOperation(errorCount);
                pushOperation(warningCount);
              } // Always clean up so that we don't leak.

              pendingFiberToErrorsMap.delete(fiber);
              pendingFiberToWarningsMap.delete(fiber);
            });
            fibersWithChangedErrorOrWarningCounts.clear();
          }

          function flushPendingEvents(root) {
            // Add any pending errors and warnings to the operations array.
            // We do this just before flushing, so we can ignore errors for no-longer-mounted Fibers.
            recordPendingErrorsAndWarnings();

            if (shouldBailoutWithPendingOperations()) {
              // If we aren't profiling, we can just bail out here.
              // No use sending an empty update over the bridge.
              //
              // The Profiler stores metadata for each commit and reconstructs the app tree per commit using:
              // (1) an initial tree snapshot and
              // (2) the operations array for each commit
              // Because of this, it's important that the operations and metadata arrays align,
              // So it's important not to omit even empty operations while profiling is active.
              return;
            }

            var numUnmountIDs =
              pendingRealUnmountedIDs.length +
              pendingSimulatedUnmountedIDs.length +
              (pendingUnmountedRootID === null ? 0 : 1);
            var operations = new Array( // Identify which renderer this update is coming from.
              2 + // [rendererID, rootFiberID]
                // How big is the string table?
                1 + // [stringTableLength]
                // Then goes the actual string table.
                pendingStringTableLength + // All unmounts are batched in a single message.
                // [TREE_OPERATION_REMOVE, removedIDLength, ...ids]
                (numUnmountIDs > 0 ? 2 + numUnmountIDs : 0) + // Regular operations
                pendingOperations.length
            ); // Identify which renderer this update is coming from.
            // This enables roots to be mapped to renderers,
            // Which in turn enables fiber props, states, and hooks to be inspected.

            var i = 0;
            operations[i++] = rendererID;
            operations[i++] = currentRootID; // Now fill in the string table.
            // [stringTableLength, str1Length, ...str1, str2Length, ...str2, ...]

            operations[i++] = pendingStringTableLength;
            pendingStringTable.forEach(function (entry, stringKey) {
              var encodedString = entry.encodedString; // Don't use the string length.
              // It won't work for multibyte characters (like emoji).

              var length = encodedString.length;
              operations[i++] = length;

              for (var j = 0; j < length; j++) {
                operations[i + j] = encodedString[j];
              }

              i += length;
            });

            if (numUnmountIDs > 0) {
              // All unmounts except roots are batched in a single message.
              operations[i++] = constants["m" /* TREE_OPERATION_REMOVE */]; // The first number is how many unmounted IDs we're gonna send.

              operations[i++] = numUnmountIDs; // Fill in the real unmounts in the reverse order.
              // They were inserted parents-first by React, but we want children-first.
              // So we traverse our array backwards.

              for (var j = pendingRealUnmountedIDs.length - 1; j >= 0; j--) {
                operations[i++] = pendingRealUnmountedIDs[j];
              } // Fill in the simulated unmounts (hidden Suspense subtrees) in their order.
              // (We want children to go before parents.)
              // They go *after* the real unmounts because we know for sure they won't be
              // children of already pushed "real" IDs. If they were, we wouldn't be able
              // to discover them during the traversal, as they would have been deleted.

              for (var _j = 0; _j < pendingSimulatedUnmountedIDs.length; _j++) {
                operations[i + _j] = pendingSimulatedUnmountedIDs[_j];
              }

              i += pendingSimulatedUnmountedIDs.length; // The root ID should always be unmounted last.

              if (pendingUnmountedRootID !== null) {
                operations[i] = pendingUnmountedRootID;
                i++;
              }
            } // Fill in the rest of the operations.

            for (var _j2 = 0; _j2 < pendingOperations.length; _j2++) {
              operations[i + _j2] = pendingOperations[_j2];
            }

            i += pendingOperations.length; // Let the frontend know about tree operations.

            flushOrQueueOperations(operations); // Reset all of the pending state now that we've told the frontend about it.

            pendingOperations.length = 0;
            pendingRealUnmountedIDs.length = 0;
            pendingSimulatedUnmountedIDs.length = 0;
            pendingUnmountedRootID = null;
            pendingStringTable.clear();
            pendingStringTableLength = 0;
          }

          function getStringID(string) {
            if (string === null) {
              return 0;
            }

            var existingEntry = pendingStringTable.get(string);

            if (existingEntry !== undefined) {
              return existingEntry.id;
            }

            var id = pendingStringTable.size + 1;
            var encodedString = Object(utils["p" /* utfEncodeString */])(string);
            pendingStringTable.set(string, {
              encodedString: encodedString,
              id: id,
            }); // The string table total length needs to account both for the string length,
            // and for the array item that contains the length itself.
            //
            // Don't use string length for this table.
            // It won't work for multibyte characters (like emoji).

            pendingStringTableLength += encodedString.length + 1;
            return id;
          }

          function recordMount(fiber, parentFiber) {
            var isRoot = fiber.tag === HostRoot;
            var id = getOrGenerateFiberID(fiber);

            if (constants["s" /* __DEBUG__ */]) {
              debug("recordMount()", fiber, parentFiber);
            }

            var hasOwnerMetadata = fiber.hasOwnProperty("_debugOwner");
            var isProfilingSupported = fiber.hasOwnProperty("treeBaseDuration"); // Adding a new field here would require a bridge protocol version bump (a backwads breaking change).
            // Instead let's re-purpose a pre-existing field to carry more information.

            var profilingFlags = 0;

            if (isProfilingSupported) {
              profilingFlags = constants["g" /* PROFILING_FLAG_BASIC_SUPPORT */];

              if (typeof injectProfilingHooks === "function") {
                profilingFlags |= constants["h" /* PROFILING_FLAG_TIMELINE_SUPPORT */];
              }
            }

            if (isRoot) {
              pushOperation(constants["l" /* TREE_OPERATION_ADD */]);
              pushOperation(id);
              pushOperation(types["m" /* ElementTypeRoot */]);
              pushOperation((fiber.mode & StrictModeBits) !== 0 ? 1 : 0);
              pushOperation(profilingFlags);
              pushOperation(StrictModeBits !== 0 ? 1 : 0);
              pushOperation(hasOwnerMetadata ? 1 : 0);

              if (isProfiling) {
                if (displayNamesByRootID !== null) {
                  displayNamesByRootID.set(id, getDisplayNameForRoot(fiber));
                }
              }
            } else {
              var key = fiber.key;
              var displayName = getDisplayNameForFiber(fiber);
              var elementType = getElementTypeForFiber(fiber);
              var _debugOwner = fiber._debugOwner; // Ideally we should call getFiberIDThrows() for _debugOwner,
              // since owners are almost always higher in the tree (and so have already been processed),
              // but in some (rare) instances reported in open source, a descendant mounts before an owner.
              // Since this is a DEV only field it's probably okay to also just lazily generate and ID here if needed.
              // See https://github.com/facebook/react/issues/21445

              var ownerID = _debugOwner != null ? getOrGenerateFiberID(_debugOwner) : 0;
              var parentID = parentFiber ? getFiberIDThrows(parentFiber) : 0;
              var displayNameStringID = getStringID(displayName); // This check is a guard to handle a React element that has been modified
              // in such a way as to bypass the default stringification of the "key" property.

              var keyString = key === null ? null : String(key);
              var keyStringID = getStringID(keyString);
              pushOperation(constants["l" /* TREE_OPERATION_ADD */]);
              pushOperation(id);
              pushOperation(elementType);
              pushOperation(parentID);
              pushOperation(ownerID);
              pushOperation(displayNameStringID);
              pushOperation(keyStringID); // If this subtree has a new mode, let the frontend know.

              if ((fiber.mode & StrictModeBits) !== 0 && (parentFiber.mode & StrictModeBits) === 0) {
                pushOperation(constants["p" /* TREE_OPERATION_SET_SUBTREE_MODE */]);
                pushOperation(id);
                pushOperation(types["q" /* StrictMode */]);
              }
            }

            if (isProfilingSupported) {
              idToRootMap.set(id, currentRootID);
              recordProfilingDurations(fiber);
            }
          }

          function recordUnmount(fiber, isSimulated) {
            if (constants["s" /* __DEBUG__ */]) {
              debug("recordUnmount()", fiber, null, isSimulated ? "unmount is simulated" : "");
            }

            if (trackedPathMatchFiber !== null) {
              // We're in the process of trying to restore previous selection.
              // If this fiber matched but is being unmounted, there's no use trying.
              // Reset the state so we don't keep holding onto it.
              if (fiber === trackedPathMatchFiber || fiber === trackedPathMatchFiber.alternate) {
                setTrackedPath(null);
              }
            }

            var unsafeID = getFiberIDUnsafe(fiber);

            if (unsafeID === null) {
              // If we've never seen this Fiber, it might be inside of a legacy render Suspense fragment (so the store is not even aware of it).
              // In that case we can just ignore it or it will cause errors later on.
              // One example of this is a Lazy component that never resolves before being unmounted.
              //
              // This also might indicate a Fast Refresh force-remount scenario.
              //
              // TODO: This is fragile and can obscure actual bugs.
              return;
            } // Flow refinement.

            var id = unsafeID;
            var isRoot = fiber.tag === HostRoot;

            if (isRoot) {
              // Roots must be removed only after all children (pending and simulated) have been removed.
              // So we track it separately.
              pendingUnmountedRootID = id;
            } else if (!shouldFilterFiber(fiber)) {
              // To maintain child-first ordering,
              // we'll push it into one of these queues,
              // and later arrange them in the correct order.
              if (isSimulated) {
                pendingSimulatedUnmountedIDs.push(id);
              } else {
                pendingRealUnmountedIDs.push(id);
              }
            }

            if (!fiber._debugNeedsRemount) {
              untrackFiberID(fiber);
              var isProfilingSupported = fiber.hasOwnProperty("treeBaseDuration");

              if (isProfilingSupported) {
                idToRootMap.delete(id);
                idToTreeBaseDurationMap.delete(id);
              }
            }
          }

          function mountFiberRecursively(firstChild, parentFiber, traverseSiblings, traceNearestHostComponentUpdate) {
            // Iterate over siblings rather than recursing.
            // This reduces the chance of stack overflow for wide trees (e.g. lists with many items).
            var fiber = firstChild;

            while (fiber !== null) {
              // Generate an ID even for filtered Fibers, in case it's needed later (e.g. for Profiling).
              getOrGenerateFiberID(fiber);

              if (constants["s" /* __DEBUG__ */]) {
                debug("mountFiberRecursively()", fiber, parentFiber);
              } // If we have the tree selection from previous reload, try to match this Fiber.
              // Also remember whether to do the same for siblings.

              var mightSiblingsBeOnTrackedPath = updateTrackedPathStateBeforeMount(fiber);
              var shouldIncludeInTree = !shouldFilterFiber(fiber);

              if (shouldIncludeInTree) {
                recordMount(fiber, parentFiber);
              }

              if (traceUpdatesEnabled) {
                if (traceNearestHostComponentUpdate) {
                  var elementType = getElementTypeForFiber(fiber); // If an ancestor updated, we should mark the nearest host nodes for highlighting.

                  if (elementType === types["i" /* ElementTypeHostComponent */]) {
                    traceUpdatesForNodes.add(fiber.stateNode);
                    traceNearestHostComponentUpdate = false;
                  }
                } // We intentionally do not re-enable the traceNearestHostComponentUpdate flag in this branch,
                // because we don't want to highlight every host node inside of a newly mounted subtree.
              }

              var isSuspense = fiber.tag === ReactTypeOfWork.SuspenseComponent;

              if (isSuspense) {
                var isTimedOut = fiber.memoizedState !== null;

                if (isTimedOut) {
                  // Special case: if Suspense mounts in a timed-out state,
                  // get the fallback child from the inner fragment and mount
                  // it as if it was our own child. Updates handle this too.
                  var primaryChildFragment = fiber.child;
                  var fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null;
                  var fallbackChild = fallbackChildFragment ? fallbackChildFragment.child : null;

                  if (fallbackChild !== null) {
                    mountFiberRecursively(
                      fallbackChild,
                      shouldIncludeInTree ? fiber : parentFiber,
                      true,
                      traceNearestHostComponentUpdate
                    );
                  }
                } else {
                  var primaryChild = null;
                  var areSuspenseChildrenConditionallyWrapped = OffscreenComponent === -1;

                  if (areSuspenseChildrenConditionallyWrapped) {
                    primaryChild = fiber.child;
                  } else if (fiber.child !== null) {
                    primaryChild = fiber.child.child;
                  }

                  if (primaryChild !== null) {
                    mountFiberRecursively(
                      primaryChild,
                      shouldIncludeInTree ? fiber : parentFiber,
                      true,
                      traceNearestHostComponentUpdate
                    );
                  }
                }
              } else {
                if (fiber.child !== null) {
                  mountFiberRecursively(
                    fiber.child,
                    shouldIncludeInTree ? fiber : parentFiber,
                    true,
                    traceNearestHostComponentUpdate
                  );
                }
              } // We're exiting this Fiber now, and entering its siblings.
              // If we have selection to restore, we might need to re-activate tracking.

              updateTrackedPathStateAfterMount(mightSiblingsBeOnTrackedPath);
              fiber = traverseSiblings ? fiber.sibling : null;
            }
          } // We use this to simulate unmounting for Suspense trees
          // when we switch from primary to fallback.

          function unmountFiberChildrenRecursively(fiber) {
            if (constants["s" /* __DEBUG__ */]) {
              debug("unmountFiberChildrenRecursively()", fiber);
            } // We might meet a nested Suspense on our way.

            var isTimedOutSuspense = fiber.tag === ReactTypeOfWork.SuspenseComponent && fiber.memoizedState !== null;
            var child = fiber.child;

            if (isTimedOutSuspense) {
              // If it's showing fallback tree, let's traverse it instead.
              var primaryChildFragment = fiber.child;
              var fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null; // Skip over to the real Fiber child.

              child = fallbackChildFragment ? fallbackChildFragment.child : null;
            }

            while (child !== null) {
              // Record simulated unmounts children-first.
              // We skip nodes without return because those are real unmounts.
              if (child.return !== null) {
                unmountFiberChildrenRecursively(child);
                recordUnmount(child, true);
              }

              child = child.sibling;
            }
          }

          function recordProfilingDurations(fiber) {
            var id = getFiberIDThrows(fiber);
            var actualDuration = fiber.actualDuration,
              treeBaseDuration = fiber.treeBaseDuration;
            idToTreeBaseDurationMap.set(id, treeBaseDuration || 0);

            if (isProfiling) {
              var alternate = fiber.alternate; // It's important to update treeBaseDuration even if the current Fiber did not render,
              // because it's possible that one of its descendants did.

              if (alternate == null || treeBaseDuration !== alternate.treeBaseDuration) {
                // Tree base duration updates are included in the operations typed array.
                // So we have to convert them from milliseconds to microseconds so we can send them as ints.
                var convertedTreeBaseDuration = Math.floor((treeBaseDuration || 0) * 1000);
                pushOperation(constants["r" /* TREE_OPERATION_UPDATE_TREE_BASE_DURATION */]);
                pushOperation(id);
                pushOperation(convertedTreeBaseDuration);
              }

              if (alternate == null || didFiberRender(alternate, fiber)) {
                if (actualDuration != null) {
                  // The actual duration reported by React includes time spent working on children.
                  // This is useful information, but it's also useful to be able to exclude child durations.
                  // The frontend can't compute this, since the immediate children may have been filtered out.
                  // So we need to do this on the backend.
                  // Note that this calculated self duration is not the same thing as the base duration.
                  // The two are calculated differently (tree duration does not accumulate).
                  var selfDuration = actualDuration;
                  var child = fiber.child;

                  while (child !== null) {
                    selfDuration -= child.actualDuration || 0;
                    child = child.sibling;
                  } // If profiling is active, store durations for elements that were rendered during the commit.
                  // Note that we should do this for any fiber we performed work on, regardless of its actualDuration value.
                  // In some cases actualDuration might be 0 for fibers we worked on (particularly if we're using Date.now)
                  // In other cases (e.g. Memo) actualDuration might be greater than 0 even if we "bailed out".

                  var metadata = currentCommitProfilingMetadata;
                  metadata.durations.push(id, actualDuration, selfDuration);
                  metadata.maxActualDuration = Math.max(metadata.maxActualDuration, actualDuration);

                  if (recordChangeDescriptions) {
                    var changeDescription = getChangeDescription(alternate, fiber);

                    if (changeDescription !== null) {
                      if (metadata.changeDescriptions !== null) {
                        metadata.changeDescriptions.set(id, changeDescription);
                      }
                    }

                    updateContextsForFiber(fiber);
                  }
                }
              }
            }
          }

          function recordResetChildren(fiber, childSet) {
            if (constants["s" /* __DEBUG__ */]) {
              debug("recordResetChildren()", childSet, fiber);
            } // The frontend only really cares about the displayName, key, and children.
            // The first two don't really change, so we are only concerned with the order of children here.
            // This is trickier than a simple comparison though, since certain types of fibers are filtered.

            var nextChildren = []; // This is a naive implementation that shallowly recourses children.
            // We might want to revisit this if it proves to be too inefficient.

            var child = childSet;

            while (child !== null) {
              findReorderedChildrenRecursively(child, nextChildren);
              child = child.sibling;
            }

            var numChildren = nextChildren.length;

            if (numChildren < 2) {
              // No need to reorder.
              return;
            }

            pushOperation(constants["o" /* TREE_OPERATION_REORDER_CHILDREN */]);
            pushOperation(getFiberIDThrows(fiber));
            pushOperation(numChildren);

            for (var i = 0; i < nextChildren.length; i++) {
              pushOperation(nextChildren[i]);
            }
          }

          function findReorderedChildrenRecursively(fiber, nextChildren) {
            if (!shouldFilterFiber(fiber)) {
              nextChildren.push(getFiberIDThrows(fiber));
            } else {
              var child = fiber.child;
              var isTimedOutSuspense = fiber.tag === SuspenseComponent && fiber.memoizedState !== null;

              if (isTimedOutSuspense) {
                // Special case: if Suspense mounts in a timed-out state,
                // get the fallback child from the inner fragment,
                // and skip over the primary child.
                var primaryChildFragment = fiber.child;
                var fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null;
                var fallbackChild = fallbackChildFragment ? fallbackChildFragment.child : null;

                if (fallbackChild !== null) {
                  child = fallbackChild;
                }
              }

              while (child !== null) {
                findReorderedChildrenRecursively(child, nextChildren);
                child = child.sibling;
              }
            }
          } // Returns whether closest unfiltered fiber parent needs to reset its child list.

          function updateFiberRecursively(nextFiber, prevFiber, parentFiber, traceNearestHostComponentUpdate) {
            var id = getOrGenerateFiberID(nextFiber);

            if (constants["s" /* __DEBUG__ */]) {
              debug("updateFiberRecursively()", nextFiber, parentFiber);
            }

            if (traceUpdatesEnabled) {
              var elementType = getElementTypeForFiber(nextFiber);

              if (traceNearestHostComponentUpdate) {
                // If an ancestor updated, we should mark the nearest host nodes for highlighting.
                if (elementType === types["i" /* ElementTypeHostComponent */]) {
                  traceUpdatesForNodes.add(nextFiber.stateNode);
                  traceNearestHostComponentUpdate = false;
                }
              } else {
                if (
                  elementType === types["h" /* ElementTypeFunction */] ||
                  elementType === types["e" /* ElementTypeClass */] ||
                  elementType === types["f" /* ElementTypeContext */] ||
                  elementType === types["j" /* ElementTypeMemo */] ||
                  elementType === types["g" /* ElementTypeForwardRef */]
                ) {
                  // Otherwise if this is a traced ancestor, flag for the nearest host descendant(s).
                  traceNearestHostComponentUpdate = didFiberRender(prevFiber, nextFiber);
                }
              }
            }

            if (
              mostRecentlyInspectedElement !== null &&
              mostRecentlyInspectedElement.id === id &&
              didFiberRender(prevFiber, nextFiber)
            ) {
              // If this Fiber has updated, clear cached inspected data.
              // If it is inspected again, it may need to be re-run to obtain updated hooks values.
              hasElementUpdatedSinceLastInspected = true;
            }

            var shouldIncludeInTree = !shouldFilterFiber(nextFiber);
            var isSuspense = nextFiber.tag === SuspenseComponent;
            var shouldResetChildren = false; // The behavior of timed-out Suspense trees is unique.
            // Rather than unmount the timed out content (and possibly lose important state),
            // React re-parents this content within a hidden Fragment while the fallback is showing.
            // This behavior doesn't need to be observable in the DevTools though.
            // It might even result in a bad user experience for e.g. node selection in the Elements panel.
            // The easiest fix is to strip out the intermediate Fragment fibers,
            // so the Elements panel and Profiler don't need to special case them.
            // Suspense components only have a non-null memoizedState if they're timed-out.

            var prevDidTimeout = isSuspense && prevFiber.memoizedState !== null;
            var nextDidTimeOut = isSuspense && nextFiber.memoizedState !== null; // The logic below is inspired by the code paths in updateSuspenseComponent()
            // inside ReactFiberBeginWork in the React source code.

            if (prevDidTimeout && nextDidTimeOut) {
              // Fallback -> Fallback:
              // 1. Reconcile fallback set.
              var nextFiberChild = nextFiber.child;
              var nextFallbackChildSet = nextFiberChild ? nextFiberChild.sibling : null; // Note: We can't use nextFiber.child.sibling.alternate
              // because the set is special and alternate may not exist.

              var prevFiberChild = prevFiber.child;
              var prevFallbackChildSet = prevFiberChild ? prevFiberChild.sibling : null;

              if (
                nextFallbackChildSet != null &&
                prevFallbackChildSet != null &&
                updateFiberRecursively(
                  nextFallbackChildSet,
                  prevFallbackChildSet,
                  nextFiber,
                  traceNearestHostComponentUpdate
                )
              ) {
                shouldResetChildren = true;
              }
            } else if (prevDidTimeout && !nextDidTimeOut) {
              // Fallback -> Primary:
              // 1. Unmount fallback set
              // Note: don't emulate fallback unmount because React actually did it.
              // 2. Mount primary set
              var nextPrimaryChildSet = nextFiber.child;

              if (nextPrimaryChildSet !== null) {
                mountFiberRecursively(
                  nextPrimaryChildSet,
                  shouldIncludeInTree ? nextFiber : parentFiber,
                  true,
                  traceNearestHostComponentUpdate
                );
              }

              shouldResetChildren = true;
            } else if (!prevDidTimeout && nextDidTimeOut) {
              // Primary -> Fallback:
              // 1. Hide primary set
              // This is not a real unmount, so it won't get reported by React.
              // We need to manually walk the previous tree and record unmounts.
              unmountFiberChildrenRecursively(prevFiber); // 2. Mount fallback set

              var _nextFiberChild = nextFiber.child;

              var _nextFallbackChildSet = _nextFiberChild ? _nextFiberChild.sibling : null;

              if (_nextFallbackChildSet != null) {
                mountFiberRecursively(
                  _nextFallbackChildSet,
                  shouldIncludeInTree ? nextFiber : parentFiber,
                  true,
                  traceNearestHostComponentUpdate
                );
                shouldResetChildren = true;
              }
            } else {
              // Common case: Primary -> Primary.
              // This is the same code path as for non-Suspense fibers.
              if (nextFiber.child !== prevFiber.child) {
                // If the first child is different, we need to traverse them.
                // Each next child will be either a new child (mount) or an alternate (update).
                var nextChild = nextFiber.child;
                var prevChildAtSameIndex = prevFiber.child;

                while (nextChild) {
                  // We already know children will be referentially different because
                  // they are either new mounts or alternates of previous children.
                  // Schedule updates and mounts depending on whether alternates exist.
                  // We don't track deletions here because they are reported separately.
                  if (nextChild.alternate) {
                    var prevChild = nextChild.alternate;

                    if (
                      updateFiberRecursively(
                        nextChild,
                        prevChild,
                        shouldIncludeInTree ? nextFiber : parentFiber,
                        traceNearestHostComponentUpdate
                      )
                    ) {
                      // If a nested tree child order changed but it can't handle its own
                      // child order invalidation (e.g. because it's filtered out like host nodes),
                      // propagate the need to reset child order upwards to this Fiber.
                      shouldResetChildren = true;
                    } // However we also keep track if the order of the children matches
                    // the previous order. They are always different referentially, but
                    // if the instances line up conceptually we'll want to know that.

                    if (prevChild !== prevChildAtSameIndex) {
                      shouldResetChildren = true;
                    }
                  } else {
                    mountFiberRecursively(
                      nextChild,
                      shouldIncludeInTree ? nextFiber : parentFiber,
                      false,
                      traceNearestHostComponentUpdate
                    );
                    shouldResetChildren = true;
                  } // Try the next child.

                  nextChild = nextChild.sibling; // Advance the pointer in the previous list so that we can
                  // keep comparing if they line up.

                  if (!shouldResetChildren && prevChildAtSameIndex !== null) {
                    prevChildAtSameIndex = prevChildAtSameIndex.sibling;
                  }
                } // If we have no more children, but used to, they don't line up.

                if (prevChildAtSameIndex !== null) {
                  shouldResetChildren = true;
                }
              } else {
                if (traceUpdatesEnabled) {
                  // If we're tracing updates and we've bailed out before reaching a host node,
                  // we should fall back to recursively marking the nearest host descendants for highlight.
                  if (traceNearestHostComponentUpdate) {
                    var hostFibers = findAllCurrentHostFibers(getFiberIDThrows(nextFiber));
                    hostFibers.forEach(function (hostFiber) {
                      traceUpdatesForNodes.add(hostFiber.stateNode);
                    });
                  }
                }
              }
            }

            if (shouldIncludeInTree) {
              var isProfilingSupported = nextFiber.hasOwnProperty("treeBaseDuration");

              if (isProfilingSupported) {
                recordProfilingDurations(nextFiber);
              }
            }

            if (shouldResetChildren) {
              // We need to crawl the subtree for closest non-filtered Fibers
              // so that we can display them in a flat children set.
              if (shouldIncludeInTree) {
                // Normally, search for children from the rendered child.
                var nextChildSet = nextFiber.child;

                if (nextDidTimeOut) {
                  // Special case: timed-out Suspense renders the fallback set.
                  var _nextFiberChild2 = nextFiber.child;
                  nextChildSet = _nextFiberChild2 ? _nextFiberChild2.sibling : null;
                }

                if (nextChildSet != null) {
                  recordResetChildren(nextFiber, nextChildSet);
                } // We've handled the child order change for this Fiber.
                // Since it's included, there's no need to invalidate parent child order.

                return false;
              } else {
                // Let the closest unfiltered parent Fiber reset its child order instead.
                return true;
              }
            } else {
              return false;
            }
          }

          function cleanup() {
            // We don't patch any methods so there is no cleanup.
          }

          function rootSupportsProfiling(root) {
            if (root.memoizedInteractions != null) {
              // v16 builds include this field for the scheduler/tracing API.
              return true;
            } else if (root.current != null && root.current.hasOwnProperty("treeBaseDuration")) {
              // The scheduler/tracing API was removed in v17 though
              // so we need to check a non-root Fiber.
              return true;
            } else {
              return false;
            }
          }

          function flushInitialOperations() {
            var localPendingOperationsQueue = pendingOperationsQueue;
            pendingOperationsQueue = null;

            if (localPendingOperationsQueue !== null && localPendingOperationsQueue.length > 0) {
              // We may have already queued up some operations before the frontend connected
              // If so, let the frontend know about them.
              localPendingOperationsQueue.forEach(function (operations) {
                hook.emit("operations", operations);
              });
            } else {
              // Before the traversals, remember to start tracking
              // our path in case we have selection to restore.
              if (trackedPath !== null) {
                mightBeOnTrackedPath = true;
              } // If we have not been profiling, then we can just walk the tree and build up its current state as-is.

              hook.getFiberRoots(rendererID).forEach(function (root) {
                currentRootID = getOrGenerateFiberID(root.current);
                setRootPseudoKey(currentRootID, root.current); // Handle multi-renderer edge-case where only some v16 renderers support profiling.

                if (isProfiling && rootSupportsProfiling(root)) {
                  // If profiling is active, store commit time and duration.
                  // The frontend may request this information after profiling has stopped.
                  currentCommitProfilingMetadata = {
                    changeDescriptions: recordChangeDescriptions ? new Map() : null,
                    durations: [],
                    commitTime: renderer_getCurrentTime() - profilingStartTime,
                    maxActualDuration: 0,
                    priorityLevel: null,
                    updaters: getUpdatersList(root),
                    effectDuration: null,
                    passiveEffectDuration: null,
                  };
                }

                mountFiberRecursively(root.current, null, false, false);
                flushPendingEvents(root);
                currentRootID = -1;
              });
            }
          }

          function getUpdatersList(root) {
            return root.memoizedUpdaters != null
              ? Array.from(root.memoizedUpdaters)
                  .filter(function (fiber) {
                    return getFiberIDUnsafe(fiber) !== null;
                  })
                  .map(fiberToSerializedElement)
              : null;
          }

          function handleCommitFiberUnmount(fiber) {
            // If the untrackFiberSet already has the unmounted Fiber, this means we've already
            // recordedUnmount, so we don't need to do it again. If we don't do this, we might
            // end up double-deleting Fibers in some cases (like Legacy Suspense).
            if (!untrackFibersSet.has(fiber)) {
              // This is not recursive.
              // We can't traverse fibers after unmounting so instead
              // we rely on React telling us about each unmount.
              recordUnmount(fiber, false);
            }
          }

          function handlePostCommitFiberRoot(root) {
            if (isProfiling && rootSupportsProfiling(root)) {
              if (currentCommitProfilingMetadata !== null) {
                var _getEffectDurations = Object(backend_utils["h" /* getEffectDurations */])(root),
                  effectDuration = _getEffectDurations.effectDuration,
                  passiveEffectDuration = _getEffectDurations.passiveEffectDuration; // $FlowFixMe[incompatible-use] found when upgrading Flow

                currentCommitProfilingMetadata.effectDuration = effectDuration; // $FlowFixMe[incompatible-use] found when upgrading Flow

                currentCommitProfilingMetadata.passiveEffectDuration = passiveEffectDuration;
              }
            }
          }

          function handleCommitFiberRoot(root, priorityLevel) {
            var current = root.current;
            var alternate = current.alternate; // Flush any pending Fibers that we are untracking before processing the new commit.
            // If we don't do this, we might end up double-deleting Fibers in some cases (like Legacy Suspense).

            untrackFibers();
            currentRootID = getOrGenerateFiberID(current); // Before the traversals, remember to start tracking
            // our path in case we have selection to restore.

            if (trackedPath !== null) {
              mightBeOnTrackedPath = true;
            }

            if (traceUpdatesEnabled) {
              traceUpdatesForNodes.clear();
            } // Handle multi-renderer edge-case where only some v16 renderers support profiling.

            var isProfilingSupported = rootSupportsProfiling(root);

            if (isProfiling && isProfilingSupported) {
              // If profiling is active, store commit time and duration.
              // The frontend may request this information after profiling has stopped.
              currentCommitProfilingMetadata = {
                changeDescriptions: recordChangeDescriptions ? new Map() : null,
                durations: [],
                commitTime: renderer_getCurrentTime() - profilingStartTime,
                maxActualDuration: 0,
                priorityLevel: priorityLevel == null ? null : formatPriorityLevel(priorityLevel),
                updaters: getUpdatersList(root),
                // Initialize to null; if new enough React version is running,
                // these values will be read during separate handlePostCommitFiberRoot() call.
                effectDuration: null,
                passiveEffectDuration: null,
              };
            }

            if (alternate) {
              // TODO: relying on this seems a bit fishy.
              var wasMounted =
                alternate.memoizedState != null &&
                alternate.memoizedState.element != null && // A dehydrated root is not considered mounted
                alternate.memoizedState.isDehydrated !== true;
              var isMounted =
                current.memoizedState != null &&
                current.memoizedState.element != null && // A dehydrated root is not considered mounted
                current.memoizedState.isDehydrated !== true;

              if (!wasMounted && isMounted) {
                // Mount a new root.
                setRootPseudoKey(currentRootID, current);
                mountFiberRecursively(current, null, false, false);
              } else if (wasMounted && isMounted) {
                // Update an existing root.
                updateFiberRecursively(current, alternate, null, false);
              } else if (wasMounted && !isMounted) {
                // Unmount an existing root.
                removeRootPseudoKey(currentRootID);
                recordUnmount(current, false);
              }
            } else {
              // Mount a new root.
              setRootPseudoKey(currentRootID, current);
              mountFiberRecursively(current, null, false, false);
            }

            if (isProfiling && isProfilingSupported) {
              if (!shouldBailoutWithPendingOperations()) {
                var commitProfilingMetadata = rootToCommitProfilingMetadataMap.get(currentRootID);

                if (commitProfilingMetadata != null) {
                  commitProfilingMetadata.push(currentCommitProfilingMetadata);
                } else {
                  rootToCommitProfilingMetadataMap.set(currentRootID, [currentCommitProfilingMetadata]);
                }
              }
            } // We're done here.

            flushPendingEvents(root);

            if (traceUpdatesEnabled) {
              hook.emit("traceUpdates", traceUpdatesForNodes);
            }

            currentRootID = -1;
          }

          function findAllCurrentHostFibers(id) {
            var fibers = [];
            var fiber = findCurrentFiberUsingSlowPathById(id);

            if (!fiber) {
              return fibers;
            } // Next we'll drill down this component to find all HostComponent/Text.

            var node = fiber;

            while (true) {
              if (node.tag === HostComponent || node.tag === HostText) {
                fibers.push(node);
              } else if (node.child) {
                node.child.return = node;
                node = node.child;
                continue;
              }

              if (node === fiber) {
                return fibers;
              }

              while (!node.sibling) {
                if (!node.return || node.return === fiber) {
                  return fibers;
                }

                node = node.return;
              }

              node.sibling.return = node.return;
              node = node.sibling;
            } // Flow needs the return here, but ESLint complains about it.
            // eslint-disable-next-line no-unreachable

            return fibers;
          }

          function findNativeNodesForFiberID(id) {
            try {
              var _fiber3 = findCurrentFiberUsingSlowPathById(id);

              if (_fiber3 === null) {
                return null;
              } // Special case for a timed-out Suspense.

              var isTimedOutSuspense = _fiber3.tag === SuspenseComponent && _fiber3.memoizedState !== null;

              if (isTimedOutSuspense) {
                // A timed-out Suspense's findDOMNode is useless.
                // Try our best to find the fallback directly.
                var maybeFallbackFiber = _fiber3.child && _fiber3.child.sibling;

                if (maybeFallbackFiber != null) {
                  _fiber3 = maybeFallbackFiber;
                }
              }

              var hostFibers = findAllCurrentHostFibers(id);
              return hostFibers
                .map(function (hostFiber) {
                  return hostFiber.stateNode;
                })
                .filter(Boolean);
            } catch (err) {
              // The fiber might have unmounted by now.
              return null;
            }
          }

          function getDisplayNameForFiberID(id) {
            var fiber = idToArbitraryFiberMap.get(id);
            return fiber != null ? getDisplayNameForFiber(fiber) : null;
          }

          function getFiberForNative(hostInstance) {
            return renderer.findFiberByHostInstance(hostInstance);
          }

          function getFiberIDForNative(hostInstance) {
            var findNearestUnfilteredAncestor =
              arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var fiber = renderer.findFiberByHostInstance(hostInstance);

            if (fiber != null) {
              if (findNearestUnfilteredAncestor) {
                while (fiber !== null && shouldFilterFiber(fiber)) {
                  fiber = fiber.return;
                }
              }

              return getFiberIDThrows(fiber);
            }

            return null;
          } // This function is copied from React and should be kept in sync:
          // https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberTreeReflection.js

          function assertIsMounted(fiber) {
            if (getNearestMountedFiber(fiber) !== fiber) {
              throw new Error("Unable to find node on an unmounted component.");
            }
          } // This function is copied from React and should be kept in sync:
          // https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberTreeReflection.js

          function getNearestMountedFiber(fiber) {
            var node = fiber;
            var nearestMounted = fiber;

            if (!fiber.alternate) {
              // If there is no alternate, this might be a new tree that isn't inserted
              // yet. If it is, then it will have a pending insertion effect on it.
              var nextNode = node;

              do {
                node = nextNode;

                if ((node.flags & (Placement | Hydrating)) !== NoFlags) {
                  // This is an insertion or in-progress hydration. The nearest possible
                  // mounted fiber is the parent but we need to continue to figure out
                  // if that one is still mounted.
                  nearestMounted = node.return;
                } // $FlowFixMe[incompatible-type] we bail out when we get a null

                nextNode = node.return;
              } while (nextNode);
            } else {
              while (node.return) {
                node = node.return;
              }
            }

            if (node.tag === HostRoot) {
              // TODO: Check if this was a nested HostRoot when used with
              // renderContainerIntoSubtree.
              return nearestMounted;
            } // If we didn't hit the root, that means that we're in an disconnected tree
            // that has been unmounted.

            return null;
          } // This function is copied from React and should be kept in sync:
          // https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberTreeReflection.js
          // It would be nice if we updated React to inject this function directly (vs just indirectly via findDOMNode).
          // BEGIN copied code

          function findCurrentFiberUsingSlowPathById(id) {
            var fiber = idToArbitraryFiberMap.get(id);

            if (fiber == null) {
              console.warn('Could not find Fiber with id "'.concat(id, '"'));
              return null;
            }

            var alternate = fiber.alternate;

            if (!alternate) {
              // If there is no alternate, then we only need to check if it is mounted.
              var nearestMounted = getNearestMountedFiber(fiber);

              if (nearestMounted === null) {
                throw new Error("Unable to find node on an unmounted component.");
              }

              if (nearestMounted !== fiber) {
                return null;
              }

              return fiber;
            } // If we have two possible branches, we'll walk backwards up to the root
            // to see what path the root points to. On the way we may hit one of the
            // special cases and we'll deal with them.

            var a = fiber;
            var b = alternate;

            while (true) {
              var parentA = a.return;

              if (parentA === null) {
                // We're at the root.
                break;
              }

              var parentB = parentA.alternate;

              if (parentB === null) {
                // There is no alternate. This is an unusual case. Currently, it only
                // happens when a Suspense component is hidden. An extra fragment fiber
                // is inserted in between the Suspense fiber and its children. Skip
                // over this extra fragment fiber and proceed to the next parent.
                var nextParent = parentA.return;

                if (nextParent !== null) {
                  a = b = nextParent;
                  continue;
                } // If there's no parent, we're at the root.

                break;
              } // If both copies of the parent fiber point to the same child, we can
              // assume that the child is current. This happens when we bailout on low
              // priority: the bailed out fiber's child reuses the current child.

              if (parentA.child === parentB.child) {
                var child = parentA.child;

                while (child) {
                  if (child === a) {
                    // We've determined that A is the current branch.
                    assertIsMounted(parentA);
                    return fiber;
                  }

                  if (child === b) {
                    // We've determined that B is the current branch.
                    assertIsMounted(parentA);
                    return alternate;
                  }

                  child = child.sibling;
                } // We should never have an alternate for any mounting node. So the only
                // way this could possibly happen is if this was unmounted, if at all.

                throw new Error("Unable to find node on an unmounted component.");
              }

              if (a.return !== b.return) {
                // The return pointer of A and the return pointer of B point to different
                // fibers. We assume that return pointers never criss-cross, so A must
                // belong to the child set of A.return, and B must belong to the child
                // set of B.return.
                a = parentA;
                b = parentB;
              } else {
                // The return pointers point to the same fiber. We'll have to use the
                // default, slow path: scan the child sets of each parent alternate to see
                // which child belongs to which set.
                //
                // Search parent A's child set
                var didFindChild = false;
                var _child = parentA.child;

                while (_child) {
                  if (_child === a) {
                    didFindChild = true;
                    a = parentA;
                    b = parentB;
                    break;
                  }

                  if (_child === b) {
                    didFindChild = true;
                    b = parentA;
                    a = parentB;
                    break;
                  }

                  _child = _child.sibling;
                }

                if (!didFindChild) {
                  // Search parent B's child set
                  _child = parentB.child;

                  while (_child) {
                    if (_child === a) {
                      didFindChild = true;
                      a = parentB;
                      b = parentA;
                      break;
                    }

                    if (_child === b) {
                      didFindChild = true;
                      b = parentB;
                      a = parentA;
                      break;
                    }

                    _child = _child.sibling;
                  }

                  if (!didFindChild) {
                    throw new Error(
                      "Child was not found in either parent set. This indicates a bug " +
                        "in React related to the return pointer. Please file an issue."
                    );
                  }
                }
              }

              if (a.alternate !== b) {
                throw new Error(
                  "Return fibers should always be each others' alternates. " +
                    "This error is likely caused by a bug in React. Please file an issue."
                );
              }
            } // If the root is not a host container, we're in a disconnected tree. I.e.
            // unmounted.

            if (a.tag !== HostRoot) {
              throw new Error("Unable to find node on an unmounted component.");
            }

            if (a.stateNode.current === a) {
              // We've determined that A is the current branch.
              return fiber;
            } // Otherwise B has to be current branch.

            return alternate;
          } // END copied code

          function prepareViewAttributeSource(id, path) {
            if (isMostRecentlyInspectedElement(id)) {
              window.$attribute = Object(utils["j" /* getInObject */])(mostRecentlyInspectedElement, path);
            }
          }

          function prepareViewElementSource(id) {
            var fiber = idToArbitraryFiberMap.get(id);

            if (fiber == null) {
              console.warn('Could not find Fiber with id "'.concat(id, '"'));
              return;
            }

            var elementType = fiber.elementType,
              tag = fiber.tag,
              type = fiber.type;

            switch (tag) {
              case ClassComponent:
              case IncompleteClassComponent:
              case IndeterminateComponent:
              case FunctionComponent:
                global.$type = type;
                break;

              case ForwardRef:
                global.$type = type.render;
                break;

              case MemoComponent:
              case SimpleMemoComponent:
                global.$type = elementType != null && elementType.type != null ? elementType.type : type;
                break;

              default:
                global.$type = null;
                break;
            }
          }

          function fiberToSerializedElement(fiber) {
            return {
              displayName: getDisplayNameForFiber(fiber) || "Anonymous",
              id: getFiberIDThrows(fiber),
              key: fiber.key,
              type: getElementTypeForFiber(fiber),
            };
          }

          function getOwnersList(id) {
            var fiber = findCurrentFiberUsingSlowPathById(id);

            if (fiber == null) {
              return null;
            }

            var _debugOwner = fiber._debugOwner;
            var owners = [fiberToSerializedElement(fiber)];

            if (_debugOwner) {
              var owner = _debugOwner;

              while (owner !== null) {
                owners.unshift(fiberToSerializedElement(owner));
                owner = owner._debugOwner || null;
              }
            }

            return owners;
          } // Fast path props lookup for React Native style editor.
          // Could use inspectElementRaw() but that would require shallow rendering hooks components,
          // and could also mess with memoization.

          function getInstanceAndStyle(id) {
            var instance = null;
            var style = null;
            var fiber = findCurrentFiberUsingSlowPathById(id);

            if (fiber !== null) {
              instance = fiber.stateNode;

              if (fiber.memoizedProps !== null) {
                style = fiber.memoizedProps.style;
              }
            }

            return {
              instance: instance,
              style: style,
            };
          }

          function isErrorBoundary(fiber) {
            var tag = fiber.tag,
              type = fiber.type;

            switch (tag) {
              case ClassComponent:
              case IncompleteClassComponent:
                var instance = fiber.stateNode;
                return (
                  typeof type.getDerivedStateFromError === "function" ||
                  (instance !== null && typeof instance.componentDidCatch === "function")
                );

              default:
                return false;
            }
          }

          function getNearestErrorBoundaryID(fiber) {
            var parent = fiber.return;

            while (parent !== null) {
              if (isErrorBoundary(parent)) {
                return getFiberIDUnsafe(parent);
              }

              parent = parent.return;
            }

            return null;
          }

          function inspectElementRaw(id) {
            var fiber = findCurrentFiberUsingSlowPathById(id);

            if (fiber == null) {
              return null;
            }

            var _debugOwner = fiber._debugOwner,
              _debugSource = fiber._debugSource,
              stateNode = fiber.stateNode,
              key = fiber.key,
              memoizedProps = fiber.memoizedProps,
              memoizedState = fiber.memoizedState,
              dependencies = fiber.dependencies,
              tag = fiber.tag,
              type = fiber.type;
            var elementType = getElementTypeForFiber(fiber);
            var usesHooks =
              (tag === FunctionComponent || tag === SimpleMemoComponent || tag === ForwardRef) &&
              (!!memoizedState || !!dependencies); // TODO Show custom UI for Cache like we do for Suspense
            // For now, just hide state data entirely since it's not meant to be inspected.

            var showState = !usesHooks && tag !== CacheComponent;
            var typeSymbol = getTypeSymbol(type);
            var canViewSource = false;
            var context = null;

            if (
              tag === ClassComponent ||
              tag === FunctionComponent ||
              tag === IncompleteClassComponent ||
              tag === IndeterminateComponent ||
              tag === MemoComponent ||
              tag === ForwardRef ||
              tag === SimpleMemoComponent
            ) {
              canViewSource = true;

              if (stateNode && stateNode.context != null) {
                // Don't show an empty context object for class components that don't use the context API.
                var shouldHideContext =
                  elementType === types["e" /* ElementTypeClass */] && !(type.contextTypes || type.contextType);

                if (!shouldHideContext) {
                  context = stateNode.context;
                }
              }
            } else if (
              typeSymbol === ReactSymbols["c" /* CONTEXT_NUMBER */] ||
              typeSymbol === ReactSymbols["d" /* CONTEXT_SYMBOL_STRING */]
            ) {
              // 16.3-16.5 read from "type" because the Consumer is the actual context object.
              // 16.6+ should read from "type._context" because Consumer can be different (in DEV).
              // NOTE Keep in sync with getDisplayNameForFiber()
              var consumerResolvedContext = type._context || type; // Global context value.

              context = consumerResolvedContext._currentValue || null; // Look for overridden value.

              var _current = fiber.return;

              while (_current !== null) {
                var currentType = _current.type;
                var currentTypeSymbol = getTypeSymbol(currentType);

                if (
                  currentTypeSymbol === ReactSymbols["n" /* PROVIDER_NUMBER */] ||
                  currentTypeSymbol === ReactSymbols["o" /* PROVIDER_SYMBOL_STRING */]
                ) {
                  // 16.3.0 exposed the context object as "context"
                  // PR #12501 changed it to "_context" for 16.3.1+
                  // NOTE Keep in sync with getDisplayNameForFiber()
                  var providerResolvedContext = currentType._context || currentType.context;

                  if (providerResolvedContext === consumerResolvedContext) {
                    context = _current.memoizedProps.value;
                    break;
                  }
                }

                _current = _current.return;
              }
            }

            var hasLegacyContext = false;

            if (context !== null) {
              hasLegacyContext = !!type.contextTypes; // To simplify hydration and display logic for context, wrap in a value object.
              // Otherwise simple values (e.g. strings, booleans) become harder to handle.

              context = {
                value: context,
              };
            }

            var owners = null;

            if (_debugOwner) {
              owners = [];
              var owner = _debugOwner;

              while (owner !== null) {
                owners.push(fiberToSerializedElement(owner));
                owner = owner._debugOwner || null;
              }
            }

            var isTimedOutSuspense = tag === SuspenseComponent && memoizedState !== null;
            var hooks = null;

            if (usesHooks) {
              var originalConsoleMethods = {}; // Temporarily disable all console logging before re-running the hook.

              for (var method in console) {
                try {
                  originalConsoleMethods[method] = console[method];

                  console[method] = function () {};
                } catch (error) {}
              }

              try {
                hooks = Object(react_debug_tools["inspectHooksOfFiber"])(
                  fiber,
                  renderer.currentDispatcherRef,
                  true // Include source location info for hooks
                );
              } finally {
                // Restore original console functionality.
                for (var _method in originalConsoleMethods) {
                  try {
                    console[_method] = originalConsoleMethods[_method];
                  } catch (error) {}
                }
              }
            }

            var rootType = null;
            var current = fiber;

            while (current.return !== null) {
              current = current.return;
            }

            var fiberRoot = current.stateNode;

            if (fiberRoot != null && fiberRoot._debugRootType !== null) {
              rootType = fiberRoot._debugRootType;
            }

            var errors = fiberIDToErrorsMap.get(id) || new Map();
            var warnings = fiberIDToWarningsMap.get(id) || new Map();
            var isErrored = (fiber.flags & DidCapture) !== NoFlags || forceErrorForFiberIDs.get(id) === true;
            var targetErrorBoundaryID;

            if (isErrorBoundary(fiber)) {
              // if the current inspected element is an error boundary,
              // either that we want to use it to toggle off error state
              // or that we allow to force error state on it if it's within another
              // error boundary
              targetErrorBoundaryID = isErrored ? id : getNearestErrorBoundaryID(fiber);
            } else {
              targetErrorBoundaryID = getNearestErrorBoundaryID(fiber);
            }

            var plugins = {
              stylex: null,
            };

            if (DevToolsFeatureFlags_core_oss["c" /* enableStyleXFeatures */]) {
              if (memoizedProps.hasOwnProperty("xstyle")) {
                plugins.stylex = getStyleXData(memoizedProps.xstyle);
              }
            }

            return {
              id: id,
              // Does the current renderer support editable hooks and function props?
              canEditHooks: typeof overrideHookState === "function",
              canEditFunctionProps: typeof overrideProps === "function",
              // Does the current renderer support advanced editing interface?
              canEditHooksAndDeletePaths: typeof overrideHookStateDeletePath === "function",
              canEditHooksAndRenamePaths: typeof overrideHookStateRenamePath === "function",
              canEditFunctionPropsDeletePaths: typeof overridePropsDeletePath === "function",
              canEditFunctionPropsRenamePaths: typeof overridePropsRenamePath === "function",
              canToggleError: supportsTogglingError && targetErrorBoundaryID != null,
              // Is this error boundary in error state.
              isErrored: isErrored,
              targetErrorBoundaryID: targetErrorBoundaryID,
              canToggleSuspense:
                supportsTogglingSuspense && // If it's showing the real content, we can always flip fallback.
                (!isTimedOutSuspense || // If it's showing fallback because we previously forced it to,
                  // allow toggling it back to remove the fallback override.
                  forceFallbackForSuspenseIDs.has(id)),
              // Can view component source location.
              canViewSource: canViewSource,
              // Does the component have legacy context attached to it.
              hasLegacyContext: hasLegacyContext,
              key: key != null ? key : null,
              displayName: getDisplayNameForFiber(fiber),
              type: elementType,
              // Inspectable properties.
              // TODO Review sanitization approach for the below inspectable values.
              context: context,
              hooks: hooks,
              props: memoizedProps,
              state: showState ? memoizedState : null,
              errors: Array.from(errors.entries()),
              warnings: Array.from(warnings.entries()),
              // List of owners
              owners: owners,
              // Location of component in source code.
              source: _debugSource || null,
              rootType: rootType,
              rendererPackageName: renderer.rendererPackageName,
              rendererVersion: renderer.version,
              plugins: plugins,
            };
          }

          var mostRecentlyInspectedElement = null;
          var hasElementUpdatedSinceLastInspected = false;
          var currentlyInspectedPaths = {};

          function isMostRecentlyInspectedElement(id) {
            return mostRecentlyInspectedElement !== null && mostRecentlyInspectedElement.id === id;
          }

          function isMostRecentlyInspectedElementCurrent(id) {
            return isMostRecentlyInspectedElement(id) && !hasElementUpdatedSinceLastInspected;
          } // Track the intersection of currently inspected paths,
          // so that we can send their data along if the element is re-rendered.

          function mergeInspectedPaths(path) {
            var current = currentlyInspectedPaths;
            path.forEach(function (key) {
              if (!current[key]) {
                current[key] = {};
              }

              current = current[key];
            });
          }

          function createIsPathAllowed(key, secondaryCategory) {
            // This function helps prevent previously-inspected paths from being dehydrated in updates.
            // This is important to avoid a bad user experience where expanded toggles collapse on update.
            return function isPathAllowed(path) {
              switch (secondaryCategory) {
                case "hooks":
                  if (path.length === 1) {
                    // Never dehydrate the "hooks" object at the top levels.
                    return true;
                  }

                  if (path[path.length - 2] === "hookSource" && path[path.length - 1] === "fileName") {
                    // It's important to preserve the full file name (URL) for hook sources
                    // in case the user has enabled the named hooks feature.
                    // Otherwise the frontend may end up with a partial URL which it can't load.
                    return true;
                  }

                  if (path[path.length - 1] === "subHooks" || path[path.length - 2] === "subHooks") {
                    // Dehydrating the 'subHooks' property makes the HooksTree UI a lot more complicated,
                    // so it's easiest for now if we just don't break on this boundary.
                    // We can always dehydrate a level deeper (in the value object).
                    return true;
                  }

                  break;

                default:
                  break;
              }

              var current = key === null ? currentlyInspectedPaths : currentlyInspectedPaths[key];

              if (!current) {
                return false;
              }

              for (var i = 0; i < path.length; i++) {
                current = current[path[i]];

                if (!current) {
                  return false;
                }
              }

              return true;
            };
          }

          function updateSelectedElement(inspectedElement) {
            var hooks = inspectedElement.hooks,
              id = inspectedElement.id,
              props = inspectedElement.props;
            var fiber = idToArbitraryFiberMap.get(id);

            if (fiber == null) {
              console.warn('Could not find Fiber with id "'.concat(id, '"'));
              return;
            }

            var elementType = fiber.elementType,
              stateNode = fiber.stateNode,
              tag = fiber.tag,
              type = fiber.type;

            switch (tag) {
              case ClassComponent:
              case IncompleteClassComponent:
              case IndeterminateComponent:
                global.$r = stateNode;
                break;

              case FunctionComponent:
                global.$r = {
                  hooks: hooks,
                  props: props,
                  type: type,
                };
                break;

              case ForwardRef:
                global.$r = {
                  hooks: hooks,
                  props: props,
                  type: type.render,
                };
                break;

              case MemoComponent:
              case SimpleMemoComponent:
                global.$r = {
                  hooks: hooks,
                  props: props,
                  type: elementType != null && elementType.type != null ? elementType.type : type,
                };
                break;

              default:
                global.$r = null;
                break;
            }
          }

          function storeAsGlobal(id, path, count) {
            if (isMostRecentlyInspectedElement(id)) {
              var value = Object(utils["j" /* getInObject */])(mostRecentlyInspectedElement, path);
              var key = "$reactTemp".concat(count);
              window[key] = value;
              console.log(key);
              console.log(value);
            }
          }

          function copyElementPath(id, path) {
            if (isMostRecentlyInspectedElement(id)) {
              Object(backend_utils["b" /* copyToClipboard */])(
                Object(utils["j" /* getInObject */])(mostRecentlyInspectedElement, path)
              );
            }
          }

          function inspectElement(requestID, id, path, forceFullData) {
            if (path !== null) {
              mergeInspectedPaths(path);
            }

            if (isMostRecentlyInspectedElement(id) && !forceFullData) {
              if (!hasElementUpdatedSinceLastInspected) {
                if (path !== null) {
                  var secondaryCategory = null;

                  if (path[0] === "hooks") {
                    secondaryCategory = "hooks";
                  } // If this element has not been updated since it was last inspected,
                  // we can just return the subset of data in the newly-inspected path.

                  return {
                    id: id,
                    responseID: requestID,
                    type: "hydrated-path",
                    path: path,
                    value: Object(backend_utils["a" /* cleanForBridge */])(
                      Object(utils["j" /* getInObject */])(mostRecentlyInspectedElement, path),
                      createIsPathAllowed(null, secondaryCategory),
                      path
                    ),
                  };
                } else {
                  // If this element has not been updated since it was last inspected, we don't need to return it.
                  // Instead we can just return the ID to indicate that it has not changed.
                  return {
                    id: id,
                    responseID: requestID,
                    type: "no-change",
                  };
                }
              }
            } else {
              currentlyInspectedPaths = {};
            }

            hasElementUpdatedSinceLastInspected = false;

            try {
              mostRecentlyInspectedElement = inspectElementRaw(id);
            } catch (error) {
              // the error name is synced with ReactDebugHooks
              if (error.name === "ReactDebugToolsRenderError") {
                var message = "Error rendering inspected element.";
                var stack; // Log error & cause for user to debug

                console.error(message + "\n\n", error);

                if (error.cause != null) {
                  var _fiber4 = findCurrentFiberUsingSlowPathById(id);

                  var componentName = _fiber4 != null ? getDisplayNameForFiber(_fiber4) : null;
                  console.error(
                    "React DevTools encountered an error while trying to inspect hooks. " +
                      "This is most likely caused by an error in current inspected component" +
                      (componentName != null ? ': "'.concat(componentName, '".') : ".") +
                      "\nThe error thrown in the component is: \n\n",
                    error.cause
                  );

                  if (error.cause instanceof Error) {
                    message = error.cause.message || message;
                    stack = error.cause.stack;
                  }
                }

                return {
                  type: "error",
                  errorType: "user",
                  id: id,
                  responseID: requestID,
                  message: message,
                  stack: stack,
                };
              } // the error name is synced with ReactDebugHooks

              if (error.name === "ReactDebugToolsUnsupportedHookError") {
                return {
                  type: "error",
                  errorType: "unknown-hook",
                  id: id,
                  responseID: requestID,
                  message: "Unsupported hook in the react-debug-tools package: " + error.message,
                };
              } // Log Uncaught Error

              console.error("Error inspecting element.\n\n", error);
              return {
                type: "error",
                errorType: "uncaught",
                id: id,
                responseID: requestID,
                message: error.message,
                stack: error.stack,
              };
            }

            if (mostRecentlyInspectedElement === null) {
              return {
                id: id,
                responseID: requestID,
                type: "not-found",
              };
            } // Any time an inspected element has an update,
            // we should update the selected $r value as wel.
            // Do this before dehydration (cleanForBridge).

            updateSelectedElement(mostRecentlyInspectedElement); // Clone before cleaning so that we preserve the full data.
            // This will enable us to send patches without re-inspecting if hydrated paths are requested.
            // (Reducing how often we shallow-render is a better DX for function components that use hooks.)

            var cleanedInspectedElement = _objectSpread({}, mostRecentlyInspectedElement); // $FlowFixMe[prop-missing] found when upgrading Flow

            cleanedInspectedElement.context = Object(backend_utils["a" /* cleanForBridge */])(
              cleanedInspectedElement.context,
              createIsPathAllowed("context", null)
            ); // $FlowFixMe[prop-missing] found when upgrading Flow

            cleanedInspectedElement.hooks = Object(backend_utils["a" /* cleanForBridge */])(
              cleanedInspectedElement.hooks,
              createIsPathAllowed("hooks", "hooks")
            ); // $FlowFixMe[prop-missing] found when upgrading Flow

            cleanedInspectedElement.props = Object(backend_utils["a" /* cleanForBridge */])(
              cleanedInspectedElement.props,
              createIsPathAllowed("props", null)
            ); // $FlowFixMe[prop-missing] found when upgrading Flow

            cleanedInspectedElement.state = Object(backend_utils["a" /* cleanForBridge */])(
              cleanedInspectedElement.state,
              createIsPathAllowed("state", null)
            );
            return {
              id: id,
              responseID: requestID,
              type: "full-data",
              // $FlowFixMe[prop-missing] found when upgrading Flow
              value: cleanedInspectedElement,
            };
          }

          function logElementToConsole(id) {
            var result = isMostRecentlyInspectedElementCurrent(id)
              ? mostRecentlyInspectedElement
              : inspectElementRaw(id);

            if (result === null) {
              console.warn('Could not find Fiber with id "'.concat(id, '"'));
              return;
            }

            var supportsGroup = typeof console.groupCollapsed === "function";

            if (supportsGroup) {
              console.groupCollapsed(
                "[Click to expand] %c<".concat(result.displayName || "Component", " />"), // --dom-tag-name-color is the CSS variable Chrome styles HTML elements with in the console.
                "color: var(--dom-tag-name-color); font-weight: normal;"
              );
            }

            if (result.props !== null) {
              console.log("Props:", result.props);
            }

            if (result.state !== null) {
              console.log("State:", result.state);
            }

            if (result.hooks !== null) {
              console.log("Hooks:", result.hooks);
            }

            var nativeNodes = findNativeNodesForFiberID(id);

            if (nativeNodes !== null) {
              console.log("Nodes:", nativeNodes);
            }

            if (result.source !== null) {
              console.log("Location:", result.source);
            }

            if (window.chrome || /firefox/i.test(navigator.userAgent)) {
              console.log("Right-click any value to save it as a global variable for further inspection.");
            }

            if (supportsGroup) {
              console.groupEnd();
            }
          }

          function deletePath(type, id, hookID, path) {
            var fiber = findCurrentFiberUsingSlowPathById(id);

            if (fiber !== null) {
              var instance = fiber.stateNode;

              switch (type) {
                case "context":
                  // To simplify hydration and display of primitive context values (e.g. number, string)
                  // the inspectElement() method wraps context in a {value: ...} object.
                  // We need to remove the first part of the path (the "value") before continuing.
                  path = path.slice(1);

                  switch (fiber.tag) {
                    case ClassComponent:
                      if (path.length === 0) {
                        // Simple context value (noop)
                      } else {
                        Object(utils["c" /* deletePathInObject */])(instance.context, path);
                      }

                      instance.forceUpdate();
                      break;

                    case FunctionComponent:
                      // Function components using legacy context are not editable
                      // because there's no instance on which to create a cloned, mutated context.
                      break;
                  }

                  break;

                case "hooks":
                  if (typeof overrideHookStateDeletePath === "function") {
                    overrideHookStateDeletePath(fiber, hookID, path);
                  }

                  break;

                case "props":
                  if (instance === null) {
                    if (typeof overridePropsDeletePath === "function") {
                      overridePropsDeletePath(fiber, path);
                    }
                  } else {
                    fiber.pendingProps = Object(backend_utils["c" /* copyWithDelete */])(instance.props, path);
                    instance.forceUpdate();
                  }

                  break;

                case "state":
                  Object(utils["c" /* deletePathInObject */])(instance.state, path);
                  instance.forceUpdate();
                  break;
              }
            }
          }

          function renamePath(type, id, hookID, oldPath, newPath) {
            var fiber = findCurrentFiberUsingSlowPathById(id);

            if (fiber !== null) {
              var instance = fiber.stateNode;

              switch (type) {
                case "context":
                  // To simplify hydration and display of primitive context values (e.g. number, string)
                  // the inspectElement() method wraps context in a {value: ...} object.
                  // We need to remove the first part of the path (the "value") before continuing.
                  oldPath = oldPath.slice(1);
                  newPath = newPath.slice(1);

                  switch (fiber.tag) {
                    case ClassComponent:
                      if (oldPath.length === 0) {
                        // Simple context value (noop)
                      } else {
                        Object(utils["n" /* renamePathInObject */])(instance.context, oldPath, newPath);
                      }

                      instance.forceUpdate();
                      break;

                    case FunctionComponent:
                      // Function components using legacy context are not editable
                      // because there's no instance on which to create a cloned, mutated context.
                      break;
                  }

                  break;

                case "hooks":
                  if (typeof overrideHookStateRenamePath === "function") {
                    overrideHookStateRenamePath(fiber, hookID, oldPath, newPath);
                  }

                  break;

                case "props":
                  if (instance === null) {
                    if (typeof overridePropsRenamePath === "function") {
                      overridePropsRenamePath(fiber, oldPath, newPath);
                    }
                  } else {
                    fiber.pendingProps = Object(backend_utils["d" /* copyWithRename */])(
                      instance.props,
                      oldPath,
                      newPath
                    );
                    instance.forceUpdate();
                  }

                  break;

                case "state":
                  Object(utils["n" /* renamePathInObject */])(instance.state, oldPath, newPath);
                  instance.forceUpdate();
                  break;
              }
            }
          }

          function overrideValueAtPath(type, id, hookID, path, value) {
            var fiber = findCurrentFiberUsingSlowPathById(id);

            if (fiber !== null) {
              var instance = fiber.stateNode;

              switch (type) {
                case "context":
                  // To simplify hydration and display of primitive context values (e.g. number, string)
                  // the inspectElement() method wraps context in a {value: ...} object.
                  // We need to remove the first part of the path (the "value") before continuing.
                  path = path.slice(1);

                  switch (fiber.tag) {
                    case ClassComponent:
                      if (path.length === 0) {
                        // Simple context value
                        instance.context = value;
                      } else {
                        Object(utils["o" /* setInObject */])(instance.context, path, value);
                      }

                      instance.forceUpdate();
                      break;

                    case FunctionComponent:
                      // Function components using legacy context are not editable
                      // because there's no instance on which to create a cloned, mutated context.
                      break;
                  }

                  break;

                case "hooks":
                  if (typeof overrideHookState === "function") {
                    overrideHookState(fiber, hookID, path, value);
                  }

                  break;

                case "props":
                  switch (fiber.tag) {
                    case ClassComponent:
                      fiber.pendingProps = Object(backend_utils["e" /* copyWithSet */])(instance.props, path, value);
                      instance.forceUpdate();
                      break;

                    default:
                      if (typeof overrideProps === "function") {
                        overrideProps(fiber, path, value);
                      }

                      break;
                  }

                  break;

                case "state":
                  switch (fiber.tag) {
                    case ClassComponent:
                      Object(utils["o" /* setInObject */])(instance.state, path, value);
                      instance.forceUpdate();
                      break;
                  }

                  break;
              }
            }
          }

          var currentCommitProfilingMetadata = null;
          var displayNamesByRootID = null;
          var idToContextsMap = null;
          var initialTreeBaseDurationsMap = null;
          var initialIDToRootMap = null;
          var isProfiling = false;
          var profilingStartTime = 0;
          var recordChangeDescriptions = false;
          var rootToCommitProfilingMetadataMap = null;

          function getProfilingData() {
            var dataForRoots = [];

            if (rootToCommitProfilingMetadataMap === null) {
              throw Error("getProfilingData() called before any profiling data was recorded");
            }

            rootToCommitProfilingMetadataMap.forEach(function (commitProfilingMetadata, rootID) {
              var commitData = [];
              var initialTreeBaseDurations = [];
              var displayName = (displayNamesByRootID !== null && displayNamesByRootID.get(rootID)) || "Unknown";

              if (initialTreeBaseDurationsMap != null) {
                initialTreeBaseDurationsMap.forEach(function (treeBaseDuration, id) {
                  if (initialIDToRootMap != null && initialIDToRootMap.get(id) === rootID) {
                    // We don't need to convert milliseconds to microseconds in this case,
                    // because the profiling summary is JSON serialized.
                    initialTreeBaseDurations.push([id, treeBaseDuration]);
                  }
                });
              }

              commitProfilingMetadata.forEach(function (commitProfilingData, commitIndex) {
                var changeDescriptions = commitProfilingData.changeDescriptions,
                  durations = commitProfilingData.durations,
                  effectDuration = commitProfilingData.effectDuration,
                  maxActualDuration = commitProfilingData.maxActualDuration,
                  passiveEffectDuration = commitProfilingData.passiveEffectDuration,
                  priorityLevel = commitProfilingData.priorityLevel,
                  commitTime = commitProfilingData.commitTime,
                  updaters = commitProfilingData.updaters;
                var fiberActualDurations = [];
                var fiberSelfDurations = [];

                for (var i = 0; i < durations.length; i += 3) {
                  var fiberID = durations[i];
                  fiberActualDurations.push([fiberID, durations[i + 1]]);
                  fiberSelfDurations.push([fiberID, durations[i + 2]]);
                }

                commitData.push({
                  changeDescriptions: changeDescriptions !== null ? Array.from(changeDescriptions.entries()) : null,
                  duration: maxActualDuration,
                  effectDuration: effectDuration,
                  fiberActualDurations: fiberActualDurations,
                  fiberSelfDurations: fiberSelfDurations,
                  passiveEffectDuration: passiveEffectDuration,
                  priorityLevel: priorityLevel,
                  timestamp: commitTime,
                  updaters: updaters,
                });
              });
              dataForRoots.push({
                commitData: commitData,
                displayName: displayName,
                initialTreeBaseDurations: initialTreeBaseDurations,
                rootID: rootID,
              });
            });
            var timelineData = null;

            if (typeof getTimelineData === "function") {
              var currentTimelineData = getTimelineData();

              if (currentTimelineData) {
                var batchUIDToMeasuresMap = currentTimelineData.batchUIDToMeasuresMap,
                  internalModuleSourceToRanges = currentTimelineData.internalModuleSourceToRanges,
                  laneToLabelMap = currentTimelineData.laneToLabelMap,
                  laneToReactMeasureMap = currentTimelineData.laneToReactMeasureMap,
                  rest = _objectWithoutProperties(currentTimelineData, [
                    "batchUIDToMeasuresMap",
                    "internalModuleSourceToRanges",
                    "laneToLabelMap",
                    "laneToReactMeasureMap",
                  ]);

                timelineData = _objectSpread(
                  _objectSpread({}, rest),
                  {},
                  {
                    // Most of the data is safe to parse as-is,
                    // but we need to convert the nested Arrays back to Maps.
                    // Most of the data is safe to serialize as-is,
                    // but we need to convert the Maps to nested Arrays.
                    batchUIDToMeasuresKeyValueArray: Array.from(batchUIDToMeasuresMap.entries()),
                    internalModuleSourceToRanges: Array.from(internalModuleSourceToRanges.entries()),
                    laneToLabelKeyValueArray: Array.from(laneToLabelMap.entries()),
                    laneToReactMeasureKeyValueArray: Array.from(laneToReactMeasureMap.entries()),
                  }
                );
              }
            }

            return {
              dataForRoots: dataForRoots,
              rendererID: rendererID,
              timelineData: timelineData,
            };
          }

          function startProfiling(shouldRecordChangeDescriptions) {
            if (isProfiling) {
              return;
            }

            recordChangeDescriptions = shouldRecordChangeDescriptions; // Capture initial values as of the time profiling starts.
            // It's important we snapshot both the durations and the id-to-root map,
            // since either of these may change during the profiling session
            // (e.g. when a fiber is re-rendered or when a fiber gets removed).

            displayNamesByRootID = new Map();
            initialTreeBaseDurationsMap = new Map(idToTreeBaseDurationMap);
            initialIDToRootMap = new Map(idToRootMap);
            idToContextsMap = new Map();
            hook.getFiberRoots(rendererID).forEach(function (root) {
              var rootID = getFiberIDThrows(root.current);
              displayNamesByRootID.set(rootID, getDisplayNameForRoot(root.current));

              if (shouldRecordChangeDescriptions) {
                // Record all contexts at the time profiling is started.
                // Fibers only store the current context value,
                // so we need to track them separately in order to determine changed keys.
                crawlToInitializeContextsMap(root.current);
              }
            });
            isProfiling = true;
            profilingStartTime = renderer_getCurrentTime();
            rootToCommitProfilingMetadataMap = new Map();

            if (toggleProfilingStatus !== null) {
              toggleProfilingStatus(true);
            }
          }

          function stopProfiling() {
            isProfiling = false;
            recordChangeDescriptions = false;

            if (toggleProfilingStatus !== null) {
              toggleProfilingStatus(false);
            }
          } // Automatically start profiling so that we don't miss timing info from initial "mount".

          if (
            Object(storage["c" /* sessionStorageGetItem */])(
              constants["k" /* SESSION_STORAGE_RELOAD_AND_PROFILE_KEY */]
            ) === "true"
          ) {
            startProfiling(
              Object(storage["c" /* sessionStorageGetItem */])(
                constants["j" /* SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY */]
              ) === "true"
            );
          } // React will switch between these implementations depending on whether
          // we have any manually suspended/errored-out Fibers or not.

          function shouldErrorFiberAlwaysNull() {
            return null;
          } // Map of id and its force error status: true (error), false (toggled off),
          // null (do nothing)

          var forceErrorForFiberIDs = new Map();

          function shouldErrorFiberAccordingToMap(fiber) {
            if (typeof setErrorHandler !== "function") {
              throw new Error("Expected overrideError() to not get called for earlier React versions.");
            }

            var id = getFiberIDUnsafe(fiber);

            if (id === null) {
              return null;
            }

            var status = null;

            if (forceErrorForFiberIDs.has(id)) {
              status = forceErrorForFiberIDs.get(id);

              if (status === false) {
                // TRICKY overrideError adds entries to this Map,
                // so ideally it would be the method that clears them too,
                // but that would break the functionality of the feature,
                // since DevTools needs to tell React to act differently than it normally would
                // (don't just re-render the failed boundary, but reset its errored state too).
                // So we can only clear it after telling React to reset the state.
                // Technically this is premature and we should schedule it for later,
                // since the render could always fail without committing the updated error boundary,
                // but since this is a DEV-only feature, the simplicity is worth the trade off.
                forceErrorForFiberIDs.delete(id);

                if (forceErrorForFiberIDs.size === 0) {
                  // Last override is gone. Switch React back to fast path.
                  setErrorHandler(shouldErrorFiberAlwaysNull);
                }
              }
            }

            return status;
          }

          function overrideError(id, forceError) {
            if (typeof setErrorHandler !== "function" || typeof scheduleUpdate !== "function") {
              throw new Error("Expected overrideError() to not get called for earlier React versions.");
            }

            forceErrorForFiberIDs.set(id, forceError);

            if (forceErrorForFiberIDs.size === 1) {
              // First override is added. Switch React to slower path.
              setErrorHandler(shouldErrorFiberAccordingToMap);
            }

            var fiber = idToArbitraryFiberMap.get(id);

            if (fiber != null) {
              scheduleUpdate(fiber);
            }
          }

          function shouldSuspendFiberAlwaysFalse() {
            return false;
          }

          var forceFallbackForSuspenseIDs = new Set();

          function shouldSuspendFiberAccordingToSet(fiber) {
            var maybeID = getFiberIDUnsafe(fiber);
            return maybeID !== null && forceFallbackForSuspenseIDs.has(maybeID);
          }

          function overrideSuspense(id, forceFallback) {
            if (typeof setSuspenseHandler !== "function" || typeof scheduleUpdate !== "function") {
              throw new Error("Expected overrideSuspense() to not get called for earlier React versions.");
            }

            if (forceFallback) {
              forceFallbackForSuspenseIDs.add(id);

              if (forceFallbackForSuspenseIDs.size === 1) {
                // First override is added. Switch React to slower path.
                setSuspenseHandler(shouldSuspendFiberAccordingToSet);
              }
            } else {
              forceFallbackForSuspenseIDs.delete(id);

              if (forceFallbackForSuspenseIDs.size === 0) {
                // Last override is gone. Switch React back to fast path.
                setSuspenseHandler(shouldSuspendFiberAlwaysFalse);
              }
            }

            var fiber = idToArbitraryFiberMap.get(id);

            if (fiber != null) {
              scheduleUpdate(fiber);
            }
          } // Remember if we're trying to restore the selection after reload.
          // In that case, we'll do some extra checks for matching mounts.

          var trackedPath = null;
          var trackedPathMatchFiber = null;
          var trackedPathMatchDepth = -1;
          var mightBeOnTrackedPath = false;

          function setTrackedPath(path) {
            if (path === null) {
              trackedPathMatchFiber = null;
              trackedPathMatchDepth = -1;
              mightBeOnTrackedPath = false;
            }

            trackedPath = path;
          } // We call this before traversing a new mount.
          // It remembers whether this Fiber is the next best match for tracked path.
          // The return value signals whether we should keep matching siblings or not.

          function updateTrackedPathStateBeforeMount(fiber) {
            if (trackedPath === null || !mightBeOnTrackedPath) {
              // Fast path: there's nothing to track so do nothing and ignore siblings.
              return false;
            }

            var returnFiber = fiber.return;
            var returnAlternate = returnFiber !== null ? returnFiber.alternate : null; // By now we know there's some selection to restore, and this is a new Fiber.
            // Is this newly mounted Fiber a direct child of the current best match?
            // (This will also be true for new roots if we haven't matched anything yet.)

            if (
              trackedPathMatchFiber === returnFiber ||
              (trackedPathMatchFiber === returnAlternate && returnAlternate !== null)
            ) {
              // Is this the next Fiber we should select? Let's compare the frames.
              var actualFrame = getPathFrame(fiber); // $FlowFixMe[incompatible-use] found when upgrading Flow

              var expectedFrame = trackedPath[trackedPathMatchDepth + 1];

              if (expectedFrame === undefined) {
                throw new Error("Expected to see a frame at the next depth.");
              }

              if (
                actualFrame.index === expectedFrame.index &&
                actualFrame.key === expectedFrame.key &&
                actualFrame.displayName === expectedFrame.displayName
              ) {
                // We have our next match.
                trackedPathMatchFiber = fiber;
                trackedPathMatchDepth++; // Are we out of frames to match?
                // $FlowFixMe[incompatible-use] found when upgrading Flow

                if (trackedPathMatchDepth === trackedPath.length - 1) {
                  // There's nothing that can possibly match afterwards.
                  // Don't check the children.
                  mightBeOnTrackedPath = false;
                } else {
                  // Check the children, as they might reveal the next match.
                  mightBeOnTrackedPath = true;
                } // In either case, since we have a match, we don't need
                // to check the siblings. They'll never match.

                return false;
              }
            } // This Fiber's parent is on the path, but this Fiber itself isn't.
            // There's no need to check its children--they won't be on the path either.

            mightBeOnTrackedPath = false; // However, one of its siblings may be on the path so keep searching.

            return true;
          }

          function updateTrackedPathStateAfterMount(mightSiblingsBeOnTrackedPath) {
            // updateTrackedPathStateBeforeMount() told us whether to match siblings.
            // Now that we're entering siblings, let's use that information.
            mightBeOnTrackedPath = mightSiblingsBeOnTrackedPath;
          } // Roots don't have a real persistent identity.
          // A root's "pseudo key" is "childDisplayName:indexWithThatName".
          // For example, "App:0" or, in case of similar roots, "Story:0", "Story:1", etc.
          // We will use this to try to disambiguate roots when restoring selection between reloads.

          var rootPseudoKeys = new Map();
          var rootDisplayNameCounter = new Map();

          function setRootPseudoKey(id, fiber) {
            var name = getDisplayNameForRoot(fiber);
            var counter = rootDisplayNameCounter.get(name) || 0;
            rootDisplayNameCounter.set(name, counter + 1);
            var pseudoKey = "".concat(name, ":").concat(counter);
            rootPseudoKeys.set(id, pseudoKey);
          }

          function removeRootPseudoKey(id) {
            var pseudoKey = rootPseudoKeys.get(id);

            if (pseudoKey === undefined) {
              throw new Error("Expected root pseudo key to be known.");
            }

            var name = pseudoKey.substring(0, pseudoKey.lastIndexOf(":"));
            var counter = rootDisplayNameCounter.get(name);

            if (counter === undefined) {
              throw new Error("Expected counter to be known.");
            }

            if (counter > 1) {
              rootDisplayNameCounter.set(name, counter - 1);
            } else {
              rootDisplayNameCounter.delete(name);
            }

            rootPseudoKeys.delete(id);
          }

          function getDisplayNameForRoot(fiber) {
            var preferredDisplayName = null;
            var fallbackDisplayName = null;
            var child = fiber.child; // Go at most three levels deep into direct children
            // while searching for a child that has a displayName.

            for (var i = 0; i < 3; i++) {
              if (child === null) {
                break;
              }

              var displayName = getDisplayNameForFiber(child);

              if (displayName !== null) {
                // Prefer display names that we get from user-defined components.
                // We want to avoid using e.g. 'Suspense' unless we find nothing else.
                if (typeof child.type === "function") {
                  // There's a few user-defined tags, but we'll prefer the ones
                  // that are usually explicitly named (function or class components).
                  preferredDisplayName = displayName;
                } else if (fallbackDisplayName === null) {
                  fallbackDisplayName = displayName;
                }
              }

              if (preferredDisplayName !== null) {
                break;
              }

              child = child.child;
            }

            return preferredDisplayName || fallbackDisplayName || "Anonymous";
          }

          function getPathFrame(fiber) {
            var key = fiber.key;
            var displayName = getDisplayNameForFiber(fiber);
            var index = fiber.index;

            switch (fiber.tag) {
              case HostRoot:
                // Roots don't have a real displayName, index, or key.
                // Instead, we'll use the pseudo key (childDisplayName:indexWithThatName).
                var id = getFiberIDThrows(fiber);
                var pseudoKey = rootPseudoKeys.get(id);

                if (pseudoKey === undefined) {
                  throw new Error("Expected mounted root to have known pseudo key.");
                }

                displayName = pseudoKey;
                break;

              case HostComponent:
                displayName = fiber.type;
                break;

              default:
                break;
            }

            return {
              displayName: displayName,
              key: key,
              index: index,
            };
          } // Produces a serializable representation that does a best effort
          // of identifying a particular Fiber between page reloads.
          // The return path will contain Fibers that are "invisible" to the store
          // because their keys and indexes are important to restoring the selection.

          function getPathForElement(id) {
            var fiber = idToArbitraryFiberMap.get(id);

            if (fiber == null) {
              return null;
            }

            var keyPath = [];

            while (fiber !== null) {
              // $FlowFixMe[incompatible-call] found when upgrading Flow
              keyPath.push(getPathFrame(fiber)); // $FlowFixMe[incompatible-use] found when upgrading Flow

              fiber = fiber.return;
            }

            keyPath.reverse();
            return keyPath;
          }

          function getBestMatchForTrackedPath() {
            if (trackedPath === null) {
              // Nothing to match.
              return null;
            }

            if (trackedPathMatchFiber === null) {
              // We didn't find anything.
              return null;
            } // Find the closest Fiber store is aware of.

            var fiber = trackedPathMatchFiber;

            while (fiber !== null && shouldFilterFiber(fiber)) {
              fiber = fiber.return;
            }

            if (fiber === null) {
              return null;
            }

            return {
              id: getFiberIDThrows(fiber),
              // $FlowFixMe[incompatible-use] found when upgrading Flow
              isFullMatch: trackedPathMatchDepth === trackedPath.length - 1,
            };
          }

          var formatPriorityLevel = function formatPriorityLevel(priorityLevel) {
            if (priorityLevel == null) {
              return "Unknown";
            }

            switch (priorityLevel) {
              case ImmediatePriority:
                return "Immediate";

              case UserBlockingPriority:
                return "User-Blocking";

              case NormalPriority:
                return "Normal";

              case LowPriority:
                return "Low";

              case IdlePriority:
                return "Idle";

              case NoPriority:
              default:
                return "Unknown";
            }
          };

          function setTraceUpdatesEnabled(isEnabled) {
            traceUpdatesEnabled = isEnabled;
          }

          return {
            cleanup: cleanup,
            clearErrorsAndWarnings: clearErrorsAndWarnings,
            clearErrorsForFiberID: clearErrorsForFiberID,
            clearWarningsForFiberID: clearWarningsForFiberID,
            copyElementPath: copyElementPath,
            deletePath: deletePath,
            findNativeNodesForFiberID: findNativeNodesForFiberID,
            flushInitialOperations: flushInitialOperations,
            getBestMatchForTrackedPath: getBestMatchForTrackedPath,
            getDisplayNameForFiberID: getDisplayNameForFiberID,
            getFiberForNative: getFiberForNative,
            getFiberIDForNative: getFiberIDForNative,
            getInstanceAndStyle: getInstanceAndStyle,
            getOwnersList: getOwnersList,
            getPathForElement: getPathForElement,
            getProfilingData: getProfilingData,
            handleCommitFiberRoot: handleCommitFiberRoot,
            handleCommitFiberUnmount: handleCommitFiberUnmount,
            handlePostCommitFiberRoot: handlePostCommitFiberRoot,
            inspectElement: inspectElement,
            logElementToConsole: logElementToConsole,
            patchConsoleForStrictMode: backend_console["c" /* patchForStrictMode */],
            prepareViewAttributeSource: prepareViewAttributeSource,
            prepareViewElementSource: prepareViewElementSource,
            overrideError: overrideError,
            overrideSuspense: overrideSuspense,
            overrideValueAtPath: overrideValueAtPath,
            renamePath: renamePath,
            renderer: renderer,
            setTraceUpdatesEnabled: setTraceUpdatesEnabled,
            setTrackedPath: setTrackedPath,
            startProfiling: startProfiling,
            stopProfiling: stopProfiling,
            storeAsGlobal: storeAsGlobal,
            unpatchConsoleForStrictMode: backend_console["e" /* unpatchForStrictMode */],
            updateComponentFilters: updateComponentFilters,
          };
        }

        /***/
      },
      /* 16 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return /* binding */ describeFiber;
        });
        __webpack_require__.d(__webpack_exports__, "b", function () {
          return /* binding */ getStackByFiberInDevAndProd;
        });

        // EXTERNAL MODULE: ../react-devtools-shared/src/backend/ReactSymbols.js
        var ReactSymbols = __webpack_require__(3);

        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/DevToolsConsolePatching.js
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        // This is a DevTools fork of shared/ConsolePatchingDev.
        // The shared console patching code is DEV-only.
        // We can't use it since DevTools only ships production builds.
        // Helpers to patch console.logs to avoid logging during side-effect free
        // replaying on render function. This currently only patches the object
        // lazily which won't cover if the log function was extracted eagerly.
        // We could also eagerly patch the method.
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;

        function disabledLog() {}

        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true,
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props,
            });
            /* eslint-enable react-internal/no-production-logging */
          }

          disabledDepth++;
        }
        function reenableLogs() {
          disabledDepth--;

          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            var props = {
              configurable: true,
              enumerable: true,
              writable: true,
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              log: _objectSpread(
                _objectSpread({}, props),
                {},
                {
                  value: prevLog,
                }
              ),
              info: _objectSpread(
                _objectSpread({}, props),
                {},
                {
                  value: prevInfo,
                }
              ),
              warn: _objectSpread(
                _objectSpread({}, props),
                {},
                {
                  value: prevWarn,
                }
              ),
              error: _objectSpread(
                _objectSpread({}, props),
                {},
                {
                  value: prevError,
                }
              ),
              group: _objectSpread(
                _objectSpread({}, props),
                {},
                {
                  value: prevGroup,
                }
              ),
              groupCollapsed: _objectSpread(
                _objectSpread({}, props),
                {},
                {
                  value: prevGroupCollapsed,
                }
              ),
              groupEnd: _objectSpread(
                _objectSpread({}, props),
                {},
                {
                  value: prevGroupEnd,
                }
              ),
            });
            /* eslint-enable react-internal/no-production-logging */
          }

          if (disabledDepth < 0) {
            console.error("disabledDepth fell below zero. " + "This is a bug in React. Please file an issue.");
          }
        }
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/DevToolsComponentStackFrame.js
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        // This is a DevTools fork of ReactComponentStackFrame.
        // This fork enables DevTools to use the same "native" component stack format,
        // while still maintaining support for multiple renderer versions
        // (which use different values for ReactTypeOfWork).
        // The shared console patching code is DEV-only.
        // We can't use it since DevTools only ships production builds.

        var prefix;
        function describeBuiltInComponentFrame(name, ownerFn) {
          if (prefix === undefined) {
            // Extract the VM specific prefix used by each line.
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = (match && match[1]) || "";
            }
          } // We use the prefix to ensure our stacks line up with native stack frames.

          return "\n" + prefix + name;
        }
        var reentry = false;
        var componentFrameCache;

        if (false) {
          var PossiblyWeakMap;
        }

        function describeNativeComponentFrame(fn, construct, currentDispatcherRef) {
          // If something asked for a stack inside a fake render, it should get ignored.
          if (!fn || reentry) {
            return "";
          }

          if (false) {
            var frame;
          }

          var control;
          var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

          Error.prepareStackTrace = undefined;
          reentry = true; // Override the dispatcher so effects scheduled by this shallow render are thrown away.
          //
          // Note that unlike the code this was forked from (in ReactComponentStackFrame)
          // DevTools should override the dispatcher even when DevTools is compiled in production mode,
          // because the app itself may be in development mode and log errors/warnings.

          var previousDispatcher = currentDispatcherRef.current;
          currentDispatcherRef.current = null;
          disableLogs();

          try {
            // This should throw.
            if (construct) {
              // Something should be setting the props in the constructor.
              var Fake = function Fake() {
                throw Error();
              }; // $FlowFixMe

              Object.defineProperty(Fake.prototype, "props", {
                set: function set() {
                  // We use a throwing setter instead of frozen or non-writable props
                  // because that won't throw in a non-strict mode function.
                  throw Error();
                },
              });

              if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct) {
                // We construct a different control for this case to include any extra
                // frames added by the construct call.
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }

                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                } // $FlowFixMe[prop-missing] found when upgrading Flow

                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }

              fn();
            }
          } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === "string") {
              // This extracts the first frame from the sample that isn't also in the control.
              // Skipping one frame that we assume is the frame that calls the two.
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;

              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                // We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
              }

              for (; s >= 1 && c >= 0; s--, c--) {
                // Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                  // In V8, the first line is describing the message but other VMs don't.
                  // If we're about to return the first line, and the control is also on the same
                  // line, that's a pretty good indicator that our sample threw at same line as
                  // the control. I.e. before we entered the sample frame. So we ignore this result.
                  // This can happen if you passed a class to function component, or non-function.
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--; // We may still have similar intermediate frames from the construct call.
                      // The next one that isn't the same should be our match though.

                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");

                        if (false) {
                        } // Return the line we found.

                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }

                  break;
                }
              }
            }
          } finally {
            reentry = false;
            Error.prepareStackTrace = previousPrepareStackTrace;
            currentDispatcherRef.current = previousDispatcher;
            reenableLogs();
          } // Fallback to just using the name if we couldn't make it throw.

          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";

          if (false) {
          }

          return syntheticFrame;
        }
        function describeClassComponentFrame(ctor, ownerFn, currentDispatcherRef) {
          return describeNativeComponentFrame(ctor, true, currentDispatcherRef);
        }
        function describeFunctionComponentFrame(fn, ownerFn, currentDispatcherRef) {
          return describeNativeComponentFrame(fn, false, currentDispatcherRef);
        }

        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }

        function describeUnknownElementTypeFrameInDEV(type, ownerFn, currentDispatcherRef) {
          if (true) {
            return "";
          }

          if (type == null) {
            return "";
          }

          if (typeof type === "function") {
            return describeNativeComponentFrame(type, shouldConstruct(type), currentDispatcherRef);
          }

          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type, ownerFn);
          }

          switch (type) {
            case ReactSymbols["w" /* SUSPENSE_NUMBER */]:
            case ReactSymbols["x" /* SUSPENSE_SYMBOL_STRING */]:
              return describeBuiltInComponentFrame("Suspense", ownerFn);

            case ReactSymbols["u" /* SUSPENSE_LIST_NUMBER */]:
            case ReactSymbols["v" /* SUSPENSE_LIST_SYMBOL_STRING */]:
              return describeBuiltInComponentFrame("SuspenseList", ownerFn);
          }

          if (_typeof(type) === "object") {
            switch (type.$$typeof) {
              case ReactSymbols["f" /* FORWARD_REF_NUMBER */]:
              case ReactSymbols["g" /* FORWARD_REF_SYMBOL_STRING */]:
                return describeFunctionComponentFrame(type.render, ownerFn, currentDispatcherRef);

              case ReactSymbols["j" /* MEMO_NUMBER */]:
              case ReactSymbols["k" /* MEMO_SYMBOL_STRING */]:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, ownerFn, currentDispatcherRef);

              case ReactSymbols["h" /* LAZY_NUMBER */]:
              case ReactSymbols["i" /* LAZY_SYMBOL_STRING */]: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;

                try {
                  // Lazy may contain any component type so we recursively resolve it.
                  return describeUnknownElementTypeFrameInDEV(init(payload), ownerFn, currentDispatcherRef);
                } catch (x) {}
              }
            }
          }

          return "";
        }
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/DevToolsFiberComponentStack.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        // This is a DevTools fork of ReactFiberComponentStack.
        // This fork enables DevTools to use the same "native" component stack format,
        // while still maintaining support for multiple renderer versions
        // (which use different values for ReactTypeOfWork).

        function describeFiber(workTagMap, workInProgress, currentDispatcherRef) {
          var HostComponent = workTagMap.HostComponent,
            LazyComponent = workTagMap.LazyComponent,
            SuspenseComponent = workTagMap.SuspenseComponent,
            SuspenseListComponent = workTagMap.SuspenseListComponent,
            FunctionComponent = workTagMap.FunctionComponent,
            IndeterminateComponent = workTagMap.IndeterminateComponent,
            SimpleMemoComponent = workTagMap.SimpleMemoComponent,
            ForwardRef = workTagMap.ForwardRef,
            ClassComponent = workTagMap.ClassComponent;
          var owner = false ? undefined : null;

          switch (workInProgress.tag) {
            case HostComponent:
              return describeBuiltInComponentFrame(workInProgress.type, owner);

            case LazyComponent:
              return describeBuiltInComponentFrame("Lazy", owner);

            case SuspenseComponent:
              return describeBuiltInComponentFrame("Suspense", owner);

            case SuspenseListComponent:
              return describeBuiltInComponentFrame("SuspenseList", owner);

            case FunctionComponent:
            case IndeterminateComponent:
            case SimpleMemoComponent:
              return describeFunctionComponentFrame(workInProgress.type, owner, currentDispatcherRef);

            case ForwardRef:
              return describeFunctionComponentFrame(workInProgress.type.render, owner, currentDispatcherRef);

            case ClassComponent:
              return describeClassComponentFrame(workInProgress.type, owner, currentDispatcherRef);

            default:
              return "";
          }
        }
        function getStackByFiberInDevAndProd(workTagMap, workInProgress, currentDispatcherRef) {
          try {
            var info = "";
            var node = workInProgress;

            do {
              info += describeFiber(workTagMap, node, currentDispatcherRef); // $FlowFixMe[incompatible-type] we bail out when we get a null

              node = node.return;
            } while (node);

            return info;
          } catch (x) {
            return "\nError generating stack: " + x.message + "\n" + x.stack;
          }
        }

        /***/
      },
      /* 17 */
      /***/ function (module, exports) {
        // shim for using process in browser
        var process = (module.exports = {}); // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error("setTimeout has not been defined");
        }

        function defaultClearTimeout() {
          throw new Error("clearTimeout has not been defined");
        }

        (function () {
          try {
            if (typeof setTimeout === "function") {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }

          try {
            if (typeof clearTimeout === "function") {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();

        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          } // if setTimeout wasn't available but was latter defined

          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }

          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }

        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
          } // if clearTimeout wasn't available but was latter defined

          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }

          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
            }
          }
        }

        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }

          draining = false;

          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }

          if (queue.length) {
            drainQueue();
          }
        }

        function drainQueue() {
          if (draining) {
            return;
          }

          var timeout = runTimeout(cleanUpNextTick);
          draining = true;
          var len = queue.length;

          while (len) {
            currentQueue = queue;
            queue = [];

            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }

            queueIndex = -1;
            len = queue.length;
          }

          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }

        process.nextTick = function (fun) {
          var args = new Array(arguments.length - 1);

          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }

          queue.push(new Item(fun, args));

          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        }; // v8 likes predictible objects

        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }

        Item.prototype.run = function () {
          this.fun.apply(null, this.array);
        };

        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ""; // empty string to avoid regexp issues

        process.versions = {};

        function noop() {}

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;

        process.listeners = function (name) {
          return [];
        };

        process.binding = function (name) {
          throw new Error("process.binding is not supported");
        };

        process.cwd = function () {
          return "/";
        };

        process.chdir = function (dir) {
          throw new Error("process.chdir is not supported");
        };

        process.umask = function () {
          return 0;
        };

        /***/
      },
      /* 18 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* unused harmony export REACT_ELEMENT_TYPE */
        /* unused harmony export REACT_PORTAL_TYPE */
        /* unused harmony export REACT_FRAGMENT_TYPE */
        /* unused harmony export REACT_STRICT_MODE_TYPE */
        /* unused harmony export REACT_PROFILER_TYPE */
        /* unused harmony export REACT_PROVIDER_TYPE */
        /* unused harmony export REACT_CONTEXT_TYPE */
        /* unused harmony export REACT_SERVER_CONTEXT_TYPE */
        /* unused harmony export REACT_FORWARD_REF_TYPE */
        /* unused harmony export REACT_SUSPENSE_TYPE */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
          return REACT_SUSPENSE_LIST_TYPE;
        });
        /* unused harmony export REACT_MEMO_TYPE */
        /* unused harmony export REACT_LAZY_TYPE */
        /* unused harmony export REACT_SCOPE_TYPE */
        /* unused harmony export REACT_DEBUG_TRACING_MODE_TYPE */
        /* unused harmony export REACT_OFFSCREEN_TYPE */
        /* unused harmony export REACT_LEGACY_HIDDEN_TYPE */
        /* unused harmony export REACT_CACHE_TYPE */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
          return REACT_TRACING_MARKER_TYPE;
        });
        /* unused harmony export REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED */
        /* unused harmony export REACT_MEMO_CACHE_SENTINEL */
        /* unused harmony export getIteratorFn */
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_SCOPE_TYPE = Symbol.for("react.scope");
        var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
        var REACT_CACHE_TYPE = Symbol.for("react.cache");
        var REACT_TRACING_MARKER_TYPE = Symbol.for("react.tracing_marker");
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
        var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || _typeof(maybeIterable) !== "object") {
            return null;
          }

          var maybeIterator =
            (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL];

          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }

          return null;
        }

        /***/
      },
      /* 19 */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (setImmediate) {
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          //  Import support https://stackoverflow.com/questions/13673346/supporting-both-commonjs-and-amd
          (function (name, definition) {
            if (true) {
              module.exports = definition();
            } else {
            }
          })("clipboard", function () {
            if (typeof document === "undefined" || !document.addEventListener) {
              return null;
            }

            var clipboard = {};

            clipboard.copy = (function () {
              var _intercept = false;
              var _data = null; // Map from data type (e.g. "text/html") to value.

              var _bogusSelection = false;

              function cleanup() {
                _intercept = false;
                _data = null;

                if (_bogusSelection) {
                  window.getSelection().removeAllRanges();
                }

                _bogusSelection = false;
              }

              document.addEventListener("copy", function (e) {
                if (_intercept) {
                  for (var key in _data) {
                    e.clipboardData.setData(key, _data[key]);
                  }

                  e.preventDefault();
                }
              }); // Workaround for Safari: https://bugs.webkit.org/show_bug.cgi?id=156529

              function bogusSelect() {
                var sel = document.getSelection(); // If "nothing" is selected...

                if (!document.queryCommandEnabled("copy") && sel.isCollapsed) {
                  // ... temporarily select the entire body.
                  //
                  // We select the entire body because:
                  // - it's guaranteed to exist,
                  // - it works (unlike, say, document.head, or phantom element that is
                  //   not inserted into the DOM),
                  // - it doesn't seem to flicker (due to the synchronous copy event), and
                  // - it avoids modifying the DOM (can trigger mutation observers).
                  //
                  // Because we can't do proper feature detection (we already checked
                  // document.queryCommandEnabled("copy") , which actually gives a false
                  // negative for Blink when nothing is selected) and UA sniffing is not
                  // reliable (a lot of UA strings contain "Safari"), this will also
                  // happen for some browsers other than Safari. :-()
                  var range = document.createRange();
                  range.selectNodeContents(document.body);
                  sel.removeAllRanges();
                  sel.addRange(range);
                  _bogusSelection = true;
                }
              }

              return function (data) {
                return new Promise(function (resolve, reject) {
                  _intercept = true;

                  if (typeof data === "string") {
                    _data = {
                      "text/plain": data,
                    };
                  } else if (data instanceof Node) {
                    _data = {
                      "text/html": new XMLSerializer().serializeToString(data),
                    };
                  } else if (data instanceof Object) {
                    _data = data;
                  } else {
                    reject("Invalid data type. Must be string, DOM node, or an object mapping MIME types to strings.");
                  }

                  function triggerCopy(tryBogusSelect) {
                    try {
                      if (document.execCommand("copy")) {
                        // document.execCommand is synchronous: http://www.w3.org/TR/2015/WD-clipboard-apis-20150421/#integration-with-rich-text-editing-apis
                        // So we can call resolve() back here.
                        cleanup();
                        resolve();
                      } else {
                        if (!tryBogusSelect) {
                          bogusSelect();
                          triggerCopy(true);
                        } else {
                          cleanup();
                          throw new Error("Unable to copy. Perhaps it's not available in your browser?");
                        }
                      }
                    } catch (e) {
                      cleanup();
                      reject(e);
                    }
                  }

                  triggerCopy(false);
                });
              };
            })();

            clipboard.paste = (function () {
              var _intercept = false;

              var _resolve;

              var _dataType;

              document.addEventListener("paste", function (e) {
                if (_intercept) {
                  _intercept = false;
                  e.preventDefault();
                  var resolve = _resolve;
                  _resolve = null;
                  resolve(e.clipboardData.getData(_dataType));
                }
              });
              return function (dataType) {
                return new Promise(function (resolve, reject) {
                  _intercept = true;
                  _resolve = resolve;
                  _dataType = dataType || "text/plain";

                  try {
                    if (!document.execCommand("paste")) {
                      _intercept = false;
                      reject(new Error("Unable to paste. Pasting only works in Internet Explorer at the moment."));
                    }
                  } catch (e) {
                    _intercept = false;
                    reject(new Error(e));
                  }
                });
              };
            })(); // Handle IE behaviour.

            if (
              typeof ClipboardEvent === "undefined" &&
              typeof window.clipboardData !== "undefined" &&
              typeof window.clipboardData.setData !== "undefined"
            ) {
              /*! promise-polyfill 2.0.1 */
              (function (a) {
                function b(a, b) {
                  return function () {
                    a.apply(b, arguments);
                  };
                }

                function c(a) {
                  if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
                  if ("function" != typeof a) throw new TypeError("not a function");
                  (this._state = null), (this._value = null), (this._deferreds = []), i(a, b(e, this), b(f, this));
                }

                function d(a) {
                  var b = this;
                  return null === this._state
                    ? void this._deferreds.push(a)
                    : void j(function () {
                        var c = b._state ? a.onFulfilled : a.onRejected;
                        if (null === c) return void (b._state ? a.resolve : a.reject)(b._value);
                        var d;

                        try {
                          d = c(b._value);
                        } catch (e) {
                          return void a.reject(e);
                        }

                        a.resolve(d);
                      });
                }

                function e(a) {
                  try {
                    if (a === this) throw new TypeError("A promise cannot be resolved with itself.");

                    if (a && ("object" == _typeof(a) || "function" == typeof a)) {
                      var c = a.then;
                      if ("function" == typeof c) return void i(b(c, a), b(e, this), b(f, this));
                    }

                    (this._state = !0), (this._value = a), g.call(this);
                  } catch (d) {
                    f.call(this, d);
                  }
                }

                function f(a) {
                  (this._state = !1), (this._value = a), g.call(this);
                }

                function g() {
                  for (var a = 0, b = this._deferreds.length; b > a; a++) {
                    d.call(this, this._deferreds[a]);
                  }

                  this._deferreds = null;
                }

                function h(a, b, c, d) {
                  (this.onFulfilled = "function" == typeof a ? a : null),
                    (this.onRejected = "function" == typeof b ? b : null),
                    (this.resolve = c),
                    (this.reject = d);
                }

                function i(a, b, c) {
                  var d = !1;

                  try {
                    a(
                      function (a) {
                        d || ((d = !0), b(a));
                      },
                      function (a) {
                        d || ((d = !0), c(a));
                      }
                    );
                  } catch (e) {
                    if (d) return;
                    (d = !0), c(e);
                  }
                }

                var j =
                    c.immediateFn ||
                    ("function" == typeof setImmediate && setImmediate) ||
                    function (a) {
                      setTimeout(a, 1);
                    },
                  k =
                    Array.isArray ||
                    function (a) {
                      return "[object Array]" === Object.prototype.toString.call(a);
                    };

                (c.prototype["catch"] = function (a) {
                  return this.then(null, a);
                }),
                  (c.prototype.then = function (a, b) {
                    var e = this;
                    return new c(function (c, f) {
                      d.call(e, new h(a, b, c, f));
                    });
                  }),
                  (c.all = function () {
                    var a = Array.prototype.slice.call(
                      1 === arguments.length && k(arguments[0]) ? arguments[0] : arguments
                    );
                    return new c(function (b, c) {
                      function d(f, g) {
                        try {
                          if (g && ("object" == _typeof(g) || "function" == typeof g)) {
                            var h = g.then;
                            if ("function" == typeof h)
                              return void h.call(
                                g,
                                function (a) {
                                  d(f, a);
                                },
                                c
                              );
                          }

                          (a[f] = g), 0 === --e && b(a);
                        } catch (i) {
                          c(i);
                        }
                      }

                      if (0 === a.length) return b([]);

                      for (var e = a.length, f = 0; f < a.length; f++) {
                        d(f, a[f]);
                      }
                    });
                  }),
                  (c.resolve = function (a) {
                    return a && "object" == _typeof(a) && a.constructor === c
                      ? a
                      : new c(function (b) {
                          b(a);
                        });
                  }),
                  (c.reject = function (a) {
                    return new c(function (b, c) {
                      c(a);
                    });
                  }),
                  (c.race = function (a) {
                    return new c(function (b, c) {
                      for (var d = 0, e = a.length; e > d; d++) {
                        a[d].then(b, c);
                      }
                    });
                  }),
                  true && module.exports ? (module.exports = c) : a.Promise || (a.Promise = c);
              })(this);

              clipboard.copy = function (data) {
                return new Promise(function (resolve, reject) {
                  // IE supports string and URL types: https://msdn.microsoft.com/en-us/library/ms536744(v=vs.85).aspx
                  // We only support the string type for now.
                  if (typeof data !== "string" && !("text/plain" in data)) {
                    throw new Error("You must provide a text/plain type.");
                  }

                  var strData = typeof data === "string" ? data : data["text/plain"];
                  var copySucceeded = window.clipboardData.setData("Text", strData);

                  if (copySucceeded) {
                    resolve();
                  } else {
                    reject(new Error("Copying was rejected."));
                  }
                });
              };

              clipboard.paste = function () {
                return new Promise(function (resolve, reject) {
                  var strData = window.clipboardData.getData("Text");

                  if (strData) {
                    resolve(strData);
                  } else {
                    // The user rejected the paste request.
                    reject(new Error("Pasting was rejected."));
                  }
                });
              };
            }

            return clipboard;
          });
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(22).setImmediate));

        /***/
      },
      /* 20 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        // A linked list to keep track of recently-used-ness

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Yallist = __webpack_require__(24);

        var MAX = Symbol("max");
        var LENGTH = Symbol("length");
        var LENGTH_CALCULATOR = Symbol("lengthCalculator");
        var ALLOW_STALE = Symbol("allowStale");
        var MAX_AGE = Symbol("maxAge");
        var DISPOSE = Symbol("dispose");
        var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
        var LRU_LIST = Symbol("lruList");
        var CACHE = Symbol("cache");
        var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");

        var naiveLength = function naiveLength() {
          return 1;
        }; // lruList is a yallist where the head is the youngest
        // item, and the tail is the oldest.  the list contains the Hit
        // objects as the entries.
        // Each Hit object has a reference to its Yallist.Node.  This
        // never changes.
        //
        // cache is a Map (or PseudoMap) that matches the keys to
        // the Yallist.Node object.

        var LRUCache = /*#__PURE__*/ (function () {
          function LRUCache(options) {
            _classCallCheck(this, LRUCache);

            if (typeof options === "number")
              options = {
                max: options,
              };
            if (!options) options = {};
            if (options.max && (typeof options.max !== "number" || options.max < 0))
              throw new TypeError("max must be a non-negative number"); // Kind of weird to have a default max of Infinity, but oh well.

            var max = (this[MAX] = options.max || Infinity);
            var lc = options.length || naiveLength;
            this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
            this[ALLOW_STALE] = options.stale || false;
            if (options.maxAge && typeof options.maxAge !== "number") throw new TypeError("maxAge must be a number");
            this[MAX_AGE] = options.maxAge || 0;
            this[DISPOSE] = options.dispose;
            this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
            this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
            this.reset();
          } // resize the cache when the max changes.

          _createClass(LRUCache, [
            {
              key: "rforEach",
              value: function rforEach(fn, thisp) {
                thisp = thisp || this;

                for (var walker = this[LRU_LIST].tail; walker !== null; ) {
                  var prev = walker.prev;
                  forEachStep(this, fn, walker, thisp);
                  walker = prev;
                }
              },
            },
            {
              key: "forEach",
              value: function forEach(fn, thisp) {
                thisp = thisp || this;

                for (var walker = this[LRU_LIST].head; walker !== null; ) {
                  var next = walker.next;
                  forEachStep(this, fn, walker, thisp);
                  walker = next;
                }
              },
            },
            {
              key: "keys",
              value: function keys() {
                return this[LRU_LIST].toArray().map(function (k) {
                  return k.key;
                });
              },
            },
            {
              key: "values",
              value: function values() {
                return this[LRU_LIST].toArray().map(function (k) {
                  return k.value;
                });
              },
            },
            {
              key: "reset",
              value: function reset() {
                var _this = this;

                if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
                  this[LRU_LIST].forEach(function (hit) {
                    return _this[DISPOSE](hit.key, hit.value);
                  });
                }

                this[CACHE] = new Map(); // hash of items by key

                this[LRU_LIST] = new Yallist(); // list of items in order of use recency

                this[LENGTH] = 0; // length of items in the list
              },
            },
            {
              key: "dump",
              value: function dump() {
                var _this2 = this;

                return this[LRU_LIST].map(function (hit) {
                  return isStale(_this2, hit)
                    ? false
                    : {
                        k: hit.key,
                        v: hit.value,
                        e: hit.now + (hit.maxAge || 0),
                      };
                })
                  .toArray()
                  .filter(function (h) {
                    return h;
                  });
              },
            },
            {
              key: "dumpLru",
              value: function dumpLru() {
                return this[LRU_LIST];
              },
            },
            {
              key: "set",
              value: function set(key, value, maxAge) {
                maxAge = maxAge || this[MAX_AGE];
                if (maxAge && typeof maxAge !== "number") throw new TypeError("maxAge must be a number");
                var now = maxAge ? Date.now() : 0;
                var len = this[LENGTH_CALCULATOR](value, key);

                if (this[CACHE].has(key)) {
                  if (len > this[MAX]) {
                    _del(this, this[CACHE].get(key));

                    return false;
                  }

                  var node = this[CACHE].get(key);
                  var item = node.value; // dispose of the old one before overwriting
                  // split out into 2 ifs for better coverage tracking

                  if (this[DISPOSE]) {
                    if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
                  }

                  item.now = now;
                  item.maxAge = maxAge;
                  item.value = value;
                  this[LENGTH] += len - item.length;
                  item.length = len;
                  this.get(key);
                  trim(this);
                  return true;
                }

                var hit = new Entry(key, value, len, now, maxAge); // oversized objects fall out of cache automatically.

                if (hit.length > this[MAX]) {
                  if (this[DISPOSE]) this[DISPOSE](key, value);
                  return false;
                }

                this[LENGTH] += hit.length;
                this[LRU_LIST].unshift(hit);
                this[CACHE].set(key, this[LRU_LIST].head);
                trim(this);
                return true;
              },
            },
            {
              key: "has",
              value: function has(key) {
                if (!this[CACHE].has(key)) return false;
                var hit = this[CACHE].get(key).value;
                return !isStale(this, hit);
              },
            },
            {
              key: "get",
              value: function get(key) {
                return _get(this, key, true);
              },
            },
            {
              key: "peek",
              value: function peek(key) {
                return _get(this, key, false);
              },
            },
            {
              key: "pop",
              value: function pop() {
                var node = this[LRU_LIST].tail;
                if (!node) return null;

                _del(this, node);

                return node.value;
              },
            },
            {
              key: "del",
              value: function del(key) {
                _del(this, this[CACHE].get(key));
              },
            },
            {
              key: "load",
              value: function load(arr) {
                // reset the cache
                this.reset();
                var now = Date.now(); // A previous serialized cache has the most recent items first

                for (var l = arr.length - 1; l >= 0; l--) {
                  var hit = arr[l];
                  var expiresAt = hit.e || 0;
                  if (expiresAt === 0)
                    // the item was created without expiration in a non aged cache
                    this.set(hit.k, hit.v);
                  else {
                    var maxAge = expiresAt - now; // dont add already expired items

                    if (maxAge > 0) {
                      this.set(hit.k, hit.v, maxAge);
                    }
                  }
                }
              },
            },
            {
              key: "prune",
              value: function prune() {
                var _this3 = this;

                this[CACHE].forEach(function (value, key) {
                  return _get(_this3, key, false);
                });
              },
            },
            {
              key: "max",
              set: function set(mL) {
                if (typeof mL !== "number" || mL < 0) throw new TypeError("max must be a non-negative number");
                this[MAX] = mL || Infinity;
                trim(this);
              },
              get: function get() {
                return this[MAX];
              },
            },
            {
              key: "allowStale",
              set: function set(allowStale) {
                this[ALLOW_STALE] = !!allowStale;
              },
              get: function get() {
                return this[ALLOW_STALE];
              },
            },
            {
              key: "maxAge",
              set: function set(mA) {
                if (typeof mA !== "number") throw new TypeError("maxAge must be a non-negative number");
                this[MAX_AGE] = mA;
                trim(this);
              },
              get: function get() {
                return this[MAX_AGE];
              }, // resize the cache when the lengthCalculator changes.
            },
            {
              key: "lengthCalculator",
              set: function set(lC) {
                var _this4 = this;

                if (typeof lC !== "function") lC = naiveLength;

                if (lC !== this[LENGTH_CALCULATOR]) {
                  this[LENGTH_CALCULATOR] = lC;
                  this[LENGTH] = 0;
                  this[LRU_LIST].forEach(function (hit) {
                    hit.length = _this4[LENGTH_CALCULATOR](hit.value, hit.key);
                    _this4[LENGTH] += hit.length;
                  });
                }

                trim(this);
              },
              get: function get() {
                return this[LENGTH_CALCULATOR];
              },
            },
            {
              key: "length",
              get: function get() {
                return this[LENGTH];
              },
            },
            {
              key: "itemCount",
              get: function get() {
                return this[LRU_LIST].length;
              },
            },
          ]);

          return LRUCache;
        })();

        var _get = function _get(self, key, doUse) {
          var node = self[CACHE].get(key);

          if (node) {
            var hit = node.value;

            if (isStale(self, hit)) {
              _del(self, node);

              if (!self[ALLOW_STALE]) return undefined;
            } else {
              if (doUse) {
                if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now();
                self[LRU_LIST].unshiftNode(node);
              }
            }

            return hit.value;
          }
        };

        var isStale = function isStale(self, hit) {
          if (!hit || (!hit.maxAge && !self[MAX_AGE])) return false;
          var diff = Date.now() - hit.now;
          return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
        };

        var trim = function trim(self) {
          if (self[LENGTH] > self[MAX]) {
            for (var walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null; ) {
              // We know that we're about to delete this one, and also
              // what the next least recently used key will be, so just
              // go ahead and set it now.
              var prev = walker.prev;

              _del(self, walker);

              walker = prev;
            }
          }
        };

        var _del = function _del(self, node) {
          if (node) {
            var hit = node.value;
            if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value);
            self[LENGTH] -= hit.length;
            self[CACHE].delete(hit.key);
            self[LRU_LIST].removeNode(node);
          }
        };

        var Entry = function Entry(key, value, length, now, maxAge) {
          _classCallCheck(this, Entry);

          this.key = key;
          this.value = value;
          this.length = length;
          this.now = now;
          this.maxAge = maxAge || 0;
        };

        var forEachStep = function forEachStep(self, fn, node, thisp) {
          var hit = node.value;

          if (isStale(self, hit)) {
            _del(self, node);

            if (!self[ALLOW_STALE]) hit = undefined;
          }

          if (hit) fn.call(thisp, hit.value, hit.key, self);
        };

        module.exports = LRUCache;

        /***/
      },
      /* 21 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        if (true) {
          module.exports = __webpack_require__(27);
        } else {
        }

        /***/
      },
      /* 22 */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (global) {
          var scope = (typeof global !== "undefined" && global) || (typeof self !== "undefined" && self) || window;
          var apply = Function.prototype.apply; // DOM APIs, for completeness

          exports.setTimeout = function () {
            return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
          };

          exports.setInterval = function () {
            return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
          };

          exports.clearTimeout = exports.clearInterval = function (timeout) {
            if (timeout) {
              timeout.close();
            }
          };

          function Timeout(id, clearFn) {
            this._id = id;
            this._clearFn = clearFn;
          }

          Timeout.prototype.unref = Timeout.prototype.ref = function () {};

          Timeout.prototype.close = function () {
            this._clearFn.call(scope, this._id);
          }; // Does not start the time, just sets up the members needed.

          exports.enroll = function (item, msecs) {
            clearTimeout(item._idleTimeoutId);
            item._idleTimeout = msecs;
          };

          exports.unenroll = function (item) {
            clearTimeout(item._idleTimeoutId);
            item._idleTimeout = -1;
          };

          exports._unrefActive = exports.active = function (item) {
            clearTimeout(item._idleTimeoutId);
            var msecs = item._idleTimeout;

            if (msecs >= 0) {
              item._idleTimeoutId = setTimeout(function onTimeout() {
                if (item._onTimeout) item._onTimeout();
              }, msecs);
            }
          }; // setimmediate attaches itself to the global object

          __webpack_require__(23); // On some exotic environments, it's not clear which object `setimmediate` was
          // able to install onto.  Search each possibility in the same order as the
          // `setimmediate` library.

          exports.setImmediate =
            (typeof self !== "undefined" && self.setImmediate) ||
            (typeof global !== "undefined" && global.setImmediate) ||
            (this && this.setImmediate);
          exports.clearImmediate =
            (typeof self !== "undefined" && self.clearImmediate) ||
            (typeof global !== "undefined" && global.clearImmediate) ||
            (this && this.clearImmediate);
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(13)));

        /***/
      },
      /* 23 */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (global, process) {
          (function (global, undefined) {
            "use strict";

            if (global.setImmediate) {
              return;
            }

            var nextHandle = 1; // Spec says greater than zero

            var tasksByHandle = {};
            var currentlyRunningATask = false;
            var doc = global.document;
            var registerImmediate;

            function setImmediate(callback) {
              // Callback can either be a function or a string
              if (typeof callback !== "function") {
                callback = new Function("" + callback);
              } // Copy function arguments

              var args = new Array(arguments.length - 1);

              for (var i = 0; i < args.length; i++) {
                args[i] = arguments[i + 1];
              } // Store and register the task

              var task = {
                callback: callback,
                args: args,
              };
              tasksByHandle[nextHandle] = task;
              registerImmediate(nextHandle);
              return nextHandle++;
            }

            function clearImmediate(handle) {
              delete tasksByHandle[handle];
            }

            function run(task) {
              var callback = task.callback;
              var args = task.args;

              switch (args.length) {
                case 0:
                  callback();
                  break;

                case 1:
                  callback(args[0]);
                  break;

                case 2:
                  callback(args[0], args[1]);
                  break;

                case 3:
                  callback(args[0], args[1], args[2]);
                  break;

                default:
                  callback.apply(undefined, args);
                  break;
              }
            }

            function runIfPresent(handle) {
              // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
              // So if we're currently running a task, we'll need to delay this invocation.
              if (currentlyRunningATask) {
                // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                // "too much recursion" error.
                setTimeout(runIfPresent, 0, handle);
              } else {
                var task = tasksByHandle[handle];

                if (task) {
                  currentlyRunningATask = true;

                  try {
                    run(task);
                  } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                  }
                }
              }
            }

            function installNextTickImplementation() {
              registerImmediate = function registerImmediate(handle) {
                process.nextTick(function () {
                  runIfPresent(handle);
                });
              };
            }

            function canUsePostMessage() {
              // The test against `importScripts` prevents this implementation from being installed inside a web worker,
              // where `global.postMessage` means something completely different and can't be used for this purpose.
              if (global.postMessage && !global.importScripts) {
                var postMessageIsAsynchronous = true;
                var oldOnMessage = global.onmessage;

                global.onmessage = function () {
                  postMessageIsAsynchronous = false;
                };

                global.postMessage("", "*");
                global.onmessage = oldOnMessage;
                return postMessageIsAsynchronous;
              }
            }

            function installPostMessageImplementation() {
              // Installs an event handler on `global` for the `message` event: see
              // * https://developer.mozilla.org/en/DOM/window.postMessage
              // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
              var messagePrefix = "setImmediate$" + Math.random() + "$";

              var onGlobalMessage = function onGlobalMessage(event) {
                if (
                  event.source === global &&
                  typeof event.data === "string" &&
                  event.data.indexOf(messagePrefix) === 0
                ) {
                  runIfPresent(+event.data.slice(messagePrefix.length));
                }
              };

              if (global.addEventListener) {
                global.addEventListener("message", onGlobalMessage, false);
              } else {
                global.attachEvent("onmessage", onGlobalMessage);
              }

              registerImmediate = function registerImmediate(handle) {
                global.postMessage(messagePrefix + handle, "*");
              };
            }

            function installMessageChannelImplementation() {
              var channel = new MessageChannel();

              channel.port1.onmessage = function (event) {
                var handle = event.data;
                runIfPresent(handle);
              };

              registerImmediate = function registerImmediate(handle) {
                channel.port2.postMessage(handle);
              };
            }

            function installReadyStateChangeImplementation() {
              var html = doc.documentElement;

              registerImmediate = function registerImmediate(handle) {
                // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                var script = doc.createElement("script");

                script.onreadystatechange = function () {
                  runIfPresent(handle);
                  script.onreadystatechange = null;
                  html.removeChild(script);
                  script = null;
                };

                html.appendChild(script);
              };
            }

            function installSetTimeoutImplementation() {
              registerImmediate = function registerImmediate(handle) {
                setTimeout(runIfPresent, 0, handle);
              };
            } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.

            var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
            attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

            if ({}.toString.call(global.process) === "[object process]") {
              // For Node.js before 0.9
              installNextTickImplementation();
            } else if (canUsePostMessage()) {
              // For non-IE10 modern browsers
              installPostMessageImplementation();
            } else if (global.MessageChannel) {
              // For web workers, where supported
              installMessageChannelImplementation();
            } else if (doc && "onreadystatechange" in doc.createElement("script")) {
              // For IE 6–8
              installReadyStateChangeImplementation();
            } else {
              // For older browsers
              installSetTimeoutImplementation();
            }

            attachTo.setImmediate = setImmediate;
            attachTo.clearImmediate = clearImmediate;
          })(typeof self === "undefined" ? (typeof global === "undefined" ? this : global) : self);
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(13), __webpack_require__(17)));

        /***/
      },
      /* 24 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        module.exports = Yallist;
        Yallist.Node = Node;
        Yallist.create = Yallist;

        function Yallist(list) {
          var self = this;

          if (!(self instanceof Yallist)) {
            self = new Yallist();
          }

          self.tail = null;
          self.head = null;
          self.length = 0;

          if (list && typeof list.forEach === "function") {
            list.forEach(function (item) {
              self.push(item);
            });
          } else if (arguments.length > 0) {
            for (var i = 0, l = arguments.length; i < l; i++) {
              self.push(arguments[i]);
            }
          }

          return self;
        }

        Yallist.prototype.removeNode = function (node) {
          if (node.list !== this) {
            throw new Error("removing node which does not belong to this list");
          }

          var next = node.next;
          var prev = node.prev;

          if (next) {
            next.prev = prev;
          }

          if (prev) {
            prev.next = next;
          }

          if (node === this.head) {
            this.head = next;
          }

          if (node === this.tail) {
            this.tail = prev;
          }

          node.list.length--;
          node.next = null;
          node.prev = null;
          node.list = null;
          return next;
        };

        Yallist.prototype.unshiftNode = function (node) {
          if (node === this.head) {
            return;
          }

          if (node.list) {
            node.list.removeNode(node);
          }

          var head = this.head;
          node.list = this;
          node.next = head;

          if (head) {
            head.prev = node;
          }

          this.head = node;

          if (!this.tail) {
            this.tail = node;
          }

          this.length++;
        };

        Yallist.prototype.pushNode = function (node) {
          if (node === this.tail) {
            return;
          }

          if (node.list) {
            node.list.removeNode(node);
          }

          var tail = this.tail;
          node.list = this;
          node.prev = tail;

          if (tail) {
            tail.next = node;
          }

          this.tail = node;

          if (!this.head) {
            this.head = node;
          }

          this.length++;
        };

        Yallist.prototype.push = function () {
          for (var i = 0, l = arguments.length; i < l; i++) {
            push(this, arguments[i]);
          }

          return this.length;
        };

        Yallist.prototype.unshift = function () {
          for (var i = 0, l = arguments.length; i < l; i++) {
            unshift(this, arguments[i]);
          }

          return this.length;
        };

        Yallist.prototype.pop = function () {
          if (!this.tail) {
            return undefined;
          }

          var res = this.tail.value;
          this.tail = this.tail.prev;

          if (this.tail) {
            this.tail.next = null;
          } else {
            this.head = null;
          }

          this.length--;
          return res;
        };

        Yallist.prototype.shift = function () {
          if (!this.head) {
            return undefined;
          }

          var res = this.head.value;
          this.head = this.head.next;

          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null;
          }

          this.length--;
          return res;
        };

        Yallist.prototype.forEach = function (fn, thisp) {
          thisp = thisp || this;

          for (var walker = this.head, i = 0; walker !== null; i++) {
            fn.call(thisp, walker.value, i, this);
            walker = walker.next;
          }
        };

        Yallist.prototype.forEachReverse = function (fn, thisp) {
          thisp = thisp || this;

          for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
            fn.call(thisp, walker.value, i, this);
            walker = walker.prev;
          }
        };

        Yallist.prototype.get = function (n) {
          for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
            // abort out of the list early if we hit a cycle
            walker = walker.next;
          }

          if (i === n && walker !== null) {
            return walker.value;
          }
        };

        Yallist.prototype.getReverse = function (n) {
          for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
            // abort out of the list early if we hit a cycle
            walker = walker.prev;
          }

          if (i === n && walker !== null) {
            return walker.value;
          }
        };

        Yallist.prototype.map = function (fn, thisp) {
          thisp = thisp || this;
          var res = new Yallist();

          for (var walker = this.head; walker !== null; ) {
            res.push(fn.call(thisp, walker.value, this));
            walker = walker.next;
          }

          return res;
        };

        Yallist.prototype.mapReverse = function (fn, thisp) {
          thisp = thisp || this;
          var res = new Yallist();

          for (var walker = this.tail; walker !== null; ) {
            res.push(fn.call(thisp, walker.value, this));
            walker = walker.prev;
          }

          return res;
        };

        Yallist.prototype.reduce = function (fn, initial) {
          var acc;
          var walker = this.head;

          if (arguments.length > 1) {
            acc = initial;
          } else if (this.head) {
            walker = this.head.next;
            acc = this.head.value;
          } else {
            throw new TypeError("Reduce of empty list with no initial value");
          }

          for (var i = 0; walker !== null; i++) {
            acc = fn(acc, walker.value, i);
            walker = walker.next;
          }

          return acc;
        };

        Yallist.prototype.reduceReverse = function (fn, initial) {
          var acc;
          var walker = this.tail;

          if (arguments.length > 1) {
            acc = initial;
          } else if (this.tail) {
            walker = this.tail.prev;
            acc = this.tail.value;
          } else {
            throw new TypeError("Reduce of empty list with no initial value");
          }

          for (var i = this.length - 1; walker !== null; i--) {
            acc = fn(acc, walker.value, i);
            walker = walker.prev;
          }

          return acc;
        };

        Yallist.prototype.toArray = function () {
          var arr = new Array(this.length);

          for (var i = 0, walker = this.head; walker !== null; i++) {
            arr[i] = walker.value;
            walker = walker.next;
          }

          return arr;
        };

        Yallist.prototype.toArrayReverse = function () {
          var arr = new Array(this.length);

          for (var i = 0, walker = this.tail; walker !== null; i++) {
            arr[i] = walker.value;
            walker = walker.prev;
          }

          return arr;
        };

        Yallist.prototype.slice = function (from, to) {
          to = to || this.length;

          if (to < 0) {
            to += this.length;
          }

          from = from || 0;

          if (from < 0) {
            from += this.length;
          }

          var ret = new Yallist();

          if (to < from || to < 0) {
            return ret;
          }

          if (from < 0) {
            from = 0;
          }

          if (to > this.length) {
            to = this.length;
          }

          for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
            walker = walker.next;
          }

          for (; walker !== null && i < to; i++, walker = walker.next) {
            ret.push(walker.value);
          }

          return ret;
        };

        Yallist.prototype.sliceReverse = function (from, to) {
          to = to || this.length;

          if (to < 0) {
            to += this.length;
          }

          from = from || 0;

          if (from < 0) {
            from += this.length;
          }

          var ret = new Yallist();

          if (to < from || to < 0) {
            return ret;
          }

          if (from < 0) {
            from = 0;
          }

          if (to > this.length) {
            to = this.length;
          }

          for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
            walker = walker.prev;
          }

          for (; walker !== null && i > from; i--, walker = walker.prev) {
            ret.push(walker.value);
          }

          return ret;
        };

        Yallist.prototype.splice = function (
          start,
          deleteCount
          /*, ...nodes */
        ) {
          if (start > this.length) {
            start = this.length - 1;
          }

          if (start < 0) {
            start = this.length + start;
          }

          for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
            walker = walker.next;
          }

          var ret = [];

          for (var i = 0; walker && i < deleteCount; i++) {
            ret.push(walker.value);
            walker = this.removeNode(walker);
          }

          if (walker === null) {
            walker = this.tail;
          }

          if (walker !== this.head && walker !== this.tail) {
            walker = walker.prev;
          }

          for (var i = 2; i < arguments.length; i++) {
            walker = insert(this, walker, arguments[i]);
          }

          return ret;
        };

        Yallist.prototype.reverse = function () {
          var head = this.head;
          var tail = this.tail;

          for (var walker = head; walker !== null; walker = walker.prev) {
            var p = walker.prev;
            walker.prev = walker.next;
            walker.next = p;
          }

          this.head = tail;
          this.tail = head;
          return this;
        };

        function insert(self, node, value) {
          var inserted =
            node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);

          if (inserted.next === null) {
            self.tail = inserted;
          }

          if (inserted.prev === null) {
            self.head = inserted;
          }

          self.length++;
          return inserted;
        }

        function push(self, item) {
          self.tail = new Node(item, self.tail, null, self);

          if (!self.head) {
            self.head = self.tail;
          }

          self.length++;
        }

        function unshift(self, item) {
          self.head = new Node(item, null, self.head, self);

          if (!self.tail) {
            self.tail = self.head;
          }

          self.length++;
        }

        function Node(value, prev, next, list) {
          if (!(this instanceof Node)) {
            return new Node(value, prev, next, list);
          }

          this.list = list;
          this.value = value;

          if (prev) {
            prev.next = this;
            this.prev = prev;
          } else {
            this.prev = null;
          }

          if (next) {
            next.prev = this;
            this.next = next;
          } else {
            this.next = null;
          }
        }

        try {
          // add if support for Symbol.iterator is present
          __webpack_require__(25)(Yallist);
        } catch (er) {}

        /***/
      },
      /* 25 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        module.exports = function (Yallist) {
          Yallist.prototype[Symbol.iterator] = /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
            var walker;
            return regeneratorRuntime.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      walker = this.head;

                    case 1:
                      if (!walker) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 4;
                      return walker.value;

                    case 4:
                      walker = walker.next;
                      _context.next = 1;
                      break;

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              },
              _callee,
              this
            );
          });
        };

        /***/
      },
      /* 26 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * @license React
         * react-is.production.min.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        var b = Symbol.for("react.element"),
          c = Symbol.for("react.portal"),
          d = Symbol.for("react.fragment"),
          e = Symbol.for("react.strict_mode"),
          f = Symbol.for("react.profiler"),
          g = Symbol.for("react.provider"),
          h = Symbol.for("react.context"),
          k = Symbol.for("react.server_context"),
          l = Symbol.for("react.forward_ref"),
          m = Symbol.for("react.suspense"),
          n = Symbol.for("react.suspense_list"),
          p = Symbol.for("react.memo"),
          q = Symbol.for("react.lazy"),
          t = Symbol.for("react.offscreen"),
          u = Symbol.for("react.cache"),
          v = Symbol.for("react.module.reference");

        function w(a) {
          if ("object" === _typeof(a) && null !== a) {
            var r = a.$$typeof;

            switch (r) {
              case b:
                switch (((a = a.type), a)) {
                  case d:
                  case f:
                  case e:
                  case m:
                  case n:
                    return a;

                  default:
                    switch (((a = a && a.$$typeof), a)) {
                      case k:
                      case h:
                      case l:
                      case q:
                      case p:
                      case g:
                        return a;

                      default:
                        return r;
                    }
                }

              case c:
                return r;
            }
          }
        }

        exports.ContextConsumer = h;
        exports.ContextProvider = g;
        exports.Element = b;
        exports.ForwardRef = l;
        exports.Fragment = d;
        exports.Lazy = q;
        exports.Memo = p;
        exports.Portal = c;
        exports.Profiler = f;
        exports.StrictMode = e;
        exports.Suspense = m;
        exports.SuspenseList = n;

        exports.isAsyncMode = function () {
          return !1;
        };

        exports.isConcurrentMode = function () {
          return !1;
        };

        exports.isContextConsumer = function (a) {
          return w(a) === h;
        };

        exports.isContextProvider = function (a) {
          return w(a) === g;
        };

        exports.isElement = function (a) {
          return "object" === _typeof(a) && null !== a && a.$$typeof === b;
        };

        exports.isForwardRef = function (a) {
          return w(a) === l;
        };

        exports.isFragment = function (a) {
          return w(a) === d;
        };

        exports.isLazy = function (a) {
          return w(a) === q;
        };

        exports.isMemo = function (a) {
          return w(a) === p;
        };

        exports.isPortal = function (a) {
          return w(a) === c;
        };

        exports.isProfiler = function (a) {
          return w(a) === f;
        };

        exports.isStrictMode = function (a) {
          return w(a) === e;
        };

        exports.isSuspense = function (a) {
          return w(a) === m;
        };

        exports.isSuspenseList = function (a) {
          return w(a) === n;
        };

        exports.isValidElementType = function (a) {
          return "string" === typeof a ||
            "function" === typeof a ||
            a === d ||
            a === f ||
            a === e ||
            a === m ||
            a === n ||
            a === t ||
            a === u ||
            ("object" === _typeof(a) &&
              null !== a &&
              (a.$$typeof === q ||
                a.$$typeof === p ||
                a.$$typeof === g ||
                a.$$typeof === h ||
                a.$$typeof === l ||
                a.$$typeof === v ||
                void 0 !== a.getModuleId))
            ? !0
            : !1;
        };

        exports.typeOf = w;

        /***/
      },
      /* 27 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * @license React
         * react-debug-tools.production.min.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        var h = __webpack_require__(28),
          p = __webpack_require__(30),
          q = Object.assign,
          w = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = [],
          y = null;

        function z() {
          if (null === y) {
            var a = new Map();

            try {
              A.useContext({
                _currentValue: null,
              }),
                A.useState(null),
                A.useReducer(function (a) {
                  return a;
                }, null),
                A.useRef(null),
                "function" === typeof A.useCacheRefresh && A.useCacheRefresh(),
                A.useLayoutEffect(function () {}),
                A.useInsertionEffect(function () {}),
                A.useEffect(function () {}),
                A.useImperativeHandle(void 0, function () {
                  return null;
                }),
                A.useDebugValue(null),
                A.useCallback(function () {}),
                A.useMemo(function () {
                  return null;
                });
            } finally {
              var b = x;
              x = [];
            }

            for (var e = 0; e < b.length; e++) {
              var g = b[e];
              a.set(g.primitive, h.parse(g.stackError));
            }

            y = a;
          }

          return y;
        }

        var B = null;

        function C() {
          var a = B;
          null !== a && (B = a.next);
          return a;
        }

        var A = {
            readContext: function readContext(a) {
              return a._currentValue;
            },
            useCacheRefresh: function useCacheRefresh() {
              var a = C();
              x.push({
                primitive: "CacheRefresh",
                stackError: Error(),
                value: null !== a ? a.memoizedState : function () {},
              });
              return function () {};
            },
            useCallback: function useCallback(a) {
              var b = C();
              x.push({
                primitive: "Callback",
                stackError: Error(),
                value: null !== b ? b.memoizedState[0] : a,
              });
              return a;
            },
            useContext: function useContext(a) {
              x.push({
                primitive: "Context",
                stackError: Error(),
                value: a._currentValue,
              });
              return a._currentValue;
            },
            useEffect: function useEffect(a) {
              C();
              x.push({
                primitive: "Effect",
                stackError: Error(),
                value: a,
              });
            },
            useImperativeHandle: function useImperativeHandle(a) {
              C();
              var b = void 0;
              null !== a && "object" === _typeof(a) && (b = a.current);
              x.push({
                primitive: "ImperativeHandle",
                stackError: Error(),
                value: b,
              });
            },
            useDebugValue: function useDebugValue(a, b) {
              x.push({
                primitive: "DebugValue",
                stackError: Error(),
                value: "function" === typeof b ? b(a) : a,
              });
            },
            useLayoutEffect: function useLayoutEffect(a) {
              C();
              x.push({
                primitive: "LayoutEffect",
                stackError: Error(),
                value: a,
              });
            },
            useInsertionEffect: function useInsertionEffect(a) {
              C();
              x.push({
                primitive: "InsertionEffect",
                stackError: Error(),
                value: a,
              });
            },
            useMemo: function useMemo(a) {
              var b = C();
              a = null !== b ? b.memoizedState[0] : a();
              x.push({
                primitive: "Memo",
                stackError: Error(),
                value: a,
              });
              return a;
            },
            useReducer: function useReducer(a, b, e) {
              a = C();
              b = null !== a ? a.memoizedState : void 0 !== e ? e(b) : b;
              x.push({
                primitive: "Reducer",
                stackError: Error(),
                value: b,
              });
              return [b, function () {}];
            },
            useRef: function useRef(a) {
              var b = C();
              a =
                null !== b
                  ? b.memoizedState
                  : {
                      current: a,
                    };
              x.push({
                primitive: "Ref",
                stackError: Error(),
                value: a.current,
              });
              return a;
            },
            useState: function useState(a) {
              var b = C();
              a = null !== b ? b.memoizedState : "function" === typeof a ? a() : a;
              x.push({
                primitive: "State",
                stackError: Error(),
                value: a,
              });
              return [a, function () {}];
            },
            useTransition: function useTransition() {
              C();
              C();
              x.push({
                primitive: "Transition",
                stackError: Error(),
                value: void 0,
              });
              return [!1, function () {}];
            },
            useMutableSource: function useMutableSource(a, b) {
              C();
              C();
              C();
              C();
              a = b(a._source);
              x.push({
                primitive: "MutableSource",
                stackError: Error(),
                value: a,
              });
              return a;
            },
            useSyncExternalStore: function useSyncExternalStore(a, b) {
              C();
              C();
              a = b();
              x.push({
                primitive: "SyncExternalStore",
                stackError: Error(),
                value: a,
              });
              return a;
            },
            useDeferredValue: function useDeferredValue(a) {
              var b = C();
              x.push({
                primitive: "DeferredValue",
                stackError: Error(),
                value: null !== b ? b.memoizedState : a,
              });
              return a;
            },
            useId: function useId() {
              var a = C();
              a = null !== a ? a.memoizedState : "";
              x.push({
                primitive: "Id",
                stackError: Error(),
                value: a,
              });
              return a;
            },
          },
          D = {
            get: function get(a, b) {
              if (a.hasOwnProperty(b)) return a[b];
              a = Error("Missing method in Dispatcher: " + b);
              a.name = "ReactDebugToolsUnsupportedHookError";
              throw a;
            },
          },
          E = "undefined" === typeof Proxy ? A : new Proxy(A, D),
          F = 0;

        function G(a, b, e) {
          var g = b[e].source,
            c = 0;

          a: for (; c < a.length; c++) {
            if (a[c].source === g) {
              for (var l = e + 1, r = c + 1; l < b.length && r < a.length; l++, r++) {
                if (a[r].source !== b[l].source) continue a;
              }

              return c;
            }
          }

          return -1;
        }

        function H(a, b) {
          if (!a) return !1;
          b = "use" + b;
          return a.length < b.length ? !1 : a.lastIndexOf(b) === a.length - b.length;
        }

        function I(a, b, e) {
          for (var g = [], c = null, l = g, r = 0, t = [], v = 0; v < b.length; v++) {
            var u = b[v];
            var d = a;
            var k = h.parse(u.stackError);

            b: {
              var m = k,
                n = G(m, d, F);
              if (-1 !== n) d = n;
              else {
                for (var f = 0; f < d.length && 5 > f; f++) {
                  if (((n = G(m, d, f)), -1 !== n)) {
                    F = f;
                    d = n;
                    break b;
                  }
                }

                d = -1;
              }
            }

            b: {
              m = k;
              n = z().get(u.primitive);
              if (void 0 !== n)
                for (f = 0; f < n.length && f < m.length; f++) {
                  if (n[f].source !== m[f].source) {
                    f < m.length - 1 && H(m[f].functionName, u.primitive) && f++;
                    f < m.length - 1 && H(m[f].functionName, u.primitive) && f++;
                    m = f;
                    break b;
                  }
                }
              m = -1;
            }

            k = -1 === d || -1 === m || 2 > d - m ? null : k.slice(m, d - 1);

            if (null !== k) {
              d = 0;

              if (null !== c) {
                for (; d < k.length && d < c.length && k[k.length - d - 1].source === c[c.length - d - 1].source; ) {
                  d++;
                }

                for (c = c.length - 1; c > d; c--) {
                  l = t.pop();
                }
              }

              for (c = k.length - d - 1; 1 <= c; c--) {
                (d = []),
                  (m = k[c]),
                  (n = k[c - 1].functionName)
                    ? ((f = n.lastIndexOf(".")),
                      -1 === f && (f = 0),
                      "use" === n.substr(f, 3) && (f += 3),
                      (n = n.substr(f)))
                    : (n = ""),
                  (n = {
                    id: null,
                    isStateEditable: !1,
                    name: n,
                    value: void 0,
                    subHooks: d,
                  }),
                  e &&
                    (n.hookSource = {
                      lineNumber: m.lineNumber,
                      columnNumber: m.columnNumber,
                      functionName: m.functionName,
                      fileName: m.fileName,
                    }),
                  l.push(n),
                  t.push(l),
                  (l = d);
              }

              c = k;
            }

            d = u.primitive;
            u = {
              id: "Context" === d || "DebugValue" === d ? null : r++,
              isStateEditable: "Reducer" === d || "State" === d,
              name: d,
              value: u.value,
              subHooks: [],
            };
            e &&
              ((d = {
                lineNumber: null,
                functionName: null,
                fileName: null,
                columnNumber: null,
              }),
              k &&
                1 <= k.length &&
                ((k = k[0]),
                (d.lineNumber = k.lineNumber),
                (d.functionName = k.functionName),
                (d.fileName = k.fileName),
                (d.columnNumber = k.columnNumber)),
              (u.hookSource = d));
            l.push(u);
          }

          J(g, null);
          return g;
        }

        function J(a, b) {
          for (var e = [], g = 0; g < a.length; g++) {
            var c = a[g];
            "DebugValue" === c.name && 0 === c.subHooks.length ? (a.splice(g, 1), g--, e.push(c)) : J(c.subHooks, c);
          }

          null !== b &&
            (1 === e.length
              ? (b.value = e[0].value)
              : 1 < e.length &&
                (b.value = e.map(function (a) {
                  return a.value;
                })));
        }

        function K(a) {
          if (a instanceof Error && "ReactDebugToolsUnsupportedHookError" === a.name) throw a;
          var b = Error("Error rendering inspected component", {
            cause: a,
          });
          b.name = "ReactDebugToolsRenderError";
          b.cause = a;
          throw b;
        }

        function L(a, b, e) {
          var g = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !1;
          null == e && (e = w.ReactCurrentDispatcher);
          var c = e.current;
          e.current = E;

          try {
            var l = Error();
            a(b);
          } catch (t) {
            K(t);
          } finally {
            var r = x;
            x = [];
            e.current = c;
          }

          c = h.parse(l);
          return I(c, r, g);
        }

        function M(a) {
          a.forEach(function (a, e) {
            return (e._currentValue = a);
          });
        }

        exports.inspectHooks = L;

        exports.inspectHooksOfFiber = function (a, b) {
          var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
          null == b && (b = w.ReactCurrentDispatcher);
          if (0 !== a.tag && 15 !== a.tag && 11 !== a.tag)
            throw Error("Unknown Fiber. Needs to be a function component to inspect hooks.");
          z();
          var g = a.type,
            c = a.memoizedProps;

          if (g !== a.elementType && g && g.defaultProps) {
            c = q({}, c);
            var l = g.defaultProps;

            for (r in l) {
              void 0 === c[r] && (c[r] = l[r]);
            }
          }

          B = a.memoizedState;
          var r = new Map();

          try {
            for (l = a; l; ) {
              if (10 === l.tag) {
                var t = l.type._context;
                r.has(t) || (r.set(t, t._currentValue), (t._currentValue = l.memoizedProps.value));
              }

              l = l.return;
            }

            if (11 === a.tag) {
              var v = g.render;
              g = c;
              var u = a.ref;
              t = b;
              var d = t.current;
              t.current = E;

              try {
                var k = Error();
                v(g, u);
              } catch (f) {
                K(f);
              } finally {
                var m = x;
                x = [];
                t.current = d;
              }

              var n = h.parse(k);
              return I(n, m, e);
            }

            return L(g, c, b, e);
          } finally {
            (B = null), M(r);
          }
        };

        /***/
      },
      /* 28 */
      /***/ function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        (function (root, factory) {
          "use strict"; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

          /* istanbul ignore next */

          if (true) {
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(29)]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(this, function ErrorStackParser(StackFrame) {
          "use strict";

          var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
          var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
          var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
          return {
            /**
             * Given an Error object, extract the most information from it.
             *
             * @param {Error} error object
             * @return {Array} of StackFrames
             */
            parse: function ErrorStackParser$$parse(error) {
              if (typeof error.stacktrace !== "undefined" || typeof error["opera#sourceloc"] !== "undefined") {
                return this.parseOpera(error);
              } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
              } else if (error.stack) {
                return this.parseFFOrSafari(error);
              } else {
                throw new Error("Cannot parse given Error object");
              }
            },
            // Separate line and column numbers from a string of the form: (URI:Line:Column)
            extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
              // Fail-fast but return locations like "(native)"
              if (urlLike.indexOf(":") === -1) {
                return [urlLike];
              }

              var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
              var parts = regExp.exec(urlLike.replace(/[()]/g, ""));
              return [parts[1], parts[2] || undefined, parts[3] || undefined];
            },
            parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
              var filtered = error.stack.split("\n").filter(function (line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
              }, this);
              return filtered.map(function (line) {
                if (line.indexOf("(eval ") > -1) {
                  // Throw away eval information until we implement stacktrace.js/stackframe#8
                  line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, "");
                }

                var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "("); // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
                // case it has spaces in it, as the string is split on \s+ later on

                var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/); // remove the parenthesized location from the line, if it was matched

                sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
                var tokens = sanitizedLine.split(/\s+/).slice(1); // if a location was matched, pass it to extractLocation() otherwise pop the last token

                var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
                var functionName = tokens.join(" ") || undefined;
                var fileName = ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
                return new StackFrame({
                  functionName: functionName,
                  fileName: fileName,
                  lineNumber: locationParts[1],
                  columnNumber: locationParts[2],
                  source: line,
                });
              }, this);
            },
            parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
              var filtered = error.stack.split("\n").filter(function (line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
              }, this);
              return filtered.map(function (line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(" > eval") > -1) {
                  line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
                }

                if (line.indexOf("@") === -1 && line.indexOf(":") === -1) {
                  // Safari eval frames only have function names and nothing else
                  return new StackFrame({
                    functionName: line,
                  });
                } else {
                  var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                  var matches = line.match(functionNameRegex);
                  var functionName = matches && matches[1] ? matches[1] : undefined;
                  var locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
                  return new StackFrame({
                    functionName: functionName,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line,
                  });
                }
              }, this);
            },
            parseOpera: function ErrorStackParser$$parseOpera(e) {
              if (
                !e.stacktrace ||
                (e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length)
              ) {
                return this.parseOpera9(e);
              } else if (!e.stack) {
                return this.parseOpera10(e);
              } else {
                return this.parseOpera11(e);
              }
            },
            parseOpera9: function ErrorStackParser$$parseOpera9(e) {
              var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
              var lines = e.message.split("\n");
              var result = [];

              for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);

                if (match) {
                  result.push(
                    new StackFrame({
                      fileName: match[2],
                      lineNumber: match[1],
                      source: lines[i],
                    })
                  );
                }
              }

              return result;
            },
            parseOpera10: function ErrorStackParser$$parseOpera10(e) {
              var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
              var lines = e.stacktrace.split("\n");
              var result = [];

              for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);

                if (match) {
                  result.push(
                    new StackFrame({
                      functionName: match[3] || undefined,
                      fileName: match[2],
                      lineNumber: match[1],
                      source: lines[i],
                    })
                  );
                }
              }

              return result;
            },
            // Opera 10.65+ Error.stack very similar to FF/Safari
            parseOpera11: function ErrorStackParser$$parseOpera11(error) {
              var filtered = error.stack.split("\n").filter(function (line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
              }, this);
              return filtered.map(function (line) {
                var tokens = line.split("@");
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = tokens.shift() || "";
                var functionName =
                  functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || undefined;
                var argsRaw;

                if (functionCall.match(/\(([^)]*)\)/)) {
                  argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1");
                }

                var args =
                  argsRaw === undefined || argsRaw === "[arguments not available]" ? undefined : argsRaw.split(",");
                return new StackFrame({
                  functionName: functionName,
                  args: args,
                  fileName: locationParts[0],
                  lineNumber: locationParts[1],
                  columnNumber: locationParts[2],
                  source: line,
                });
              }, this);
            },
          };
        });

        /***/
      },
      /* 29 */
      /***/ function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        (function (root, factory) {
          "use strict"; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

          /* istanbul ignore next */

          if (true) {
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(this, function () {
          "use strict";

          function _isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
          }

          function _capitalize(str) {
            return str.charAt(0).toUpperCase() + str.substring(1);
          }

          function _getter(p) {
            return function () {
              return this[p];
            };
          }

          var booleanProps = ["isConstructor", "isEval", "isNative", "isToplevel"];
          var numericProps = ["columnNumber", "lineNumber"];
          var stringProps = ["fileName", "functionName", "source"];
          var arrayProps = ["args"];
          var props = booleanProps.concat(numericProps, stringProps, arrayProps);

          function StackFrame(obj) {
            if (!obj) return;

            for (var i = 0; i < props.length; i++) {
              if (obj[props[i]] !== undefined) {
                this["set" + _capitalize(props[i])](obj[props[i]]);
              }
            }
          }

          StackFrame.prototype = {
            getArgs: function getArgs() {
              return this.args;
            },
            setArgs: function setArgs(v) {
              if (Object.prototype.toString.call(v) !== "[object Array]") {
                throw new TypeError("Args must be an Array");
              }

              this.args = v;
            },
            getEvalOrigin: function getEvalOrigin() {
              return this.evalOrigin;
            },
            setEvalOrigin: function setEvalOrigin(v) {
              if (v instanceof StackFrame) {
                this.evalOrigin = v;
              } else if (v instanceof Object) {
                this.evalOrigin = new StackFrame(v);
              } else {
                throw new TypeError("Eval Origin must be an Object or StackFrame");
              }
            },
            toString: function toString() {
              var fileName = this.getFileName() || "";
              var lineNumber = this.getLineNumber() || "";
              var columnNumber = this.getColumnNumber() || "";
              var functionName = this.getFunctionName() || "";

              if (this.getIsEval()) {
                if (fileName) {
                  return "[eval] (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
                }

                return "[eval]:" + lineNumber + ":" + columnNumber;
              }

              if (functionName) {
                return functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
              }

              return fileName + ":" + lineNumber + ":" + columnNumber;
            },
          };

          StackFrame.fromString = function StackFrame$$fromString(str) {
            var argsStartIndex = str.indexOf("(");
            var argsEndIndex = str.lastIndexOf(")");
            var functionName = str.substring(0, argsStartIndex);
            var args = str.substring(argsStartIndex + 1, argsEndIndex).split(",");
            var locationString = str.substring(argsEndIndex + 1);

            if (locationString.indexOf("@") === 0) {
              var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, "");
              var fileName = parts[1];
              var lineNumber = parts[2];
              var columnNumber = parts[3];
            }

            return new StackFrame({
              functionName: functionName,
              args: args || undefined,
              fileName: fileName,
              lineNumber: lineNumber || undefined,
              columnNumber: columnNumber || undefined,
            });
          };

          for (var i = 0; i < booleanProps.length; i++) {
            StackFrame.prototype["get" + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);

            StackFrame.prototype["set" + _capitalize(booleanProps[i])] = (function (p) {
              return function (v) {
                this[p] = Boolean(v);
              };
            })(booleanProps[i]);
          }

          for (var j = 0; j < numericProps.length; j++) {
            StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]);

            StackFrame.prototype["set" + _capitalize(numericProps[j])] = (function (p) {
              return function (v) {
                if (!_isNumber(v)) {
                  throw new TypeError(p + " must be a Number");
                }

                this[p] = Number(v);
              };
            })(numericProps[j]);
          }

          for (var k = 0; k < stringProps.length; k++) {
            StackFrame.prototype["get" + _capitalize(stringProps[k])] = _getter(stringProps[k]);

            StackFrame.prototype["set" + _capitalize(stringProps[k])] = (function (p) {
              return function (v) {
                this[p] = String(v);
              };
            })(stringProps[k]);
          }

          return StackFrame;
        });

        /***/
      },
      /* 30 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        if (true) {
          module.exports = __webpack_require__(31);
        } else {
        }

        /***/
      },
      /* 31 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * @license React
         * react.production.min.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        var l = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          p = Symbol.for("react.fragment"),
          q = Symbol.for("react.strict_mode"),
          r = Symbol.for("react.profiler"),
          t = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          v = Symbol.for("react.server_context"),
          w = Symbol.for("react.forward_ref"),
          x = Symbol.for("react.suspense"),
          y = Symbol.for("react.suspense_list"),
          z = Symbol.for("react.memo"),
          A = Symbol.for("react.lazy"),
          aa = Symbol.for("react.debug_trace_mode"),
          ba = Symbol.for("react.offscreen"),
          ca = Symbol.for("react.cache"),
          B = Symbol.for("react.default_value"),
          C = Symbol.iterator;

        function da(a) {
          if (null === a || "object" !== _typeof(a)) return null;
          a = (C && a[C]) || a["@@iterator"];
          return "function" === typeof a ? a : null;
        }

        var D = {
            isMounted: function isMounted() {
              return !1;
            },
            enqueueForceUpdate: function enqueueForceUpdate() {},
            enqueueReplaceState: function enqueueReplaceState() {},
            enqueueSetState: function enqueueSetState() {},
          },
          E = Object.assign,
          F = {};

        function G(a, b, d) {
          this.props = a;
          this.context = b;
          this.refs = F;
          this.updater = d || D;
        }

        G.prototype.isReactComponent = {};

        G.prototype.setState = function (a, b) {
          if ("object" !== _typeof(a) && "function" !== typeof a && null != a)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, a, b, "setState");
        };

        G.prototype.forceUpdate = function (a) {
          this.updater.enqueueForceUpdate(this, a, "forceUpdate");
        };

        function H() {}

        H.prototype = G.prototype;

        function I(a, b, d) {
          this.props = a;
          this.context = b;
          this.refs = F;
          this.updater = d || D;
        }

        var J = (I.prototype = new H());
        J.constructor = I;
        E(J, G.prototype);
        J.isPureReactComponent = !0;
        var K = Array.isArray,
          L = Object.prototype.hasOwnProperty,
          M = {
            current: null,
          },
          N = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0,
          };

        function O(a, b, d) {
          var c,
            e = {},
            f = null,
            g = null;
          if (null != b)
            for (c in (void 0 !== b.ref && (g = b.ref), void 0 !== b.key && (f = "" + b.key), b)) {
              L.call(b, c) && !N.hasOwnProperty(c) && (e[c] = b[c]);
            }
          var h = arguments.length - 2;
          if (1 === h) e.children = d;
          else if (1 < h) {
            for (var k = Array(h), m = 0; m < h; m++) {
              k[m] = arguments[m + 2];
            }

            e.children = k;
          }
          if (a && a.defaultProps)
            for (c in ((h = a.defaultProps), h)) {
              void 0 === e[c] && (e[c] = h[c]);
            }
          return {
            $$typeof: l,
            type: a,
            key: f,
            ref: g,
            props: e,
            _owner: M.current,
          };
        }

        function ea(a, b) {
          return {
            $$typeof: l,
            type: a.type,
            key: b,
            ref: a.ref,
            props: a.props,
            _owner: a._owner,
          };
        }

        function P(a) {
          return "object" === _typeof(a) && null !== a && a.$$typeof === l;
        }

        function escape(a) {
          var b = {
            "=": "=0",
            ":": "=2",
          };
          return (
            "$" +
            a.replace(/[=:]/g, function (a) {
              return b[a];
            })
          );
        }

        var Q = /\/+/g;

        function R(a, b) {
          return "object" === _typeof(a) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
        }

        function S(a, b, d, c, e) {
          var f = _typeof(a);

          if ("undefined" === f || "boolean" === f) a = null;
          var g = !1;
          if (null === a) g = !0;
          else
            switch (f) {
              case "string":
              case "number":
                g = !0;
                break;

              case "object":
                switch (a.$$typeof) {
                  case l:
                  case n:
                    g = !0;
                }
            }
          if (g)
            return (
              (g = a),
              (e = e(g)),
              (a = "" === c ? "." + R(g, 0) : c),
              K(e)
                ? ((d = ""),
                  null != a && (d = a.replace(Q, "$&/") + "/"),
                  S(e, b, d, "", function (a) {
                    return a;
                  }))
                : null != e &&
                  (P(e) &&
                    (e = ea(e, d + (!e.key || (g && g.key === e.key) ? "" : ("" + e.key).replace(Q, "$&/") + "/") + a)),
                  b.push(e)),
              1
            );
          g = 0;
          c = "" === c ? "." : c + ":";
          if (K(a))
            for (var h = 0; h < a.length; h++) {
              f = a[h];
              var k = c + R(f, h);
              g += S(f, b, d, k, e);
            }
          else if (((k = da(a)), "function" === typeof k))
            for (a = k.call(a), h = 0; !(f = a.next()).done; ) {
              (f = f.value), (k = c + R(f, h++)), (g += S(f, b, d, k, e));
            }
          else if ("object" === f)
            throw (
              ((b = String(a)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return g;
        }

        function T(a, b, d) {
          if (null == a) return a;
          var c = [],
            e = 0;
          S(a, c, "", "", function (a) {
            return b.call(d, a, e++);
          });
          return c;
        }

        function fa(a) {
          if (-1 === a._status) {
            var b = a._result;
            b = b();
            b.then(
              function (b) {
                if (0 === a._status || -1 === a._status) (a._status = 1), (a._result = b);
              },
              function (b) {
                if (0 === a._status || -1 === a._status) (a._status = 2), (a._result = b);
              }
            );
            -1 === a._status && ((a._status = 0), (a._result = b));
          }

          if (1 === a._status) return a._result.default;
          throw a._result;
        }

        var U = {
          current: null,
        };

        function ha() {
          return new WeakMap();
        }

        function V() {
          return {
            s: 0,
            v: void 0,
            o: null,
            p: null,
          };
        }

        var W = {
            current: null,
          },
          X = {
            transition: null,
          },
          Y = {
            ReactCurrentDispatcher: W,
            ReactCurrentCache: U,
            ReactCurrentBatchConfig: X,
            ReactCurrentOwner: M,
            ContextRegistry: {},
          },
          Z = Y.ContextRegistry;
        exports.Children = {
          map: T,
          forEach: function forEach(a, b, d) {
            T(
              a,
              function () {
                b.apply(this, arguments);
              },
              d
            );
          },
          count: function count(a) {
            var b = 0;
            T(a, function () {
              b++;
            });
            return b;
          },
          toArray: function toArray(a) {
            return (
              T(a, function (a) {
                return a;
              }) || []
            );
          },
          only: function only(a) {
            if (!P(a)) throw Error("React.Children.only expected to receive a single React element child.");
            return a;
          },
        };
        exports.Component = G;
        exports.Fragment = p;
        exports.Profiler = r;
        exports.PureComponent = I;
        exports.StrictMode = q;
        exports.Suspense = x;
        exports.SuspenseList = y;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;

        exports.cache = function (a) {
          return function () {
            var b = U.current;
            if (!b) return a.apply(null, arguments);
            var d = b.getCacheForType(ha);
            b = d.get(a);
            void 0 === b && ((b = V()), d.set(a, b));
            d = 0;

            for (var c = arguments.length; d < c; d++) {
              var e = arguments[d];

              if ("function" === typeof e || ("object" === _typeof(e) && null !== e)) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap());
                b = f.get(e);
                void 0 === b && ((b = V()), f.set(e, b));
              } else
                (f = b.p),
                  null === f && (b.p = f = new Map()),
                  (b = f.get(e)),
                  void 0 === b && ((b = V()), f.set(e, b));
            }

            if (1 === b.s) return b.v;
            if (2 === b.s) throw b.v;

            try {
              var g = a.apply(null, arguments);
              d = b;
              d.s = 1;
              return (d.v = g);
            } catch (h) {
              throw ((g = b), (g.s = 2), (g.v = h), h);
            }
          };
        };

        exports.cloneElement = function (a, b, d) {
          if (null === a || void 0 === a)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
          var c = E({}, a.props),
            e = a.key,
            f = a.ref,
            g = a._owner;

          if (null != b) {
            void 0 !== b.ref && ((f = b.ref), (g = M.current));
            void 0 !== b.key && (e = "" + b.key);
            if (a.type && a.type.defaultProps) var h = a.type.defaultProps;

            for (k in b) {
              L.call(b, k) && !N.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== h ? h[k] : b[k]);
            }
          }

          var k = arguments.length - 2;
          if (1 === k) c.children = d;
          else if (1 < k) {
            h = Array(k);

            for (var m = 0; m < k; m++) {
              h[m] = arguments[m + 2];
            }

            c.children = h;
          }
          return {
            $$typeof: l,
            type: a.type,
            key: e,
            ref: f,
            props: c,
            _owner: g,
          };
        };

        exports.createContext = function (a) {
          a = {
            $$typeof: u,
            _currentValue: a,
            _currentValue2: a,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          };
          a.Provider = {
            $$typeof: t,
            _context: a,
          };
          return (a.Consumer = a);
        };

        exports.createElement = O;

        exports.createFactory = function (a) {
          var b = O.bind(null, a);
          b.type = a;
          return b;
        };

        exports.createRef = function () {
          return {
            current: null,
          };
        };

        exports.createServerContext = function (a, b) {
          var d = !0;

          if (!Z[a]) {
            d = !1;
            var c = {
              $$typeof: v,
              _currentValue: b,
              _currentValue2: b,
              _defaultValue: b,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _globalName: a,
            };
            c.Provider = {
              $$typeof: t,
              _context: c,
            };
            Z[a] = c;
          }

          c = Z[a];
          if (c._defaultValue === B)
            (c._defaultValue = b),
              c._currentValue === B && (c._currentValue = b),
              c._currentValue2 === B && (c._currentValue2 = b);
          else if (d) throw Error("ServerContext: " + a + " already defined");
          return c;
        };

        exports.experimental_useEvent = function (a) {
          return W.current.useEvent(a);
        };

        exports.forwardRef = function (a) {
          return {
            $$typeof: w,
            render: a,
          };
        };

        exports.isValidElement = P;

        exports.lazy = function (a) {
          return {
            $$typeof: A,
            _payload: {
              _status: -1,
              _result: a,
            },
            _init: fa,
          };
        };

        exports.memo = function (a, b) {
          return {
            $$typeof: z,
            type: a,
            compare: void 0 === b ? null : b,
          };
        };

        exports.startTransition = function (a) {
          var b = X.transition;
          X.transition = {};

          try {
            a();
          } finally {
            X.transition = b;
          }
        };

        exports.unstable_Cache = ca;
        exports.unstable_DebugTracingMode = aa;
        exports.unstable_Offscreen = ba;

        exports.unstable_act = function () {
          throw Error("act(...) is not supported in production builds of React.");
        };

        exports.unstable_getCacheForType = function (a) {
          var b = U.current;
          return b ? b.getCacheForType(a) : a();
        };

        exports.unstable_getCacheSignal = function () {
          var a = U.current;
          return a
            ? a.getCacheSignal()
            : ((a = new AbortController()),
              a.abort(
                Error("This CacheSignal was requested outside React which means that it is immediately aborted.")
              ),
              a.signal);
        };

        exports.unstable_useCacheRefresh = function () {
          return W.current.useCacheRefresh();
        };

        exports.unstable_useMemoCache = function (a) {
          return W.current.useMemoCache(a);
        };

        exports.use = function (a) {
          return W.current.use(a);
        };

        exports.useCallback = function (a, b) {
          return W.current.useCallback(a, b);
        };

        exports.useContext = function (a) {
          return W.current.useContext(a);
        };

        exports.useDebugValue = function () {};

        exports.useDeferredValue = function (a) {
          return W.current.useDeferredValue(a);
        };

        exports.useEffect = function (a, b) {
          return W.current.useEffect(a, b);
        };

        exports.useId = function () {
          return W.current.useId();
        };

        exports.useImperativeHandle = function (a, b, d) {
          return W.current.useImperativeHandle(a, b, d);
        };

        exports.useInsertionEffect = function (a, b) {
          return W.current.useInsertionEffect(a, b);
        };

        exports.useLayoutEffect = function (a, b) {
          return W.current.useLayoutEffect(a, b);
        };

        exports.useMemo = function (a, b) {
          return W.current.useMemo(a, b);
        };

        exports.useReducer = function (a, b, d) {
          return W.current.useReducer(a, b, d);
        };

        exports.useRef = function (a) {
          return W.current.useRef(a);
        };

        exports.useState = function (a) {
          return W.current.useState(a);
        };

        exports.useSyncExternalStore = function (a, b, d) {
          return W.current.useSyncExternalStore(a, b, d);
        };

        exports.useTransition = function () {
          return W.current.useTransition();
        };

        exports.version = "18.3.0-experimental-d69b2cf82-20221206";

        /***/
      },
      /* 32 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, "connectToDevTools", function () {
          return /* binding */ connectToDevTools;
        });

        // CONCATENATED MODULE: ../react-devtools-shared/src/events.js
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        var EventEmitter = /*#__PURE__*/ (function () {
          function EventEmitter() {
            _classCallCheck(this, EventEmitter);

            _defineProperty(this, "listenersMap", new Map());
          }

          _createClass(EventEmitter, [
            {
              key: "addListener",
              value: function addListener(event, listener) {
                var listeners = this.listenersMap.get(event);

                if (listeners === undefined) {
                  this.listenersMap.set(event, [listener]);
                } else {
                  var index = listeners.indexOf(listener);

                  if (index < 0) {
                    listeners.push(listener);
                  }
                }
              },
            },
            {
              key: "emit",
              value: function emit(event) {
                var listeners = this.listenersMap.get(event);

                if (listeners !== undefined) {
                  for (
                    var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
                    _key < _len;
                    _key++
                  ) {
                    args[_key - 1] = arguments[_key];
                  }

                  if (listeners.length === 1) {
                    // No need to clone or try/catch
                    var listener = listeners[0];
                    listener.apply(null, args);
                  } else {
                    var didThrow = false;
                    var caughtError = null;
                    var clonedListeners = Array.from(listeners);

                    for (var i = 0; i < clonedListeners.length; i++) {
                      var _listener = clonedListeners[i];

                      try {
                        _listener.apply(null, args);
                      } catch (error) {
                        if (caughtError === null) {
                          didThrow = true;
                          caughtError = error;
                        }
                      }
                    }

                    if (didThrow) {
                      throw caughtError;
                    }
                  }
                }
              },
            },
            {
              key: "removeAllListeners",
              value: function removeAllListeners() {
                this.listenersMap.clear();
              },
            },
            {
              key: "removeListener",
              value: function removeListener(event, listener) {
                var listeners = this.listenersMap.get(event);

                if (listeners !== undefined) {
                  var index = listeners.indexOf(listener);

                  if (index >= 0) {
                    listeners.splice(index, 1);
                  }
                }
              },
            },
          ]);

          return EventEmitter;
        })();

        // EXTERNAL MODULE: /Users/mengdi/workspace/git/react-release/node_modules/lodash.throttle/index.js
        var lodash_throttle = __webpack_require__(14);
        var lodash_throttle_default = /*#__PURE__*/ __webpack_require__.n(lodash_throttle);

        // EXTERNAL MODULE: ../react-devtools-shared/src/constants.js
        var constants = __webpack_require__(2);

        // EXTERNAL MODULE: ../react-devtools-shared/src/storage.js
        var storage = __webpack_require__(5);

        // CONCATENATED MODULE: /Users/mengdi/workspace/git/react-release/node_modules/memoize-one/esm/index.js
        var simpleIsEqual = function simpleIsEqual(a, b) {
          return a === b;
        };

        /* harmony default export */ var esm = function (resultFn) {
          var isEqual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : simpleIsEqual;
          var lastThis = void 0;
          var lastArgs = [];
          var lastResult = void 0;
          var calledOnce = false;

          var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
            return isEqual(newArg, lastArgs[index]);
          };

          var result = function result() {
            for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) {
              newArgs[_key] = arguments[_key];
            }

            if (
              calledOnce &&
              lastThis === this &&
              newArgs.length === lastArgs.length &&
              newArgs.every(isNewArgEqualToLast)
            ) {
              return lastResult;
            }

            calledOnce = true;
            lastThis = this;
            lastArgs = newArgs;
            lastResult = resultFn.apply(this, newArgs);
            return lastResult;
          };

          return result;
        };
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/utils.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        // Get the window object for the document that a node belongs to,
        // or return null if it cannot be found (node not attached to DOM,
        // etc).
        function getOwnerWindow(node) {
          if (!node.ownerDocument) {
            return null;
          }

          return node.ownerDocument.defaultView;
        } // Get the iframe containing a node, or return null if it cannot
        // be found (node not within iframe, etc).

        function getOwnerIframe(node) {
          var nodeWindow = getOwnerWindow(node);

          if (nodeWindow) {
            return nodeWindow.frameElement;
          }

          return null;
        } // Get a bounding client rect for a node, with an
        // offset added to compensate for its border.

        function getBoundingClientRectWithBorderOffset(node) {
          var dimensions = getElementDimensions(node);
          return mergeRectOffsets([
            node.getBoundingClientRect(),
            {
              top: dimensions.borderTop,
              left: dimensions.borderLeft,
              bottom: dimensions.borderBottom,
              right: dimensions.borderRight,
              // This width and height won't get used by mergeRectOffsets (since this
              // is not the first rect in the array), but we set them so that this
              // object type checks as a ClientRect.
              width: 0,
              height: 0,
            },
          ]);
        } // Add together the top, left, bottom, and right properties of
        // each ClientRect, but keep the width and height of the first one.

        function mergeRectOffsets(rects) {
          return rects.reduce(function (previousRect, rect) {
            if (previousRect == null) {
              return rect;
            }

            return {
              top: previousRect.top + rect.top,
              left: previousRect.left + rect.left,
              width: previousRect.width,
              height: previousRect.height,
              bottom: previousRect.bottom + rect.bottom,
              right: previousRect.right + rect.right,
            };
          });
        } // Calculate a boundingClientRect for a node relative to boundaryWindow,
        // taking into account any offsets caused by intermediate iframes.

        function getNestedBoundingClientRect(node, boundaryWindow) {
          var ownerIframe = getOwnerIframe(node);

          if (ownerIframe && ownerIframe !== boundaryWindow) {
            var rects = [node.getBoundingClientRect()];
            var currentIframe = ownerIframe;
            var onlyOneMore = false;

            while (currentIframe) {
              var rect = getBoundingClientRectWithBorderOffset(currentIframe);
              rects.push(rect);
              currentIframe = getOwnerIframe(currentIframe);

              if (onlyOneMore) {
                break;
              } // We don't want to calculate iframe offsets upwards beyond
              // the iframe containing the boundaryWindow, but we
              // need to calculate the offset relative to the boundaryWindow.

              if (currentIframe && getOwnerWindow(currentIframe) === boundaryWindow) {
                onlyOneMore = true;
              }
            }

            return mergeRectOffsets(rects);
          } else {
            return node.getBoundingClientRect();
          }
        }
        function getElementDimensions(domElement) {
          var calculatedStyle = window.getComputedStyle(domElement);
          return {
            borderLeft: parseInt(calculatedStyle.borderLeftWidth, 10),
            borderRight: parseInt(calculatedStyle.borderRightWidth, 10),
            borderTop: parseInt(calculatedStyle.borderTopWidth, 10),
            borderBottom: parseInt(calculatedStyle.borderBottomWidth, 10),
            marginLeft: parseInt(calculatedStyle.marginLeft, 10),
            marginRight: parseInt(calculatedStyle.marginRight, 10),
            marginTop: parseInt(calculatedStyle.marginTop, 10),
            marginBottom: parseInt(calculatedStyle.marginBottom, 10),
            paddingLeft: parseInt(calculatedStyle.paddingLeft, 10),
            paddingRight: parseInt(calculatedStyle.paddingRight, 10),
            paddingTop: parseInt(calculatedStyle.paddingTop, 10),
            paddingBottom: parseInt(calculatedStyle.paddingBottom, 10),
          };
        }
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/Highlighter/Overlay.js
        function Overlay_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function Overlay_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function Overlay_createClass(Constructor, protoProps, staticProps) {
          if (protoProps) Overlay_defineProperties(Constructor.prototype, protoProps);
          if (staticProps) Overlay_defineProperties(Constructor, staticProps);
          return Constructor;
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        var Overlay_assign = Object.assign; // Note that the Overlay components are not affected by the active Theme,
        // because they highlight elements in the main Chrome window (outside of devtools).
        // The colors below were chosen to roughly match those used by Chrome devtools.

        var OverlayRect = /*#__PURE__*/ (function () {
          function OverlayRect(doc, container) {
            Overlay_classCallCheck(this, OverlayRect);

            this.node = doc.createElement("div");
            this.border = doc.createElement("div");
            this.padding = doc.createElement("div");
            this.content = doc.createElement("div");
            this.border.style.borderColor = overlayStyles.border;
            this.padding.style.borderColor = overlayStyles.padding;
            this.content.style.backgroundColor = overlayStyles.background;
            Overlay_assign(this.node.style, {
              borderColor: overlayStyles.margin,
              pointerEvents: "none",
              position: "fixed",
            });
            this.node.style.zIndex = "10000000";
            this.node.appendChild(this.border);
            this.border.appendChild(this.padding);
            this.padding.appendChild(this.content);
            container.appendChild(this.node);
          }

          Overlay_createClass(OverlayRect, [
            {
              key: "remove",
              value: function remove() {
                if (this.node.parentNode) {
                  this.node.parentNode.removeChild(this.node);
                }
              },
            },
            {
              key: "update",
              value: function update(box, dims) {
                boxWrap(dims, "margin", this.node);
                boxWrap(dims, "border", this.border);
                boxWrap(dims, "padding", this.padding);
                Overlay_assign(this.content.style, {
                  height: box.height - dims.borderTop - dims.borderBottom - dims.paddingTop - dims.paddingBottom + "px",
                  width: box.width - dims.borderLeft - dims.borderRight - dims.paddingLeft - dims.paddingRight + "px",
                });
                Overlay_assign(this.node.style, {
                  top: box.top - dims.marginTop + "px",
                  left: box.left - dims.marginLeft + "px",
                });
              },
            },
          ]);

          return OverlayRect;
        })();

        var OverlayTip = /*#__PURE__*/ (function () {
          function OverlayTip(doc, container) {
            Overlay_classCallCheck(this, OverlayTip);

            this.tip = doc.createElement("div");
            Overlay_assign(this.tip.style, {
              display: "flex",
              flexFlow: "row nowrap",
              backgroundColor: "#333740",
              borderRadius: "2px",
              fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
              fontWeight: "bold",
              padding: "3px 5px",
              pointerEvents: "none",
              position: "fixed",
              fontSize: "12px",
              whiteSpace: "nowrap",
            });
            this.nameSpan = doc.createElement("span");
            this.tip.appendChild(this.nameSpan);
            Overlay_assign(this.nameSpan.style, {
              color: "#ee78e6",
              borderRight: "1px solid #aaaaaa",
              paddingRight: "0.5rem",
              marginRight: "0.5rem",
            });
            this.dimSpan = doc.createElement("span");
            this.tip.appendChild(this.dimSpan);
            Overlay_assign(this.dimSpan.style, {
              color: "#d7d7d7",
            });
            this.tip.style.zIndex = "10000000";
            container.appendChild(this.tip);
          }

          Overlay_createClass(OverlayTip, [
            {
              key: "remove",
              value: function remove() {
                if (this.tip.parentNode) {
                  this.tip.parentNode.removeChild(this.tip);
                }
              },
            },
            {
              key: "updateText",
              value: function updateText(name, width, height) {
                this.nameSpan.textContent = name;
                this.dimSpan.textContent = Math.round(width) + "px × " + Math.round(height) + "px";
              },
            },
            {
              key: "updatePosition",
              value: function updatePosition(dims, bounds) {
                var tipRect = this.tip.getBoundingClientRect();
                var tipPos = findTipPos(dims, bounds, {
                  width: tipRect.width,
                  height: tipRect.height,
                });
                Overlay_assign(this.tip.style, tipPos.style);
              },
            },
          ]);

          return OverlayTip;
        })();

        var Overlay_Overlay = /*#__PURE__*/ (function () {
          function Overlay(agent) {
            Overlay_classCallCheck(this, Overlay);

            // Find the root window, because overlays are positioned relative to it.
            var currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
            this.window = currentWindow; // When opened in shells/dev, the tooltip should be bound by the app iframe, not by the topmost window.

            var tipBoundsWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
            this.tipBoundsWindow = tipBoundsWindow;
            var doc = currentWindow.document;
            this.container = doc.createElement("div");
            this.container.style.zIndex = "10000000";
            this.tip = new OverlayTip(doc, this.container);
            this.rects = [];
            this.agent = agent;
            doc.body.appendChild(this.container);
          }

          Overlay_createClass(Overlay, [
            {
              key: "remove",
              value: function remove() {
                this.tip.remove();
                this.rects.forEach(function (rect) {
                  rect.remove();
                });
                this.rects.length = 0;

                if (this.container.parentNode) {
                  this.container.parentNode.removeChild(this.container);
                }
              },
            },
            {
              key: "inspect",
              value: function inspect(nodes, name) {
                var _this = this;

                // We can't get the size of text nodes or comment nodes. React as of v15
                // heavily uses comment nodes to delimit text.
                var elements = nodes.filter(function (node) {
                  return node.nodeType === Node.ELEMENT_NODE;
                });

                while (this.rects.length > elements.length) {
                  var rect = this.rects.pop();
                  rect.remove();
                }

                if (elements.length === 0) {
                  return;
                }

                while (this.rects.length < elements.length) {
                  this.rects.push(new OverlayRect(this.window.document, this.container));
                }

                var outerBox = {
                  top: Number.POSITIVE_INFINITY,
                  right: Number.NEGATIVE_INFINITY,
                  bottom: Number.NEGATIVE_INFINITY,
                  left: Number.POSITIVE_INFINITY,
                };
                elements.forEach(function (element, index) {
                  var box = getNestedBoundingClientRect(element, _this.window);
                  var dims = getElementDimensions(element);
                  outerBox.top = Math.min(outerBox.top, box.top - dims.marginTop);
                  outerBox.right = Math.max(outerBox.right, box.left + box.width + dims.marginRight);
                  outerBox.bottom = Math.max(outerBox.bottom, box.top + box.height + dims.marginBottom);
                  outerBox.left = Math.min(outerBox.left, box.left - dims.marginLeft);
                  var rect = _this.rects[index];
                  rect.update(box, dims);
                });

                if (!name) {
                  name = elements[0].nodeName.toLowerCase();
                  var node = elements[0];
                  var rendererInterface = this.agent.getBestMatchingRendererInterface(node);

                  if (rendererInterface) {
                    var id = rendererInterface.getFiberIDForNative(node, true);

                    if (id) {
                      var ownerName = rendererInterface.getDisplayNameForFiberID(id, true);

                      if (ownerName) {
                        name += " (in " + ownerName + ")";
                      }
                    }
                  }
                }

                this.tip.updateText(name, outerBox.right - outerBox.left, outerBox.bottom - outerBox.top);
                var tipBounds = getNestedBoundingClientRect(this.tipBoundsWindow.document.documentElement, this.window);
                this.tip.updatePosition(
                  {
                    top: outerBox.top,
                    left: outerBox.left,
                    height: outerBox.bottom - outerBox.top,
                    width: outerBox.right - outerBox.left,
                  },
                  {
                    top: tipBounds.top + this.tipBoundsWindow.scrollY,
                    left: tipBounds.left + this.tipBoundsWindow.scrollX,
                    height: this.tipBoundsWindow.innerHeight,
                    width: this.tipBoundsWindow.innerWidth,
                  }
                );
              },
            },
          ]);

          return Overlay;
        })();

        function findTipPos(dims, bounds, tipSize) {
          var tipHeight = Math.max(tipSize.height, 20);
          var tipWidth = Math.max(tipSize.width, 60);
          var margin = 5;
          var top;

          if (dims.top + dims.height + tipHeight <= bounds.top + bounds.height) {
            if (dims.top + dims.height < bounds.top + 0) {
              top = bounds.top + margin;
            } else {
              top = dims.top + dims.height + margin;
            }
          } else if (dims.top - tipHeight <= bounds.top + bounds.height) {
            if (dims.top - tipHeight - margin < bounds.top + margin) {
              top = bounds.top + margin;
            } else {
              top = dims.top - tipHeight - margin;
            }
          } else {
            top = bounds.top + bounds.height - tipHeight - margin;
          }

          var left = dims.left + margin;

          if (dims.left < bounds.left) {
            left = bounds.left + margin;
          }

          if (dims.left + tipWidth > bounds.left + bounds.width) {
            left = bounds.left + bounds.width - tipWidth - margin;
          }

          top += "px";
          left += "px";
          return {
            style: {
              top: top,
              left: left,
            },
          };
        }

        function boxWrap(dims, what, node) {
          Overlay_assign(node.style, {
            borderTopWidth: dims[what + "Top"] + "px",
            borderLeftWidth: dims[what + "Left"] + "px",
            borderRightWidth: dims[what + "Right"] + "px",
            borderBottomWidth: dims[what + "Bottom"] + "px",
            borderStyle: "solid",
          });
        }

        var overlayStyles = {
          background: "rgba(120, 170, 210, 0.7)",
          padding: "rgba(77, 200, 0, 0.3)",
          margin: "rgba(255, 155, 0, 0.3)",
          border: "rgba(255, 200, 50, 0.3)",
        };
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/Highlighter/Highlighter.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        var SHOW_DURATION = 2000;
        var timeoutID = null;
        var overlay = null;
        function hideOverlay(agent) {
          if (window.document == null) {
            agent.emit("hideNativeHighlight");
            return;
          }

          timeoutID = null;

          if (overlay !== null) {
            overlay.remove();
            overlay = null;
          }
        }
        function showOverlay(elements, componentName, agent, hideAfterTimeout) {
          if (window.document == null) {
            if (elements != null && elements[0] != null) {
              agent.emit("showNativeHighlight", elements[0]);
            }

            return;
          }

          if (timeoutID !== null) {
            clearTimeout(timeoutID);
          }

          if (elements == null) {
            return;
          }

          if (overlay === null) {
            overlay = new Overlay_Overlay(agent);
          }

          overlay.inspect(elements, componentName);

          if (hideAfterTimeout) {
            timeoutID = setTimeout(function () {
              return hideOverlay(agent);
            }, SHOW_DURATION);
          }
        }
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/Highlighter/index.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        // This plug-in provides in-page highlighting of the selected element.
        // It is used by the browser extension and the standalone DevTools shell (when connected to a browser).
        // It is not currently the mechanism used to highlight React Native views.
        // That is done by the React Native Inspector component.
        var iframesListeningTo = new Set();
        function setupHighlighter(bridge, agent) {
          bridge.addListener("clearNativeElementHighlight", clearNativeElementHighlight);
          bridge.addListener("highlightNativeElement", highlightNativeElement);
          bridge.addListener("shutdown", stopInspectingNative);
          bridge.addListener("startInspectingNative", startInspectingNative);
          bridge.addListener("stopInspectingNative", stopInspectingNative);

          function startInspectingNative() {
            registerListenersOnWindow(window);
          }

          function registerListenersOnWindow(window) {
            // This plug-in may run in non-DOM environments (e.g. React Native).
            if (window && typeof window.addEventListener === "function") {
              window.addEventListener("click", onClick, true);
              window.addEventListener("mousedown", onMouseEvent, true);
              window.addEventListener("mouseover", onMouseEvent, true);
              window.addEventListener("mouseup", onMouseEvent, true);
              window.addEventListener("pointerdown", onPointerDown, true);
              window.addEventListener("pointerover", onPointerOver, true);
              window.addEventListener("pointerup", onPointerUp, true);
            } else {
              agent.emit("startInspectingNative");
            }
          }

          function stopInspectingNative() {
            hideOverlay(agent);
            removeListenersOnWindow(window);
            iframesListeningTo.forEach(function (frame) {
              try {
                removeListenersOnWindow(frame.contentWindow);
              } catch (error) {
                // This can error when the iframe is on a cross-origin.
              }
            });
            iframesListeningTo = new Set();
          }

          function removeListenersOnWindow(window) {
            // This plug-in may run in non-DOM environments (e.g. React Native).
            if (window && typeof window.removeEventListener === "function") {
              window.removeEventListener("click", onClick, true);
              window.removeEventListener("mousedown", onMouseEvent, true);
              window.removeEventListener("mouseover", onMouseEvent, true);
              window.removeEventListener("mouseup", onMouseEvent, true);
              window.removeEventListener("pointerdown", onPointerDown, true);
              window.removeEventListener("pointerover", onPointerOver, true);
              window.removeEventListener("pointerup", onPointerUp, true);
            } else {
              agent.emit("stopInspectingNative");
            }
          }

          function clearNativeElementHighlight() {
            hideOverlay(agent);
          }

          function highlightNativeElement(_ref) {
            var displayName = _ref.displayName,
              hideAfterTimeout = _ref.hideAfterTimeout,
              id = _ref.id,
              openNativeElementsPanel = _ref.openNativeElementsPanel,
              rendererID = _ref.rendererID,
              scrollIntoView = _ref.scrollIntoView;
            var renderer = agent.rendererInterfaces[rendererID];

            if (renderer == null) {
              console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
            }

            var nodes = null;

            if (renderer != null) {
              nodes = renderer.findNativeNodesForFiberID(id);
            }

            if (nodes != null && nodes[0] != null) {
              var node = nodes[0]; // $FlowFixMe[method-unbinding]

              if (scrollIntoView && typeof node.scrollIntoView === "function") {
                // If the node isn't visible show it before highlighting it.
                // We may want to reconsider this; it might be a little disruptive.
                node.scrollIntoView({
                  block: "nearest",
                  inline: "nearest",
                });
              }

              showOverlay(nodes, displayName, agent, hideAfterTimeout);

              if (openNativeElementsPanel) {
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0 = node;
                bridge.send("syncSelectionToNativeElementsPanel");
              }
            } else {
              hideOverlay(agent);
            }
          }

          function onClick(event) {
            event.preventDefault();
            event.stopPropagation();
            stopInspectingNative();
            bridge.send("stopInspectingNative", true);
          }

          function onMouseEvent(event) {
            event.preventDefault();
            event.stopPropagation();
          }

          function onPointerDown(event) {
            event.preventDefault();
            event.stopPropagation();
            selectFiberForNode(event.target);
          }

          function onPointerOver(event) {
            event.preventDefault();
            event.stopPropagation();
            var target = event.target;

            if (target.tagName === "IFRAME") {
              var iframe = target;

              try {
                if (!iframesListeningTo.has(iframe)) {
                  var _window = iframe.contentWindow;
                  registerListenersOnWindow(_window);
                  iframesListeningTo.add(iframe);
                }
              } catch (error) {
                // This can error when the iframe is on a cross-origin.
              }
            } // Don't pass the name explicitly.
            // It will be inferred from DOM tag and Fiber owner.

            showOverlay([target], null, agent, false);
            selectFiberForNode(target);
          }

          function onPointerUp(event) {
            event.preventDefault();
            event.stopPropagation();
          }

          var selectFiberForNode = lodash_throttle_default()(
            esm(function (node) {
              var id = agent.getIDForNode(node);

              if (id !== null) {
                bridge.send("selectFiber", id);
              }
            }),
            200, // Don't change the selection in the very first 200ms
            // because those are usually unintentional as you lift the cursor.
            {
              leading: false,
            }
          );
        }
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/TraceUpdates/canvas.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        var OUTLINE_COLOR = "#f0f0f0"; // Note these colors are in sync with DevTools Profiler chart colors.

        var COLORS = [
          "#37afa9",
          "#63b19e",
          "#80b393",
          "#97b488",
          "#abb67d",
          "#beb771",
          "#cfb965",
          "#dfba57",
          "#efbb49",
          "#febc38",
        ];
        var canvas = null;
        function draw(nodeToData) {
          if (canvas === null) {
            initialize();
          }

          var canvasFlow = canvas;
          canvasFlow.width = window.innerWidth;
          canvasFlow.height = window.innerHeight;
          var context = canvasFlow.getContext("2d");
          context.clearRect(0, 0, canvasFlow.width, canvasFlow.height);
          nodeToData.forEach(function (_ref) {
            var count = _ref.count,
              rect = _ref.rect;

            if (rect !== null) {
              var colorIndex = Math.min(COLORS.length - 1, count - 1);
              var color = COLORS[colorIndex];
              drawBorder(context, rect, color);
            }
          });
        }

        function drawBorder(context, rect, color) {
          var height = rect.height,
            left = rect.left,
            top = rect.top,
            width = rect.width; // outline

          context.lineWidth = 1;
          context.strokeStyle = OUTLINE_COLOR;
          context.strokeRect(left - 1, top - 1, width + 2, height + 2); // inset

          context.lineWidth = 1;
          context.strokeStyle = OUTLINE_COLOR;
          context.strokeRect(left + 1, top + 1, width - 1, height - 1);
          context.strokeStyle = color;
          context.setLineDash([0]); // border

          context.lineWidth = 1;
          context.strokeRect(left, top, width - 1, height - 1);
          context.setLineDash([0]);
        }

        function destroy() {
          if (canvas !== null) {
            if (canvas.parentNode != null) {
              canvas.parentNode.removeChild(canvas);
            }

            canvas = null;
          }
        }

        function initialize() {
          canvas = window.document.createElement("canvas");
          canvas.style.cssText =
            "\n    xx-background-color: red;\n    xx-opacity: 0.5;\n    bottom: 0;\n    left: 0;\n    pointer-events: none;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: 1000000000;\n  ";
          var root = window.document.documentElement;
          root.insertBefore(canvas, root.firstChild);
        }
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/TraceUpdates/index.js
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        // How long the rect should be shown for?
        var DISPLAY_DURATION = 250; // What's the longest we are willing to show the overlay for?
        // This can be important if we're getting a flurry of events (e.g. scroll update).

        var MAX_DISPLAY_DURATION = 3000; // How long should a rect be considered valid for?

        var REMEASUREMENT_AFTER_DURATION = 250; // Some environments (e.g. React Native / Hermes) don't support the performance API yet.

        var getCurrentTime = // $FlowFixMe[method-unbinding]
          (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" &&
          typeof performance.now === "function"
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              };
        var nodeToData = new Map();
        var TraceUpdates_agent = null;
        var drawAnimationFrameID = null;
        var isEnabled = false;
        var redrawTimeoutID = null;
        function TraceUpdates_initialize(injectedAgent) {
          TraceUpdates_agent = injectedAgent;
          TraceUpdates_agent.addListener("traceUpdates", traceUpdates);
        }
        function toggleEnabled(value) {
          isEnabled = value;

          if (!isEnabled) {
            nodeToData.clear();

            if (drawAnimationFrameID !== null) {
              cancelAnimationFrame(drawAnimationFrameID);
              drawAnimationFrameID = null;
            }

            if (redrawTimeoutID !== null) {
              clearTimeout(redrawTimeoutID);
              redrawTimeoutID = null;
            }

            destroy();
          }
        }

        function traceUpdates(nodes) {
          if (!isEnabled) {
            return;
          }

          nodes.forEach(function (node) {
            var data = nodeToData.get(node);
            var now = getCurrentTime();
            var lastMeasuredAt = data != null ? data.lastMeasuredAt : 0;
            var rect = data != null ? data.rect : null;

            if (rect === null || lastMeasuredAt + REMEASUREMENT_AFTER_DURATION < now) {
              lastMeasuredAt = now;
              rect = measureNode(node);
            }

            nodeToData.set(node, {
              count: data != null ? data.count + 1 : 1,
              expirationTime:
                data != null
                  ? Math.min(now + MAX_DISPLAY_DURATION, data.expirationTime + DISPLAY_DURATION)
                  : now + DISPLAY_DURATION,
              lastMeasuredAt: lastMeasuredAt,
              rect: rect,
            });
          });

          if (redrawTimeoutID !== null) {
            clearTimeout(redrawTimeoutID);
            redrawTimeoutID = null;
          }

          if (drawAnimationFrameID === null) {
            drawAnimationFrameID = requestAnimationFrame(prepareToDraw);
          }
        }

        function prepareToDraw() {
          drawAnimationFrameID = null;
          redrawTimeoutID = null;
          var now = getCurrentTime();
          var earliestExpiration = Number.MAX_VALUE; // Remove any items that have already expired.

          nodeToData.forEach(function (data, node) {
            if (data.expirationTime < now) {
              nodeToData.delete(node);
            } else {
              earliestExpiration = Math.min(earliestExpiration, data.expirationTime);
            }
          });
          draw(nodeToData);

          if (earliestExpiration !== Number.MAX_VALUE) {
            redrawTimeoutID = setTimeout(prepareToDraw, earliestExpiration - now);
          }
        }

        function measureNode(node) {
          if (!node || typeof node.getBoundingClientRect !== "function") {
            return null;
          }

          var currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
          return getNestedBoundingClientRect(node, currentWindow);
        }
        // EXTERNAL MODULE: ../react-devtools-shared/src/backend/console.js
        var backend_console = __webpack_require__(8);

        // CONCATENATED MODULE: ../react-devtools-shared/src/bridge.js
        function bridge_typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            bridge_typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            bridge_typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return bridge_typeof(obj);
        }

        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function bridge_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function bridge_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function bridge_createClass(Constructor, protoProps, staticProps) {
          if (protoProps) bridge_defineProperties(Constructor.prototype, protoProps);
          if (staticProps) bridge_defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, writable: true, configurable: true },
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (bridge_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function bridge_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        var BATCH_DURATION = 100; // This message specifies the version of the DevTools protocol currently supported by the backend,
        // as well as the earliest NPM version (e.g. "4.13.0") that protocol is supported by on the frontend.
        // This enables an older frontend to display an upgrade message to users for a newer, unsupported backend.

        // Bump protocol version whenever a backwards breaking change is made
        // in the messages sent between BackendBridge and FrontendBridge.
        // This mapping is embedded in both frontend and backend builds.
        //
        // The backend protocol will always be the latest entry in the BRIDGE_PROTOCOL array.
        //
        // When an older frontend connects to a newer backend,
        // the backend can send the minNpmVersion and the frontend can display an NPM upgrade prompt.
        //
        // When a newer frontend connects with an older protocol version,
        // the frontend can use the embedded minNpmVersion/maxNpmVersion values to display a downgrade prompt.
        var BRIDGE_PROTOCOL = [
          // This version technically never existed,
          // but a backwards breaking change was added in 4.11,
          // so the safest guess to downgrade the frontend would be to version 4.10.
          {
            version: 0,
            minNpmVersion: '"<4.11.0"',
            maxNpmVersion: '"<4.11.0"',
          }, // Versions 4.11.x – 4.12.x contained the backwards breaking change,
          // but we didn't add the "fix" of checking the protocol version until 4.13,
          // so we don't recommend downgrading to 4.11 or 4.12.
          {
            version: 1,
            minNpmVersion: "4.13.0",
            maxNpmVersion: "4.21.0",
          }, // Version 2 adds a StrictMode-enabled and supports-StrictMode bits to add-root operation.
          {
            version: 2,
            minNpmVersion: "4.22.0",
            maxNpmVersion: null,
          },
        ];
        var currentBridgeProtocol = BRIDGE_PROTOCOL[BRIDGE_PROTOCOL.length - 1];

        var Bridge = /*#__PURE__*/ (function (_EventEmitter) {
          _inherits(Bridge, _EventEmitter);

          var _super = _createSuper(Bridge);

          function Bridge(wall) {
            var _this;

            bridge_classCallCheck(this, Bridge);

            _this = _super.call(this);

            bridge_defineProperty(_assertThisInitialized(_this), "_isShutdown", false);

            bridge_defineProperty(_assertThisInitialized(_this), "_messageQueue", []);

            bridge_defineProperty(_assertThisInitialized(_this), "_timeoutID", null);

            bridge_defineProperty(_assertThisInitialized(_this), "_wallUnlisten", null);

            bridge_defineProperty(_assertThisInitialized(_this), "_flush", function () {
              // This method is used after the bridge is marked as destroyed in shutdown sequence,
              // so we do not bail out if the bridge marked as destroyed.
              // It is a private method that the bridge ensures is only called at the right times.
              if (_this._timeoutID !== null) {
                clearTimeout(_this._timeoutID);
                _this._timeoutID = null;
              }

              if (_this._messageQueue.length) {
                for (var i = 0; i < _this._messageQueue.length; i += 2) {
                  var _this$_wall;

                  (_this$_wall = _this._wall).send.apply(
                    _this$_wall,
                    [_this._messageQueue[i]].concat(_toConsumableArray(_this._messageQueue[i + 1]))
                  );
                }

                _this._messageQueue.length = 0; // Check again for queued messages in BATCH_DURATION ms. This will keep
                // flushing in a loop as long as messages continue to be added. Once no
                // more are, the timer expires.

                _this._timeoutID = setTimeout(_this._flush, BATCH_DURATION);
              }
            });

            bridge_defineProperty(_assertThisInitialized(_this), "overrideValueAtPath", function (_ref) {
              var id = _ref.id,
                path = _ref.path,
                rendererID = _ref.rendererID,
                type = _ref.type,
                value = _ref.value;

              switch (type) {
                case "context":
                  _this.send("overrideContext", {
                    id: id,
                    path: path,
                    rendererID: rendererID,
                    wasForwarded: true,
                    value: value,
                  });

                  break;

                case "hooks":
                  _this.send("overrideHookState", {
                    id: id,
                    path: path,
                    rendererID: rendererID,
                    wasForwarded: true,
                    value: value,
                  });

                  break;

                case "props":
                  _this.send("overrideProps", {
                    id: id,
                    path: path,
                    rendererID: rendererID,
                    wasForwarded: true,
                    value: value,
                  });

                  break;

                case "state":
                  _this.send("overrideState", {
                    id: id,
                    path: path,
                    rendererID: rendererID,
                    wasForwarded: true,
                    value: value,
                  });

                  break;
              }
            });

            _this._wall = wall;
            _this._wallUnlisten =
              wall.listen(function (message) {
                if (message && message.event) {
                  _assertThisInitialized(_this).emit(message.event, message.payload);
                }
              }) || null; // Temporarily support older standalone front-ends sending commands to newer embedded backends.
            // We do this because React Native embeds the React DevTools backend,
            // but cannot control which version of the frontend users use.

            _this.addListener("overrideValueAtPath", _this.overrideValueAtPath);

            return _this;
          } // Listening directly to the wall isn't advised.
          // It can be used to listen for legacy (v3) messages (since they use a different format).

          bridge_createClass(Bridge, [
            {
              key: "send",
              value: function send(event) {
                if (this._isShutdown) {
                  console.warn('Cannot send message "'.concat(event, '" through a Bridge that has been shutdown.'));
                  return;
                } // When we receive a message:
                // - we add it to our queue of messages to be sent
                // - if there hasn't been a message recently, we set a timer for 0 ms in
                //   the future, allowing all messages created in the same tick to be sent
                //   together
                // - if there *has* been a message flushed in the last BATCH_DURATION ms
                //   (or we're waiting for our setTimeout-0 to fire), then _timeoutID will
                //   be set, and we'll simply add to the queue and wait for that

                for (
                  var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
                  _key < _len;
                  _key++
                ) {
                  payload[_key - 1] = arguments[_key];
                }

                this._messageQueue.push(event, payload);

                if (!this._timeoutID) {
                  this._timeoutID = setTimeout(this._flush, 0);
                }
              },
            },
            {
              key: "shutdown",
              value: function shutdown() {
                if (this._isShutdown) {
                  console.warn("Bridge was already shutdown.");
                  return;
                } // Queue the shutdown outgoing message for subscribers.

                this.send("shutdown"); // Mark this bridge as destroyed, i.e. disable its public API.

                this._isShutdown = true; // Disable the API inherited from EventEmitter that can add more listeners and send more messages.
                // $FlowFixMe This property is not writable.

                this.addListener = function () {}; // $FlowFixMe This property is not writable.

                this.emit = function () {}; // NOTE: There's also EventEmitter API like `on` and `prependListener` that we didn't add to our Flow type of EventEmitter.
                // Unsubscribe this bridge incoming message listeners to be sure, and so they don't have to do that.

                this.removeAllListeners(); // Stop accepting and emitting incoming messages from the wall.

                var wallUnlisten = this._wallUnlisten;

                if (wallUnlisten) {
                  wallUnlisten();
                } // Synchronously flush all queued outgoing messages.
                // At this step the subscribers' code may run in this call stack.

                do {
                  this._flush();
                } while (this._messageQueue.length); // Make sure once again that there is no dangling timer.

                if (this._timeoutID !== null) {
                  clearTimeout(this._timeoutID);
                  this._timeoutID = null;
                }
              },
            },
            {
              key: "wall",
              get: function get() {
                return this._wall;
              },
            },
          ]);

          return Bridge;
        })(EventEmitter);

        /* harmony default export */ var src_bridge = Bridge;
        // EXTERNAL MODULE: ../react-devtools-shared/src/backend/utils.js
        var utils = __webpack_require__(4);

        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/agent.js
        function agent_typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            agent_typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            agent_typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return agent_typeof(obj);
        }

        function agent_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function agent_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function agent_createClass(Constructor, protoProps, staticProps) {
          if (protoProps) agent_defineProperties(Constructor.prototype, protoProps);
          if (staticProps) agent_defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function agent_inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, writable: true, configurable: true },
          });
          if (superClass) agent_setPrototypeOf(subClass, superClass);
        }

        function agent_setPrototypeOf(o, p) {
          agent_setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return agent_setPrototypeOf(o, p);
        }

        function agent_createSuper(Derived) {
          var hasNativeReflectConstruct = agent_isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = agent_getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = agent_getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return agent_possibleConstructorReturn(this, result);
          };
        }

        function agent_possibleConstructorReturn(self, call) {
          if (call && (agent_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return agent_assertThisInitialized(self);
        }

        function agent_assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }

        function agent_isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }

        function agent_getPrototypeOf(o) {
          agent_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return agent_getPrototypeOf(o);
        }

        function agent_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        var agent_debug = function debug(methodName) {
          if (constants["s" /* __DEBUG__ */]) {
            var _console;

            for (
              var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key];
            }

            (_console = console).log.apply(
              _console,
              ["%cAgent %c".concat(methodName), "color: purple; font-weight: bold;", "font-weight: bold;"].concat(args)
            );
          }
        };

        var agent_Agent = /*#__PURE__*/ (function (_EventEmitter) {
          agent_inherits(Agent, _EventEmitter);

          var _super = agent_createSuper(Agent);

          function Agent(bridge) {
            var _this;

            agent_classCallCheck(this, Agent);

            _this = _super.call(this);

            agent_defineProperty(agent_assertThisInitialized(_this), "_isProfiling", false);

            agent_defineProperty(agent_assertThisInitialized(_this), "_recordChangeDescriptions", false);

            agent_defineProperty(agent_assertThisInitialized(_this), "_rendererInterfaces", {});

            agent_defineProperty(agent_assertThisInitialized(_this), "_persistedSelection", null);

            agent_defineProperty(agent_assertThisInitialized(_this), "_persistedSelectionMatch", null);

            agent_defineProperty(agent_assertThisInitialized(_this), "_traceUpdatesEnabled", false);

            agent_defineProperty(agent_assertThisInitialized(_this), "clearErrorsAndWarnings", function (_ref) {
              var rendererID = _ref.rendererID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '"'));
              } else {
                renderer.clearErrorsAndWarnings();
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "clearErrorsForFiberID", function (_ref2) {
              var id = _ref2.id,
                rendererID = _ref2.rendererID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '"'));
              } else {
                renderer.clearErrorsForFiberID(id);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "clearWarningsForFiberID", function (_ref3) {
              var id = _ref3.id,
                rendererID = _ref3.rendererID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '"'));
              } else {
                renderer.clearWarningsForFiberID(id);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "copyElementPath", function (_ref4) {
              var id = _ref4.id,
                path = _ref4.path,
                rendererID = _ref4.rendererID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                renderer.copyElementPath(id, path);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "deletePath", function (_ref5) {
              var hookID = _ref5.hookID,
                id = _ref5.id,
                path = _ref5.path,
                rendererID = _ref5.rendererID,
                type = _ref5.type;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                renderer.deletePath(type, id, hookID, path);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "getBackendVersion", function () {
              var version = "4.27.1-47f63dc54";

              if (version) {
                _this._bridge.send("backendVersion", version);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "getBridgeProtocol", function () {
              _this._bridge.send("bridgeProtocol", currentBridgeProtocol);
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "getProfilingData", function (_ref6) {
              var rendererID = _ref6.rendererID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '"'));
              }

              _this._bridge.send("profilingData", renderer.getProfilingData());
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "getProfilingStatus", function () {
              _this._bridge.send("profilingStatus", _this._isProfiling);
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "getOwnersList", function (_ref7) {
              var id = _ref7.id,
                rendererID = _ref7.rendererID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                var owners = renderer.getOwnersList(id);

                _this._bridge.send("ownersList", {
                  id: id,
                  owners: owners,
                });
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "inspectElement", function (_ref8) {
              var forceFullData = _ref8.forceFullData,
                id = _ref8.id,
                path = _ref8.path,
                rendererID = _ref8.rendererID,
                requestID = _ref8.requestID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                _this._bridge.send("inspectedElement", renderer.inspectElement(requestID, id, path, forceFullData)); // When user selects an element, stop trying to restore the selection,
                // and instead remember the current selection for the next reload.

                if (_this._persistedSelectionMatch === null || _this._persistedSelectionMatch.id !== id) {
                  _this._persistedSelection = null;
                  _this._persistedSelectionMatch = null;
                  renderer.setTrackedPath(null);

                  _this._throttledPersistSelection(rendererID, id);
                } // TODO: If there was a way to change the selected DOM element
                // in native Elements tab without forcing a switch to it, we'd do it here.
                // For now, it doesn't seem like there is a way to do that:
                // https://github.com/bvaughn/react-devtools-experimental/issues/102
                // (Setting $0 doesn't work, and calling inspect() switches the tab.)
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "logElementToConsole", function (_ref9) {
              var id = _ref9.id,
                rendererID = _ref9.rendererID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                renderer.logElementToConsole(id);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "overrideError", function (_ref10) {
              var id = _ref10.id,
                rendererID = _ref10.rendererID,
                forceError = _ref10.forceError;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                renderer.overrideError(id, forceError);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "overrideSuspense", function (_ref11) {
              var id = _ref11.id,
                rendererID = _ref11.rendererID,
                forceFallback = _ref11.forceFallback;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                renderer.overrideSuspense(id, forceFallback);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "overrideValueAtPath", function (_ref12) {
              var hookID = _ref12.hookID,
                id = _ref12.id,
                path = _ref12.path,
                rendererID = _ref12.rendererID,
                type = _ref12.type,
                value = _ref12.value;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                renderer.overrideValueAtPath(type, id, hookID, path, value);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "overrideContext", function (_ref13) {
              var id = _ref13.id,
                path = _ref13.path,
                rendererID = _ref13.rendererID,
                wasForwarded = _ref13.wasForwarded,
                value = _ref13.value;

              // Don't forward a message that's already been forwarded by the front-end Bridge.
              // We only need to process the override command once!
              if (!wasForwarded) {
                _this.overrideValueAtPath({
                  id: id,
                  path: path,
                  rendererID: rendererID,
                  type: "context",
                  value: value,
                });
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "overrideHookState", function (_ref14) {
              var id = _ref14.id,
                hookID = _ref14.hookID,
                path = _ref14.path,
                rendererID = _ref14.rendererID,
                wasForwarded = _ref14.wasForwarded,
                value = _ref14.value;

              // Don't forward a message that's already been forwarded by the front-end Bridge.
              // We only need to process the override command once!
              if (!wasForwarded) {
                _this.overrideValueAtPath({
                  id: id,
                  path: path,
                  rendererID: rendererID,
                  type: "hooks",
                  value: value,
                });
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "overrideProps", function (_ref15) {
              var id = _ref15.id,
                path = _ref15.path,
                rendererID = _ref15.rendererID,
                wasForwarded = _ref15.wasForwarded,
                value = _ref15.value;

              // Don't forward a message that's already been forwarded by the front-end Bridge.
              // We only need to process the override command once!
              if (!wasForwarded) {
                _this.overrideValueAtPath({
                  id: id,
                  path: path,
                  rendererID: rendererID,
                  type: "props",
                  value: value,
                });
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "overrideState", function (_ref16) {
              var id = _ref16.id,
                path = _ref16.path,
                rendererID = _ref16.rendererID,
                wasForwarded = _ref16.wasForwarded,
                value = _ref16.value;

              // Don't forward a message that's already been forwarded by the front-end Bridge.
              // We only need to process the override command once!
              if (!wasForwarded) {
                _this.overrideValueAtPath({
                  id: id,
                  path: path,
                  rendererID: rendererID,
                  type: "state",
                  value: value,
                });
              }
            });

            agent_defineProperty(
              agent_assertThisInitialized(_this),
              "reloadAndProfile",
              function (recordChangeDescriptions) {
                Object(storage["e" /* sessionStorageSetItem */])(
                  constants["k" /* SESSION_STORAGE_RELOAD_AND_PROFILE_KEY */],
                  "true"
                );
                Object(storage["e" /* sessionStorageSetItem */])(
                  constants["j" /* SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY */],
                  recordChangeDescriptions ? "true" : "false"
                ); // This code path should only be hit if the shell has explicitly told the Store that it supports profiling.
                // In that case, the shell must also listen for this specific message to know when it needs to reload the app.
                // The agent can't do this in a way that is renderer agnostic.

                _this._bridge.send("reloadAppForProfiling");
              }
            );

            agent_defineProperty(agent_assertThisInitialized(_this), "renamePath", function (_ref17) {
              var hookID = _ref17.hookID,
                id = _ref17.id,
                newPath = _ref17.newPath,
                oldPath = _ref17.oldPath,
                rendererID = _ref17.rendererID,
                type = _ref17.type;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                renderer.renamePath(type, id, hookID, oldPath, newPath);
              }
            });

            agent_defineProperty(
              agent_assertThisInitialized(_this),
              "setTraceUpdatesEnabled",
              function (traceUpdatesEnabled) {
                _this._traceUpdatesEnabled = traceUpdatesEnabled;
                toggleEnabled(traceUpdatesEnabled);

                for (var rendererID in _this._rendererInterfaces) {
                  var renderer = _this._rendererInterfaces[rendererID];
                  renderer.setTraceUpdatesEnabled(traceUpdatesEnabled);
                }
              }
            );

            agent_defineProperty(
              agent_assertThisInitialized(_this),
              "syncSelectionFromNativeElementsPanel",
              function () {
                var target = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0;

                if (target == null) {
                  return;
                }

                _this.selectNode(target);
              }
            );

            agent_defineProperty(agent_assertThisInitialized(_this), "shutdown", function () {
              // Clean up the overlay if visible, and associated events.
              _this.emit("shutdown");
            });

            agent_defineProperty(
              agent_assertThisInitialized(_this),
              "startProfiling",
              function (recordChangeDescriptions) {
                _this._recordChangeDescriptions = recordChangeDescriptions;
                _this._isProfiling = true;

                for (var rendererID in _this._rendererInterfaces) {
                  var renderer = _this._rendererInterfaces[rendererID];
                  renderer.startProfiling(recordChangeDescriptions);
                }

                _this._bridge.send("profilingStatus", _this._isProfiling);
              }
            );

            agent_defineProperty(agent_assertThisInitialized(_this), "stopProfiling", function () {
              _this._isProfiling = false;
              _this._recordChangeDescriptions = false;

              for (var rendererID in _this._rendererInterfaces) {
                var renderer = _this._rendererInterfaces[rendererID];
                renderer.stopProfiling();
              }

              _this._bridge.send("profilingStatus", _this._isProfiling);
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "stopInspectingNative", function (selected) {
              _this._bridge.send("stopInspectingNative", selected);
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "storeAsGlobal", function (_ref18) {
              var count = _ref18.count,
                id = _ref18.id,
                path = _ref18.path,
                rendererID = _ref18.rendererID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                renderer.storeAsGlobal(id, path, count);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "updateConsolePatchSettings", function (_ref19) {
              var appendComponentStack = _ref19.appendComponentStack,
                breakOnConsoleErrors = _ref19.breakOnConsoleErrors,
                showInlineWarningsAndErrors = _ref19.showInlineWarningsAndErrors,
                hideConsoleLogsInStrictMode = _ref19.hideConsoleLogsInStrictMode,
                browserTheme = _ref19.browserTheme;
              // If the frontend preferences have changed,
              // or in the case of React Native- if the backend is just finding out the preferences-
              // then reinstall the console overrides.
              // It's safe to call `patchConsole` multiple times.
              Object(backend_console["a" /* patch */])({
                appendComponentStack: appendComponentStack,
                breakOnConsoleErrors: breakOnConsoleErrors,
                showInlineWarningsAndErrors: showInlineWarningsAndErrors,
                hideConsoleLogsInStrictMode: hideConsoleLogsInStrictMode,
                browserTheme: browserTheme,
              });
            });

            agent_defineProperty(
              agent_assertThisInitialized(_this),
              "updateComponentFilters",
              function (componentFilters) {
                for (var rendererID in _this._rendererInterfaces) {
                  var renderer = _this._rendererInterfaces[rendererID];
                  renderer.updateComponentFilters(componentFilters);
                }
              }
            );

            agent_defineProperty(agent_assertThisInitialized(_this), "viewAttributeSource", function (_ref20) {
              var id = _ref20.id,
                path = _ref20.path,
                rendererID = _ref20.rendererID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                renderer.prepareViewAttributeSource(id, path);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "viewElementSource", function (_ref21) {
              var id = _ref21.id,
                rendererID = _ref21.rendererID;
              var renderer = _this._rendererInterfaces[rendererID];

              if (renderer == null) {
                console.warn('Invalid renderer id "'.concat(rendererID, '" for element "').concat(id, '"'));
              } else {
                renderer.prepareViewElementSource(id);
              }
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "onTraceUpdates", function (nodes) {
              _this.emit("traceUpdates", nodes);
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "onFastRefreshScheduled", function () {
              if (constants["s" /* __DEBUG__ */]) {
                agent_debug("onFastRefreshScheduled");
              }

              _this._bridge.send("fastRefreshScheduled");
            });

            agent_defineProperty(agent_assertThisInitialized(_this), "onHookOperations", function (operations) {
              if (constants["s" /* __DEBUG__ */]) {
                agent_debug(
                  "onHookOperations",
                  "(".concat(operations.length, ") [").concat(operations.join(", "), "]")
                );
              } // TODO:
              // The chrome.runtime does not currently support transferables; it forces JSON serialization.
              // See bug https://bugs.chromium.org/p/chromium/issues/detail?id=927134
              //
              // Regarding transferables, the postMessage doc states:
              // If the ownership of an object is transferred, it becomes unusable (neutered)
              // in the context it was sent from and becomes available only to the worker it was sent to.
              //
              // Even though Chrome is eventually JSON serializing the array buffer,
              // using the transferable approach also sometimes causes it to throw:
              //   DOMException: Failed to execute 'postMessage' on 'Window': ArrayBuffer at index 0 is already neutered.
              //
              // See bug https://github.com/bvaughn/react-devtools-experimental/issues/25
              //
              // The Store has a fallback in place that parses the message as JSON if the type isn't an array.
              // For now the simplest fix seems to be to not transfer the array.
              // This will negatively impact performance on Firefox so it's unfortunate,
              // but until we're able to fix the Chrome error mentioned above, it seems necessary.
              //
              // this._bridge.send('operations', operations, [operations.buffer]);

              _this._bridge.send("operations", operations);

              if (_this._persistedSelection !== null) {
                var rendererID = operations[0];

                if (_this._persistedSelection.rendererID === rendererID) {
                  // Check if we can select a deeper match for the persisted selection.
                  var renderer = _this._rendererInterfaces[rendererID];

                  if (renderer == null) {
                    console.warn('Invalid renderer id "'.concat(rendererID, '"'));
                  } else {
                    var prevMatch = _this._persistedSelectionMatch;
                    var nextMatch = renderer.getBestMatchForTrackedPath();
                    _this._persistedSelectionMatch = nextMatch;
                    var prevMatchID = prevMatch !== null ? prevMatch.id : null;
                    var nextMatchID = nextMatch !== null ? nextMatch.id : null;

                    if (prevMatchID !== nextMatchID) {
                      if (nextMatchID !== null) {
                        // We moved forward, unlocking a deeper node.
                        _this._bridge.send("selectFiber", nextMatchID);
                      }
                    }

                    if (nextMatch !== null && nextMatch.isFullMatch) {
                      // We've just unlocked the innermost selected node.
                      // There's no point tracking it further.
                      _this._persistedSelection = null;
                      _this._persistedSelectionMatch = null;
                      renderer.setTrackedPath(null);
                    }
                  }
                }
              }
            });

            agent_defineProperty(
              agent_assertThisInitialized(_this),
              "_throttledPersistSelection",
              lodash_throttle_default()(function (rendererID, id) {
                // This is throttled, so both renderer and selected ID
                // might not be available by the time we read them.
                // This is why we need the defensive checks here.
                var renderer = _this._rendererInterfaces[rendererID];
                var path = renderer != null ? renderer.getPathForElement(id) : null;

                if (path !== null) {
                  Object(storage["e" /* sessionStorageSetItem */])(
                    constants["i" /* SESSION_STORAGE_LAST_SELECTION_KEY */],
                    JSON.stringify({
                      rendererID: rendererID,
                      path: path,
                    })
                  );
                } else {
                  Object(storage["d" /* sessionStorageRemoveItem */])(
                    constants["i" /* SESSION_STORAGE_LAST_SELECTION_KEY */]
                  );
                }
              }, 1000)
            );

            if (
              Object(storage["c" /* sessionStorageGetItem */])(
                constants["k" /* SESSION_STORAGE_RELOAD_AND_PROFILE_KEY */]
              ) === "true"
            ) {
              _this._recordChangeDescriptions =
                Object(storage["c" /* sessionStorageGetItem */])(
                  constants["j" /* SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY */]
                ) === "true";
              _this._isProfiling = true;
              Object(storage["d" /* sessionStorageRemoveItem */])(
                constants["j" /* SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY */]
              );
              Object(storage["d" /* sessionStorageRemoveItem */])(
                constants["k" /* SESSION_STORAGE_RELOAD_AND_PROFILE_KEY */]
              );
            }

            var persistedSelectionString = Object(storage["c" /* sessionStorageGetItem */])(
              constants["i" /* SESSION_STORAGE_LAST_SELECTION_KEY */]
            );

            if (persistedSelectionString != null) {
              _this._persistedSelection = JSON.parse(persistedSelectionString);
            }

            _this._bridge = bridge;
            bridge.addListener("clearErrorsAndWarnings", _this.clearErrorsAndWarnings);
            bridge.addListener("clearErrorsForFiberID", _this.clearErrorsForFiberID);
            bridge.addListener("clearWarningsForFiberID", _this.clearWarningsForFiberID);
            bridge.addListener("copyElementPath", _this.copyElementPath);
            bridge.addListener("deletePath", _this.deletePath);
            bridge.addListener("getBackendVersion", _this.getBackendVersion);
            bridge.addListener("getBridgeProtocol", _this.getBridgeProtocol);
            bridge.addListener("getProfilingData", _this.getProfilingData);
            bridge.addListener("getProfilingStatus", _this.getProfilingStatus);
            bridge.addListener("getOwnersList", _this.getOwnersList);
            bridge.addListener("inspectElement", _this.inspectElement);
            bridge.addListener("logElementToConsole", _this.logElementToConsole);
            bridge.addListener("overrideError", _this.overrideError);
            bridge.addListener("overrideSuspense", _this.overrideSuspense);
            bridge.addListener("overrideValueAtPath", _this.overrideValueAtPath);
            bridge.addListener("reloadAndProfile", _this.reloadAndProfile);
            bridge.addListener("renamePath", _this.renamePath);
            bridge.addListener("setTraceUpdatesEnabled", _this.setTraceUpdatesEnabled);
            bridge.addListener("startProfiling", _this.startProfiling);
            bridge.addListener("stopProfiling", _this.stopProfiling);
            bridge.addListener("storeAsGlobal", _this.storeAsGlobal);
            bridge.addListener("syncSelectionFromNativeElementsPanel", _this.syncSelectionFromNativeElementsPanel);
            bridge.addListener("shutdown", _this.shutdown);
            bridge.addListener("updateConsolePatchSettings", _this.updateConsolePatchSettings);
            bridge.addListener("updateComponentFilters", _this.updateComponentFilters);
            bridge.addListener("viewAttributeSource", _this.viewAttributeSource);
            bridge.addListener("viewElementSource", _this.viewElementSource); // Temporarily support older standalone front-ends sending commands to newer embedded backends.
            // We do this because React Native embeds the React DevTools backend,
            // but cannot control which version of the frontend users use.

            bridge.addListener("overrideContext", _this.overrideContext);
            bridge.addListener("overrideHookState", _this.overrideHookState);
            bridge.addListener("overrideProps", _this.overrideProps);
            bridge.addListener("overrideState", _this.overrideState);

            if (_this._isProfiling) {
              bridge.send("profilingStatus", true);
            } // Send the Bridge protocol and backend versions, after initialization, in case the frontend has already requested it.
            // The Store may be instantiated beore the agent.

            var _version = "4.27.1-47f63dc54";

            if (_version) {
              _this._bridge.send("backendVersion", _version);
            }

            _this._bridge.send("bridgeProtocol", currentBridgeProtocol); // Notify the frontend if the backend supports the Storage API (e.g. localStorage).
            // If not, features like reload-and-profile will not work correctly and must be disabled.

            var isBackendStorageAPISupported = false;

            try {
              localStorage.getItem("test");
              isBackendStorageAPISupported = true;
            } catch (error) {}

            bridge.send("isBackendStorageAPISupported", isBackendStorageAPISupported);
            bridge.send("isSynchronousXHRSupported", Object(utils["i" /* isSynchronousXHRSupported */])());
            setupHighlighter(bridge, agent_assertThisInitialized(_this));
            TraceUpdates_initialize(agent_assertThisInitialized(_this));
            return _this;
          }

          agent_createClass(Agent, [
            {
              key: "getInstanceAndStyle",
              value: function getInstanceAndStyle(_ref22) {
                var id = _ref22.id,
                  rendererID = _ref22.rendererID;
                var renderer = this._rendererInterfaces[rendererID];

                if (renderer == null) {
                  console.warn('Invalid renderer id "'.concat(rendererID, '"'));
                  return null;
                }

                return renderer.getInstanceAndStyle(id);
              },
            },
            {
              key: "getBestMatchingRendererInterface",
              value: function getBestMatchingRendererInterface(node) {
                var bestMatch = null;

                for (var rendererID in this._rendererInterfaces) {
                  var renderer = this._rendererInterfaces[rendererID];
                  var fiber = renderer.getFiberForNative(node);

                  if (fiber !== null) {
                    // check if fiber.stateNode is matching the original hostInstance
                    if (fiber.stateNode === node) {
                      return renderer;
                    } else if (bestMatch === null) {
                      bestMatch = renderer;
                    }
                  }
                } // if an exact match is not found, return the first valid renderer as fallback

                return bestMatch;
              },
            },
            {
              key: "getIDForNode",
              value: function getIDForNode(node) {
                var rendererInterface = this.getBestMatchingRendererInterface(node);

                if (rendererInterface != null) {
                  try {
                    return rendererInterface.getFiberIDForNative(node, true);
                  } catch (error) {
                    // Some old React versions might throw if they can't find a match.
                    // If so we should ignore it...
                  }
                }

                return null;
              },
            },
            {
              key: "selectNode",
              value: function selectNode(target) {
                var id = this.getIDForNode(target);

                if (id !== null) {
                  this._bridge.send("selectFiber", id);
                }
              },
            },
            {
              key: "setRendererInterface",
              value: function setRendererInterface(rendererID, rendererInterface) {
                this._rendererInterfaces[rendererID] = rendererInterface;

                if (this._isProfiling) {
                  rendererInterface.startProfiling(this._recordChangeDescriptions);
                }

                rendererInterface.setTraceUpdatesEnabled(this._traceUpdatesEnabled); // When the renderer is attached, we need to tell it whether
                // we remember the previous selection that we'd like to restore.
                // It'll start tracking mounts for matches to the last selection path.

                var selection = this._persistedSelection;

                if (selection !== null && selection.rendererID === rendererID) {
                  rendererInterface.setTrackedPath(selection.path);
                }
              },
            },
            {
              key: "onUnsupportedRenderer",
              value: function onUnsupportedRenderer(rendererID) {
                this._bridge.send("unsupportedRendererVersion", rendererID);
              },
            },
            {
              key: "rendererInterfaces",
              get: function get() {
                return this._rendererInterfaces;
              },
            },
          ]);

          return Agent;
        })(EventEmitter);

        // CONCATENATED MODULE: ../react-devtools-shared/src/hook.js
        function hook_typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            hook_typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            hook_typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return hook_typeof(obj);
        }

        function hook_toConsumableArray(arr) {
          return (
            hook_arrayWithoutHoles(arr) ||
            hook_iterableToArray(arr) ||
            hook_unsupportedIterableToArray(arr) ||
            hook_nonIterableSpread()
          );
        }

        function hook_nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function hook_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return hook_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return hook_arrayLikeToArray(o, minLen);
        }

        function hook_iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
        }

        function hook_arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return hook_arrayLikeToArray(arr);
        }

        function hook_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        /**
         * Install the hook on window, which is an event emitter.
         * Note because Chrome content scripts cannot directly modify the window object,
         * we are evaling this function by inserting a script tag.
         * That's why we have to inline the whole event emitter implementation,
         * the string format implementation, and part of the console implementation here.
         *
         *
         */

        function installHook(target) {
          if (target.hasOwnProperty("__REACT_DEVTOOLS_GLOBAL_HOOK__")) {
            return null;
          }

          var targetConsole = console;
          var targetConsoleMethods = {};

          for (var method in console) {
            targetConsoleMethods[method] = console[method];
          }

          function dangerous_setTargetConsoleForTesting(targetConsoleForTesting) {
            targetConsole = targetConsoleForTesting;
            targetConsoleMethods = {};

            for (var _method in targetConsole) {
              targetConsoleMethods[_method] = console[_method];
            }
          }

          function detectReactBuildType(renderer) {
            try {
              if (typeof renderer.version === "string") {
                // React DOM Fiber (16+)
                if (renderer.bundleType > 0) {
                  // This is not a production build.
                  // We are currently only using 0 (PROD) and 1 (DEV)
                  // but might add 2 (PROFILE) in the future.
                  return "development";
                } // React 16 uses flat bundles. If we report the bundle as production
                // version, it means we also minified and envified it ourselves.

                return "production"; // Note: There is still a risk that the CommonJS entry point has not
                // been envified or uglified. In this case the user would have *both*
                // development and production bundle, but only the prod one would run.
                // This would be really bad. We have a separate check for this because
                // it happens *outside* of the renderer injection. See `checkDCE` below.
              } // $FlowFixMe[method-unbinding]

              var _toString = Function.prototype.toString;

              if (renderer.Mount && renderer.Mount._renderNewRootComponent) {
                // React DOM Stack
                var renderRootCode = _toString.call(renderer.Mount._renderNewRootComponent); // Filter out bad results (if that is even possible):

                if (renderRootCode.indexOf("function") !== 0) {
                  // Hope for the best if we're not sure.
                  return "production";
                } // Check for React DOM Stack < 15.1.0 in development.
                // If it contains "storedMeasure" call, it's wrapped in ReactPerf (DEV only).
                // This would be true even if it's minified, as method name still matches.

                if (renderRootCode.indexOf("storedMeasure") !== -1) {
                  return "development";
                } // For other versions (and configurations) it's not so easy.
                // Let's quickly exclude proper production builds.
                // If it contains a warning message, it's either a DEV build,
                // or an PROD build without proper dead code elimination.

                if (renderRootCode.indexOf("should be a pure function") !== -1) {
                  // Now how do we tell a DEV build from a bad PROD build?
                  // If we see NODE_ENV, we're going to assume this is a dev build
                  // because most likely it is referring to an empty shim.
                  if (renderRootCode.indexOf("NODE_ENV") !== -1) {
                    return "development";
                  } // If we see "development", we're dealing with an envified DEV build
                  // (such as the official React DEV UMD).

                  if (renderRootCode.indexOf("development") !== -1) {
                    return "development";
                  } // I've seen process.env.NODE_ENV !== 'production' being smartly
                  // replaced by `true` in DEV by Webpack. I don't know how that
                  // works but we can safely guard against it because `true` was
                  // never used in the function source since it was written.

                  if (renderRootCode.indexOf("true") !== -1) {
                    return "development";
                  } // By now either it is a production build that has not been minified,
                  // or (worse) this is a minified development build using non-standard
                  // environment (e.g. "staging"). We're going to look at whether
                  // the function argument name is mangled:

                  if (
                    // 0.13 to 15
                    renderRootCode.indexOf("nextElement") !== -1 || // 0.12
                    renderRootCode.indexOf("nextComponent") !== -1
                  ) {
                    // We can't be certain whether this is a development build or not,
                    // but it is definitely unminified.
                    return "unminified";
                  } else {
                    // This is likely a minified development build.
                    return "development";
                  }
                } // By now we know that it's envified and dead code elimination worked,
                // but what if it's still not minified? (Is this even possible?)
                // Let's check matches for the first argument name.

                if (
                  // 0.13 to 15
                  renderRootCode.indexOf("nextElement") !== -1 || // 0.12
                  renderRootCode.indexOf("nextComponent") !== -1
                ) {
                  return "unminified";
                } // Seems like we're using the production version.
                // However, the branch above is Stack-only so this is 15 or earlier.

                return "outdated";
              }
            } catch (err) {
              // Weird environments may exist.
              // This code needs a higher fault tolerance
              // because it runs even with closed DevTools.
              // TODO: should we catch errors in all injected code, and not just this part?
            }

            return "production";
          }

          function checkDCE(fn) {
            // This runs for production versions of React.
            // Needs to be super safe.
            try {
              // $FlowFixMe[method-unbinding]
              var _toString2 = Function.prototype.toString;

              var code = _toString2.call(fn); // This is a string embedded in the passed function under DEV-only
              // condition. However the function executes only in PROD. Therefore,
              // if we see it, dead code elimination did not work.

              if (code.indexOf("^_^") > -1) {
                // Remember to report during next injection.
                hasDetectedBadDCE = true; // Bonus: throw an exception hoping that it gets picked up by a reporting system.
                // Not synchronously so that it doesn't break the calling code.

                setTimeout(function () {
                  throw new Error(
                    "React is running in production mode, but dead code " +
                      "elimination has not been applied. Read how to correctly " +
                      "configure React for production: " +
                      "https://reactjs.org/link/perf-use-production-build"
                  );
                });
              }
            } catch (err) {}
          } // NOTE: KEEP IN SYNC with src/backend/utils.js

          function formatWithStyles(inputArgs, style) {
            if (
              inputArgs === undefined ||
              inputArgs === null ||
              inputArgs.length === 0 || // Matches any of %c but not %%c
              (typeof inputArgs[0] === "string" && inputArgs[0].match(/([^%]|^)(%c)/g)) ||
              style === undefined
            ) {
              return inputArgs;
            } // Matches any of %(o|O|d|i|s|f), but not %%(o|O|d|i|s|f)

            var REGEXP = /([^%]|^)((%%)*)(%([oOdisf]))/g;

            if (typeof inputArgs[0] === "string" && inputArgs[0].match(REGEXP)) {
              return ["%c".concat(inputArgs[0]), style].concat(hook_toConsumableArray(inputArgs.slice(1)));
            } else {
              var firstArg = inputArgs.reduce(function (formatStr, elem, i) {
                if (i > 0) {
                  formatStr += " ";
                }

                switch (hook_typeof(elem)) {
                  case "string":
                  case "boolean":
                  case "symbol":
                    return (formatStr += "%s");

                  case "number":
                    var formatting = Number.isInteger(elem) ? "%i" : "%f";
                    return (formatStr += formatting);

                  default:
                    return (formatStr += "%o");
                }
              }, "%c");
              return [firstArg, style].concat(hook_toConsumableArray(inputArgs));
            }
          }

          var unpatchFn = null; // NOTE: KEEP IN SYNC with src/backend/console.js:patchForStrictMode
          // This function hides or dims console logs during the initial double renderer
          // in Strict Mode. We need this function because during initial render,
          // React and DevTools are connecting and the renderer interface isn't avaiable
          // and we want to be able to have consistent logging behavior for double logs
          // during the initial renderer.

          function patchConsoleForInitialRenderInStrictMode(_ref) {
            var hideConsoleLogsInStrictMode = _ref.hideConsoleLogsInStrictMode,
              browserTheme = _ref.browserTheme;
            var overrideConsoleMethods = ["error", "group", "groupCollapsed", "info", "log", "trace", "warn"];

            if (unpatchFn !== null) {
              // Don't patch twice.
              return;
            }

            var originalConsoleMethods = {};

            unpatchFn = function unpatchFn() {
              for (var _method2 in originalConsoleMethods) {
                try {
                  targetConsole[_method2] = originalConsoleMethods[_method2];
                } catch (error) {}
              }
            };

            overrideConsoleMethods.forEach(function (method) {
              try {
                var originalMethod = (originalConsoleMethods[method] = targetConsole[method]
                  .__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__
                  ? targetConsole[method].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__
                  : targetConsole[method]);

                var overrideMethod = function overrideMethod() {
                  if (!hideConsoleLogsInStrictMode) {
                    // Dim the text color of the double logs if we're not
                    // hiding them.
                    var color;

                    switch (method) {
                      case "warn":
                        color = browserTheme === "light" ? "rgba(250, 180, 50, 0.75)" : "rgba(250, 180, 50, 0.5)";
                        break;

                      case "error":
                        color = browserTheme === "light" ? "rgba(250, 123, 130, 0.75)" : "rgba(250, 123, 130, 0.5)";
                        break;

                      case "log":
                      default:
                        color = browserTheme === "light" ? "rgba(125, 125, 125, 0.75)" : "rgba(125, 125, 125, 0.5)";
                        break;
                    }

                    if (color) {
                      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                      }

                      originalMethod.apply(
                        void 0,
                        hook_toConsumableArray(formatWithStyles(args, "color: ".concat(color)))
                      );
                    } else {
                      throw Error("Console color is not defined");
                    }
                  }
                };

                overrideMethod.__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ = originalMethod;
                originalMethod.__REACT_DEVTOOLS_STRICT_MODE_OVERRIDE_METHOD__ = overrideMethod;
                targetConsole[method] = overrideMethod;
              } catch (error) {}
            });
          } // NOTE: KEEP IN SYNC with src/backend/console.js:unpatchForStrictMode

          function unpatchConsoleForInitialRenderInStrictMode() {
            if (unpatchFn !== null) {
              unpatchFn();
              unpatchFn = null;
            }
          }

          var uidCounter = 0;

          function inject(renderer) {
            var id = ++uidCounter;
            renderers.set(id, renderer);
            var reactBuildType = hasDetectedBadDCE ? "deadcode" : detectReactBuildType(renderer); // Patching the console enables DevTools to do a few useful things:
            // * Append component stacks to warnings and error messages
            // * Disabling or marking logs during a double render in Strict Mode
            // * Disable logging during re-renders to inspect hooks (see inspectHooksOfFiber)
            //
            // For React Native, we intentionally patch early (during injection).
            // This provides React Native developers with components stacks even if they don't run DevTools.
            //
            // This won't work for DOM though, since this entire file is eval'ed and inserted as a script tag.
            // In that case, we'll only patch parts of the console that are needed during the first render
            // and patch everything else later (when the frontend attaches).
            //
            // Don't patch in test environments because we don't want to interfere with Jest's own console overrides.
            //
            // Note that because this function is inlined, this conditional check must only use static booleans.
            // Otherwise the extension will throw with an undefined error.
            // (See comments in the try/catch below for more context on inlining.)

            if (true) {
              try {
                // The installHook() function is injected by being stringified in the browser,
                // so imports outside of this function do not get included.
                //
                // Normally we could check "typeof patchConsole === 'function'",
                // but Webpack wraps imports with an object (e.g. _backend_console__WEBPACK_IMPORTED_MODULE_0__)
                // and the object itself will be undefined as well for the reasons mentioned above,
                // so we use try/catch instead.
                Object(backend_console["d" /* registerRenderer */])(renderer);
                Object(backend_console["b" /* patchConsoleUsingWindowValues */])();
              } catch (error) {}
            } // If we have just reloaded to profile, we need to inject the renderer interface before the app loads.
            // Otherwise the renderer won't yet exist and we can skip this step.

            var attach = target.__REACT_DEVTOOLS_ATTACH__;

            if (typeof attach === "function") {
              var rendererInterface = attach(hook, id, renderer, target);
              hook.rendererInterfaces.set(id, rendererInterface);
            }

            hook.emit("renderer", {
              id: id,
              renderer: renderer,
              reactBuildType: reactBuildType,
            });
            return id;
          }

          var hasDetectedBadDCE = false;

          function sub(event, fn) {
            hook.on(event, fn);
            return function () {
              return hook.off(event, fn);
            };
          }

          function on(event, fn) {
            if (!listeners[event]) {
              listeners[event] = [];
            }

            listeners[event].push(fn);
          }

          function off(event, fn) {
            if (!listeners[event]) {
              return;
            }

            var index = listeners[event].indexOf(fn);

            if (index !== -1) {
              listeners[event].splice(index, 1);
            }

            if (!listeners[event].length) {
              delete listeners[event];
            }
          }

          function emit(event, data) {
            if (listeners[event]) {
              listeners[event].map(function (fn) {
                return fn(data);
              });
            }
          }

          function getFiberRoots(rendererID) {
            var roots = fiberRoots;

            if (!roots[rendererID]) {
              roots[rendererID] = new Set();
            }

            return roots[rendererID];
          }

          function onCommitFiberUnmount(rendererID, fiber) {
            var rendererInterface = rendererInterfaces.get(rendererID);

            if (rendererInterface != null) {
              rendererInterface.handleCommitFiberUnmount(fiber);
            }
          }

          function onCommitFiberRoot(rendererID, root, priorityLevel) {
            var mountedRoots = hook.getFiberRoots(rendererID);
            var current = root.current;
            var isKnownRoot = mountedRoots.has(root);
            var isUnmounting = current.memoizedState == null || current.memoizedState.element == null; // Keep track of mounted roots so we can hydrate when DevTools connect.

            if (!isKnownRoot && !isUnmounting) {
              mountedRoots.add(root);
            } else if (isKnownRoot && isUnmounting) {
              mountedRoots.delete(root);
            }

            var rendererInterface = rendererInterfaces.get(rendererID);

            if (rendererInterface != null) {
              rendererInterface.handleCommitFiberRoot(root, priorityLevel);
            }
          }

          function onPostCommitFiberRoot(rendererID, root) {
            var rendererInterface = rendererInterfaces.get(rendererID);

            if (rendererInterface != null) {
              rendererInterface.handlePostCommitFiberRoot(root);
            }
          }

          function setStrictMode(rendererID, isStrictMode) {
            var rendererInterface = rendererInterfaces.get(rendererID);

            if (rendererInterface != null) {
              if (isStrictMode) {
                rendererInterface.patchConsoleForStrictMode();
              } else {
                rendererInterface.unpatchConsoleForStrictMode();
              }
            } else {
              // This should only happen during initial render in the extension before DevTools
              // finishes its handshake with the injected renderer
              if (isStrictMode) {
                var hideConsoleLogsInStrictMode = window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__ === true;
                var browserTheme = window.__REACT_DEVTOOLS_BROWSER_THEME__;
                patchConsoleForInitialRenderInStrictMode({
                  hideConsoleLogsInStrictMode: hideConsoleLogsInStrictMode,
                  browserTheme: browserTheme,
                });
              } else {
                unpatchConsoleForInitialRenderInStrictMode();
              }
            }
          }

          var openModuleRangesStack = [];
          var moduleRanges = [];

          function getTopStackFrameString(error) {
            var frames = error.stack.split("\n");
            var frame = frames.length > 1 ? frames[1] : null;
            return frame;
          }

          function getInternalModuleRanges() {
            return moduleRanges;
          }

          function registerInternalModuleStart(error) {
            var startStackFrame = getTopStackFrameString(error);

            if (startStackFrame !== null) {
              openModuleRangesStack.push(startStackFrame);
            }
          }

          function registerInternalModuleStop(error) {
            if (openModuleRangesStack.length > 0) {
              var startStackFrame = openModuleRangesStack.pop();
              var stopStackFrame = getTopStackFrameString(error);

              if (stopStackFrame !== null) {
                moduleRanges.push([startStackFrame, stopStackFrame]);
              }
            }
          } // TODO: More meaningful names for "rendererInterfaces" and "renderers".

          var fiberRoots = {};
          var rendererInterfaces = new Map();
          var listeners = {};
          var renderers = new Map();
          var hook = {
            rendererInterfaces: rendererInterfaces,
            listeners: listeners,
            // Fast Refresh for web relies on this.
            renderers: renderers,
            emit: emit,
            getFiberRoots: getFiberRoots,
            inject: inject,
            on: on,
            off: off,
            sub: sub,
            // This is a legacy flag.
            // React v16 checks the hook for this to ensure DevTools is new enough.
            supportsFiber: true,
            // React calls these methods.
            checkDCE: checkDCE,
            onCommitFiberUnmount: onCommitFiberUnmount,
            onCommitFiberRoot: onCommitFiberRoot,
            onPostCommitFiberRoot: onPostCommitFiberRoot,
            setStrictMode: setStrictMode,
            // Schedule Profiler runtime helpers.
            // These internal React modules to report their own boundaries
            // which in turn enables the profiler to dim or filter internal frames.
            getInternalModuleRanges: getInternalModuleRanges,
            registerInternalModuleStart: registerInternalModuleStart,
            registerInternalModuleStop: registerInternalModuleStop,
          };

          if (false) {
          }

          Object.defineProperty(target, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
            // This property needs to be configurable for the test environment,
            // else we won't be able to delete and recreate it between tests.
            configurable: false,
            enumerable: false,
            get: function get() {
              return hook;
            },
          });
          return hook;
        }
        // EXTERNAL MODULE: ../react-devtools-shared/src/backend/renderer.js + 6 modules
        var backend_renderer = __webpack_require__(15);

        // EXTERNAL MODULE: ../react-devtools-shared/src/types.js
        var types = __webpack_require__(1);

        // EXTERNAL MODULE: ../react-devtools-shared/src/utils.js
        var src_utils = __webpack_require__(0);

        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/legacy/utils.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */
        function decorate(object, attr, fn) {
          var old = object[attr];

          object[attr] = function (instance) {
            return fn.call(this, old, arguments);
          };

          return old;
        }
        function decorateMany(source, fns) {
          var olds = {};

          for (var name in fns) {
            olds[name] = decorate(source, name, fns[name]);
          }

          return olds;
        }
        function restoreMany(source, olds) {
          for (var name in olds) {
            source[name] = olds[name];
          }
        }
        function forceUpdate(instance) {
          if (typeof instance.forceUpdate === "function") {
            instance.forceUpdate();
          } else if (instance.updater != null && typeof instance.updater.enqueueForceUpdate === "function") {
            instance.updater.enqueueForceUpdate(this, function () {}, "forceUpdate");
          }
        }
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/legacy/renderer.js
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                renderer_defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }

        function renderer_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function renderer_typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            renderer_typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            renderer_typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return renderer_typeof(obj);
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        function getData(internalInstance) {
          var displayName = null;
          var key = null; // != used deliberately here to catch undefined and null

          if (internalInstance._currentElement != null) {
            if (internalInstance._currentElement.key) {
              key = String(internalInstance._currentElement.key);
            }

            var elementType = internalInstance._currentElement.type;

            if (typeof elementType === "string") {
              displayName = elementType;
            } else if (typeof elementType === "function") {
              displayName = Object(src_utils["h" /* getDisplayName */])(elementType);
            }
          }

          return {
            displayName: displayName,
            key: key,
          };
        }

        function getElementType(internalInstance) {
          // != used deliberately here to catch undefined and null
          if (internalInstance._currentElement != null) {
            var elementType = internalInstance._currentElement.type;

            if (typeof elementType === "function") {
              var publicInstance = internalInstance.getPublicInstance();

              if (publicInstance !== null) {
                return types["e" /* ElementTypeClass */];
              } else {
                return types["h" /* ElementTypeFunction */];
              }
            } else if (typeof elementType === "string") {
              return types["i" /* ElementTypeHostComponent */];
            }
          }

          return types["k" /* ElementTypeOtherOrUnknown */];
        }

        function getChildren(internalInstance) {
          var children = []; // If the parent is a native node without rendered children, but with
          // multiple string children, then the `element` that gets passed in here is
          // a plain value -- a string or number.

          if (renderer_typeof(internalInstance) !== "object") {
            // No children
          } else if (internalInstance._currentElement === null || internalInstance._currentElement === false) {
            // No children
          } else if (internalInstance._renderedComponent) {
            var child = internalInstance._renderedComponent;

            if (getElementType(child) !== types["k" /* ElementTypeOtherOrUnknown */]) {
              children.push(child);
            }
          } else if (internalInstance._renderedChildren) {
            var renderedChildren = internalInstance._renderedChildren;

            for (var name in renderedChildren) {
              var _child = renderedChildren[name];

              if (getElementType(_child) !== types["k" /* ElementTypeOtherOrUnknown */]) {
                children.push(_child);
              }
            }
          } // Note: we skip the case where children are just strings or numbers
          // because the new DevTools skips over host text nodes anyway.

          return children;
        }

        function renderer_attach(hook, rendererID, renderer, global) {
          var idToInternalInstanceMap = new Map();
          var internalInstanceToIDMap = new WeakMap();
          var internalInstanceToRootIDMap = new WeakMap();
          var getInternalIDForNative = null;
          var findNativeNodeForInternalID;

          var getFiberForNative = function getFiberForNative(node) {
            // Not implemented.
            return null;
          };

          if (renderer.ComponentTree) {
            getInternalIDForNative = function getInternalIDForNative(node, findNearestUnfilteredAncestor) {
              var internalInstance = renderer.ComponentTree.getClosestInstanceFromNode(node);
              return internalInstanceToIDMap.get(internalInstance) || null;
            };

            findNativeNodeForInternalID = function findNativeNodeForInternalID(id) {
              var internalInstance = idToInternalInstanceMap.get(id);
              return renderer.ComponentTree.getNodeFromInstance(internalInstance);
            };

            getFiberForNative = function getFiberForNative(node) {
              return renderer.ComponentTree.getClosestInstanceFromNode(node);
            };
          } else if (renderer.Mount.getID && renderer.Mount.getNode) {
            getInternalIDForNative = function getInternalIDForNative(node, findNearestUnfilteredAncestor) {
              // Not implemented.
              return null;
            };

            findNativeNodeForInternalID = function findNativeNodeForInternalID(id) {
              // Not implemented.
              return null;
            };
          }

          function getDisplayNameForFiberID(id) {
            var internalInstance = idToInternalInstanceMap.get(id);
            return internalInstance ? getData(internalInstance).displayName : null;
          }

          function getID(internalInstance) {
            if (renderer_typeof(internalInstance) !== "object" || internalInstance === null) {
              throw new Error("Invalid internal instance: " + internalInstance);
            }

            if (!internalInstanceToIDMap.has(internalInstance)) {
              var _id = Object(src_utils["k" /* getUID */])();

              internalInstanceToIDMap.set(internalInstance, _id);
              idToInternalInstanceMap.set(_id, internalInstance);
            }

            return internalInstanceToIDMap.get(internalInstance);
          }

          function areEqualArrays(a, b) {
            if (a.length !== b.length) {
              return false;
            }

            for (var i = 0; i < a.length; i++) {
              if (a[i] !== b[i]) {
                return false;
              }
            }

            return true;
          } // This is shared mutable state that lets us keep track of where we are.

          var parentIDStack = [];
          var oldReconcilerMethods = null;

          if (renderer.Reconciler) {
            // React 15
            oldReconcilerMethods = decorateMany(renderer.Reconciler, {
              mountComponent: function mountComponent(fn, args) {
                var internalInstance = args[0];
                var hostContainerInfo = args[3];

                if (getElementType(internalInstance) === types["k" /* ElementTypeOtherOrUnknown */]) {
                  // $FlowFixMe[object-this-reference] found when upgrading Flow
                  return fn.apply(this, args);
                }

                if (hostContainerInfo._topLevelWrapper === undefined) {
                  // SSR
                  // $FlowFixMe[object-this-reference] found when upgrading Flow
                  return fn.apply(this, args);
                }

                var id = getID(internalInstance); // Push the operation.

                var parentID = parentIDStack.length > 0 ? parentIDStack[parentIDStack.length - 1] : 0;
                recordMount(internalInstance, id, parentID);
                parentIDStack.push(id); // Remember the root.

                internalInstanceToRootIDMap.set(internalInstance, getID(hostContainerInfo._topLevelWrapper));

                try {
                  // $FlowFixMe[object-this-reference] found when upgrading Flow
                  var result = fn.apply(this, args);
                  parentIDStack.pop();
                  return result;
                } catch (err) {
                  // $FlowFixMe[incompatible-type] found when upgrading Flow
                  parentIDStack = [];
                  throw err;
                } finally {
                  if (parentIDStack.length === 0) {
                    var rootID = internalInstanceToRootIDMap.get(internalInstance);

                    if (rootID === undefined) {
                      throw new Error("Expected to find root ID.");
                    }

                    flushPendingEvents(rootID);
                  }
                }
              },
              performUpdateIfNecessary: function performUpdateIfNecessary(fn, args) {
                var internalInstance = args[0];

                if (getElementType(internalInstance) === types["k" /* ElementTypeOtherOrUnknown */]) {
                  // $FlowFixMe[object-this-reference] found when upgrading Flow
                  return fn.apply(this, args);
                }

                var id = getID(internalInstance);
                parentIDStack.push(id);
                var prevChildren = getChildren(internalInstance);

                try {
                  // $FlowFixMe[object-this-reference] found when upgrading Flow
                  var result = fn.apply(this, args);
                  var nextChildren = getChildren(internalInstance);

                  if (!areEqualArrays(prevChildren, nextChildren)) {
                    // Push the operation
                    recordReorder(internalInstance, id, nextChildren);
                  }

                  parentIDStack.pop();
                  return result;
                } catch (err) {
                  // $FlowFixMe[incompatible-type] found when upgrading Flow
                  parentIDStack = [];
                  throw err;
                } finally {
                  if (parentIDStack.length === 0) {
                    var rootID = internalInstanceToRootIDMap.get(internalInstance);

                    if (rootID === undefined) {
                      throw new Error("Expected to find root ID.");
                    }

                    flushPendingEvents(rootID);
                  }
                }
              },
              receiveComponent: function receiveComponent(fn, args) {
                var internalInstance = args[0];

                if (getElementType(internalInstance) === types["k" /* ElementTypeOtherOrUnknown */]) {
                  // $FlowFixMe[object-this-reference] found when upgrading Flow
                  return fn.apply(this, args);
                }

                var id = getID(internalInstance);
                parentIDStack.push(id);
                var prevChildren = getChildren(internalInstance);

                try {
                  // $FlowFixMe[object-this-reference] found when upgrading Flow
                  var result = fn.apply(this, args);
                  var nextChildren = getChildren(internalInstance);

                  if (!areEqualArrays(prevChildren, nextChildren)) {
                    // Push the operation
                    recordReorder(internalInstance, id, nextChildren);
                  }

                  parentIDStack.pop();
                  return result;
                } catch (err) {
                  // $FlowFixMe[incompatible-type] found when upgrading Flow
                  parentIDStack = [];
                  throw err;
                } finally {
                  if (parentIDStack.length === 0) {
                    var rootID = internalInstanceToRootIDMap.get(internalInstance);

                    if (rootID === undefined) {
                      throw new Error("Expected to find root ID.");
                    }

                    flushPendingEvents(rootID);
                  }
                }
              },
              unmountComponent: function unmountComponent(fn, args) {
                var internalInstance = args[0];

                if (getElementType(internalInstance) === types["k" /* ElementTypeOtherOrUnknown */]) {
                  // $FlowFixMe[object-this-reference] found when upgrading Flow
                  return fn.apply(this, args);
                }

                var id = getID(internalInstance);
                parentIDStack.push(id);

                try {
                  // $FlowFixMe[object-this-reference] found when upgrading Flow
                  var result = fn.apply(this, args);
                  parentIDStack.pop(); // Push the operation.

                  recordUnmount(internalInstance, id);
                  return result;
                } catch (err) {
                  // $FlowFixMe[incompatible-type] found when upgrading Flow
                  parentIDStack = [];
                  throw err;
                } finally {
                  if (parentIDStack.length === 0) {
                    var rootID = internalInstanceToRootIDMap.get(internalInstance);

                    if (rootID === undefined) {
                      throw new Error("Expected to find root ID.");
                    }

                    flushPendingEvents(rootID);
                  }
                }
              },
            });
          }

          function cleanup() {
            if (oldReconcilerMethods !== null) {
              if (renderer.Component) {
                restoreMany(renderer.Component.Mixin, oldReconcilerMethods);
              } else {
                restoreMany(renderer.Reconciler, oldReconcilerMethods);
              }
            }

            oldReconcilerMethods = null;
          }

          function recordMount(internalInstance, id, parentID) {
            var isRoot = parentID === 0;

            if (constants["s" /* __DEBUG__ */]) {
              console.log(
                "%crecordMount()",
                "color: green; font-weight: bold;",
                id,
                getData(internalInstance).displayName
              );
            }

            if (isRoot) {
              // TODO Is this right? For all versions?
              var hasOwnerMetadata =
                internalInstance._currentElement != null && internalInstance._currentElement._owner != null;
              pushOperation(constants["l" /* TREE_OPERATION_ADD */]);
              pushOperation(id);
              pushOperation(types["m" /* ElementTypeRoot */]);
              pushOperation(0); // StrictMode compliant?

              pushOperation(0); // Profiling flag

              pushOperation(0); // StrictMode supported?

              pushOperation(hasOwnerMetadata ? 1 : 0);
            } else {
              var type = getElementType(internalInstance);

              var _getData = getData(internalInstance),
                displayName = _getData.displayName,
                key = _getData.key;

              var ownerID =
                internalInstance._currentElement != null && internalInstance._currentElement._owner != null
                  ? getID(internalInstance._currentElement._owner)
                  : 0;
              var displayNameStringID = getStringID(displayName);
              var keyStringID = getStringID(key);
              pushOperation(constants["l" /* TREE_OPERATION_ADD */]);
              pushOperation(id);
              pushOperation(type);
              pushOperation(parentID);
              pushOperation(ownerID);
              pushOperation(displayNameStringID);
              pushOperation(keyStringID);
            }
          }

          function recordReorder(internalInstance, id, nextChildren) {
            pushOperation(constants["o" /* TREE_OPERATION_REORDER_CHILDREN */]);
            pushOperation(id);
            var nextChildIDs = nextChildren.map(getID);
            pushOperation(nextChildIDs.length);

            for (var i = 0; i < nextChildIDs.length; i++) {
              pushOperation(nextChildIDs[i]);
            }
          }

          function recordUnmount(internalInstance, id) {
            pendingUnmountedIDs.push(id);
            idToInternalInstanceMap.delete(id);
          }

          function crawlAndRecordInitialMounts(id, parentID, rootID) {
            if (constants["s" /* __DEBUG__ */]) {
              console.group("crawlAndRecordInitialMounts() id:", id);
            }

            var internalInstance = idToInternalInstanceMap.get(id);

            if (internalInstance != null) {
              internalInstanceToRootIDMap.set(internalInstance, rootID);
              recordMount(internalInstance, id, parentID);
              getChildren(internalInstance).forEach(function (child) {
                return crawlAndRecordInitialMounts(getID(child), id, rootID);
              });
            }

            if (constants["s" /* __DEBUG__ */]) {
              console.groupEnd();
            }
          }

          function flushInitialOperations() {
            // Crawl roots though and register any nodes that mounted before we were injected.
            var roots = renderer.Mount._instancesByReactRootID || renderer.Mount._instancesByContainerID;

            for (var key in roots) {
              var internalInstance = roots[key];

              var _id2 = getID(internalInstance);

              crawlAndRecordInitialMounts(_id2, 0, _id2);
              flushPendingEvents(_id2);
            }
          }

          var pendingOperations = [];
          var pendingStringTable = new Map();
          var pendingUnmountedIDs = [];
          var pendingStringTableLength = 0;
          var pendingUnmountedRootID = null;

          function flushPendingEvents(rootID) {
            if (pendingOperations.length === 0 && pendingUnmountedIDs.length === 0 && pendingUnmountedRootID === null) {
              return;
            }

            var numUnmountIDs = pendingUnmountedIDs.length + (pendingUnmountedRootID === null ? 0 : 1);
            var operations = new Array( // Identify which renderer this update is coming from.
              2 + // [rendererID, rootFiberID]
                // How big is the string table?
                1 + // [stringTableLength]
                // Then goes the actual string table.
                pendingStringTableLength + // All unmounts are batched in a single message.
                // [TREE_OPERATION_REMOVE, removedIDLength, ...ids]
                (numUnmountIDs > 0 ? 2 + numUnmountIDs : 0) + // Mount operations
                pendingOperations.length
            ); // Identify which renderer this update is coming from.
            // This enables roots to be mapped to renderers,
            // Which in turn enables fiber properations, states, and hooks to be inspected.

            var i = 0;
            operations[i++] = rendererID;
            operations[i++] = rootID; // Now fill in the string table.
            // [stringTableLength, str1Length, ...str1, str2Length, ...str2, ...]

            operations[i++] = pendingStringTableLength;
            pendingStringTable.forEach(function (value, key) {
              operations[i++] = key.length;
              var encodedKey = Object(src_utils["p" /* utfEncodeString */])(key);

              for (var j = 0; j < encodedKey.length; j++) {
                operations[i + j] = encodedKey[j];
              }

              i += key.length;
            });

            if (numUnmountIDs > 0) {
              // All unmounts except roots are batched in a single message.
              operations[i++] = constants["m" /* TREE_OPERATION_REMOVE */]; // The first number is how many unmounted IDs we're gonna send.

              operations[i++] = numUnmountIDs; // Fill in the unmounts

              for (var j = 0; j < pendingUnmountedIDs.length; j++) {
                operations[i++] = pendingUnmountedIDs[j];
              } // The root ID should always be unmounted last.

              if (pendingUnmountedRootID !== null) {
                operations[i] = pendingUnmountedRootID;
                i++;
              }
            } // Fill in the rest of the operations.

            for (var _j = 0; _j < pendingOperations.length; _j++) {
              operations[i + _j] = pendingOperations[_j];
            }

            i += pendingOperations.length;

            if (constants["s" /* __DEBUG__ */]) {
              Object(src_utils["m" /* printOperationsArray */])(operations);
            } // If we've already connected to the frontend, just pass the operations through.

            hook.emit("operations", operations);
            pendingOperations.length = 0;
            pendingUnmountedIDs = [];
            pendingUnmountedRootID = null;
            pendingStringTable.clear();
            pendingStringTableLength = 0;
          }

          function pushOperation(op) {
            if (false) {
            }

            pendingOperations.push(op);
          }

          function getStringID(str) {
            if (str === null) {
              return 0;
            }

            var existingID = pendingStringTable.get(str);

            if (existingID !== undefined) {
              return existingID;
            }

            var stringID = pendingStringTable.size + 1;
            pendingStringTable.set(str, stringID); // The string table total length needs to account
            // both for the string length, and for the array item
            // that contains the length itself. Hence + 1.

            pendingStringTableLength += str.length + 1;
            return stringID;
          }

          var currentlyInspectedElementID = null;
          var currentlyInspectedPaths = {}; // Track the intersection of currently inspected paths,
          // so that we can send their data along if the element is re-rendered.

          function mergeInspectedPaths(path) {
            var current = currentlyInspectedPaths;
            path.forEach(function (key) {
              if (!current[key]) {
                current[key] = {};
              }

              current = current[key];
            });
          }

          function createIsPathAllowed(key) {
            // This function helps prevent previously-inspected paths from being dehydrated in updates.
            // This is important to avoid a bad user experience where expanded toggles collapse on update.
            return function isPathAllowed(path) {
              var current = currentlyInspectedPaths[key];

              if (!current) {
                return false;
              }

              for (var i = 0; i < path.length; i++) {
                current = current[path[i]];

                if (!current) {
                  return false;
                }
              }

              return true;
            };
          } // Fast path props lookup for React Native style editor.

          function getInstanceAndStyle(id) {
            var instance = null;
            var style = null;
            var internalInstance = idToInternalInstanceMap.get(id);

            if (internalInstance != null) {
              instance = internalInstance._instance || null;
              var element = internalInstance._currentElement;

              if (element != null && element.props != null) {
                style = element.props.style || null;
              }
            }

            return {
              instance: instance,
              style: style,
            };
          }

          function updateSelectedElement(id) {
            var internalInstance = idToInternalInstanceMap.get(id);

            if (internalInstance == null) {
              console.warn('Could not find instance with id "'.concat(id, '"'));
              return;
            }

            switch (getElementType(internalInstance)) {
              case types["e" /* ElementTypeClass */]:
                global.$r = internalInstance._instance;
                break;

              case types["h" /* ElementTypeFunction */]:
                var element = internalInstance._currentElement;

                if (element == null) {
                  console.warn('Could not find element with id "'.concat(id, '"'));
                  return;
                }

                global.$r = {
                  props: element.props,
                  type: element.type,
                };
                break;

              default:
                global.$r = null;
                break;
            }
          }

          function storeAsGlobal(id, path, count) {
            var inspectedElement = inspectElementRaw(id);

            if (inspectedElement !== null) {
              var value = Object(src_utils["j" /* getInObject */])(inspectedElement, path);
              var key = "$reactTemp".concat(count);
              window[key] = value;
              console.log(key);
              console.log(value);
            }
          }

          function copyElementPath(id, path) {
            var inspectedElement = inspectElementRaw(id);

            if (inspectedElement !== null) {
              Object(utils["b" /* copyToClipboard */])(
                Object(src_utils["j" /* getInObject */])(inspectedElement, path)
              );
            }
          }

          function inspectElement(requestID, id, path, forceFullData) {
            if (forceFullData || currentlyInspectedElementID !== id) {
              currentlyInspectedElementID = id;
              currentlyInspectedPaths = {};
            }

            var inspectedElement = inspectElementRaw(id);

            if (inspectedElement === null) {
              return {
                id: id,
                responseID: requestID,
                type: "not-found",
              };
            }

            if (path !== null) {
              mergeInspectedPaths(path);
            } // Any time an inspected element has an update,
            // we should update the selected $r value as wel.
            // Do this before dehydration (cleanForBridge).

            updateSelectedElement(id);
            inspectedElement.context = Object(utils["a" /* cleanForBridge */])(
              inspectedElement.context,
              createIsPathAllowed("context")
            );
            inspectedElement.props = Object(utils["a" /* cleanForBridge */])(
              inspectedElement.props,
              createIsPathAllowed("props")
            );
            inspectedElement.state = Object(utils["a" /* cleanForBridge */])(
              inspectedElement.state,
              createIsPathAllowed("state")
            );
            return {
              id: id,
              responseID: requestID,
              type: "full-data",
              value: inspectedElement,
            };
          }

          function inspectElementRaw(id) {
            var internalInstance = idToInternalInstanceMap.get(id);

            if (internalInstance == null) {
              return null;
            }

            var _getData2 = getData(internalInstance),
              displayName = _getData2.displayName,
              key = _getData2.key;

            var type = getElementType(internalInstance);
            var context = null;
            var owners = null;
            var props = null;
            var state = null;
            var source = null;
            var element = internalInstance._currentElement;

            if (element !== null) {
              props = element.props;
              source = element._source != null ? element._source : null;
              var owner = element._owner;

              if (owner) {
                owners = [];

                while (owner != null) {
                  owners.push({
                    displayName: getData(owner).displayName || "Unknown",
                    id: getID(owner),
                    key: element.key,
                    type: getElementType(owner),
                  });

                  if (owner._currentElement) {
                    owner = owner._currentElement._owner;
                  }
                }
              }
            }

            var publicInstance = internalInstance._instance;

            if (publicInstance != null) {
              context = publicInstance.context || null;
              state = publicInstance.state || null;
            } // Not implemented

            var errors = [];
            var warnings = [];
            return {
              id: id,
              // Does the current renderer support editable hooks and function props?
              canEditHooks: false,
              canEditFunctionProps: false,
              // Does the current renderer support advanced editing interface?
              canEditHooksAndDeletePaths: false,
              canEditHooksAndRenamePaths: false,
              canEditFunctionPropsDeletePaths: false,
              canEditFunctionPropsRenamePaths: false,
              // Toggle error boundary did not exist in legacy versions
              canToggleError: false,
              isErrored: false,
              targetErrorBoundaryID: null,
              // Suspense did not exist in legacy versions
              canToggleSuspense: false,
              // Can view component source location.
              canViewSource:
                type === types["e" /* ElementTypeClass */] || type === types["h" /* ElementTypeFunction */],
              // Only legacy context exists in legacy versions.
              hasLegacyContext: true,
              displayName: displayName,
              type: type,
              key: key != null ? key : null,
              // Inspectable properties.
              context: context,
              hooks: null,
              props: props,
              state: state,
              errors: errors,
              warnings: warnings,
              // List of owners
              owners: owners,
              // Location of component in source code.
              source: source,
              rootType: null,
              rendererPackageName: null,
              rendererVersion: null,
              plugins: {
                stylex: null,
              },
            };
          }

          function logElementToConsole(id) {
            var result = inspectElementRaw(id);

            if (result === null) {
              console.warn('Could not find element with id "'.concat(id, '"'));
              return;
            }

            var supportsGroup = typeof console.groupCollapsed === "function";

            if (supportsGroup) {
              console.groupCollapsed(
                "[Click to expand] %c<".concat(result.displayName || "Component", " />"), // --dom-tag-name-color is the CSS variable Chrome styles HTML elements with in the console.
                "color: var(--dom-tag-name-color); font-weight: normal;"
              );
            }

            if (result.props !== null) {
              console.log("Props:", result.props);
            }

            if (result.state !== null) {
              console.log("State:", result.state);
            }

            if (result.context !== null) {
              console.log("Context:", result.context);
            }

            var nativeNode = findNativeNodeForInternalID(id);

            if (nativeNode !== null) {
              console.log("Node:", nativeNode);
            }

            if (window.chrome || /firefox/i.test(navigator.userAgent)) {
              console.log("Right-click any value to save it as a global variable for further inspection.");
            }

            if (supportsGroup) {
              console.groupEnd();
            }
          }

          function prepareViewAttributeSource(id, path) {
            var inspectedElement = inspectElementRaw(id);

            if (inspectedElement !== null) {
              window.$attribute = Object(src_utils["j" /* getInObject */])(inspectedElement, path);
            }
          }

          function prepareViewElementSource(id) {
            var internalInstance = idToInternalInstanceMap.get(id);

            if (internalInstance == null) {
              console.warn('Could not find instance with id "'.concat(id, '"'));
              return;
            }

            var element = internalInstance._currentElement;

            if (element == null) {
              console.warn('Could not find element with id "'.concat(id, '"'));
              return;
            }

            global.$type = element.type;
          }

          function deletePath(type, id, hookID, path) {
            var internalInstance = idToInternalInstanceMap.get(id);

            if (internalInstance != null) {
              var publicInstance = internalInstance._instance;

              if (publicInstance != null) {
                switch (type) {
                  case "context":
                    Object(src_utils["c" /* deletePathInObject */])(publicInstance.context, path);
                    forceUpdate(publicInstance);
                    break;

                  case "hooks":
                    throw new Error("Hooks not supported by this renderer");

                  case "props":
                    var element = internalInstance._currentElement;
                    internalInstance._currentElement = _objectSpread(
                      _objectSpread({}, element),
                      {},
                      {
                        props: Object(utils["c" /* copyWithDelete */])(element.props, path),
                      }
                    );
                    forceUpdate(publicInstance);
                    break;

                  case "state":
                    Object(src_utils["c" /* deletePathInObject */])(publicInstance.state, path);
                    forceUpdate(publicInstance);
                    break;
                }
              }
            }
          }

          function renamePath(type, id, hookID, oldPath, newPath) {
            var internalInstance = idToInternalInstanceMap.get(id);

            if (internalInstance != null) {
              var publicInstance = internalInstance._instance;

              if (publicInstance != null) {
                switch (type) {
                  case "context":
                    Object(src_utils["n" /* renamePathInObject */])(publicInstance.context, oldPath, newPath);
                    forceUpdate(publicInstance);
                    break;

                  case "hooks":
                    throw new Error("Hooks not supported by this renderer");

                  case "props":
                    var element = internalInstance._currentElement;
                    internalInstance._currentElement = _objectSpread(
                      _objectSpread({}, element),
                      {},
                      {
                        props: Object(utils["d" /* copyWithRename */])(element.props, oldPath, newPath),
                      }
                    );
                    forceUpdate(publicInstance);
                    break;

                  case "state":
                    Object(src_utils["n" /* renamePathInObject */])(publicInstance.state, oldPath, newPath);
                    forceUpdate(publicInstance);
                    break;
                }
              }
            }
          }

          function overrideValueAtPath(type, id, hookID, path, value) {
            var internalInstance = idToInternalInstanceMap.get(id);

            if (internalInstance != null) {
              var publicInstance = internalInstance._instance;

              if (publicInstance != null) {
                switch (type) {
                  case "context":
                    Object(src_utils["o" /* setInObject */])(publicInstance.context, path, value);
                    forceUpdate(publicInstance);
                    break;

                  case "hooks":
                    throw new Error("Hooks not supported by this renderer");

                  case "props":
                    var element = internalInstance._currentElement;
                    internalInstance._currentElement = _objectSpread(
                      _objectSpread({}, element),
                      {},
                      {
                        props: Object(utils["e" /* copyWithSet */])(element.props, path, value),
                      }
                    );
                    forceUpdate(publicInstance);
                    break;

                  case "state":
                    Object(src_utils["o" /* setInObject */])(publicInstance.state, path, value);
                    forceUpdate(publicInstance);
                    break;
                }
              }
            }
          } // v16+ only features

          var getProfilingData = function getProfilingData() {
            throw new Error("getProfilingData not supported by this renderer");
          };

          var handleCommitFiberRoot = function handleCommitFiberRoot() {
            throw new Error("handleCommitFiberRoot not supported by this renderer");
          };

          var handleCommitFiberUnmount = function handleCommitFiberUnmount() {
            throw new Error("handleCommitFiberUnmount not supported by this renderer");
          };

          var handlePostCommitFiberRoot = function handlePostCommitFiberRoot() {
            throw new Error("handlePostCommitFiberRoot not supported by this renderer");
          };

          var overrideError = function overrideError() {
            throw new Error("overrideError not supported by this renderer");
          };

          var overrideSuspense = function overrideSuspense() {
            throw new Error("overrideSuspense not supported by this renderer");
          };

          var startProfiling = function startProfiling() {
            // Do not throw, since this would break a multi-root scenario where v15 and v16 were both present.
          };

          var stopProfiling = function stopProfiling() {
            // Do not throw, since this would break a multi-root scenario where v15 and v16 were both present.
          };

          function getBestMatchForTrackedPath() {
            // Not implemented.
            return null;
          }

          function getPathForElement(id) {
            // Not implemented.
            return null;
          }

          function updateComponentFilters(componentFilters) {
            // Not implemented.
          }

          function setTraceUpdatesEnabled(enabled) {
            // Not implemented.
          }

          function setTrackedPath(path) {
            // Not implemented.
          }

          function getOwnersList(id) {
            // Not implemented.
            return null;
          }

          function clearErrorsAndWarnings() {
            // Not implemented
          }

          function clearErrorsForFiberID(id) {
            // Not implemented
          }

          function clearWarningsForFiberID(id) {
            // Not implemented
          }

          function patchConsoleForStrictMode() {}

          function unpatchConsoleForStrictMode() {}

          return {
            clearErrorsAndWarnings: clearErrorsAndWarnings,
            clearErrorsForFiberID: clearErrorsForFiberID,
            clearWarningsForFiberID: clearWarningsForFiberID,
            cleanup: cleanup,
            copyElementPath: copyElementPath,
            deletePath: deletePath,
            flushInitialOperations: flushInitialOperations,
            getBestMatchForTrackedPath: getBestMatchForTrackedPath,
            getDisplayNameForFiberID: getDisplayNameForFiberID,
            getFiberForNative: getFiberForNative,
            getFiberIDForNative: getInternalIDForNative,
            getInstanceAndStyle: getInstanceAndStyle,
            findNativeNodesForFiberID: function findNativeNodesForFiberID(id) {
              var nativeNode = findNativeNodeForInternalID(id);
              return nativeNode == null ? null : [nativeNode];
            },
            getOwnersList: getOwnersList,
            getPathForElement: getPathForElement,
            getProfilingData: getProfilingData,
            handleCommitFiberRoot: handleCommitFiberRoot,
            handleCommitFiberUnmount: handleCommitFiberUnmount,
            handlePostCommitFiberRoot: handlePostCommitFiberRoot,
            inspectElement: inspectElement,
            logElementToConsole: logElementToConsole,
            overrideError: overrideError,
            overrideSuspense: overrideSuspense,
            overrideValueAtPath: overrideValueAtPath,
            renamePath: renamePath,
            patchConsoleForStrictMode: patchConsoleForStrictMode,
            prepareViewAttributeSource: prepareViewAttributeSource,
            prepareViewElementSource: prepareViewElementSource,
            renderer: renderer,
            setTraceUpdatesEnabled: setTraceUpdatesEnabled,
            setTrackedPath: setTrackedPath,
            startProfiling: startProfiling,
            stopProfiling: stopProfiling,
            storeAsGlobal: storeAsGlobal,
            unpatchConsoleForStrictMode: unpatchConsoleForStrictMode,
            updateComponentFilters: updateComponentFilters,
          };
        }
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/index.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        function initBackend(hook, agent, global) {
          if (hook == null) {
            // DevTools didn't get injected into this page (maybe b'c of the contentType).
            return function () {};
          }

          var subs = [
            hook.sub("renderer-attached", function (_ref) {
              var id = _ref.id,
                renderer = _ref.renderer,
                rendererInterface = _ref.rendererInterface;
              agent.setRendererInterface(id, rendererInterface); // Now that the Store and the renderer interface are connected,
              // it's time to flush the pending operation codes to the frontend.

              rendererInterface.flushInitialOperations();
            }),
            hook.sub("unsupported-renderer-version", function (id) {
              agent.onUnsupportedRenderer(id);
            }),
            hook.sub("fastRefreshScheduled", agent.onFastRefreshScheduled),
            hook.sub("operations", agent.onHookOperations),
            hook.sub("traceUpdates", agent.onTraceUpdates), // TODO Add additional subscriptions required for profiling mode
          ];

          var attachRenderer = function attachRenderer(id, renderer) {
            var rendererInterface = hook.rendererInterfaces.get(id); // Inject any not-yet-injected renderers (if we didn't reload-and-profile)

            if (rendererInterface == null) {
              if (typeof renderer.findFiberByHostInstance === "function") {
                // react-reconciler v16+
                rendererInterface = Object(backend_renderer["a" /* attach */])(hook, id, renderer, global);
              } else if (renderer.ComponentTree) {
                // react-dom v15
                rendererInterface = renderer_attach(hook, id, renderer, global);
              } else {
                // Older react-dom or other unsupported renderer version
              }

              if (rendererInterface != null) {
                hook.rendererInterfaces.set(id, rendererInterface);
              }
            } // Notify the DevTools frontend about new renderers.
            // This includes any that were attached early (via __REACT_DEVTOOLS_ATTACH__).

            if (rendererInterface != null) {
              hook.emit("renderer-attached", {
                id: id,
                renderer: renderer,
                rendererInterface: rendererInterface,
              });
            } else {
              hook.emit("unsupported-renderer-version", id);
            }
          }; // Connect renderers that have already injected themselves.

          hook.renderers.forEach(function (renderer, id) {
            attachRenderer(id, renderer);
          }); // Connect any new renderers that injected themselves.

          subs.push(
            hook.sub("renderer", function (_ref2) {
              var id = _ref2.id,
                renderer = _ref2.renderer;
              attachRenderer(id, renderer);
            })
          );
          hook.emit("react-devtools", agent);
          hook.reactDevtoolsAgent = agent;

          var onAgentShutdown = function onAgentShutdown() {
            subs.forEach(function (fn) {
              return fn();
            });
            hook.rendererInterfaces.forEach(function (rendererInterface) {
              rendererInterface.cleanup();
            });
            hook.reactDevtoolsAgent = null;
          };

          agent.addListener("shutdown", onAgentShutdown);
          subs.push(function () {
            agent.removeListener("shutdown", onAgentShutdown);
          });
          return function () {
            subs.forEach(function (fn) {
              return fn();
            });
          };
        }
        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/NativeStyleEditor/resolveBoxStyle.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        /**
         * This mirrors react-native/Libraries/Inspector/resolveBoxStyle.js (but without RTL support).
         *
         * Resolve a style property into it's component parts, e.g.
         *
         * resolveBoxStyle('margin', {margin: 5, marginBottom: 10})
         * -> {top: 5, left: 5, right: 5, bottom: 10}
         */
        function resolveBoxStyle(prefix, style) {
          var hasParts = false;
          var result = {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          };
          var styleForAll = style[prefix];

          if (styleForAll != null) {
            // eslint-disable-next-line no-for-of-loops/no-for-of-loops
            for (var _i = 0, _Object$keys = Object.keys(result); _i < _Object$keys.length; _i++) {
              var key = _Object$keys[_i];
              result[key] = styleForAll;
            }

            hasParts = true;
          }

          var styleForHorizontal = style[prefix + "Horizontal"];

          if (styleForHorizontal != null) {
            result.left = styleForHorizontal;
            result.right = styleForHorizontal;
            hasParts = true;
          } else {
            var styleForLeft = style[prefix + "Left"];

            if (styleForLeft != null) {
              result.left = styleForLeft;
              hasParts = true;
            }

            var styleForRight = style[prefix + "Right"];

            if (styleForRight != null) {
              result.right = styleForRight;
              hasParts = true;
            }

            var styleForEnd = style[prefix + "End"];

            if (styleForEnd != null) {
              // TODO RTL support
              result.right = styleForEnd;
              hasParts = true;
            }

            var styleForStart = style[prefix + "Start"];

            if (styleForStart != null) {
              // TODO RTL support
              result.left = styleForStart;
              hasParts = true;
            }
          }

          var styleForVertical = style[prefix + "Vertical"];

          if (styleForVertical != null) {
            result.bottom = styleForVertical;
            result.top = styleForVertical;
            hasParts = true;
          } else {
            var styleForBottom = style[prefix + "Bottom"];

            if (styleForBottom != null) {
              result.bottom = styleForBottom;
              hasParts = true;
            }

            var styleForTop = style[prefix + "Top"];

            if (styleForTop != null) {
              result.top = styleForTop;
              hasParts = true;
            }
          }

          return hasParts ? result : null;
        }
        // EXTERNAL MODULE: ../react-devtools-shared/src/isArray.js
        var isArray = __webpack_require__(6);

        // CONCATENATED MODULE: ../react-devtools-shared/src/backend/NativeStyleEditor/setupNativeStyleEditor.js
        function setupNativeStyleEditor_typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            setupNativeStyleEditor_typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            setupNativeStyleEditor_typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return setupNativeStyleEditor_typeof(obj);
        }

        function setupNativeStyleEditor_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        function setupNativeStyleEditor(bridge, agent, resolveNativeStyle, validAttributes) {
          bridge.addListener("NativeStyleEditor_measure", function (_ref) {
            var id = _ref.id,
              rendererID = _ref.rendererID;
            measureStyle(agent, bridge, resolveNativeStyle, id, rendererID);
          });
          bridge.addListener("NativeStyleEditor_renameAttribute", function (_ref2) {
            var id = _ref2.id,
              rendererID = _ref2.rendererID,
              oldName = _ref2.oldName,
              newName = _ref2.newName,
              value = _ref2.value;
            renameStyle(agent, id, rendererID, oldName, newName, value);
            setTimeout(function () {
              return measureStyle(agent, bridge, resolveNativeStyle, id, rendererID);
            });
          });
          bridge.addListener("NativeStyleEditor_setValue", function (_ref3) {
            var id = _ref3.id,
              rendererID = _ref3.rendererID,
              name = _ref3.name,
              value = _ref3.value;
            setStyle(agent, id, rendererID, name, value);
            setTimeout(function () {
              return measureStyle(agent, bridge, resolveNativeStyle, id, rendererID);
            });
          });
          bridge.send("isNativeStyleEditorSupported", {
            isSupported: true,
            validAttributes: validAttributes,
          });
        }
        var EMPTY_BOX_STYLE = {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        };
        var componentIDToStyleOverrides = new Map();

        function measureStyle(agent, bridge, resolveNativeStyle, id, rendererID) {
          var data = agent.getInstanceAndStyle({
            id: id,
            rendererID: rendererID,
          });

          if (!data || !data.style) {
            bridge.send("NativeStyleEditor_styleAndLayout", {
              id: id,
              layout: null,
              style: null,
            });
            return;
          }

          var instance = data.instance,
            style = data.style;
          var resolvedStyle = resolveNativeStyle(style); // If it's a host component we edited before, amend styles.

          var styleOverrides = componentIDToStyleOverrides.get(id);

          if (styleOverrides != null) {
            resolvedStyle = Object.assign({}, resolvedStyle, styleOverrides);
          }

          if (!instance || typeof instance.measure !== "function") {
            bridge.send("NativeStyleEditor_styleAndLayout", {
              id: id,
              layout: null,
              style: resolvedStyle || null,
            });
            return;
          }

          instance.measure(function (x, y, width, height, left, top) {
            // RN Android sometimes returns undefined here. Don't send measurements in this case.
            // https://github.com/jhen0409/react-native-debugger/issues/84#issuecomment-304611817
            if (typeof x !== "number") {
              bridge.send("NativeStyleEditor_styleAndLayout", {
                id: id,
                layout: null,
                style: resolvedStyle || null,
              });
              return;
            }

            var margin = (resolvedStyle != null && resolveBoxStyle("margin", resolvedStyle)) || EMPTY_BOX_STYLE;
            var padding = (resolvedStyle != null && resolveBoxStyle("padding", resolvedStyle)) || EMPTY_BOX_STYLE;
            bridge.send("NativeStyleEditor_styleAndLayout", {
              id: id,
              layout: {
                x: x,
                y: y,
                width: width,
                height: height,
                left: left,
                top: top,
                margin: margin,
                padding: padding,
              },
              style: resolvedStyle || null,
            });
          });
        }

        function shallowClone(object) {
          var cloned = {};

          for (var n in object) {
            cloned[n] = object[n];
          }

          return cloned;
        }

        function renameStyle(agent, id, rendererID, oldName, newName, value) {
          var _ref4;

          var data = agent.getInstanceAndStyle({
            id: id,
            rendererID: rendererID,
          });

          if (!data || !data.style) {
            return;
          }

          var instance = data.instance,
            style = data.style;
          var newStyle = newName
            ? ((_ref4 = {}),
              setupNativeStyleEditor_defineProperty(_ref4, oldName, undefined),
              setupNativeStyleEditor_defineProperty(_ref4, newName, value),
              _ref4)
            : setupNativeStyleEditor_defineProperty({}, oldName, undefined);
          var customStyle; // TODO It would be nice if the renderer interface abstracted this away somehow.

          if (instance !== null && typeof instance.setNativeProps === "function") {
            // In the case of a host component, we need to use setNativeProps().
            // Remember to "correct" resolved styles when we read them next time.
            var styleOverrides = componentIDToStyleOverrides.get(id);

            if (!styleOverrides) {
              componentIDToStyleOverrides.set(id, newStyle);
            } else {
              Object.assign(styleOverrides, newStyle);
            } // TODO Fabric does not support setNativeProps; chat with Sebastian or Eli

            instance.setNativeProps({
              style: newStyle,
            });
          } else if (Object(isArray["a" /* default */])(style)) {
            var lastIndex = style.length - 1;

            if (
              setupNativeStyleEditor_typeof(style[lastIndex]) === "object" &&
              !Object(isArray["a" /* default */])(style[lastIndex])
            ) {
              customStyle = shallowClone(style[lastIndex]);
              delete customStyle[oldName];

              if (newName) {
                customStyle[newName] = value;
              } else {
                customStyle[oldName] = undefined;
              }

              agent.overrideValueAtPath({
                type: "props",
                id: id,
                rendererID: rendererID,
                path: ["style", lastIndex],
                value: customStyle,
              });
            } else {
              agent.overrideValueAtPath({
                type: "props",
                id: id,
                rendererID: rendererID,
                path: ["style"],
                value: style.concat([newStyle]),
              });
            }
          } else if (setupNativeStyleEditor_typeof(style) === "object") {
            customStyle = shallowClone(style);
            delete customStyle[oldName];

            if (newName) {
              customStyle[newName] = value;
            } else {
              customStyle[oldName] = undefined;
            }

            agent.overrideValueAtPath({
              type: "props",
              id: id,
              rendererID: rendererID,
              path: ["style"],
              value: customStyle,
            });
          } else {
            agent.overrideValueAtPath({
              type: "props",
              id: id,
              rendererID: rendererID,
              path: ["style"],
              value: [style, newStyle],
            });
          }

          agent.emit("hideNativeHighlight");
        }

        function setStyle(agent, id, rendererID, name, value) {
          var data = agent.getInstanceAndStyle({
            id: id,
            rendererID: rendererID,
          });

          if (!data || !data.style) {
            return;
          }

          var instance = data.instance,
            style = data.style;

          var newStyle = setupNativeStyleEditor_defineProperty({}, name, value); // TODO It would be nice if the renderer interface abstracted this away somehow.

          if (instance !== null && typeof instance.setNativeProps === "function") {
            // In the case of a host component, we need to use setNativeProps().
            // Remember to "correct" resolved styles when we read them next time.
            var styleOverrides = componentIDToStyleOverrides.get(id);

            if (!styleOverrides) {
              componentIDToStyleOverrides.set(id, newStyle);
            } else {
              Object.assign(styleOverrides, newStyle);
            } // TODO Fabric does not support setNativeProps; chat with Sebastian or Eli

            instance.setNativeProps({
              style: newStyle,
            });
          } else if (Object(isArray["a" /* default */])(style)) {
            var lastLength = style.length - 1;

            if (
              setupNativeStyleEditor_typeof(style[lastLength]) === "object" &&
              !Object(isArray["a" /* default */])(style[lastLength])
            ) {
              agent.overrideValueAtPath({
                type: "props",
                id: id,
                rendererID: rendererID,
                path: ["style", lastLength, name],
                value: value,
              });
            } else {
              agent.overrideValueAtPath({
                type: "props",
                id: id,
                rendererID: rendererID,
                path: ["style"],
                value: style.concat([newStyle]),
              });
            }
          } else {
            agent.overrideValueAtPath({
              type: "props",
              id: id,
              rendererID: rendererID,
              path: ["style"],
              value: [style, newStyle],
            });
          }

          agent.emit("hideNativeHighlight");
        }
        // CONCATENATED MODULE: ./src/cachedSettings.js
        /**
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        // Note: all keys should be optional in this type, because users can use newer
        // versions of React DevTools with older versions of React Native, and the object
        // provided by React Native may not include all of this type's fields.

        function initializeUsingCachedSettings(devToolsSettingsManager) {
          initializeConsolePatchSettings(devToolsSettingsManager);
        }

        function initializeConsolePatchSettings(devToolsSettingsManager) {
          if (devToolsSettingsManager.getConsolePatchSettings == null) {
            return;
          }

          var consolePatchSettingsString = devToolsSettingsManager.getConsolePatchSettings();

          if (consolePatchSettingsString == null) {
            return;
          }

          var parsedConsolePatchSettings = parseConsolePatchSettings(consolePatchSettingsString);

          if (parsedConsolePatchSettings == null) {
            return;
          }

          Object(backend_console["f" /* writeConsolePatchSettingsToWindow */])(parsedConsolePatchSettings);
        }

        function parseConsolePatchSettings(consolePatchSettingsString) {
          var _castBool, _castBool2, _castBool3, _castBool4, _castBrowserTheme;

          var parsedValue = JSON.parse(
            consolePatchSettingsString !== null && consolePatchSettingsString !== void 0
              ? consolePatchSettingsString
              : "{}"
          );
          var appendComponentStack = parsedValue.appendComponentStack,
            breakOnConsoleErrors = parsedValue.breakOnConsoleErrors,
            showInlineWarningsAndErrors = parsedValue.showInlineWarningsAndErrors,
            hideConsoleLogsInStrictMode = parsedValue.hideConsoleLogsInStrictMode,
            browserTheme = parsedValue.browserTheme;
          return {
            appendComponentStack:
              (_castBool = Object(src_utils["a" /* castBool */])(appendComponentStack)) !== null && _castBool !== void 0
                ? _castBool
                : true,
            breakOnConsoleErrors:
              (_castBool2 = Object(src_utils["a" /* castBool */])(breakOnConsoleErrors)) !== null &&
              _castBool2 !== void 0
                ? _castBool2
                : false,
            showInlineWarningsAndErrors:
              (_castBool3 = Object(src_utils["a" /* castBool */])(showInlineWarningsAndErrors)) !== null &&
              _castBool3 !== void 0
                ? _castBool3
                : true,
            hideConsoleLogsInStrictMode:
              (_castBool4 = Object(src_utils["a" /* castBool */])(hideConsoleLogsInStrictMode)) !== null &&
              _castBool4 !== void 0
                ? _castBool4
                : false,
            browserTheme:
              (_castBrowserTheme = Object(src_utils["b" /* castBrowserTheme */])(browserTheme)) !== null &&
              _castBrowserTheme !== void 0
                ? _castBrowserTheme
                : "dark",
          };
        }

        function cacheConsolePatchSettings(devToolsSettingsManager, value) {
          if (devToolsSettingsManager.setConsolePatchSettings == null) {
            return;
          }

          devToolsSettingsManager.setConsolePatchSettings(JSON.stringify(value));
        }
        // CONCATENATED MODULE: ./src/backend.js
        /**
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        installHook(window);
        var backend_hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        var savedComponentFilters = Object(src_utils["g" /* getDefaultComponentFilters */])();

        function backend_debug(methodName) {
          if (constants["s" /* __DEBUG__ */]) {
            var _console;

            for (
              var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key];
            }

            (_console = console).log.apply(
              _console,
              [
                "%c[core/backend] %c".concat(methodName),
                "color: teal; font-weight: bold;",
                "font-weight: bold;",
              ].concat(args)
            );
          }
        }

        function connectToDevTools(options) {
          if (backend_hook == null) {
            // DevTools didn't get injected into this page (maybe b'c of the contentType).
            return;
          }

          var _ref = options || {},
            _ref$host = _ref.host,
            host = _ref$host === void 0 ? "localhost" : _ref$host,
            nativeStyleEditorValidAttributes = _ref.nativeStyleEditorValidAttributes,
            _ref$useHttps = _ref.useHttps,
            useHttps = _ref$useHttps === void 0 ? false : _ref$useHttps,
            _ref$port = _ref.port,
            port = _ref$port === void 0 ? 8097 : _ref$port,
            websocket = _ref.websocket,
            _ref$resolveRNStyle = _ref.resolveRNStyle,
            resolveRNStyle = _ref$resolveRNStyle === void 0 ? null : _ref$resolveRNStyle,
            _ref$retryConnectionD = _ref.retryConnectionDelay,
            retryConnectionDelay = _ref$retryConnectionD === void 0 ? 2000 : _ref$retryConnectionD,
            _ref$isAppActive = _ref.isAppActive,
            isAppActive =
              _ref$isAppActive === void 0
                ? function () {
                    return true;
                  }
                : _ref$isAppActive,
            devToolsSettingsManager = _ref.devToolsSettingsManager;

          var protocol = useHttps ? "wss" : "ws";
          var retryTimeoutID = null;

          function scheduleRetry() {
            if (retryTimeoutID === null) {
              // Two seconds because RN had issues with quick retries.
              retryTimeoutID = setTimeout(function () {
                return connectToDevTools(options);
              }, retryConnectionDelay);
            }
          }

          if (devToolsSettingsManager != null) {
            try {
              initializeUsingCachedSettings(devToolsSettingsManager);
            } catch (e) {
              // If we call a method on devToolsSettingsManager that throws, or if
              // is invalid data read out, don't throw and don't interrupt initialization
              console.error(e);
            }
          }

          if (!isAppActive()) {
            // If the app is in background, maybe retry later.
            // Don't actually attempt to connect until we're in foreground.
            scheduleRetry();
            return;
          }

          var bridge = null;
          var messageListeners = [];
          var uri = protocol + "://" + host + ":" + port; // If existing websocket is passed, use it.
          // This is necessary to support our custom integrations.
          // See D6251744.

          var ws = websocket ? websocket : new window.WebSocket(uri);
          ws.onclose = handleClose;
          ws.onerror = handleFailed;
          ws.onmessage = handleMessage;

          ws.onopen = function () {
            bridge = new src_bridge({
              listen: function listen(fn) {
                messageListeners.push(fn);
                return function () {
                  var index = messageListeners.indexOf(fn);

                  if (index >= 0) {
                    messageListeners.splice(index, 1);
                  }
                };
              },
              send: function send(event, payload, transferable) {
                if (ws.readyState === ws.OPEN) {
                  if (constants["s" /* __DEBUG__ */]) {
                    backend_debug("wall.send()", event, payload);
                  }

                  ws.send(
                    JSON.stringify({
                      event: event,
                      payload: payload,
                    })
                  );
                } else {
                  if (constants["s" /* __DEBUG__ */]) {
                    backend_debug("wall.send()", "Shutting down bridge because of closed WebSocket connection");
                  }

                  if (bridge !== null) {
                    bridge.shutdown();
                  }

                  scheduleRetry();
                }
              },
            }); // $FlowFixMe[incompatible-use] found when upgrading Flow

            bridge.addListener("updateComponentFilters", function (componentFilters) {
              // Save filter changes in memory, in case DevTools is reloaded.
              // In that case, the renderer will already be using the updated values.
              // We'll lose these in between backend reloads but that can't be helped.
              savedComponentFilters = componentFilters;
            });

            if (devToolsSettingsManager != null && bridge != null) {
              bridge.addListener("updateConsolePatchSettings", function (consolePatchSettings) {
                return cacheConsolePatchSettings(devToolsSettingsManager, consolePatchSettings);
              });
            } // The renderer interface doesn't read saved component filters directly,
            // because they are generally stored in localStorage within the context of the extension.
            // Because of this it relies on the extension to pass filters.
            // In the case of the standalone DevTools being used with a website,
            // saved filters are injected along with the backend script tag so we shouldn't override them here.
            // This injection strategy doesn't work for React Native though.
            // Ideally the backend would save the filters itself, but RN doesn't provide a sync storage solution.
            // So for now we just fall back to using the default filters...

            if (window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ == null) {
              // $FlowFixMe[incompatible-use] found when upgrading Flow
              bridge.send("overrideComponentFilters", savedComponentFilters);
            } // TODO (npm-packages) Warn if "isBackendStorageAPISupported"
            // $FlowFixMe[incompatible-call] found when upgrading Flow

            var agent = new agent_Agent(bridge);
            agent.addListener("shutdown", function () {
              // If we received 'shutdown' from `agent`, we assume the `bridge` is already shutting down,
              // and that caused the 'shutdown' event on the `agent`, so we don't need to call `bridge.shutdown()` here.
              backend_hook.emit("shutdown");
            });
            initBackend(backend_hook, agent, window); // Setup React Native style editor if the environment supports it.

            if (resolveRNStyle != null || backend_hook.resolveRNStyle != null) {
              setupNativeStyleEditor(
                // $FlowFixMe[incompatible-call] found when upgrading Flow
                bridge,
                agent,
                resolveRNStyle || backend_hook.resolveRNStyle,
                nativeStyleEditorValidAttributes || backend_hook.nativeStyleEditorValidAttributes || null
              );
            } else {
              // Otherwise listen to detect if the environment later supports it.
              // For example, Flipper does not eagerly inject these values.
              // Instead it relies on the React Native Inspector to lazily inject them.
              var lazyResolveRNStyle;
              var lazyNativeStyleEditorValidAttributes;

              var initAfterTick = function initAfterTick() {
                if (bridge !== null) {
                  setupNativeStyleEditor(bridge, agent, lazyResolveRNStyle, lazyNativeStyleEditorValidAttributes);
                }
              };

              if (!backend_hook.hasOwnProperty("resolveRNStyle")) {
                Object.defineProperty(backend_hook, "resolveRNStyle", {
                  enumerable: false,
                  get: function get() {
                    return lazyResolveRNStyle;
                  },
                  set: function set(value) {
                    lazyResolveRNStyle = value;
                    initAfterTick();
                  },
                });
              }

              if (!backend_hook.hasOwnProperty("nativeStyleEditorValidAttributes")) {
                Object.defineProperty(backend_hook, "nativeStyleEditorValidAttributes", {
                  enumerable: false,
                  get: function get() {
                    return lazyNativeStyleEditorValidAttributes;
                  },
                  set: function set(value) {
                    lazyNativeStyleEditorValidAttributes = value;
                    initAfterTick();
                  },
                });
              }
            }
          };

          function handleClose() {
            if (constants["s" /* __DEBUG__ */]) {
              backend_debug("WebSocket.onclose");
            }

            if (bridge !== null) {
              bridge.emit("shutdown");
            }

            scheduleRetry();
          }

          function handleFailed() {
            if (constants["s" /* __DEBUG__ */]) {
              backend_debug("WebSocket.onerror");
            }

            scheduleRetry();
          }

          function handleMessage(event) {
            var data;

            try {
              if (typeof event.data === "string") {
                data = JSON.parse(event.data);

                if (constants["s" /* __DEBUG__ */]) {
                  backend_debug("WebSocket.onmessage", data);
                }
              } else {
                throw Error();
              }
            } catch (e) {
              console.error("[React DevTools] Failed to parse JSON: " + event.data);
              return;
            }

            messageListeners.forEach(function (fn) {
              try {
                fn(data);
              } catch (error) {
                // jsc doesn't play so well with tracebacks that go into eval'd code,
                // so the stack trace here will stop at the `eval()` call. Getting the
                // message that caused the error is the best we can do for now.
                console.log("[React DevTools] Error calling listener", data);
                console.log("error:", error);
                throw error;
              }
            });
          }
        }

        /***/
      },
      /******/
    ]
  );
});
//# sourceMappingURL=backend.js.map
ReactDevToolsBackend.connectToDevTools({ port: 8097, host: "localhost", useHttps: false });
