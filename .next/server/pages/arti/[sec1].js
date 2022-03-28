"use strict";
(() => {
var exports = {};
exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 7683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Detail),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./Component/section/BoxListPopular1.js
var BoxListPopular1 = __webpack_require__(609);
// EXTERNAL MODULE: ./Component/section/BoxListPopular2.js
var BoxListPopular2 = __webpack_require__(2173);
// EXTERNAL MODULE: ./Component/section/ListArticleSection.js + 1 modules
var ListArticleSection = __webpack_require__(7757);
// EXTERNAL MODULE: ./Component/section/NavigationPage.js
var NavigationPage = __webpack_require__(7077);
// EXTERNAL MODULE: ./Component/section/ViewSubscription.js
var ViewSubscription = __webpack_require__(5432);
// EXTERNAL MODULE: ./Component/Seo.js
var Seo = __webpack_require__(2786);
// EXTERNAL MODULE: ./Component/view/HeaderKisa.js
var HeaderKisa = __webpack_require__(7591);
// EXTERNAL MODULE: ./Component/util.json
var util = __webpack_require__(5156);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./Component/item/ItemThumbnail.js
var ItemThumbnail = __webpack_require__(7833);
;// CONCATENATED MODULE: ./Component/item/ItemColumn.js




function ItemColumn({ data  }) {
    const router = (0,router_.useRouter)();
    const linkurl = router.query;
    const currentLink = `/arti/${linkurl['sec1']}/`;
    return(/*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "item_column",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "article0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "article1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "image0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: data.url,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemThumbnail/* default */.Z, {
                                    data: data.img
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "image_on",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "group0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "group1"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "title0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `${currentLink}${data.columnsn}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: data.title
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "magazine_no0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "magazine_no1",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: `${currentLink}${data.seriessn}`,
                                        children: [
                                            "제",
                                            data.ho_st,
                                            "호 ~ "
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "list0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "list1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: data.data !== undefined && data.data.map((hodata, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: hodata.url,
                                                        children: [
                                                            "[제",
                                                            hodata.ho,
                                                            "호]",
                                                            hodata.title
                                                        ]
                                                    })
                                                })
                                            }, index)
                                        )
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./Component/section/ListColumn.js


function ListColumn({ data  }) {
    const seendata = ()=>{
        let seendata2 = [];
        for(let i = 0; i < data.length; i++){
            seendata2.push(/*#__PURE__*/ jsx_runtime_.jsx(ItemColumn, {
                data: data[i]
            }));
        }
        return seendata2.map((numb)=>numb
        );
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "list_column",
        children: seendata()
    }));
};

;// CONCATENATED MODULE: ./Component/item/ItemSeries.js



function ItemSeries({ data  }) {
    const router = (0,router_.useRouter)();
    const linkurl = router.query;
    const currentLink = `/arti/${linkurl['sec1']}/`;
    return(/*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "item_series",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "article0",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "article1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "image_ff",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "group0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "group1"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "title1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `${currentLink}${data.seriessn}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: data.title
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "magazine_no0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "magazine_no1",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: `${currentLink}${data.seriessn}`,
                                    children: [
                                        "제",
                                        data.ho_st,
                                        "호 ~ "
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "list0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "list1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: data.data !== undefined && data.data.map((hodata, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: hodata.url,
                                                    children: [
                                                        "[제",
                                                        hodata.ho,
                                                        "호]",
                                                        hodata.title
                                                    ]
                                                })
                                            })
                                        }, index)
                                    )
                                })
                            })
                        })
                    ]
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./Component/section/ListSeries.js


function ListSeries({ data  }) {
    const seendata = ()=>{
        let seendata2 = [];
        for(let i = 0; i < data.length; i++){
            seendata2.push(/*#__PURE__*/ jsx_runtime_.jsx(ItemSeries, {
                data: data[i]
            }));
        }
        return seendata2.map((numb)=>numb
        );
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "list_series",
        children: seendata()
    }));
};

;// CONCATENATED MODULE: ./pages/arti/[sec1]/index.js












function Detail({ hanitop , h21top , list , book  }) {
    const router = (0,router_.useRouter)();
    const fetchUrl = router.query;
    let link1 = '';
    const headerNaviLink = ()=>{
        if (fetchUrl['sec1'] == "SERIES") {
            let sec = fetchUrl['sec1'];
            link1 = sec.replace(sec, util[sec].kr);
            return(/*#__PURE__*/ jsx_runtime_.jsx(HeaderKisa/* default */.Z, {
                navi: [
                    link1
                ]
            }));
        } else if (fetchUrl['sec1'] == "COLUMN") {
            let sec = fetchUrl['sec1'];
            link1 = sec.replace(sec, util[sec].kr);
            return(/*#__PURE__*/ jsx_runtime_.jsx(HeaderKisa/* default */.Z, {
                navi: [
                    link1
                ]
            }));
        } else {
            let sec;
            if (list.title.includes('sec')) {
                let sec = list.title.substring(3);
                link1 = sec.replace(sec, util[sec].kr);
            } else {
                console.log(util[0]);
                link1 = list.title;
            }
            return(/*#__PURE__*/ jsx_runtime_.jsx(HeaderKisa/* default */.Z, {
                navi: [
                    '뉴스',
                    link1
                ]
            }));
        }
    };
    const openListType = ()=>{
        if (fetchUrl['sec1'] == "SERIES") {
            return(/*#__PURE__*/ jsx_runtime_.jsx(ListSeries, {
                data: list.data
            }));
        } else if (fetchUrl['sec1'] == "COLUMN") {
            return(/*#__PURE__*/ jsx_runtime_.jsx(ListColumn, {
                data: list.data
            }));
        } else {
            return(/*#__PURE__*/ jsx_runtime_.jsx(ListArticleSection/* default */.Z, {
                data: list.data
            }));
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* default */.Z, {
                title: link1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "viewMain",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main1",
                        children: [
                            headerNaviLink(),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "article_contents",
                                className: "article2c_contents",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "column_tb",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "column_tr",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "column_tc column0",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                                    id: "section_list_article",
                                                    className: "list_article ",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "hidden",
                                                            children: "기사일람"
                                                        }),
                                                        openListType(),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(NavigationPage/* default */.Z, {
                                                            totalpage: list.totalpage,
                                                            page: parseInt(list.page)
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "column_tc column1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ViewSubscription["default"], {
                                                        book: book
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(BoxListPopular1/* default */.Z, {
                                                        h21data: h21top
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(BoxListPopular2/* default */.Z, {
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
    const cline = context.query['cline'];
    const sec1Link_ = sec1Link.toLowerCase();
    let listRes;
    {
        cline == undefined ? listRes = await fetch(`http://mapi_h21-master.hani.co.kr/on/sec/list/${sec1Link_}`) : listRes = await fetch(`http://mapi_h21-master.hani.co.kr/on/sec/list/${sec1Link_}/${cline}`);
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,193,432,156,626,289], () => (__webpack_exec__(7683)));
module.exports = __webpack_exports__;

})();