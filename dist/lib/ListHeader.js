"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListHeader = function (_Component) {
  _inherits(ListHeader, _Component);

  function ListHeader() {
    _classCallCheck(this, ListHeader);

    return _possibleConstructorReturn(this, (ListHeader.__proto__ || Object.getPrototypeOf(ListHeader)).apply(this, arguments));
  }

  _createClass(ListHeader, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var header = _props.header;
      var headerIndex = _props.headerIndex;

      return _react2.default.createElement(
        "div",
        { ref: "header", className: "expandable-listview_listHeader", onClick: this.handleClick.bind(this, headerIndex) },
        header
      );
    }
  }, {
    key: "handleClick",
    value: function handleClick(headerIndex) {
      var handleToggle = this.props.handleToggle;

      handleToggle(headerIndex);
    }
  }]);

  return ListHeader;
}(_react.Component);

ListHeader.propTypes = {
  header: _react.PropTypes.string.isRequired,
  headerIndex: _react.PropTypes.number.isRequired,
  handleToggle: _react.PropTypes.func.isRequired
};
exports.default = ListHeader;
//# sourceMappingURL=ListHeader.js.map