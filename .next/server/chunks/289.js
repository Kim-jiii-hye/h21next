"use strict";
exports.id = 289;
exports.ids = [289];
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

/***/ 7757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ListArticleSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./Component/item/ItemThumbnail.js
var ItemThumbnail = __webpack_require__(7833);
;// CONCATENATED MODULE: ./Component/item/ItemArticle.js



function ItemArticle({ data  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
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
                                className: "group1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: data.url
                                })
                            })
                        }),
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
                            className: "magazine_no0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "magazine_no1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: data.url,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            "제",
                                            data.ho,
                                            "호"
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "prologue0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "prologue1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
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
        })
    }));
};

;// CONCATENATED MODULE: ./Component/section/ListArticleSection.js


function ListArticleSection({ data  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "list_article",
        children: data.map((cont, index)=>/*#__PURE__*/ jsx_runtime_.jsx("article", {
                className: "item_article",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ItemArticle, {
                    data: cont
                })
            }, index)
        )
    }));
};


/***/ }),

/***/ 7077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavigationPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5144);






function NavigationPage({ totalpage , page  }) {
    // 전역에서 사용하는 이미지 링크 (contextapi 사용)
    const { state: { config_url: { SVC_PATH  }  }  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__/* .Context */ ._);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let router_url = router.asPath;
    const url = router_url.split('?');
    const count_l = 5;
    const count_r = 4;
    let start;
    let end;
    switch(totalpage > 1){
        case totalpage <= 2 * count_l + 1:
            start = 1;
            end = totalpage;
            break;
        case page - count_l <= 0:
            start = 1;
            end = 1 + count_l + count_r;
            break;
        case page + count_r >= totalpage:
            start = totalpage - (count_l + count_r);
            end = totalpage;
            break;
        default:
            if (totalpage > 1) {
                start = page - count_l;
                end = page + count_r;
            } else {
                start = 1;
                end = 1;
            }
            break;
    }
    let hasPre = start > 1;
    let hasNext = end < totalpage;
    const pageArr = ()=>{
        let pageArray = [];
        for(let i = start; i <= end; i++){
            pageArray.push(i);
        }
        const data = pageArray.map((number, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: number == page ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    children: number
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: `${url[0]}/?cline=${number}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: number
                    })
                })
            }, index)
        );
        return data;
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "navigation_page",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "navigation_page",
            children: [
                hasPre && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: `${url[0]}/?cline=${start - 1}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `${SVC_PATH}/image/bt_pre.png`,
                            alt: "이전 페이지",
                            title: "이전 페이지"
                        })
                    })
                }),
                pageArr(),
                hasNext && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: `${url[0]}/?cline=${end + 1}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `${SVC_PATH}/image/bt_next.png`,
                            alt: "다음 페이지",
                            title: "다음 페이지"
                        })
                    })
                })
            ]
        })
    }));
};


/***/ })

};
;