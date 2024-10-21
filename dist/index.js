"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./style.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var GradientTexts = function GradientTexts(text) {
  return /*#__PURE__*/React.createElement("span", {
    className: "text-gradient"
  }, text);
};
var _default = exports["default"] = GradientTexts;
GradientTexts.propTypes = {
  text: _propTypes["default"].string.isRequired
};