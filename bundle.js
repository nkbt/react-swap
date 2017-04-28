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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Component = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var On = function On(props) {
  return _react2.default.createElement('div', _extends({ className: 'on' }, props));
};
var Off = function Off(props) {
  return _react2.default.createElement('div', _extends({ className: 'off' }, props));
};

var Clickable = function Clickable() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Clickable'
    ),
    _react2.default.createElement(
      _Component.ReactSwap,
      null,
      _react2.default.createElement(
        Off,
        { 'data-swap-handler': 1 },
        'OFF'
      ),
      _react2.default.createElement(
        On,
        { 'data-swap-handler': 1 },
        'ON'
      )
    )
  );
};

var Hoverable = function Hoverable() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Hoverable'
    ),
    _react2.default.createElement(
      _Component.ReactSwap,
      { isHover: true },
      _react2.default.createElement(
        Off,
        { 'data-swap-handler': 1 },
        'OFF'
      ),
      _react2.default.createElement(
        On,
        null,
        'ON'
      )
    )
  );
};

var Delayed = function Delayed() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Hoverable with delay'
    ),
    _react2.default.createElement(
      _Component.ReactSwap,
      { delay: 200, isHover: true },
      _react2.default.createElement(
        Off,
        null,
        'OFF'
      ),
      _react2.default.createElement(
        On,
        null,
        'ON'
      )
    )
  );
};

var Deep = function Deep() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Deep Swap'
    ),
    _react2.default.createElement(
      _Component.ReactSwap,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { 'data-swap-handler': 1, style: { marginLeft: 20 } },
          'Click me'
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { 'data-swap-handler': 1, style: { marginLeft: 20 } },
          'Unclick me'
        ),
        _react2.default.createElement(
          'div',
          { style: { marginLeft: 50 } },
          _react2.default.createElement(Clickable, null)
        )
      )
    )
  );
};

var Table = function Table() {
  return _react2.default.createElement(
    'table',
    { style: { backgroundColor: 'rgba(0, 0, 0, 0.05)' } },
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Table Swap'
          )
        )
      ),
      _react2.default.createElement(
        _Component.ReactSwap,
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'h3',
              { 'data-swap-handler': 1, style: { marginLeft: 20 } },
              'Click me'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
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
  return _react2.default.createElement(
    'table',
    { style: { backgroundColor: 'rgba(0, 0, 0, 0.05)' } },
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Deep Table Swap'
          )
        )
      )
    ),
    _react2.default.createElement(
      _Component.ReactSwap,
      null,
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'h3',
              { 'data-swap-handler': 1, style: { marginLeft: 20 } },
              'Click me'
            )
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'h3',
              { 'data-swap-handler': 1, style: { marginLeft: 20 } },
              'Unclick me'
            ),
            _react2.default.createElement(
              'div',
              { style: { marginLeft: 20 } },
              _react2.default.createElement(Table, null)
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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'With callback (opened: ',
          this.state.opened ? 'yes' : 'no',
          ')'
        ),
        _react2.default.createElement(
          _Component.ReactSwap,
          { onSwap: this.onSwap },
          _react2.default.createElement(
            Off,
            { 'data-swap-handler': 1 },
            'OFF'
          ),
          _react2.default.createElement(
            On,
            { 'data-swap-handler': 1 },
            'ON'
          )
        )
      );
    }
  }]);

  return WithCallback;
}(_react2.default.Component);

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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Toggle from outside \xA0',
          _react2.default.createElement(
            'button',
            { onClick: this.onClick },
            'toggle'
          )
        ),
        _react2.default.createElement(
          _Component.ReactSwap,
          { isSwapped: this.state.opened },
          _react2.default.createElement(
            Off,
            null,
            'OFF'
          ),
          _react2.default.createElement(
            On,
            null,
            'ON'
          )
        )
      );
    }
  }]);

  return ToggleFromOutside;
}(_react2.default.Component);

var App = exports.App = function App() {
  return _react2.default.createElement(
    'div',
    { className: 'app' },
    _react2.default.createElement(
      'h1',
      null,
      'react-swap'
    ),
    _react2.default.createElement(Clickable, null),
    _react2.default.createElement(Hoverable, null),
    _react2.default.createElement(Delayed, null),
    _react2.default.createElement(Deep, null),
    _react2.default.createElement(Table, null),
    _react2.default.createElement(DeepTableSwap, null),
    _react2.default.createElement(WithCallback, null),
    _react2.default.createElement(ToggleFromOutside, null)
  );
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(1);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */

var appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
_reactDom2.default.render(_react2.default.createElement(_App.App, null), appRoot);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactSwap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var ReactSwap = exports.ReactSwap = function (_React$Component) {
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

      return _react2.default.cloneElement(content, props);
    }
  }]);

  return ReactSwap;
}(_react2.default.Component);

ReactSwap.defaultProps = {
  isHover: false,
  isSwapped: false,
  delay: 0,
  dataHandler: 'swapHandler',
  onSwap: noop
};

/***/ })
/******/ ]);