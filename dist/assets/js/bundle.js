/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./src/js/components/helper-funcs.js":
/*!*******************************************!*\
  !*** ./src/js/components/helper-funcs.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRule: () => (/* binding */ addRule),
/* harmony export */   addSliderToGlobalList: () => (/* binding */ addSliderToGlobalList),
/* harmony export */   deepCompare: () => (/* binding */ deepCompare),
/* harmony export */   destroyOldSlider: () => (/* binding */ destroyOldSlider),
/* harmony export */   elementObserver: () => (/* binding */ elementObserver),
/* harmony export */   eraseCookie: () => (/* binding */ eraseCookie),
/* harmony export */   getCookie: () => (/* binding */ getCookie),
/* harmony export */   getLineHeight: () => (/* binding */ getLineHeight),
/* harmony export */   getViewportSize: () => (/* binding */ getViewportSize),
/* harmony export */   hideOnClickOutside: () => (/* binding */ hideOnClickOutside),
/* harmony export */   imgTosvg: () => (/* binding */ imgTosvg),
/* harmony export */   magnify: () => (/* binding */ magnify),
/* harmony export */   manageElement: () => (/* binding */ manageElement),
/* harmony export */   matchHeight: () => (/* binding */ matchHeight),
/* harmony export */   observeDOM: () => (/* binding */ observeDOM),
/* harmony export */   setCookie: () => (/* binding */ setCookie),
/* harmony export */   wpEditorDone: () => (/* binding */ wpEditorDone)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");


var setCookie = function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
var getCookie = function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
var eraseCookie = function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
var elementObserver = function elementObserver(callback, options) {
  if (typeof options.element !== "undefined") {
    return new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          callback(options);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    }).observe(options.element);
  }
};
var matchHeight = function matchHeight(selector) {
  var objects = document.querySelectorAll(selector);
  var heights = Array.from(objects).map(function (x, i, a) {
    return x.offsetHeight;
  });
  var max = Math.max.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(heights));
  objects.forEach(function (el) {
    el.style.height = "".concat(max, "px");
  });
};
var hideOnClickOutside = function hideOnClickOutside(element, callback, check) {
  var outsideClickListener = function outsideClickListener(event) {
    if (!element.contains(event.target) && check) {
      console.log("tried to close");
      callback();
      removeClickListener();
    }
  };
  var removeClickListener = function removeClickListener() {
    document.removeEventListener("click", outsideClickListener);
  };
  document.addEventListener("click", outsideClickListener);
};
var imgTosvg = function imgTosvg(options) {
  var img = options.element;
  var index = options.index;
  var imgURL = img.getAttribute("src");
  var imgID = img.getAttribute("id");
  var imgWidth = img.getAttribute("width");
  var imgHeight = img.getAttribute("height");
  var imgClasses = img.getAttribute("class");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      var resPure = this.responseText.trim();
      var parentDiv = document.createElement("div");
      parentDiv.innerHTML = resPure;
      var svg = parentDiv.querySelector("svg");
      if (svg != null) {
        if (imgID != null) {
          svg.setAttribute("id", imgID);
        } else {
          svg.setAttribute("id", "replaced-svg-".concat(index));
        }
        svg.removeAttribute("xmlns:a");
        svg.setAttribute("class", imgClasses);
        // eslint-disable-next-line no-unused-expressions
        imgWidth !== null ? svg.setAttribute("width", imgWidth) : null;
        // eslint-disable-next-line no-unused-expressions
        imgHeight !== null ? svg.setAttribute("height", imgHeight) : null;
        img.parentNode.replaceChild(svg, img);
      }
    }
  };
  xhttp.open("GET", imgURL, true);
  xhttp.send();
};
var magnify = function magnify(img, zoom) {
  /* Create magnifier glass: */
  var glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = img.width * zoom + "px " + img.height * zoom + "px";
  var bw = 3;
  var w = glass.offsetWidth / 2;
  var h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    var pos = getCursorPos(e);
    var x = pos.x;
    var y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /* Set the position of the magnifier glass: */
    glass.style.left = x - w + "px";
    glass.style.top = y - h + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
  }
  function getCursorPos(e) {
    var x = 0;
    var y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    var a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {
      x: x,
      y: y
    };
  }
};

/**
 * Get Viewport width and height
 */
