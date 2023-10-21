/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::after, *::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: min-content 1fr;\r\n}\r\n\r\nnav {\r\n  background-color: #343a40;\r\n  grid-row: 1 / 1;\r\n  grid-column: 1 / -1;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.search-bar {\r\n  padding: 20px;\r\n  display: flex;\r\n}\r\n\r\n#city-input {\r\n  appearance: none;\r\n  border-radius: 5px 0 0 5px;\r\n  padding: 5px;\r\n  border: 2px solid white;\r\n  transition: 0.3s border-color;\r\n}\r\n\r\n#city-input:focus {\r\n  outline: none;\r\n  border-color: blueviolet;\r\n}\r\n\r\n.search-button {\r\n  background-color: #ee3330;\r\n  cursor: pointer;\r\n  border: none;\r\n  padding: 5px 7px;\r\n  color: white;\r\n  border-radius: 0 5px 5px 0;\r\n}\r\n\r\n.search-button,\r\n#city-input {\r\n  font-size: 1.4rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.search-button:hover {\r\n  background-color: #cd2b28;\r\n}\r\n\r\nsection {\r\n  background-color: #ddd;\r\n}\r\n\r\n.loader {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 100%;\r\n  border: 6px solid black;\r\n  border-top-color: white;\r\n  justify-self: center;\r\n  animation: rotate 1s infinite;\r\n}\r\n\r\n.city-weather-display {\r\n  display: grid;\r\n  align-items: center;\r\n  background-color: white;\r\n  grid-template-rows: 3fr 1fr;\r\n}\r\n\r\n@keyframes rotate {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.info-section {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.extra-info-section {\r\n  height: 100%;\r\n  background-color: #343a40;\r\n  transform-origin: bottom;\r\n  animation: growAnimation 0.7s forwards;\r\n}\r\n\r\n@keyframes growAnimation {\r\n  0% {\r\n    transform: scaleY(0);\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_search_city_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/search-city-view */ \"./src/view/search-city-view.js\");\n/* harmony import */ var _services_weather_api_caller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/weather-api-caller.js */ \"./src/services/weather-api-caller.js\");\n/* harmony import */ var _view_city_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/city-view.js */ \"./src/view/city-view.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\n// Start webpage displaying london info on screen\r\n(0,_view_search_city_view__WEBPACK_IMPORTED_MODULE_0__.makeApiCall)(undefined, \"London\");\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/city-weather/city-weather-info-builder.js":
/*!*******************************************************!*\
  !*** ./src/city-weather/city-weather-info-builder.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityWeatherInfoBuilder: () => (/* binding */ CityWeatherInfoBuilder)\n/* harmony export */ });\n/* harmony import */ var _city_weather_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city-weather-info.js */ \"./src/city-weather/city-weather-info.js\");\n\r\n;\r\n\r\nclass CityWeatherInfoBuilder {\r\n  constructor() {\r\n    this.cityWeatherObject = new _city_weather_info_js__WEBPACK_IMPORTED_MODULE_0__.CityWeatherInfo()\r\n  }\r\n\r\n  build(cityWeatherInfoJson) {\r\n    this.#setLocation(cityWeatherInfoJson.location)\r\n    this.#setTemperature(cityWeatherInfoJson.current);\r\n    return this.cityWeatherObject;\r\n  }\r\n\r\n  #setLocation(locationObject) {\r\n    const location = {}\r\n    location.name = locationObject.name;\r\n    location.region = locationObject.region;\r\n    location.country = locationObject.country;\r\n    this.cityWeatherObject.setLocation(location);\r\n  }\r\n\r\n  #setTemperature(currentStatusObject) {\r\n    const temperatureObject = {}\r\n    temperatureObject.celcius = currentStatusObject.temp_c;\r\n    temperatureObject.fahrenheit = currentStatusObject.temp_f;\r\n    temperatureObject.condition = currentStatusObject.condition.text;\r\n    temperatureObject.icon = currentStatusObject.condition.icon;\r\n    this.cityWeatherObject.setTemperature(temperatureObject)\r\n  }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/city-weather/city-weather-info-builder.js?");

/***/ }),

/***/ "./src/city-weather/city-weather-info.js":
/*!***********************************************!*\
  !*** ./src/city-weather/city-weather-info.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityWeatherInfo: () => (/* binding */ CityWeatherInfo)\n/* harmony export */ });\n\r\n\r\nclass CityWeatherInfo {\r\n\r\n  setLocation(locationObject) {\r\n    this.location = locationObject;\r\n  }\r\n\r\n  setTemperature(temperatureObject) {\r\n    this.temperature = temperatureObject;\r\n  }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/city-weather/city-weather-info.js?");

/***/ }),

