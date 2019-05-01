webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/CommentsList.js":
/*!************************************!*\
  !*** ./components/CommentsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/matthewkerr/Documents/Projects/next-scss/components/CommentsList.js";


var CommentsList = function CommentsList(_ref) {
  var comments = _ref.comments;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, comments.map(function (comment) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, comment.user), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, comment.content));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentsList);

/***/ })

})
//# sourceMappingURL=story.js.23848113dadd35b98110.hot-update.js.map