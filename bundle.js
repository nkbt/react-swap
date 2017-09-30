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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__app_css__);
/* global document */






var appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* App */], null), appRoot);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Component__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var On = function On(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({ className: 'on' }, props));
};
var Off = function Off(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({ className: 'off' }, props));
};

var Clickable = function Clickable() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'Clickable'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__src_Component__["a" /* ReactSwap */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Off,
        { 'data-swap-handler': 1 },
        'OFF'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        On,
        { 'data-swap-handler': 1 },
        'ON'
      )
    )
  );
};

var Hoverable = function Hoverable() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'Hoverable'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__src_Component__["a" /* ReactSwap */],
      { isHover: true },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Off,
        { 'data-swap-handler': 1 },
        'OFF'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        On,
        null,
        'ON'
      )
    )
  );
};

var Delayed = function Delayed() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'Hoverable with delay'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__src_Component__["a" /* ReactSwap */],
      { delay: 200, isHover: true },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Off,
        null,
        'OFF'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        On,
        null,
        'ON'
      )
    )
  );
};

var Deep = function Deep() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'Deep Swap'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__src_Component__["a" /* ReactSwap */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          { 'data-swap-handler': 1, style: { marginLeft: 20 } },
          'Click me'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          { 'data-swap-handler': 1, style: { marginLeft: 20 } },
          'Unclick me'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginLeft: 50 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Clickable, null)
        )
      )
    )
  );
};

var Table = function Table() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'table',
    { style: { backgroundColor: 'rgba(0, 0, 0, 0.05)' } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tbody',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tr',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'td',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Table Swap'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__src_Component__["a" /* ReactSwap */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'tr',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              { 'data-swap-handler': 1, style: { marginLeft: 20 } },
              'Click me'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'tr',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              { 'data-swap-handler': 1, style: { marginLeft: 20 } },
              'Unclick me'
            )
          )
        )
      )
    )
  );
};

var DeepTableSwap = function DeepTableSwap() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'table',
    { style: { backgroundColor: 'rgba(0, 0, 0, 0.05)' } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tbody',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tr',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'td',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Deep Table Swap'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__src_Component__["a" /* ReactSwap */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tbody',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'tr',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              { 'data-swap-handler': 1, style: { marginLeft: 20 } },
              'Click me'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tbody',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'tr',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              { 'data-swap-handler': 1, style: { marginLeft: 20 } },
              'Unclick me'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { marginLeft: 20 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Table, null)
            )
          )
        )
      )
    )
  );
};

var WithCallback = function (_React$Component) {
  _inherits(WithCallback, _React$Component);

  function WithCallback() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WithCallback);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithCallback.__proto__ || Object.getPrototypeOf(WithCallback)).call.apply(_ref, [this].concat(args))), _this), _this.state = { opened: false }, _this.onSwap = function (opened) {
      _this.setState({ opened: opened });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WithCallback, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'With callback (opened: ',
          this.state.opened ? 'yes' : 'no',
          ')'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src_Component__["a" /* ReactSwap */],
          { onSwap: this.onSwap },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Off,
            { 'data-swap-handler': 1 },
            'OFF'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            On,
            { 'data-swap-handler': 1 },
            'ON'
          )
        )
      );
    }
  }]);

  return WithCallback;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var ToggleFromOutside = function (_React$Component2) {
  _inherits(ToggleFromOutside, _React$Component2);

  function ToggleFromOutside() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, ToggleFromOutside);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = ToggleFromOutside.__proto__ || Object.getPrototypeOf(ToggleFromOutside)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = { opened: false }, _this2.onClick = function () {
      _this2.setState({ opened: !_this2.state.opened });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(ToggleFromOutside, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Toggle from outside \xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: this.onClick },
            'toggle'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src_Component__["a" /* ReactSwap */],
          { isSwapped: this.state.opened },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Off,
            null,
            'OFF'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            On,
            null,
            'ON'
          )
        )
      );
    }
  }]);

  return ToggleFromOutside;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'app' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'react-swap'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Clickable, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Hoverable, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Delayed, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Deep, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Table, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DeepTableSwap, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WithCallback, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ToggleFromOutside, null)
  );
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactSwap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var noop = function noop() {};

var ReactSwap = function (_React$Component) {
  _inherits(ReactSwap, _React$Component);

  function ReactSwap(props) {
    _classCallCheck(this, ReactSwap);

    var _this = _possibleConstructorReturn(this, (ReactSwap.__proto__ || Object.getPrototypeOf(ReactSwap)).call(this, props));

    _this.onClick = function (event) {
      // Should react on click only on [data-swap-handler="1"] elements
      if (!event.target.dataset[_this.props.dataHandler]) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();

      _this.swap();
    };

    _this.setTimer = function (callback, timeout) {
      if (!timeout) {
        callback();
        return;
      }
      _this.timer = setTimeout(callback, timeout);
    };

    _this.change = function (value) {
      var onSwap = _this.props.onSwap;


      _this.setState({ isSwapped: value }, function () {
        return onSwap(value);
      });
    };

    _this.clearTimer = function () {
      if (_this.props.delay) {
        clearTimeout(_this.timer);
      }
    };

    _this.expand = function () {
      _this.change(true);
      _this.clearTimer();
    };

    _this.hide = function () {
      _this.setTimer(function () {
        return _this.change(false);
      }, _this.props.delay);
    };

    _this.swap = function () {
      if (_this.state.isSwapped) {
        _this.hide();
      } else {
        _this.expand();
      }
    };

    var isSwapped = props.isSwapped;


    _this.state = { isSwapped: Boolean(isSwapped) };
    return _this;
  }

  _createClass(ReactSwap, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var isSwapped = _ref.isSwapped;

      if (typeof isSwapped !== 'undefined' && this.state.isSwapped !== isSwapped) {
        this.setState({ isSwapped: isSwapped });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var content = this.state.isSwapped ? this.props.children[1] : this.props.children[0];
      var props = this.props.isHover ? { onMouseLeave: this.hide, onMouseEnter: this.expand } : { onClick: this.onClick };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(content, props);
    }
  }]);

  return ReactSwap;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
ReactSwap.defaultProps = {
  isHover: false,
  isSwapped: false,
  delay: 0,
  dataHandler: 'swapHandler',
  onSwap: noop
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);