var getViewportSize = function getViewportSize() {
  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName("body")[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight || docElem.clientHeight || body.clientHeight;
  return {
    width: x,
    height: y
  };
};
/**
 * Method used to encapsolate block JS.
 * This method mainly checks the wp editor if the block is loaded, and if so then it runs the block's JS callback provided.
 * The block has a failsafe `times` counter, so that if the block isn't loaded after checking for five times then the check will stop
 * @param {number} times - The number of times the function will try to check if the block is loaded
 * @param {*} func - The callback function to run in case the editor signals that the block is loaded. This function has to return a boolean for performance considerations.
 */
// export const wpEditorDone = (
//   times = 5,
//   func,
//   onlyAdmin = false,
//   onlyClient = false
// ) => {
//   if (
//     typeof wp !== "undefined" &&
//     typeof wp.data !== "undefined" &&
//     onlyClient === false
//   ) {
//     const { select, subscribe } = wp.data;

//     const closeListener = subscribe(() => {
//       const isReady = select("core/editor").__unstableIsEditorReady();
//       if (!isReady) {
//         return;
//       }
//       closeListener();
//       let counter = 0;
//       const ticker = setInterval(() => {
//         const result = func();
//         if (result === true || counter > times) {
//           clearInterval(ticker);
//         }
//         counter++;
//       }, 1000);
//     });
//   } else if (onlyAdmin === false) {
//     func();
//   }
// };
var wpEditorDone = function wpEditorDone() {
  var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var func = arguments.length > 1 ? arguments[1] : undefined;
  var onlyAdmin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var onlyClient = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return new Promise(function (resolve, reject) {
    if (typeof wp !== "undefined" && typeof wp.data !== "undefined" && typeof wp.data.select("core/editor") !== "undefined" && onlyClient === false) {
      var _wp$data = wp.data,
        select = _wp$data.select,
        subscribe = _wp$data.subscribe;
      var closeListener = subscribe(function () {
        var isReady = select("core/editor").__unstableIsEditorReady();
        if (!isReady) {
          return;
        }
        closeListener();
        var counter = 0;
        var ticker = setInterval(function () {
          var result = func();
          if (result === true || counter > times) {
            clearInterval(ticker);
            resolve(true);
          }
          counter++;
        }, 2000);
      });
    } else if (onlyAdmin === false) {
      func();
      resolve(true);
    }
  });
};
var destroyOldSlider = function destroyOldSlider(section) {
  if (document.sliderList && document.sliderList.find(function (el) {
    return el.id === section.id;
  })) {
    document.sliderList.find(function (el) {
      return el.id === section.id;
    }).el.destroy();
  }
};
var addSliderToGlobalList = function addSliderToGlobalList(section, slider) {
  if (!document.sliderList) {
    document.sliderList = [];
  } else if (document.sliderList.find(function (el) {
    return el.id === section.id;
  })) {
    document.sliderList = document.sliderList.filter(function (el) {
      return el.id !== section.id;
    });
  }
  document.sliderList = document.sliderList.concat({
    id: section.id,
    el: slider
  });
};
var addRule = function (style) {
  var sheet = document.head.appendChild(style).sheet;
  return function (selector, css) {
    var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
      return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
    }).join(";");
    sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
  };
}(document.createElement("style"));
var getLineHeight = function getLineHeight(el) {
  var temp = document.createElement(el.nodeName),
    ret;
  temp.setAttribute("style", "margin:0; padding:0; " + "font-family:" + (el.style.fontFamily || "inherit") + "; " + "font-size:" + (el.style.fontSize || "inherit"));
  temp.innerHTML = "A";
  el.parentNode.appendChild(temp);
  ret = temp.clientHeight;
  temp.parentNode.removeChild(temp);
  return ret;
};

/**
 * This function takes two objects as input and returns true if they are deeply equal, and false otherwise.
 * It works for both arrays and objects, and can handle nested objects as well.
 * @param {*} obj1 - An object to compare
 * @param {*} obj2 - Another object to compare with the first one
 * @returns Whether both objects are identical
 */
var deepCompare = function deepCompare(obj1, obj2) {
  if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(obj1) !== (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(obj2)) {
    return false;
  }
  if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(obj1) === "object") {
    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) {
        return false;
      }
      for (var i = 0; i < obj1.length; i++) {
        if (!deepCompare(obj1[i], obj2[i])) {
          return false;
        }
      }
      return true;
    } else {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
      }
      for (var key in obj1) {
        if (!(key in obj2) || !deepCompare(obj1[key], obj2[key])) {
          return false;
        }
      }
      return true;
    }
  } else {
    return obj1 === obj2;
  }
};

/**
 * A function used to create a new div and append it to the DOM or remove it if it already exists.
 * @param {string} targetId - an identifier passed to `getElementById` to check if the div already exists in the dom
 * @param {HTMLElement} contentElement - the new div's content to be appended to it
 * @param {{class: string}} options - the new div's content to be appended to it
 */
var manageElement = function manageElement(targetId, contentElement) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var existingDiv = document.getElementById(targetId);
  if (existingDiv) {
    existingDiv.classList.add("hide");
    setTimeout(function () {
      existingDiv.remove();
    }, 500);
  } else {
    var newDiv = document.createElement("div");
    newDiv.id = targetId;
    if (options["class"]) {
      newDiv.classList.add(options["class"]);
    }
    newDiv.appendChild(contentElement);
    document.body.appendChild(newDiv);
  }
};

/**
 * Function that watches an element's DOM for changes and runs the callback on detecting a change.
 * @param {HTMLElement} obj - An object to watch for changes
 * @param {Function} callback - A callback function to run on change detection.
 */
var observeDOM = function () {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  return function (obj, callback) {
    if (!obj || obj.nodeType !== 1) return;
    if (MutationObserver) {
      // Create a new observer
      var mutationObserver = new MutationObserver(callback);
      // Observe changes in children (including subtree)
      mutationObserver.observe(obj, {
        childList: true,
        subtree: true
      });
      return mutationObserver;
    } else if (window.addEventListener) {
      // Fallback for older browsers
      obj.addEventListener("DOMNodeInserted", callback, false);
      obj.addEventListener("DOMNodeRemoved", callback, false);
    }
  };
}();

/***/ }),

/***/ "./src/js/components/sections.js":
/*!***************************************!*\
  !*** ./src/js/components/sections.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_funcs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-funcs.js */ "./src/js/components/helper-funcs.js");

document.addEventListener("DOMContentLoaded", function () {
  var fadeinSections = document.querySelectorAll("section.fade-in");
  if (fadeinSections && fadeinSections.length > 0) {
    fadeinSections.forEach(function (sec) {
      (0,_helper_funcs_js__WEBPACK_IMPORTED_MODULE_0__.elementObserver)(function (options) {
        options.element.classList.add("visible");
      }, {
        element: sec
      });
    });
  }
});

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sections_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sections.js */ "./src/js/components/sections.js");

document.addEventListener("DOMContentLoaded", function () {});
})();

/******/ })()
;