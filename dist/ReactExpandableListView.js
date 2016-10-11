'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListHeader = require('./lib/ListHeader');

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _ListItemsManager = require('./lib/ListItemsManager');

var _ListItemsManager2 = _interopRequireDefault(_ListItemsManager);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactListView = function (_Component) {
  _inherits(ReactListView, _Component);

  function ReactListView(props) {
    _classCallCheck(this, ReactListView);

    var _this = _possibleConstructorReturn(this, (ReactListView.__proto__ || Object.getPrototypeOf(ReactListView)).call(this, props));

    var data = _this.props.data;

    _this.state = {
      data: data
    };
    return _this;
  }

  _createClass(ReactListView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var headerAttName = _props.headerAttName;
      var itemsAttName = _props.itemsAttName;
      var data = this.state.data;

      var _refi = 0;
      var makeHeaderRef = function makeHeaderRef() {
        return 'ListHeader-' + _refi;
      };

      var makeItemRef = function makeItemRef() {
        return 'ListItem-' + _refi;
      };

      return _react2.default.createElement(
        'div',
        { ref: 'listview', className: 'expandable-listview_outerDiv' },
        _react2.default.createElement(
          'ul',
          { className: 'expandable-listview_ul' },
          Object.keys(data).map(function (k, index) {
            var header = data[k][headerAttName];
            var items = data[k][itemsAttName];
            var isOpened = data[k].isOpened;
            var height = data[k].height;

            _refi++;
            var headerRef = makeHeaderRef();
            var itemRef = makeItemRef();

            return _react2.default.createElement(
              _reactMotion.Motion,
              {
                key: index,
                defaultStyle: { h: 0 },
                style: { h: (0, _reactMotion.spring)(isOpened ? height : 0) } },
              function (_ref) {
                var h = _ref.h;
                return _react2.default.createElement(
                  'div',
                  { key: k },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_ListHeader2.default, {
                      ref: headerRef,
                      header: header,
                      headerIndex: index,
                      className: 'expandable-listview_listHeader',
                      handleToggle: _this2.handleToggle.bind(_this2, index)
                    }),
                    _react2.default.createElement(
                      'div',
                      {
                        style: {
                          display: 'block',
                          overflow: 'hidden',
                          height: '' + h
                        } },
                      _react2.default.createElement(_ListItemsManager2.default, {
                        ref: itemRef,
                        items: items,
                        className: 'expandable-listview_listItems'
                      })
                    )
                  )
                );
              }
            );
          })
        )
      );
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle(headerIndex) {
      var newData = Object.assign({}, this.state.data);
      newData[headerIndex].isOpened = !newData[headerIndex].isOpened;
      this.setState(newData);
    }
  }]);

  return ReactListView;
}(_react.Component);

ReactListView.propTypes = {
  data: _react.PropTypes.array.isRequired,
  headerAttName: _react.PropTypes.string.isRequired,
  itemsAttName: _react.PropTypes.string.isRequired
};
exports.default = ReactListView;
//# sourceMappingURL=ReactExpandableListView.js.map