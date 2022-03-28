"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ItemThumbnail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ItemThumbnail({ data  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "image_thumbnail",
        style: {
            backgroundImage: `url(${data})`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "image_ratio"
        })
    }));
};


/***/ }),

/***/ 7049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./Component/Seo.js
var Seo = __webpack_require__(2786);
// EXTERNAL MODULE: ./Component/section/SearchForm.js
var SearchForm = __webpack_require__(1197);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./Component/section/ListHomeAd.js


class ListHomeAd extends external_react_.Component {
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            id: "section_home_ad",
            className: "home_ad",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    className: "hidden",
                    children: "광고"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "table_home_ad",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ad728"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ad320"
                        })
                    ]
                })
            ]
        }));
    }
};

// EXTERNAL MODULE: ./context/index.js
var context = __webpack_require__(5144);
// EXTERNAL MODULE: ./Component/item/ItemThumbnail.js
var ItemThumbnail = __webpack_require__(7833);
// EXTERNAL MODULE: ./Component/util.json
var util = __webpack_require__(5156);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Component/item/ItemHomeMain.js






const ItemHomeMain = ({ data  })=>{
    const { state: { config_url: { SVC_PATH  }  }  } = (0,external_react_.useContext)(context/* Context */._);
    const notitle = data.url.split('/');
    const notitle_num = notitle[notitle.length - 2];
    return(/*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "item_home_main ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "article0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "article1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image_on",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "group0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "group1",
                                    children: data.titleheader !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: data.titleheaderurl,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                            children: [
                                                data.titleheader,
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `${SVC_PATH}/image/arrow_right_small.png`
                                                })
                                            ]
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                            children: [
                                                notitle_num,
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `${SVC_PATH}/image/arrow_right_small.png`
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        }),
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
                                    className: "title0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "title1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: data.url,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: data.title
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "prologue0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "prologue1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: data.url,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: data.prologue
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "article_border",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "line"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const item_ItemHomeMain = (ItemHomeMain);

;// CONCATENATED MODULE: ./Component/section/ListHomeMain.js


const ListHomeMain = ({ data  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "section_home_main",
        className: "home_main",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "hidden",
                children: "한겨레21 Main"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "table_home_main",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row_home_main row_home_main_B",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_main cell_home_main_R",
                                style: {
                                    width: "33.3333%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(item_ItemHomeMain, {
                                    data: data[0]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_main cell_home_main_R",
                                style: {
                                    width: "33.3333%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(item_ItemHomeMain, {
                                    data: data[1]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_main ",
                                style: {
                                    width: "33.3333%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(item_ItemHomeMain, {
                                    data: data[2]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row_home_main",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_main cell_home_main_R",
                                style: {
                                    width: "33.3333%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(item_ItemHomeMain, {
                                    data: data[3]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_main cell_home_main_R",
                                style: {
                                    width: "33.3333%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(item_ItemHomeMain, {
                                    data: data[4]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_main ",
                                style: {
                                    width: "33.3333%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(item_ItemHomeMain, {
                                    data: data[5]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const section_ListHomeMain = (ListHomeMain);

;// CONCATENATED MODULE: ./Component/item/ItemHomeSub.js




function ItemHomeSub({ data  }) {
    const { state: { config_url: { SVC_PATH  }  }  } = (0,external_react_.useContext)(context/* Context */._);
    const notitle = data.url.split('/');
    const notitle_num = notitle[notitle.length - 2];
    return(/*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "item_home_sub",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "article0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "article1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image_on",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "group0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "group1",
                                    children: data.titleheader !== undefined ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: data.titleheaderurl,
                                        children: [
                                            data.titleheader,
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: `${SVC_PATH}/image/arrow_right_small.png`
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "",
                                        children: [
                                            notitle_num,
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: `${SVC_PATH}/image/arrow_right_small.png`
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
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
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image_on",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "title0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: data.url,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: data.title
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "article_border",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "line"
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./Component/section/ViewSubscription.js
var ViewSubscription = __webpack_require__(5432);
;// CONCATENATED MODULE: ./Component/section/ListHomeSub.js



function ListHometop({ data , book  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "section_home_sub",
        className: "home_sub",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hr"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "hidden",
                children: "한겨레21 List"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "table_home_sub",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row_home_sub row_home_sub_B",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub cell_home_sub_R",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[0]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub cell_home_sub_R",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[1]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub cell_home_sub_R",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[2]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub cell_home_sub_subscription",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ViewSubscription["default"], {
                                    book: book
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row_home_sub row_home_sub_B",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub cell_home_sub_R",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[3]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub cell_home_sub_R",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[4]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub cell_home_sub_R",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[5]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[6]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row_home_sub",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub cell_home_sub_R",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[7]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub cell_home_sub_R",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[8]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub cell_home_sub_R",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[9]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell_home_sub",
                                style: {
                                    width: "25%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeSub, {
                                    data: data[10]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./Component/item/ItemHomeTop.js



function ItemHomeTop({ data  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "item_home_top",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "article0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "article1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "title0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: data.url,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: data.title
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "image0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ItemThumbnail/* default */.Z, {
                                data: data.img
                            })
                        })
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./Component/section/ListHomeTop.js


