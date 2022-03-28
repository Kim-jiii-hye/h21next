"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 2510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Detail),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Component_section_BoxListPopular1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(609);
/* harmony import */ var _Component_section_BoxListPopular2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2173);
/* harmony import */ var _Component_section_ListArticleSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7757);
/* harmony import */ var _Component_section_NavigationPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7077);
/* harmony import */ var _Component_section_ViewSubscription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5432);
/* harmony import */ var _Component_Seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2786);
/* harmony import */ var _Component_view_HeaderKisa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7591);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5144);
/* harmony import */ var _Component_util_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5156);












function Detail({ hanitop , h21top , list , book  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const fetchUrl = router.query;
    const str1 = fetchUrl['sec1'];
    const link1 = str1.replace(str1, _Component_util_json__WEBPACK_IMPORTED_MODULE_11__[str1].kr);
    const link2 = list.info['title'];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_Seo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: `${link1} : ${link2}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "viewMain",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "main0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "main1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_view_HeaderKisa__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                navi: [
                                    link1,
                                    link2
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "article_contents",
                                className: "article2c_contents",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "column_tb",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "column_tr",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "column_tc column0",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                                    id: "section_list_article",
                                                    className: "list_article ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "hidden",
                                                            children: "기사일람"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_section_ListArticleSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            data: list.data
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_section_NavigationPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            totalpage: list.totalpage,
                                                            page: parseInt(list.page)
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "column_tc column1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_section_ViewSubscription__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                        book: book
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_section_BoxListPopular1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        h21data: h21top
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_section_BoxListPopular2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        hanidata: hanitop
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
const getServerSideProps = async (context)=>{
    const res = await fetch(`http://mapi_h21-master.hani.co.kr/on/famous`);
    const data = await res.json();
    const sec1Link = context.query['sec1'];
    const sec2Link = context.query['sec2'];
    const cline = context.query['cline'];
    let listRes;
    {
        cline == undefined ? listRes = await fetch(`http://mapi_h21-master.hani.co.kr/on/${sec1Link}/${sec2Link}`) : listRes = await fetch(`http://mapi_h21-master.hani.co.kr/on/${sec1Link}/${sec2Link}/${cline}`);
    }
    const listData = await listRes.json();
    const res_book = await fetch(`http://mapi_h21-master.hani.co.kr/ho/latest`);
    const data_book = await res_book.json();
    const hanitop = data.hanitop;
    const h21top = data.h21top;
    const list = listData;
    const book = data_book.data;
    return {
        props: {
            hanitop,
            h21top,
            list,
            book
        }
    };
};


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,193,432,156,626,289], () => (__webpack_exec__(2510)));
module.exports = __webpack_exports__;

})();