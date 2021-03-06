webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Comment */ "./components/Comment.js");
/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Comment__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/matthewkerr/Documents/Projects/next-scss/components/CommentsList.js";



var CommentsList = function CommentsList(_ref) {
  var comments = _ref.comments;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, comments.map(function (comment) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, comment.user), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment-content",
      dangerouslySetInnerHTML: {
        __html: comment.content
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentsList);

/***/ })

})
//# sourceMappingURL=story.js.f80e39bf7e9fc7e816d2.hot-update.js.map