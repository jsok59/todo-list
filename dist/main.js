/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
}

.sidebar {
    background-color: aliceblue;
    width: 30%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}



body {
    display: flex;
    height: 100vh;
}

.add-project-btn {
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: fit-content;
}

.plus-img
{
    height: 1rem;

}


/********* DIALOG START ***********/

dialog img {
    height: 2rem;
}

.heading_div {
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;

    
}

.heading_div img {
    margin-left: auto;
}

dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    border-radius: 20px;
    gap: 15px;

}

#project-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.submit-btn {
    width: 50%;
    align-self: center;
    padding: 5px;
    border-radius: 5px;
}


/********* DIALOG START ***********/


/********* CONTENT START **********/
.content {
    background-color: white;
    width: 100%;
    padding: 15px;
}

.content-heading-div {
    display: flex;
    flex-direction: column;
    gap: 10px;

}

#todo-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

#todo-form div {
    display: flex;
    gap: 10px;
}

input,
textarea {
    padding: 5px;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,2BAA2B;IAC3B,UAAU;IACV,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;;AAIA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;;AAEhB;;;AAGA,mCAAmC;;AAEnC;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;;;AAGvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,aAAa;IACb,mBAAmB;IACnB,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;AACtB;;;AAGA,mCAAmC;;;AAGnC,mCAAmC;AACnC;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;IAEI,YAAY;AAChB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\n.sidebar {\n    background-color: aliceblue;\n    width: 30%;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n\nbody {\n    display: flex;\n    height: 100vh;\n}\n\n.add-project-btn {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n    width: fit-content;\n}\n\n.plus-img\n{\n    height: 1rem;\n\n}\n\n\n/********* DIALOG START ***********/\n\ndialog img {\n    height: 2rem;\n}\n\n.heading_div {\n    display: flex;\n    flex-direction: row;\n    gap: 40px;\n    align-items: center;\n\n    \n}\n\n.heading_div img {\n    margin-left: auto;\n}\n\ndialog {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 15px;\n    border-radius: 20px;\n    gap: 15px;\n\n}\n\n#project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.submit-btn {\n    width: 50%;\n    align-self: center;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n\n/********* DIALOG START ***********/\n\n\n/********* CONTENT START **********/\n.content {\n    background-color: white;\n    width: 100%;\n    padding: 15px;\n}\n\n.content-heading-div {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n}\n\n#todo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#todo-form div {\n    display: flex;\n    gap: 10px;\n}\n\ninput,\ntextarea {\n    padding: 5px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title;
        this.list = [];
    }

    set title(x) {
        this._title = x;
    }

    get title() {
        return this._title;
    }

    addTodo(todo_object) {
        this.list.push(todo_object);
    }

    removeTodo(todo_object) {
        const index = this.list.indexOf(todo_object);
        this.list.splice(index, 1);
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/createProjectList.js":
/*!**********************************!*\
  !*** ./src/createProjectList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ProjectList {
    constructor(title) {
        this.title = title;
        this.list = [];
    }

    set title(x) {
        this._title = x;
    }

    get title() {
        return this._title;
    }

    addProject(project_object) {
        this.list.push(project_object);
    }

    removeProject(project_object) {
        const index = this.list.indexOf(project_object);
        this.list.splice(index, 1);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);



/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
    }

    set title(newTitle) {
        this._title = newTitle;

    }

    get title() {
        return this._title;
    }

    set description(x) {
        this._description = x;

    }

    get descriptione() {
        return this._description;
    }

    set dueDate(x) {
        this._dueDate = x;

    }

    get dueDate() {
        return this._dueDate;
    }

    set priority(x) {
        this._priority = x;

    }

    get priority() {
        return this._priority;
    }

    set complete(x) {
        this._complete = x;
    }

    get complete() {
        return this._complete;
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/generateContent.js":
/*!********************************!*\
  !*** ./src/generateContent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoDOM: () => (/* binding */ createTodoDOM),
/* harmony export */   generateContent: () => (/* binding */ generateContent)
/* harmony export */ });
/* harmony import */ var _images_new_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/new_plus.png */ "./src/images/new_plus.png");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");



function generateContent(project) {
	const content = document.querySelector(".content");
	const heading_div = document.createElement("div");
	const todo_div = document.createElement("div");
	heading_div.classList = "content-heading-div";
	todo_div.classList = "content-todo-div";
	content.appendChild(heading_div);
	content.appendChild(todo_div);

	/*** CONTENT HEADING START**** */
	const heading = document.createElement("h1");
	heading.textContent = project.title;
	heading_div.appendChild(heading);

	/*** CONTENT HEADING END **** */

	/*** ADD TODO BUTTON START**** */
	const addTodoBtn = document.createElement("div");
	addTodoBtn.classList = "add-project-btn";
	const addTodoText = document.createElement("p");
	addTodoText.textContent = "Add Todo";
	const plusImage = new Image();
	plusImage.src = _images_new_plus_png__WEBPACK_IMPORTED_MODULE_0__;
	plusImage.classList = "plus-img";
	addTodoBtn.appendChild(plusImage);
	addTodoBtn.appendChild(addTodoText);
	const dialog = document.querySelector(".todo-dialog");
	addTodoBtn.addEventListener("click", (e) => {
		dialog.showModal();
	});
	heading_div.appendChild(addTodoBtn);
    
	if (project.list != undefined) {
		createTodoDOM(project);
	}

	/*** ADD TODO BUTTON END**** */
}

