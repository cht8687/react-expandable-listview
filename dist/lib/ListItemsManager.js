'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItemsManager = function (_Component) {
  _inherits(ListItemsManager, _Component);

  function ListItemsManager() {
    _classCallCheck(this, ListItemsManager);

    return _possibleConstructorReturn(this, (ListItemsManager.__proto__ || Object.getPrototypeOf(ListItemsManager)).apply(this, arguments));
  }

  _createClass(ListItemsManager, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var items = _props.items;
      var isReactComponent = _props.isReactComponent;

      return _react2.default.createElement(
        'span',
        null,
        [].concat(_toConsumableArray(items)).map(function (item, index) {
          return _react2.default.createElement(
            _ListItem2.default,
            { key: index, isReactComponent: isReactComponent },
            item
          );
        })
      );
    }
  }]);

  return ListItemsManager;
}(_react.Component);

ListItemsManager.propTypes = {
  items: _react.PropTypes.array.isRequired,
  isReactComponent: _react.PropTypes.bool
};
exports.default = ListItemsManager;
//# sourceMappingURL=ListItemsManager.js.map