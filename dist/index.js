'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Range = function Range(props) {
  var val = props.value;
  var min = props.min;
  var max = props.max;

  var percentProgress = val / (max - min);

  var componentHeight = Math.max(props.height, props.thumbSize);

  var trackPosition = {
    top: (props.thumbSize - Math.min(props.height, props.thumbSize)) / 2,
    height: props.height + 'px'
  };

  return _react2.default.createElement(
    'div',
    {
      className: 'slidershell',
      style: {
        height: componentHeight + 'px'
      } },
    _react2.default.createElement('style', { dangerouslySetInnerHTML: {
        __html: '\n               .slider {\n                 position:absolute;\n                 left:0px;\n                 top:0px;\n                 overflow:visible;\n                 z-index:100;\n               }\n\n               .slidershell {\n                 border:0 none;\n                 position:relative;\n                 left:0px;\n                 top:0px;\n                 overflow:visible;\n               }\n\n               .slidertrack {\n                 border:0;\n                 position:absolute;\n                 background:rgba(254, 254, 254, 0.6);\n               }\n\n               .sliderfill {\n                 border:0;\n               \tposition:absolute;\n                 pointer-events:none;\n               }\n\n               .sliderthumb {\n               \tposition:absolute;\n                 left:0px;\n                 top:0px;\n                 border:0 none;\n\n               \tpadding:0px;\n                 margin:0px;\n                 text-align:center;\n\n               \tpointer-events:none;\n               }\n\n               input[type=range]::-ms-track {\n                 width:100%;\n                 height:100%;\n\n                 -webkit-appearance:none;\n                 margin:0px;\n                 padding:0px;\n                 border:0 none;\n\n                 background:transparent;\n                 color:transparent;\n                 overflow:visible;\n               }\n\n               input[type=range]::-moz-range-track {\n                 width:100%;\n                 height:100%;\n\n                 -moz-appearance:none;\n                 margin:0px;\n                 padding:0px;\n                 border:0 none;\n\n                 background:transparent;\n                 color:transparent;\n                 overflow:visible;\n               }\n\n               input[type=range] {\n                 cursor: pointer;\n\n                 -webkit-appearance:none;\n                 padding:0px;\n                 border:0 none;\n\n                 background:transparent;\n                 color:transparent;\n                 overflow:visible;\n               }\n\n               input[type=range]:focus::-webkit-slider-runnable-track {\n                 background:transparent;\n                 border:transparent;\n               }\n\n               input[type=range]:focus {\n                 outline: none;\n               }\n\n               input[type=range]::-ms-thumb {\n                 width:12px;\n                 height:12px;\n\n                 border-radius:0px;\n                 border:0 none;\n                 background:transparent;\n               }\n               input[type=range]::-moz-range-thumb {\n                 width:12px;\n                 height:12px;\n\n                 border-radius:0px;\n                 border:0 none;\n                 background:transparent;\n               }\n               input[type=range]::-webkit-slider-thumb {\n                 width:12px;\n                 height:12px;\n\n                 border-radius:0px;\n                 border:0 none;\n                 background:transparent;\n                 -webkit-appearance:none;\n               }\n\n               input[type=range]::-ms-fill-lower {\n                 background:transparent;\n                 border:0 none;\n               }\n               input[type=range]::-ms-fill-upper {\n                 background:transparent;\n                 border:0 none;\n               }\n               input[type=range]::-ms-tooltip {\n                  display: none;\n               }'
      } }),
    _react2.default.createElement('div', {
      className: 'slidertrack',
      style: _extends({
        borderRadius: props.height + 'px',
        width: '100%'
      }, trackPosition) }),
    _react2.default.createElement('div', {
      className: 'sliderfill',
      style: _extends({
        borderRadius: props.height + 'px',
        background: props.color,
        width: 'calc(100% * ' + percentProgress + ' + ' + (1 - percentProgress) * componentHeight + 'px)'
      }, trackPosition) }),
    props.hideThumb ? null : _react2.default.createElement('div', {
      className: 'sliderthumb',
      style: {
        width: componentHeight,
        height: componentHeight + 'px',
        borderRadius: componentHeight + 'px',
        background: props.thumbColor || props.color,
        boxShadow: '0 0 3px black',
        left: 'calc((100% - ' + componentHeight + 'px) * ' + percentProgress + ')' } }),
    _react2.default.createElement('input', {
      style: _extends({}, trackPosition, {
        width: 'calc(100% - ' + componentHeight + 'px)',
        marginLeft: componentHeight / 2,
        marginRight: componentHeight / 2,
        top: 0,
        height: componentHeight,
        WebkitAppearance: 'none',
        background: 'transparent'
      }),
      className: 'slider',
      type: 'range',
      onChange: props.onChange,
      min: min,
      max: max })
  );
};

Range.defaultProps = {
  color: '#eee',
  thumbSize: 12,
  height: 6,
  min: 0,
  max: 100
};

Range.propTypes = {
  color: _react.PropTypes.string,
  thumbColor: _react.PropTypes.string,
  hideThumb: _react.PropTypes.bool,
  height: _react.PropTypes.number,
  thumbSize: _react.PropTypes.number,
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  onChange: _react.PropTypes.func.isRequired,
  value: _react.PropTypes.number.isRequired
};

exports.default = Range;