function createTodoDOM(project) {
	const todo_div = document.querySelector(".content-todo-div");
	const close_btn = new Image();
	close_btn.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_1__;
	project.list.forEach((todo) => {
		const todo_card = document.createElement("div");
		todo_card.classList = "todo-card";
		const complete_div = document.createElement("div");
		const complete_label = document.createElement("label");
		complete_label.textContent = "Complete: ";
		const complete_checkbox = document.createElement("input");
		complete_checkbox.type = "checkbox";
		complete_checkbox.addEventListener("click", () => {
			if (readButton.checked === true) {
				todo_card.style.backgroundColor = "red";
			} else {
				todo_card.style.backgroundColor = "darkolivegreen";
			}
		});
		complete_label.appendChild(complete_checkbox);
		complete_div.appendChild(complete_label);
		todo_div.appendChild(complete_div);

		const title_p = document.createElement("p");
		title_p.textContent = `Title: ${todo.title}`;

		const dueDate_p = document.createElement("p");
		dueDate_p.textContent = `Due Date: ${todo.dueDate}`;

		const priority_p = document.createElement("p");
		priority_p.textContent = `Priority: ${todo.priority}`;

		todo_div.appendChild(title_p);
		todo_div.appendChild(dueDate_p);
		todo_div.appendChild(priority_p);
	});
}




/***/ }),

/***/ "./src/generateProjectForm.js":
/*!************************************!*\
  !*** ./src/generateProjectForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _generateSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateSidebar */ "./src/generateSidebar.js");




function generateProjectForm(project_list) {
	/******* FORM AND DIALOG CREATION *******/

	const body = document.querySelector("body");
	const dialog = document.createElement("dialog");
	const form = document.createElement("form");
	dialog.setAttribute("class", "project-dialog");
	form.setAttribute("method", "dialog");
	form.setAttribute("id", "project-form");
	dialog.appendChild(form);
	body.appendChild(dialog);

	/******* FORM AND DIALOG END *******/

	/******* HEADING AND CLOSE BTN CREATION *******/

	const heading_div = document.createElement("div");
	heading_div.setAttribute("class", "heading_div");

	const heading = document.createElement("h1");
	heading.textContent = "New project";
	heading.setAttribute("class", "form-heading");
	heading_div.appendChild(heading);

	const close_btn = new Image();
	close_btn.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_0__;
	close_btn.addEventListener("click", (e) => {
		dialog.close();
	});

	heading_div.appendChild(close_btn);

	form.appendChild(heading_div);

	/******* HEADING AND CLOSE BTN END *******/

	/**** FORM INPUTS AND SUBMIT BUTTON CREATION ********/

	const title_div = document.createElement("div");
	const title_label = document.createElement("label");
	const title_input = document.createElement("input");
	title_label.setAttribute("for", "form-title");
	title_label.textContent = "Title: ";
	title_input.setAttribute("type", "text");
	title_input.setAttribute("id", "form-title");
	title_input.setAttribute("name", "form-title");
	title_input.required = true;
	title_div.appendChild(title_label);
	title_div.appendChild(title_input);
	form.appendChild(title_div);

	const submitBtn = document.createElement("button");
	submitBtn.textContent = "Add Project";
	submitBtn.setAttribute("class", "submit-btn");
	submitBtn.setAttribute("type", "submit");
	submitBtn.addEventListener("click", (e) => {
		if (form["form-title"].value != "") {
			e.preventDefault();
			const sidebar = document.querySelector(".sidebar");
			const project = new _createProject__WEBPACK_IMPORTED_MODULE_1__["default"](form["form-title"].value);
			project_list.addProject(project);
			form.reset();
			dialog.close();
			sidebar.innerHTML = "";
			(0,_generateSidebar__WEBPACK_IMPORTED_MODULE_2__.generateSidebar)(project_list);
		}
	});
	form.appendChild(submitBtn);

	/**** FORM INPUTS AND SUBMIT BUTTON END ********/
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateProjectForm);


/***/ }),

/***/ "./src/generateSidebar.js":
/*!********************************!*\
  !*** ./src/generateSidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectDOM: () => (/* binding */ createProjectDOM),
/* harmony export */   generateSidebar: () => (/* binding */ generateSidebar)
/* harmony export */ });
/* harmony import */ var _images_new_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/new_plus.png */ "./src/images/new_plus.png");
/* harmony import */ var _generateContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateContent */ "./src/generateContent.js");
/* harmony import */ var _generateTodoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateTodoForm */ "./src/generateTodoForm.js");




function generateSidebar(project_list) {
    const sidebar = document.querySelector('.sidebar');


    const heading = document.createElement('h1');
    heading.textContent = 'My Projects';
    heading.classList = 'sidebar-title';
    sidebar.appendChild(heading);


    if (project_list != undefined) {
        createProjectDOM(project_list, sidebar);
    }
    
    /************** Add project Button START*************/
    
    const addProjectBtn = document.createElement('div');
    const addProjectText = document.createElement('p');
    addProjectText.textContent = 'Add Project';
    addProjectBtn.classList = 'add-project-btn';
    addProjectBtn.addEventListener('click', (e)=> {
        const dialog = document.querySelector('.project-dialog');
        dialog.showModal();
    });
    const plusImage = new Image();
    plusImage.src = _images_new_plus_png__WEBPACK_IMPORTED_MODULE_0__;
    plusImage.classList = 'plus-img';
    
    addProjectBtn.appendChild(plusImage);
    addProjectBtn.appendChild(addProjectText);
    sidebar.appendChild(addProjectBtn);

     /************** Add project Button END*************/
    
     




}

