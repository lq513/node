"use strict";
(self["webpackChunkxxx"] = self["webpackChunkxxx"] || []).push([["page_test_index_tsx"],{

/***/ "./page/test/index.tsx":
/*!*****************************!*\
  !*** ./page/test/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/button/style */ "./node_modules/antd-mobile/lib/button/style/index.js");
/* harmony import */ var antd_mobile_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/button */ "./node_modules/antd-mobile/lib/button/index.js");
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./page/test/index.css");
/* harmony import */ var common_assets_1_txt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/assets/1.txt */ "./common/assets/1.txt");
/* harmony import */ var common_assets_cat_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/assets/cat.jpg */ "./common/assets/cat.jpg");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/tools */ "./utils/tools.ts");






// 测试css是否被tree shaking
 // 测试静态文件打包


 // const cat = require('../public/1.gif').default;

console.log("file:///F:/project/TEST/webpack/page/test/index.tsx", 2222222);

(0,_tools__WEBPACK_IMPORTED_MODULE_7__.a)('./static/1.gif');

var Test = function Test() {
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    // 测试cros跨域
    fetch('http://localhost:3002/test').then(function (res) {
      console.log(res);
    }).catch(function (e) {
      return console.log(e);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
    src: common_assets_cat_jpg__WEBPACK_IMPORTED_MODULE_8__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("p", {
    style: {
      padding: '10px',
      lineHeight: '1.1',
      color: 'var(--grey-9-rgb)'
    }
  }, common_assets_1_txt__WEBPACK_IMPORTED_MODULE_9__.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "testcss"
  }, "\u6D4B\u8BD5css"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement((antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
    type: "warning"
  }, "test antd"));
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./page/test/index.css":
/*!*****************************!*\
  !*** ./page/test/index.css ***!
  \*****************************/
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common/assets/1.txt":
/*!*****************************!*\
  !*** ./common/assets/1.txt ***!
  \*****************************/
/***/ (function(module) {

module.exports = "当地时间9月20日，白宫疫情应对协调员齐恩茨（Jeffrey D. Zients）表示，外国游客需要在登机前出示“完全接种疫苗”的证明和3天内核酸阴性报告，便可入境美国。\r\n\r\n齐恩茨说，未接种疫苗的美国人也可以从海外回国，但必须通过更严格的检测要求，即出行前1天及抵达美国后1天均需进行检测。\r\n\r\n他补充称，此次变化只适用于航空旅行，不会影响陆路边境的限制。\r\n\r\n“国际旅行对于联系家人和朋友、推动大小企业发展、促进思想和文化的开放交流至关重要。”齐恩茨说，这就是美国政府开发一个新的“国际航空旅行系统”的原因，该系统既提高了美国人在国内的安全，也提高了国际航空旅行的安全。";

/***/ }),

/***/ "./common/assets/cat.jpg":
/*!*******************************!*\
  !*** ./common/assets/cat.jpg ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/b398.jpg";

/***/ })

}]);