const ListHomeTop = ({ data  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "section_home_top",
        className: "home_top",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "hidden",
                children: "한겨레21 Top"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "home_top",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemHomeTop, {
                    data: data
                })
            })
        ]
    }));
};
/* harmony default export */ const section_ListHomeTop = (ListHomeTop);

;// CONCATENATED MODULE: external "jquery"
const external_jquery_namespaceObject = require("jquery");
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_namespaceObject);
;// CONCATENATED MODULE: ./Component/view/Sitemap.js





function Sitemap() {
    (0,external_react_.useEffect)(()=>{
        external_jquery_default()("#sitemap\t.title").click(function() {
            var obj = jQuery("#sitemap");
            if (obj.hasClass("closed")) {
                obj.removeClass("closed").addClass("opened");
                jQuery(document).scrollTop(jQuery(document).scrollTop() + jQuery("#sitemap\tdiv.page").height());
            } else {
                obj.removeClass("opened").addClass("closed");
            }
        });
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        id: "sitemap",
        className: "closed",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "map0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "map1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "title",
                        children: [
                            "서비스 전체보기",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "open",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "//img.hani.co.kr/section-image/15/h21/image/arrow_down_box.png",
                                    alt: "닫기",
                                    title: "닫기"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "close",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "//img.hani.co.kr/section-image/15/h21/image/arrow_up_box.png",
                                    alt: "열기",
                                    title: "열기"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "page",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "page",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "column",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "column",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "뉴스"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/SERIES/2337/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "표지이야기"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/SERIES/2338/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "특집"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/politics/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "정치"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/economy/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "경제"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/society/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "사회"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/world/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "세계"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/culture/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "문화"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/photo/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "멀티미디어"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/reader/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "커뮤니티"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/SERIES/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "기획연재"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/COLUMN/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "칼럼"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "column",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "column",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: "그외"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/HO/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "지난호보기"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://smartstore.naver.com/hankyoreh21",
                                                        target: "_blank",
                                                        children: "낱권구입"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "http://h21pdf.hani.co.kr/PaperList.aspx",
                                                        target: "_blank",
                                                        children: "PDF"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/RSS",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "RSS"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "column",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "column",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: "한겨레21"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/INTRODUCTION/1.html",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "소개"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/INTRODUCTION/2.html",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "제작과정"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/SUBSCRIPTION/1.html",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "구독신청"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/INTRODUCTION/3.html",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "광고안내"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "column",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "column",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/CUSTOMER/home.html",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "고객센터"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/arti/CUSTOMER/sub.html",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "자주하는 질문(FAQ)"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "//notice.hani.co.kr/h21/opinion",
                                                        children: "독자문의"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./Component/view/ViewHome.js









const ViewHome = ({ ho , wdate , maindata , book  })=>{
    const { state: { config_url: { SVC_PATH  }  }  } = (0,external_react_.useContext)(context/* Context */._);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "viewMain",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "main0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "title_bar",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "title0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "title1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "logo_main",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: `${SVC_PATH}/image/logo_h21.png`,
                                                alt: "한겨레21",
                                                title: "한겨레21"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "date",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                    children: [
                                                        "제 ",
                                                        ho,
                                                        "호"
                                                    ]
                                                }),
                                                wdate.slice(0, 10).replace('-', '.').replace('-', '.')
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "btn_support1",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://support.hani.co.kr/hani/support.hani",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "후원하기"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(SearchForm/* default */.Z, {})
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "main_contents",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(section_ListHomeTop, {
                                    data: maindata[0]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(section_ListHomeMain, {
                                    data: maindata.slice(1, 7)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ListHomeAd, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(ListHometop, {
                                    data: maindata.slice(7, maindata.length),
                                    book: book
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Sitemap, {})
        ]
    }));
};
/* harmony default export */ const view_ViewHome = (ViewHome);

;// CONCATENATED MODULE: ./pages/index.js



function Home({ posts , book  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* default */.Z, {
                title: "한겨레21"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(view_ViewHome, {
                ho: posts.data.top[0].ho,
                wdate: posts.wdate,
                maindata: posts.data.top,
                book: book
            })
        ]
    }));
};
const getServerSideProps = async ()=>{
    const res = await fetch(`http://mapi_h21-master.hani.co.kr/on/main`);
    const posts = await res.json();
    const res_book = await fetch(`http://mapi_h21-master.hani.co.kr/ho/latest`);
    const data_book = await res_book.json();
    const book = data_book.data;
    return {
        props: {
            posts,
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,193,432,156], () => (__webpack_exec__(7049)));
module.exports = __webpack_exports__;

})();