function createProjectDOM(project_list, sidebar) {
    
    project_list.list.forEach((project) => {
        const div = document.createElement('div');
        div.setAttribute('class','project');
        div.textContent = project.title;
        div.addEventListener('click', (e)=> {
            
            console.log("Creating Todo content for...");
            console.log(project);
            const content = document.querySelector('.content');
            content.innerHTML = '';
            console.log('Creating Event Listner for ...');
            console.log(project);
            (0,_generateTodoForm__WEBPACK_IMPORTED_MODULE_2__.createEventListener)(project);
            (0,_generateContent__WEBPACK_IMPORTED_MODULE_1__.generateContent)(project);
            
        })
        sidebar.appendChild(div);
    })

}






/***/ }),

/***/ "./src/generateTodoForm.js":
/*!*********************************!*\
  !*** ./src/generateTodoForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEventListener: () => (/* binding */ createEventListener),
/* harmony export */   generateTodoForm: () => (/* binding */ generateTodoForm)
/* harmony export */ });
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");
/* harmony import */ var _generateContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateContent */ "./src/generateContent.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");




function generateTodoForm() {
	const body = document.querySelector("body");
	const dialog = document.createElement("dialog");
	dialog.setAttribute("class", "todo-dialog");
	const form = document.createElement("form");
	form.setAttribute("method", "dialog");
	form.setAttribute("id", "todo-form");
	dialog.appendChild(form);
	body.appendChild(dialog);

	/******* HEADING AND CLOSE BTN CREATION *******/

	const heading_div = document.createElement("div");
	heading_div.setAttribute("class", "heading_div");

	const heading = document.createElement("h1");
	heading.textContent = "New Todo";
	heading.setAttribute("class", "form-heading");
	heading_div.appendChild(heading);

	const close_btn = new Image();
	close_btn.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_0__;
	close_btn.addEventListener("click", (e) => {
		dialog.close();
	});

	heading_div.appendChild(close_btn);

	form.appendChild(heading_div);

	/******* HEADING AND CLOSE BTN END *******/

	/******** TITLE INPUT START ********* */
	const title_div = document.createElement("div");
	const title_label = document.createElement("label");
	title_label.textContent = "Title: ";
	title_label.setAttribute("for", "todo-title");
	const title_input = document.createElement("input");
	title_input.setAttribute("type", "text");
	title_input.setAttribute("id", "todo-title");
	title_input.setAttribute("name", "todo-title");
	title_div.appendChild(title_label);
	title_div.appendChild(title_input);

	form.appendChild(title_div);

	/******** TITLE INPUT END ********* */

	/******** Description Text area START ********* */
	const description_div = document.createElement("div");
	const description_label = document.createElement("label");
	description_label.textContent = "Description: ";
	description_label.setAttribute("for", "todo-description");
	const description_textarea = document.createElement("textarea");
	description_textarea.setAttribute("rows", 20);
	description_textarea.setAttribute("cols", 50);
	description_textarea.setAttribute("id", "todo-description");
	description_textarea.setAttribute("name", "todo-description");
	description_div.appendChild(description_label);
	description_div.appendChild(description_textarea);

	form.appendChild(description_div);

	/******** Description Text area END ********* */

	/******** DATE INPUT START ********* */
	const date_div = document.createElement("div");
	const date_label = document.createElement("label");
	date_label.textContent = "Due Date: ";
	date_label.setAttribute("for", "todo-date");

	const date_input = document.createElement("input");
	date_input.setAttribute("type", "datetime-local");
	date_input.setAttribute("id", "todo-date");
	date_input.setAttribute("name", "todo-date");
	date_div.appendChild(date_label);
	date_div.appendChild(date_input);
	form.appendChild(date_div);
	/******** DATE INPUT END ********* */


    /******** PRIORITY SELECT START ********* */
	const priority_div = document.createElement("div");
	const priority_label = document.createElement("label");
	priority_label.textContent = "Priority: ";
	priority_label.setAttribute("for", "priority");
	const priority_select = document.createElement("select");
	priority_select.setAttribute("name", "priority");
	const option1 = document.createElement("option");
	option1.textContent = "High";
	option1.setAttribute("value", "high");
	const option2 = document.createElement("option");
	option2.textContent = "Medium";
	option2.setAttribute("value", "medium");
	const option3 = document.createElement("option");
	option3.textContent = "Low";
	option3.setAttribute("value", "low");

	priority_select.appendChild(option1);
	priority_select.appendChild(option2);
	priority_select.appendChild(option3);
	priority_div.appendChild(priority_label);
    priority_div.appendChild(priority_select);
	form.appendChild(priority_div);
    /******** PRIORITY SELECT START ********* */

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('class', 'submit-btn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Add Todo';
   
    form.appendChild(submitBtn);
}

function createEventListener(project) {

    function handleAddTodo(e) {
        e.preventDefault();
        const dialog = document.querySelector('.todo-dialog');
        const form = document.querySelector('#todo-form');
        const todo = new _createTodo__WEBPACK_IMPORTED_MODULE_2__["default"](form['todo-title'].value, form['todo-description'].value, form['todo-date'].value, form['todo-priority']);
        console.log(form['todo-priority']);
        project.addTodo(todo);
        const content_div = document.querySelector('.content-todo-div');
        content_div.innerHTML = '';
        (0,_generateContent__WEBPACK_IMPORTED_MODULE_1__.createTodoDOM)(project);
        form.reset();
        dialog.close();
    }
    
    function eventTester(e) {
        e.preventDefault();
        console.log('removing and adding eventlistener');
        
    }

    const submitBtn = document.querySelector('.todo-dialog .submit-btn');
    submitBtn.removeEventListener('click',eventTester);
    submitBtn.addEventListener('click', eventTester);

}




/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c75555bf2b2ad120510e.svg";

/***/ }),