/***/ "./src/city-weather/city-weather-section-factory.js":
/*!**********************************************************!*\
  !*** ./src/city-weather/city-weather-section-factory.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CityWeatherSectionFactory: () => (/* binding */ CityWeatherSectionFactory)\n/* harmony export */ });\n\r\n\r\nclass CityWeatherSectionFactory {\r\n  build(cityWeatherInfoObject) {\r\n    const infoBox = document.createElement(\"div\");\r\n    const extraInfoBox = document.createElement(\"div\");\r\n    const locationBox = this.#createLocationBox(cityWeatherInfoObject.location);\r\n    infoBox.classList.add(\"info-section\")\r\n    extraInfoBox.classList.add(\"extra-info-section\")\r\n\r\n    infoBox.append(locationBox);\r\n    console.log(cityWeatherInfoObject)\r\n\r\n    return {info: infoBox, extraInfo: extraInfoBox};\r\n  }\r\n\r\n  #createLocationBox(locationObject) {\r\n    const locationBox = document.createElement(\"div\");\r\n    const locationName = document.createElement(\"h2\");\r\n    const locationRegion = document.createElement(\"p\");\r\n    const locationCountry = document.createElement(\"p\");\r\n\r\n    locationName.innerText = locationObject.name;\r\n    locationRegion.innerText = locationObject.region;\r\n    locationCountry.innerText = locationObject.country;\r\n\r\n    locationBox.append(locationName);\r\n    locationBox.append(locationRegion);\r\n    locationBox.append(locationCountry);\r\n    return locationBox;\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://weather-app/./src/city-weather/city-weather-section-factory.js?");

/***/ }),

/***/ "./src/loader/loader-factory.js":
/*!**************************************!*\
  !*** ./src/loader/loader-factory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLoader: () => (/* binding */ createLoader)\n/* harmony export */ });\n\r\n\r\nfunction createLoader() {\r\n  const loader = document.createElement(\"div\");\r\n  loader.classList.add(\"loader\");\r\n  return loader;\r\n}\n\n//# sourceURL=webpack://weather-app/./src/loader/loader-factory.js?");

/***/ }),

/***/ "./src/loader/loader.js":
/*!******************************!*\
  !*** ./src/loader/loader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Loader: () => (/* binding */ Loader)\n/* harmony export */ });\n/* harmony import */ var _loader_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader-factory.js */ \"./src/loader/loader-factory.js\");\n\r\n;\r\n\r\nclass Loader {\r\n  constructor() {\r\n    this.loader = (0,_loader_factory_js__WEBPACK_IMPORTED_MODULE_0__.createLoader)();\r\n  }\r\n\r\n  showInScreen(parentElement) {\r\n    parentElement.append(this.loader);\r\n  }\r\n\r\n  getOutScreen(parentElement) {\r\n    parentElement.removeChild(this.loader);\r\n  }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/loader/loader.js?");

/***/ }),

/***/ "./src/services/pub-sub.js":
/*!*********************************!*\
  !*** ./src/services/pub-sub.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emit: () => (/* binding */ emit),\n/* harmony export */   subscribe: () => (/* binding */ subscribe)\n/* harmony export */ });\n\r\n\r\nconst events = {}\r\n\r\nfunction subscribe(eventName, handler) {\r\n  if (events[eventName] === undefined) {\r\n    events[eventName] = [];\r\n  }\r\n\r\n  events[eventName].push(handler);\r\n}\r\n\r\nfunction emit(eventName, data) {\r\n  const event = events[eventName];\r\n  event.forEach(handler => handler(data));\r\n}\n\n//# sourceURL=webpack://weather-app/./src/services/pub-sub.js?");

/***/ }),

/***/ "./src/services/weather-api-caller.js":
/*!********************************************!*\
  !*** ./src/services/weather-api-caller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pub-sub */ \"./src/services/pub-sub.js\");\n\r\n\r\n// Receive from search-city-view when searching for new city\r\n(0,_pub_sub__WEBPACK_IMPORTED_MODULE_0__.subscribe)(\"makeWeatherApiCall\", makeWeatherApiCall);\r\n\r\nasync function makeApiCall(cityName) {\r\n  const key = \"0b3eed6dfdae45bcbad10452232309\"\r\n  const url = `https://api.weatherapi.com/v1/current.json?KEY=${key}&q=${cityName}}`\r\n  const response = await fetch(url, {mode: 'cors'})\r\n\r\n  if (!response.ok) {\r\n    throw new Error(\"City Not Found\")\r\n  }\r\n\r\n  return response.json();\r\n}\r\n\r\n// Make api call and process result\r\nfunction makeWeatherApiCall(cityName) {\r\n  makeApiCall(cityName).then(sendNewCityInfo).catch(() => {console.log(\"error\")})\r\n}\r\n\r\n// Send new weather info to city-view to render new info on screen\r\nfunction sendNewCityInfo(cityObject) {\r\n  (0,_pub_sub__WEBPACK_IMPORTED_MODULE_0__.emit)(\"newWeatherInfo\", cityObject)\r\n}\n\n//# sourceURL=webpack://weather-app/./src/services/weather-api-caller.js?");

