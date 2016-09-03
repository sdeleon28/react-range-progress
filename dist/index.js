'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackPosition = exports.toRgbaString = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toRgbaString = exports.toRgbaString = function toRgbaString(rgbaObject) {
  return 'rgba(' + rgbaObject.r + ', ' + rgbaObject.g + ', ' + rgbaObject.b + ', ' + rgbaObject.a + ')';
};

var trackPosition = exports.trackPosition = function trackPosition(_ref) {
  var thumbSize = _ref.thumbSize;
  var height = _ref.height;
  return {
    top: (thumbSize - Math.min(height, thumbSize)) / 2,
    height: height + 'px'
  };
};

var Range = function Range(props) {
  var val = props.value;
  var min = props.min;
  var max = props.max;

  var percentProgress = val / (max - min);

  var componentHeight = Math.max(props.height, props.thumbSize);

  return _react2.default.createElement(
    'div',
    {
      style: {
        height: componentHeight + 'px',
        border: '0 none',
        position: 'relative',
        left: 0,
        top: 0,
        overflow: 'visible'
      } },
    _react2.default.createElement('style', { dangerouslySetInnerHTML: {
        __html: '\n               input[type=range]::-ms-track {\n                 width:100%;\n                 height:100%;\n\n                 -webkit-appearance:none;\n                 margin:0px;\n                 padding:0px;\n                 border:0 none;\n\n                 background:transparent;\n                 color:transparent;\n                 overflow:visible;\n               }\n\n               input[type=range]::-moz-range-track {\n                 width:100%;\n                 height:100%;\n\n                 -moz-appearance:none;\n                 margin:0px;\n                 padding:0px;\n                 border:0 none;\n\n                 background:transparent;\n                 color:transparent;\n                 overflow:visible;\n               }\n\n               input[type=range] {\n                 cursor: pointer;\n\n                 -webkit-appearance:none;\n                 padding:0px;\n                 border:0 none;\n\n                 background:transparent;\n                 color:transparent;\n                 overflow:visible;\n               }\n\n               input[type=range]:focus::-webkit-slider-runnable-track {\n                 background:transparent;\n                 border:transparent;\n               }\n\n               input[type=range]:focus {\n                 outline: none;\n               }\n\n               input[type=range]::-ms-thumb {\n                 width:12px;\n                 height:12px;\n\n                 border-radius:0px;\n                 border:0 none;\n                 background:transparent;\n               }\n               input[type=range]::-moz-range-thumb {\n                 width:12px;\n                 height:12px;\n\n                 border-radius:0px;\n                 border:0 none;\n                 background:transparent;\n               }\n               input[type=range]::-webkit-slider-thumb {\n                 width:12px;\n                 height:12px;\n\n                 border-radius:0px;\n                 border:0 none;\n                 background:transparent;\n                 -webkit-appearance:none;\n               }\n\n               input[type=range]::-ms-fill-lower {\n                 background:transparent;\n                 border:0 none;\n               }\n               input[type=range]::-ms-fill-upper {\n                 background:transparent;\n                 border:0 none;\n               }\n               input[type=range]::-ms-tooltip {\n                  display: none;\n               }'
      } }),
    _react2.default.createElement('div', {
      id: 'track',
      style: _extends({
        border: 0,
        position: 'absolute',
        background: toRgbaString(props.trackColor),
        borderRadius: props.height + 'px',
        width: '100%'
      }, trackPosition(props)) }),
    _react2.default.createElement('div', {
      id: 'fill',
      style: _extends({
        border: 0,
        position: 'absolute',
        pointerEvents: 'none',
        borderRadius: props.height + 'px',
        background: toRgbaString(props.fillColor),
        width: 'calc(100% * ' + percentProgress + ' + ' + (1 - percentProgress) * componentHeight + 'px)'
      }, trackPosition(props)) }),
    props.hideThumb ? null : _react2.default.createElement('div', {
      id: 'thumb',
      style: {
        position: 'absolute',
        top: 0,
        border: '0 none',
        padding: 0,
        margin: 0,
        textAlign: 'center',
        pointerEvents: 'none',
        width: componentHeight,
        height: componentHeight + 'px',
        borderRadius: componentHeight + 'px',
        background: toRgbaString(props.thumbColor),
        boxShadow: '0 0 3px black',
        left: 'calc((100% - ' + componentHeight + 'px) * ' + percentProgress + ')' } }),
    _react2.default.createElement('input', {
      style: _extends({}, trackPosition(props), {
        width: 'calc(100% - ' + componentHeight + 'px)',
        marginLeft: componentHeight / 2,
        marginRight: componentHeight / 2,
        top: 0,
        height: componentHeight,
        WebkitAppearance: 'none',
        background: 'transparent',
        position: 'absolute',
        left: 0,
        overflow: 'visible',
        zIndex: 100
      }),
      type: 'range',
      onChange: props.onChange,
      min: min,
      max: max })
  );
};

Range.defaultProps = {
  fillColor: { r: 255, g: 255, b: 255, a: 1 },
  trackColor: { r: 255, g: 255, b: 255, a: 0.5 },
  thumbColor: { r: 255, g: 255, b: 255, a: 1 },
  thumbSize: 12,
  height: 6,
  min: 0,
  max: 100,
  value: 0,
  onChange: function onChange() {}
};

var colorWithAlpha = {
  r: _react.PropTypes.number.isRequired,
  g: _react.PropTypes.number.isRequired,
  b: _react.PropTypes.number.isRequired,
  a: _react.PropTypes.number.isRequired
};

Range.propTypes = {
  fillColor: _react.PropTypes.shape(colorWithAlpha),
  trackColor: _react.PropTypes.shape(colorWithAlpha),
  thumbColor: _react.PropTypes.shape(colorWithAlpha),
  hideThumb: _react.PropTypes.bool,
  height: _react.PropTypes.number,
  thumbSize: _react.PropTypes.number,
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.number
};

exports.default = Range;