/***/ "./src/images/new_plus.png":
/*!*********************************!*\
  !*** ./src/images/new_plus.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5395da8b16ace3414228.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjectList */ "./src/createProjectList.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");
/* harmony import */ var _generateSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateSidebar */ "./src/generateSidebar.js");
/* harmony import */ var _generateProjectForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateProjectForm */ "./src/generateProjectForm.js");
/* harmony import */ var _generateTodoForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generateTodoForm */ "./src/generateTodoForm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








const project_list = new _createProjectList__WEBPACK_IMPORTED_MODULE_0__["default"]("Project List");

// const project1 = new Project("Grading Papers");
// const project2 = new Project("Lesson Plans");
// const todo1 = new Todo("todo1", 
// "wasdfa", "wfasd", 1);
// const todo2 = new Todo("todo2", 
// "wasdfa", "wfasd", 1);
// project1.addTodo(todo1);
// project1.addTodo(todo2);
// project1.removeTodo(todo1);

// project1.list[0].priority = 0;

// project_list.addProject(project1);
// project_list.addProject(project2);

// generateProjectForm(project_list);
(0,_generateTodoForm__WEBPACK_IMPORTED_MODULE_5__.generateTodoForm)();

(0,_generateSidebar__WEBPACK_IMPORTED_MODULE_3__.generateSidebar)(project_list);
(0,_generateProjectForm__WEBPACK_IMPORTED_MODULE_4__["default"])(project_list);




