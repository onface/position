/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/position/0.2.0";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./doc/basic.demo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var position = __webpack_require__("./lib/index.js");
// 
// position({
//     el: document.getElementById('el1'),
//     target: document.getElementById('target1')
// })
//
//
//
//
// document.getElementById('set').addEventListener('submit', function (e) {
//     e.preventDefault()
//     var json = document.getElementById('options').value
//     var options = JSON.parse(json)
//     options.el = document.getElementById('el1')
//     options.target = document.getElementById('target1')
//     options.useCssTransform = true
//     options.onAlign = function onAlign (positionition, el, target, offsetParent) {
//         console.log(positionition)
//         // positionition.left = positionition.left + 10
//         return positionition
//     }
//     position(options)
// })

var box = document.createElement('div');
box.style.width = '20px';
box.style.height = '20px';
box.style.backgroundColor = 'orange';
document.body.appendChild(box);

position({
    el: box,
    target: document.getElementById('wrap1')
});

/***/ }),

/***/ "./lib/defaultProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        baseOn: {
            // "left/center/right top/center/bottom"
            el: 'left top',
            // "left/center/right top/center/bottom"
            target: 'left top'
        },
        onAlign: function onAlign(position, el, target, offsetParent) {
            // position.left = position.left + 10
            return position;
        },
        useCssTransform: true
    };
};

/***/ }),

/***/ "./lib/getBaseOnOffset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getBaseOnOffset;
function getBaseOnOffset(value, key, elSize, object) {
    elSize = parseInt(elSize);
    function count(value) {
        if (object === 'el') {
            return -value;
        } else {
            return value;
        }
    }
    switch (key) {
        case 'left':
        case 'top':
            value = value + 0;
            break;
        case 'center':
            value = value + count(elSize / 2);
            break;
        case 'bottom':
        case 'right':
            value = value + count(elSize);
            break;
        default:
            throw new Error('node_modules/align-position: domPos(options) options.baseOn.el and baseOn.target must be one of "left" "top" "right" "center" "bottom"');
    }
    return value;
}

/***/ }),

/***/ "./lib/getBorderWidth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getBorderWidth = function getBorderWidth(el) {
    // Do't use `getComputedStyle(el).borderWidth`  http://tieba.baidu.com/p/2222283768?traceid=
    var style = getComputedStyle(el);
    var output = {
        left: style.borderLeftWidth,
        right: style.borderRightWidth,
        top: style.borderTopWidth,
        bottom: style.borderBottomWidth
    };

    Object.keys(output).forEach(function (key) {
        output[key] = parseInt(output[key]);
        if (isNaN(output[key])) {
            output[key] = 0;
        }
    });
    return output;
};
exports.default = getBorderWidth;

/***/ }),

/***/ "./lib/getPositionParent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getPosParent = function getPosParent(el) {
    var positionValue = getComputedStyle(el.parentNode).getPropertyValue('position');
    if (el.parentNode.nodeName.toLowerCase() === 'html') {
        return el.parentNode;
    }
    if (positionValue !== 'static') {
        return el.parentNode;
    } else {
        return getPosParent(el.parentNode);
    }
};
exports.default = getPosParent;

/***/ }),

/***/ "./lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPositionParent = __webpack_require__("./lib/getPositionParent.js");

var _getPositionParent2 = _interopRequireDefault(_getPositionParent);

var _getBorderWidth = __webpack_require__("./lib/getBorderWidth.js");

var _getBorderWidth2 = _interopRequireDefault(_getBorderWidth);

var _defaultProps = __webpack_require__("./lib/defaultProps.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _getBaseOnOffset = __webpack_require__("./lib/getBaseOnOffset.js");

var _getBaseOnOffset2 = _interopRequireDefault(_getBaseOnOffset);

var _extend = __webpack_require__("./node_modules/extend/index.js");

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceDefaultBaseOn = function replaceDefaultBaseOn(data) {
    if (data.length === 1) {
        if (data[0] === 'center') {
            data[1] = 'center';
        } else {
            data[1] = 'top';
        }
    }
};
var domPos = function domPos(options) {
    options = (0, _extend2.default)(true, (0, _defaultProps2.default)(), options);
    // format options
    options.baseOn.el = options.baseOn.el.split(' ');
    replaceDefaultBaseOn(options.baseOn.el);
    options.baseOn.target = options.baseOn.target.split(' ');
    replaceDefaultBaseOn(options.baseOn.target);

    var offsetParentEl = (0, _getPositionParent2.default)(options.el);

    // count offset
    var positionLeft = options.target.getBoundingClientRect().left - offsetParentEl.getBoundingClientRect().left - (0, _getBorderWidth2.default)(offsetParentEl).left;
    var positionTop = options.target.getBoundingClientRect().top - offsetParentEl.getBoundingClientRect().top - (0, _getBorderWidth2.default)(offsetParentEl).top;
    positionTop = positionTop + offsetParentEl.scrollTop;
    positionLeft = positionLeft + offsetParentEl.scrollLeft;
    // set baseOn Offse
    positionLeft = (0, _getBaseOnOffset2.default)(positionLeft, options.baseOn.el[0], options.el.clientWidth + (0, _getBorderWidth2.default)(options.el).left + (0, _getBorderWidth2.default)(options.el).right, 'el');
    positionTop = (0, _getBaseOnOffset2.default)(positionTop, options.baseOn.el[1], options.el.clientHeight + (0, _getBorderWidth2.default)(options.el).top + (0, _getBorderWidth2.default)(options.el).bottom, 'el');

    positionLeft = (0, _getBaseOnOffset2.default)(positionLeft, options.baseOn.target[0], options.target.clientWidth + (0, _getBorderWidth2.default)(options.target).left + (0, _getBorderWidth2.default)(options.target).right);
    positionTop = (0, _getBaseOnOffset2.default)(positionTop, options.baseOn.target[1], options.target.clientHeight + (0, _getBorderWidth2.default)(options.target).top + (0, _getBorderWidth2.default)(options.target).bottom);
    positionLeft = positionLeft - window.scrollX;
    positionTop = positionTop - window.scrollY;
    // set style
    var position = {
        left: positionLeft,
        top: positionTop
    };
    position = options.onAlign(position, options.el, options.target, offsetParentEl);
    if (typeof position === 'undefined') {
        throw new Error('node_modules/dom-position: domPos(options) options.onAlign must be return `{left: Number, top: Number}`');
    }
    options.el.style.position = 'absolute';
    var stylePositionLeftValue;
    var stylePositionTopValue;
    if (options.useCssTransform) {
        stylePositionLeftValue = '0px';
        stylePositionTopValue = '0px';
        options.el.style.transform = "translateX(" + position.left + "px) translateY(" + position.top + "px) translateZ(0)";
    } else {
        stylePositionLeftValue = position.left + 'px';
        stylePositionTopValue = position.top + 'px';
    }
    options.el.style.left = stylePositionLeftValue;
    options.el.style.top = stylePositionTopValue;
};
module.exports = domPos;

/***/ }),

/***/ "./node_modules/extend/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./doc/basic.demo.js");


/***/ })

/******/ });