/***/ }),

/***/ "./src/view/city-view.js":
/*!*******************************!*\
  !*** ./src/view/city-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loader_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader/loader.js */ \"./src/loader/loader.js\");\n/* harmony import */ var _services_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pub-sub */ \"./src/services/pub-sub.js\");\n/* harmony import */ var _city_weather_city_weather_section_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../city-weather/city-weather-section-factory */ \"./src/city-weather/city-weather-section-factory.js\");\n/* harmony import */ var _city_weather_city_weather_info_builder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../city-weather/city-weather-info-builder.js */ \"./src/city-weather/city-weather-info-builder.js\");\n\r\n\r\n\r\n\r\n\r\nconst cityViewSection = document.querySelector(\".city-weather-display\"); // Display city's weather info\r\nconst loader = new _loader_loader_js__WEBPACK_IMPORTED_MODULE_0__.Loader(); // Element with loading animation\r\nlet currentCityWeatherInfo = null; // Last city queried by user\r\n\r\n// Receive from search-city-view when user search for new city\r\n(0,_services_pub_sub__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"makeWeatherApiCall\", showLoaderOnScreen);\r\n\r\n// Receive from weather-api-caller when info need's to be displayed on screen\r\n(0,_services_pub_sub__WEBPACK_IMPORTED_MODULE_1__.subscribe)(\"newWeatherInfo\", processNewWeatherInfo);\r\n\r\n// Create 2 new dom elements based on weather info received and remove loader from screen\r\nfunction processNewWeatherInfo(newWeatherInfo) {\r\n  const cityWeatherInfoBuilder = new _city_weather_city_weather_info_builder_js__WEBPACK_IMPORTED_MODULE_3__.CityWeatherInfoBuilder();\r\n  const citySectionFactory = new _city_weather_city_weather_section_factory__WEBPACK_IMPORTED_MODULE_2__.CityWeatherSectionFactory();\r\n  const cityWeatherInfoObject = cityWeatherInfoBuilder.build(newWeatherInfo);\r\n  const newWeatherElements = citySectionFactory.build(cityWeatherInfoObject);\r\n\r\n  loader.getOutScreen(cityViewSection);\r\n  currentCityWeatherInfo = cityWeatherInfoObject;\r\n  render(newWeatherElements)\r\n}\r\n\r\nfunction render(newWeatherElements) {\r\n  cityViewSection.append(newWeatherElements.info);\r\n  cityViewSection.append(newWeatherElements.extraInfo);\r\n}\r\n\r\n// Start loader animation on Screen\r\nfunction showLoaderOnScreen() {\r\n  cityViewSection.innerHTML = \"\";\r\n  loader.showInScreen(cityViewSection);\r\n}\n\n//# sourceURL=webpack://weather-app/./src/view/city-view.js?");

/***/ }),

/***/ "./src/view/search-city-view.js":
/*!**************************************!*\
  !*** ./src/view/search-city-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeApiCall: () => (/* binding */ makeApiCall)\n/* harmony export */ });\n/* harmony import */ var _services_pub_sub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/pub-sub.js */ \"./src/services/pub-sub.js\");\n\r\n;\r\n\r\nconst searchButton = document.querySelector(\".search-button\");\r\nconst cityInput = document.getElementById(\"city-input\");\r\n\r\ncityInput.addEventListener(\"keyup\", makeApiCallOnEnter);\r\nsearchButton.addEventListener(\"click\", makeApiCall);\r\n\r\nfunction makeApiCallOnEnter(event) {\r\n  const keyPressed = event.key;\r\n  if (keyPressed === \"Enter\") {\r\n    makeApiCall();\r\n  }\r\n}\r\n\r\n// Get city name from input and send to weather-api-caller (to make api call) and city-view (to start loader animation)\r\nfunction makeApiCall(event, newCity) {\r\n  const cityName = newCity || cityInput.value;\r\n  console.log(cityName)\r\n  if (cityName.length !== 0) {\r\n    (0,_services_pub_sub_js__WEBPACK_IMPORTED_MODULE_0__.emit)(\"makeWeatherApiCall\", cityName)\r\n  }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/view/search-city-view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;