// generateTodoForm(project1);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQThDO0FBQ1I7QUFDTjtBQUNvQztBQUNaO0FBQ0o7QUFDL0I7O0FBRXJCLHlCQUF5QiwwREFBVzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBZ0I7O0FBRWhCLGlFQUFlO0FBQ2YsZ0VBQW1COzs7OztBQUtuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dlbmVyYXRlQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ2VuZXJhdGVQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ2VuZXJhdGVTaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9nZW5lcmF0ZVRvZG9Gb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA1cHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4ucGx1cy1pbWdcbntcbiAgICBoZWlnaHQ6IDFyZW07XG5cbn1cblxuXG4vKioqKioqKioqIERJQUxPRyBTVEFSVCAqKioqKioqKioqKi9cblxuZGlhbG9nIGltZyB7XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuXG4uaGVhZGluZ19kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIFxufVxuXG4uaGVhZGluZ19kaXYgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBnYXA6IDE1cHg7XG5cbn1cblxuI3Byb2plY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuLyoqKioqKioqKiBESUFMT0cgU1RBUlQgKioqKioqKioqKiovXG5cblxuLyoqKioqKioqKiBDT05URU5UIFNUQVJUICoqKioqKioqKiovXG4uY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLmNvbnRlbnQtaGVhZGluZy1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG5cbn1cblxuI3RvZG8tZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbn1cblxuI3RvZG8tZm9ybSBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTs7QUFFaEI7OztBQUdBLG1DQUFtQzs7QUFFbkM7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1COzs7QUFHdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTOztBQUViOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUdBLG1DQUFtQzs7O0FBR25DLG1DQUFtQztBQUNuQztJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsdXMtaW1nXFxue1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuXFxufVxcblxcblxcbi8qKioqKioqKiogRElBTE9HIFNUQVJUICoqKioqKioqKioqL1xcblxcbmRpYWxvZyBpbWcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5oZWFkaW5nX2RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgXFxufVxcblxcbi5oZWFkaW5nX2RpdiBpbWcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcblxcbn1cXG5cXG4jcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbi8qKioqKioqKiogRElBTE9HIFNUQVJUICoqKioqKioqKioqL1xcblxcblxcbi8qKioqKioqKiogQ09OVEVOVCBTVEFSVCAqKioqKioqKioqL1xcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uY29udGVudC1oZWFkaW5nLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuI3RvZG8tZm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUoeCkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHg7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvX29iamVjdCkge1xuICAgICAgICB0aGlzLmxpc3QucHVzaCh0b2RvX29iamVjdCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kbyh0b2RvX29iamVjdCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdC5pbmRleE9mKHRvZG9fb2JqZWN0KTtcbiAgICAgICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiY2xhc3MgUHJvamVjdExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHgpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB4O1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdF9vYmplY3QpIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2gocHJvamVjdF9vYmplY3QpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdF9vYmplY3QpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3QuaW5kZXhPZihwcm9qZWN0X29iamVjdCk7XG4gICAgICAgIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3Q7XG5cbiIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IG5ld1RpdGxlO1xuXG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHgpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB4O1xuXG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldCBkdWVEYXRlKHgpIHtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IHg7XG5cbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHgpIHtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSB4O1xuXG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0IGNvbXBsZXRlKHgpIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSB4O1xuICAgIH1cblxuICAgIGdldCBjb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvOyIsImltcG9ydCBuZXdfcGx1cyBmcm9tIFwiLi9pbWFnZXMvbmV3X3BsdXMucG5nXCI7XG5pbXBvcnQgY2xvc2UgZnJvbSBcIi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQocHJvamVjdCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXHRjb25zdCBoZWFkaW5nX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRvZG9fZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aGVhZGluZ19kaXYuY2xhc3NMaXN0ID0gXCJjb250ZW50LWhlYWRpbmctZGl2XCI7XG5cdHRvZG9fZGl2LmNsYXNzTGlzdCA9IFwiY29udGVudC10b2RvLWRpdlwiO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmdfZGl2KTtcblx0Y29udGVudC5hcHBlbmRDaGlsZCh0b2RvX2Rpdik7XG5cblx0LyoqKiBDT05URU5UIEhFQURJTkcgU1RBUlQqKioqICovXG5cdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXHRoZWFkaW5nX2Rpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuXHQvKioqIENPTlRFTlQgSEVBRElORyBFTkQgKioqKiAqL1xuXG5cdC8qKiogQUREIFRPRE8gQlVUVE9OIFNUQVJUKioqKiAqL1xuXHRjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YWRkVG9kb0J0bi5jbGFzc0xpc3QgPSBcImFkZC1wcm9qZWN0LWJ0blwiO1xuXHRjb25zdCBhZGRUb2RvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhZGRUb2RvVGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIFRvZG9cIjtcblx0Y29uc3QgcGx1c0ltYWdlID0gbmV3IEltYWdlKCk7XG5cdHBsdXNJbWFnZS5zcmMgPSBuZXdfcGx1cztcblx0cGx1c0ltYWdlLmNsYXNzTGlzdCA9IFwicGx1cy1pbWdcIjtcblx0YWRkVG9kb0J0bi5hcHBlbmRDaGlsZChwbHVzSW1hZ2UpO1xuXHRhZGRUb2RvQnRuLmFwcGVuZENoaWxkKGFkZFRvZG9UZXh0KTtcblx0Y29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRpYWxvZ1wiKTtcblx0YWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRkaWFsb2cuc2hvd01vZGFsKCk7XG5cdH0pO1xuXHRoZWFkaW5nX2Rpdi5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKTtcbiAgICBcblx0aWYgKHByb2plY3QubGlzdCAhPSB1bmRlZmluZWQpIHtcblx0XHRjcmVhdGVUb2RvRE9NKHByb2plY3QpO1xuXHR9XG5cblx0LyoqKiBBREQgVE9ETyBCVVRUT04gRU5EKioqKiAqL1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvRE9NKHByb2plY3QpIHtcblx0Y29uc3QgdG9kb19kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtdG9kby1kaXZcIik7XG5cdGNvbnN0IGNsb3NlX2J0biA9IG5ldyBJbWFnZSgpO1xuXHRjbG9zZV9idG4uc3JjID0gY2xvc2U7XG5cdHByb2plY3QubGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG5cdFx0Y29uc3QgdG9kb19jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0b2RvX2NhcmQuY2xhc3NMaXN0ID0gXCJ0b2RvLWNhcmRcIjtcblx0XHRjb25zdCBjb21wbGV0ZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IGNvbXBsZXRlX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdGNvbXBsZXRlX2xhYmVsLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZTogXCI7XG5cdFx0Y29uc3QgY29tcGxldGVfY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0Y29tcGxldGVfY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblx0XHRjb21wbGV0ZV9jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0aWYgKHJlYWRCdXR0b24uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR0b2RvX2NhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvZG9fY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtvbGl2ZWdyZWVuXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y29tcGxldGVfbGFiZWwuYXBwZW5kQ2hpbGQoY29tcGxldGVfY2hlY2tib3gpO1xuXHRcdGNvbXBsZXRlX2Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZV9sYWJlbCk7XG5cdFx0dG9kb19kaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVfZGl2KTtcblxuXHRcdGNvbnN0IHRpdGxlX3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHR0aXRsZV9wLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3RvZG8udGl0bGV9YDtcblxuXHRcdGNvbnN0IGR1ZURhdGVfcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdGR1ZURhdGVfcC50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt0b2RvLmR1ZURhdGV9YDtcblxuXHRcdGNvbnN0IHByaW9yaXR5X3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0XHRwcmlvcml0eV9wLnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RvZG8ucHJpb3JpdHl9YDtcblxuXHRcdHRvZG9fZGl2LmFwcGVuZENoaWxkKHRpdGxlX3ApO1xuXHRcdHRvZG9fZGl2LmFwcGVuZENoaWxkKGR1ZURhdGVfcCk7XG5cdFx0dG9kb19kaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlfcCk7XG5cdH0pO1xufVxuXG5leHBvcnQgeyBnZW5lcmF0ZUNvbnRlbnQsIGNyZWF0ZVRvZG9ET00gfTtcbiIsImltcG9ydCBjbG9zZSBmcm9tIFwiLi9pbWFnZXMvY2xvc2Uuc3ZnXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVNpZGViYXIgfSBmcm9tIFwiLi9nZW5lcmF0ZVNpZGViYXJcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0Rm9ybShwcm9qZWN0X2xpc3QpIHtcblx0LyoqKioqKiogRk9STSBBTkQgRElBTE9HIENSRUFUSU9OICoqKioqKiovXG5cblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXHRjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cdGRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtZGlhbG9nXCIpO1xuXHRmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcblx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtZm9ybVwiKTtcblx0ZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuXHRib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cblx0LyoqKioqKiogRk9STSBBTkQgRElBTE9HIEVORCAqKioqKioqL1xuXG5cdC8qKioqKioqIEhFQURJTkcgQU5EIENMT1NFIEJUTiBDUkVBVElPTiAqKioqKioqL1xuXG5cdGNvbnN0IGhlYWRpbmdfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aGVhZGluZ19kaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkaW5nX2RpdlwiKTtcblxuXHRjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRoZWFkaW5nLnRleHRDb250ZW50ID0gXCJOZXcgcHJvamVjdFwiO1xuXHRoZWFkaW5nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1oZWFkaW5nXCIpO1xuXHRoZWFkaW5nX2Rpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuXHRjb25zdCBjbG9zZV9idG4gPSBuZXcgSW1hZ2UoKTtcblx0Y2xvc2VfYnRuLnNyYyA9IGNsb3NlO1xuXHRjbG9zZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0ZGlhbG9nLmNsb3NlKCk7XG5cdH0pO1xuXG5cdGhlYWRpbmdfZGl2LmFwcGVuZENoaWxkKGNsb3NlX2J0bik7XG5cblx0Zm9ybS5hcHBlbmRDaGlsZChoZWFkaW5nX2Rpdik7XG5cblx0LyoqKioqKiogSEVBRElORyBBTkQgQ0xPU0UgQlROIEVORCAqKioqKioqL1xuXG5cdC8qKioqIEZPUk0gSU5QVVRTIEFORCBTVUJNSVQgQlVUVE9OIENSRUFUSU9OICoqKioqKioqL1xuXG5cdGNvbnN0IHRpdGxlX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRpdGxlX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0dGl0bGVfbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybS10aXRsZVwiKTtcblx0dGl0bGVfbGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjtcblx0dGl0bGVfaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdHRpdGxlX2lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS10aXRsZVwiKTtcblx0dGl0bGVfaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImZvcm0tdGl0bGVcIik7XG5cdHRpdGxlX2lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblx0dGl0bGVfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2xhYmVsKTtcblx0dGl0bGVfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2lucHV0KTtcblx0Zm9ybS5hcHBlbmRDaGlsZCh0aXRsZV9kaXYpO1xuXG5cdGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcblx0c3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3VibWl0LWJ0blwiKTtcblx0c3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRpZiAoZm9ybVtcImZvcm0tdGl0bGVcIl0udmFsdWUgIT0gXCJcIikge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChmb3JtW1wiZm9ybS10aXRsZVwiXS52YWx1ZSk7XG5cdFx0XHRwcm9qZWN0X2xpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcblx0XHRcdGZvcm0ucmVzZXQoKTtcblx0XHRcdGRpYWxvZy5jbG9zZSgpO1xuXHRcdFx0c2lkZWJhci5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdFx0Z2VuZXJhdGVTaWRlYmFyKHByb2plY3RfbGlzdCk7XG5cdFx0fVxuXHR9KTtcblx0Zm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG5cdC8qKioqIEZPUk0gSU5QVVRTIEFORCBTVUJNSVQgQlVUVE9OIEVORCAqKioqKioqKi9cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVQcm9qZWN0Rm9ybTtcbiIsImltcG9ydCBwbHVzIGZyb20gJy4vaW1hZ2VzL25ld19wbHVzLnBuZyc7XG5pbXBvcnQge2dlbmVyYXRlQ29udGVudCwgY3JlYXRlVG9kb0RPfSBmcm9tICcuL2dlbmVyYXRlQ29udGVudCc7XG5pbXBvcnQge2NyZWF0ZUV2ZW50TGlzdGVuZXJ9IGZyb20gJy4vZ2VuZXJhdGVUb2RvRm9ybSc7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZWJhcihwcm9qZWN0X2xpc3QpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcblxuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdNeSBQcm9qZWN0cyc7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QgPSAnc2lkZWJhci10aXRsZSc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuXG4gICAgaWYgKHByb2plY3RfbGlzdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdERPTShwcm9qZWN0X2xpc3QsIHNpZGViYXIpO1xuICAgIH1cbiAgICBcbiAgICAvKioqKioqKioqKioqKiogQWRkIHByb2plY3QgQnV0dG9uIFNUQVJUKioqKioqKioqKioqKi9cbiAgICBcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkUHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkUHJvamVjdFRleHQudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0ID0gJ2FkZC1wcm9qZWN0LWJ0bic7XG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGlhbG9nJyk7XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBjb25zdCBwbHVzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwbHVzSW1hZ2Uuc3JjID0gcGx1cztcbiAgICBwbHVzSW1hZ2UuY2xhc3NMaXN0ID0gJ3BsdXMtaW1nJztcbiAgICBcbiAgICBhZGRQcm9qZWN0QnRuLmFwcGVuZENoaWxkKHBsdXNJbWFnZSk7XG4gICAgYWRkUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VGV4dCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcblxuICAgICAvKioqKioqKioqKioqKiogQWRkIHByb2plY3QgQnV0dG9uIEVORCoqKioqKioqKioqKiovXG4gICAgXG4gICAgIFxuXG5cblxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RET00ocHJvamVjdF9saXN0LCBzaWRlYmFyKSB7XG4gICAgXG4gICAgcHJvamVjdF9saXN0Lmxpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9qZWN0Jyk7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBUb2RvIGNvbnRlbnQgZm9yLi4uXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgRXZlbnQgTGlzdG5lciBmb3IgLi4uJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgICAgIGNyZWF0ZUV2ZW50TGlzdGVuZXIocHJvamVjdCk7XG4gICAgICAgICAgICBnZW5lcmF0ZUNvbnRlbnQocHJvamVjdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pXG5cbn1cblxuXG5cblxuZXhwb3J0IHtnZW5lcmF0ZVNpZGViYXIsIGNyZWF0ZVByb2plY3RET019OyIsImltcG9ydCBjbG9zZSBmcm9tIFwiLi9pbWFnZXMvY2xvc2Uuc3ZnXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvRE9NLCBnZW5lcmF0ZUNvbnRlbnQgfSBmcm9tIFwiLi9nZW5lcmF0ZUNvbnRlbnRcIjtcbmltcG9ydCBUb2RvIGZyb20gJy4vY3JlYXRlVG9kbyc7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9kb0Zvcm0oKSB7XG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblx0Y29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcblx0ZGlhbG9nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1kaWFsb2dcIik7XG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0Zm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG5cdGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWZvcm1cIik7XG5cdGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcblx0Ym9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuXG5cdC8qKioqKioqIEhFQURJTkcgQU5EIENMT1NFIEJUTiBDUkVBVElPTiAqKioqKioqL1xuXG5cdGNvbnN0IGhlYWRpbmdfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aGVhZGluZ19kaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkaW5nX2RpdlwiKTtcblxuXHRjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRoZWFkaW5nLnRleHRDb250ZW50ID0gXCJOZXcgVG9kb1wiO1xuXHRoZWFkaW5nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1oZWFkaW5nXCIpO1xuXHRoZWFkaW5nX2Rpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuXHRjb25zdCBjbG9zZV9idG4gPSBuZXcgSW1hZ2UoKTtcblx0Y2xvc2VfYnRuLnNyYyA9IGNsb3NlO1xuXHRjbG9zZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0ZGlhbG9nLmNsb3NlKCk7XG5cdH0pO1xuXG5cdGhlYWRpbmdfZGl2LmFwcGVuZENoaWxkKGNsb3NlX2J0bik7XG5cblx0Zm9ybS5hcHBlbmRDaGlsZChoZWFkaW5nX2Rpdik7XG5cblx0LyoqKioqKiogSEVBRElORyBBTkQgQ0xPU0UgQlROIEVORCAqKioqKioqL1xuXG5cdC8qKioqKioqKiBUSVRMRSBJTlBVVCBTVEFSVCAqKioqKioqKiogKi9cblx0Y29uc3QgdGl0bGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGl0bGVfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdHRpdGxlX2xhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCI7XG5cdHRpdGxlX2xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tdGl0bGVcIik7XG5cdGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHR0aXRsZV9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0dGl0bGVfaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXRpdGxlXCIpO1xuXHR0aXRsZV9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kby10aXRsZVwiKTtcblx0dGl0bGVfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2xhYmVsKTtcblx0dGl0bGVfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2lucHV0KTtcblxuXHRmb3JtLmFwcGVuZENoaWxkKHRpdGxlX2Rpdik7XG5cblx0LyoqKioqKioqIFRJVExFIElOUFVUIEVORCAqKioqKioqKiogKi9cblxuXHQvKioqKioqKiogRGVzY3JpcHRpb24gVGV4dCBhcmVhIFNUQVJUICoqKioqKioqKiAqL1xuXHRjb25zdCBkZXNjcmlwdGlvbl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBkZXNjcmlwdGlvbl9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0ZGVzY3JpcHRpb25fbGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcblx0ZGVzY3JpcHRpb25fbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1kZXNjcmlwdGlvblwiKTtcblx0Y29uc3QgZGVzY3JpcHRpb25fdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cdGRlc2NyaXB0aW9uX3RleHRhcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgMjApO1xuXHRkZXNjcmlwdGlvbl90ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIDUwKTtcblx0ZGVzY3JpcHRpb25fdGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuXHRkZXNjcmlwdGlvbl90ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kby1kZXNjcmlwdGlvblwiKTtcblx0ZGVzY3JpcHRpb25fZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2xhYmVsKTtcblx0ZGVzY3JpcHRpb25fZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX3RleHRhcmVhKTtcblxuXHRmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2Rpdik7XG5cblx0LyoqKioqKioqIERlc2NyaXB0aW9uIFRleHQgYXJlYSBFTkQgKioqKioqKioqICovXG5cblx0LyoqKioqKioqIERBVEUgSU5QVVQgU1RBUlQgKioqKioqKioqICovXG5cdGNvbnN0IGRhdGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgZGF0ZV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0ZGF0ZV9sYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiO1xuXHRkYXRlX2xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tZGF0ZVwiKTtcblxuXHRjb25zdCBkYXRlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRkYXRlX2lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRldGltZS1sb2NhbFwiKTtcblx0ZGF0ZV9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGF0ZVwiKTtcblx0ZGF0ZV9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kby1kYXRlXCIpO1xuXHRkYXRlX2Rpdi5hcHBlbmRDaGlsZChkYXRlX2xhYmVsKTtcblx0ZGF0ZV9kaXYuYXBwZW5kQ2hpbGQoZGF0ZV9pbnB1dCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZV9kaXYpO1xuXHQvKioqKioqKiogREFURSBJTlBVVCBFTkQgKioqKioqKioqICovXG5cblxuICAgIC8qKioqKioqKiBQUklPUklUWSBTRUxFQ1QgU1RBUlQgKioqKioqKioqICovXG5cdGNvbnN0IHByaW9yaXR5X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHByaW9yaXR5X2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRwcmlvcml0eV9sYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuXHRwcmlvcml0eV9sYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcblx0Y29uc3QgcHJpb3JpdHlfc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblx0cHJpb3JpdHlfc2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcblx0Y29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdG9wdGlvbjEudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcblx0b3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIik7XG5cdGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRvcHRpb24yLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcblx0b3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKTtcblx0Y29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdG9wdGlvbjMudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuXHRvcHRpb24zLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibG93XCIpO1xuXG5cdHByaW9yaXR5X3NlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24xKTtcblx0cHJpb3JpdHlfc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuXHRwcmlvcml0eV9zZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG5cdHByaW9yaXR5X2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9sYWJlbCk7XG4gICAgcHJpb3JpdHlfZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5X3NlbGVjdCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlfZGl2KTtcbiAgICAvKioqKioqKiogUFJJT1JJVFkgU0VMRUNUIFNUQVJUICoqKioqKioqKiAqL1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0LWJ0bicpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBUb2RvJztcbiAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihwcm9qZWN0KSB7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVBZGRUb2RvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaWFsb2cnKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0nKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKGZvcm1bJ3RvZG8tdGl0bGUnXS52YWx1ZSwgZm9ybVsndG9kby1kZXNjcmlwdGlvbiddLnZhbHVlLCBmb3JtWyd0b2RvLWRhdGUnXS52YWx1ZSwgZm9ybVsndG9kby1wcmlvcml0eSddKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybVsndG9kby1wcmlvcml0eSddKTtcbiAgICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgICAgICBjb25zdCBjb250ZW50X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvZG8tZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRfZGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjcmVhdGVUb2RvRE9NKHByb2plY3QpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBldmVudFRlc3RlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nIGFuZCBhZGRpbmcgZXZlbnRsaXN0ZW5lcicpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaWFsb2cgLnN1Ym1pdC1idG4nKTtcbiAgICBzdWJtaXRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLGV2ZW50VGVzdGVyKTtcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudFRlc3Rlcik7XG5cbn1cblxuZXhwb3J0IHtjcmVhdGVFdmVudExpc3RlbmVyLCBnZW5lcmF0ZVRvZG9Gb3JtfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RMaXN0XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9jcmVhdGVUb2RvXCI7XG5pbXBvcnQge2dlbmVyYXRlU2lkZWJhciwgY3JlYXRlUHJvamVjdERPTX0gZnJvbSBcIi4vZ2VuZXJhdGVTaWRlYmFyXCI7XG5pbXBvcnQgZ2VuZXJhdGVQcm9qZWN0Rm9ybSBmcm9tICcuL2dlbmVyYXRlUHJvamVjdEZvcm0nO1xuaW1wb3J0IHtnZW5lcmF0ZVRvZG9Gb3JtfSBmcm9tICcuL2dlbmVyYXRlVG9kb0Zvcm0nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHByb2plY3RfbGlzdCA9IG5ldyBQcm9qZWN0TGlzdChcIlByb2plY3QgTGlzdFwiKTtcblxuLy8gY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIkdyYWRpbmcgUGFwZXJzXCIpO1xuLy8gY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdChcIkxlc3NvbiBQbGFuc1wiKTtcbi8vIGNvbnN0IHRvZG8xID0gbmV3IFRvZG8oXCJ0b2RvMVwiLCBcbi8vIFwid2FzZGZhXCIsIFwid2Zhc2RcIiwgMSk7XG4vLyBjb25zdCB0b2RvMiA9IG5ldyBUb2RvKFwidG9kbzJcIiwgXG4vLyBcIndhc2RmYVwiLCBcIndmYXNkXCIsIDEpO1xuLy8gcHJvamVjdDEuYWRkVG9kbyh0b2RvMSk7XG4vLyBwcm9qZWN0MS5hZGRUb2RvKHRvZG8yKTtcbi8vIHByb2plY3QxLnJlbW92ZVRvZG8odG9kbzEpO1xuXG4vLyBwcm9qZWN0MS5saXN0WzBdLnByaW9yaXR5ID0gMDtcblxuLy8gcHJvamVjdF9saXN0LmFkZFByb2plY3QocHJvamVjdDEpO1xuLy8gcHJvamVjdF9saXN0LmFkZFByb2plY3QocHJvamVjdDIpO1xuXG4vLyBnZW5lcmF0ZVByb2plY3RGb3JtKHByb2plY3RfbGlzdCk7XG5nZW5lcmF0ZVRvZG9Gb3JtKCk7XG5cbmdlbmVyYXRlU2lkZWJhcihwcm9qZWN0X2xpc3QpO1xuZ2VuZXJhdGVQcm9qZWN0Rm9ybShwcm9qZWN0X2xpc3QpO1xuXG5cblxuXG4vLyBnZW5lcmF0ZVRvZG9Gb3JtKHByb2plY3QxKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==