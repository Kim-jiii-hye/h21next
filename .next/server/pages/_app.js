"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Context),
/* harmony export */   "z": () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


//initial state
const initialState = {
    config_url: {
        SVC_PATH: "//img.hani.co.kr/section-image/15/h21",
        SVC_PATH_21: "//img.hani.co.kr/section-image/21/h21",
        WEB_URL: "http://h21.hani.co.kr",
        JSON_URL: "http://mapi_h21-master.hani.co.kr"
    }
};
// create context
const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
// create reducer
const reducer = (state = initialState, action)=>{
    return state;
};
// create Provider component (High order component)
const Provider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const value = {
        state,
        dispatch
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: value,
        children: children
    }));
};



/***/ }),

/***/ 9292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./Component/view/Footer.js

function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "viewFooter",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "footer0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "link",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://member.hani.co.kr/help/rules/mypage_help_copyright.hani",
                                        target: "_blank",
                                        rel: "noopener noreferal",
                                        children: "저작권 안내"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://member.hani.co.kr/help/rules/mypage_help_memberTerms.hani",
                                        target: "_blank",
                                        rel: "noopener noreferal",
                                        children: "회원약관"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://member.hani.co.kr/help/rules/mypage_help_privatePolicy.hani",
                                        target: "_blank",
                                        rel: "noopener noreferal",
                                        children: "개인정보 취급방침"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://member.hani.co.kr/help/rules/mypage_help_copyright.hani?type=intellectual_property_protection",
                                        target: "_blank",
                                        rel: "noopener noreferal",
                                        children: "지적재산보호정책"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://member.hani.co.kr/help/rules/mypage_help_emailPolicy.hani",
                                    target: "_blank",
                                    rel: "noopener noreferal",
                                    children: "이메일주소 무단수집거부"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "copyright-info",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "한겨레21  ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "등록번호:서울, 아01707  ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "등록일자:2017-7-19 ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "발행인:김현대 ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "편집인:강대성  ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "청소년보호책임자:강대성 ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    "주소:서울특별시 마포구 효창목길 6 ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "고객센터:1566-9595"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "copyright",
                                children: [
                                    "ⓒ ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "The Hankyoreh."
                                    }),
                                    " All Rights Reserved."
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./Component/view/Header.js

function Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        id: "viewHeader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "header0",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "fb-root"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "sns",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "facebook",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fb-like",
                                    "data-href": "https://www.facebook.com/hankyoreh21",
                                    "data-layout": "button_count",
                                    "data-action": "like",
                                    "data-show-faces": "false",
                                    "data-share": "false"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "freind_site",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "//www.hani.co.kr",
                                                target: "_blank",
                                                rel: "noopener noreferal",
                                                title: "한겨레",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "//img.hani.co.kr/section-image/15/h21/image/link_hani.png",
                                                    alt: "한겨레21"
                                                })
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "//img.hani.co.kr/section-image/15/h21/image/link_split.png",
                                                alt: "\xb7",
                                                className: "split"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "http://www.cine21.com/",
                                                target: "_blank",
                                                rel: "noopener noreferal",
                                                title: "씨네21",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "//img.hani.co.kr/section-image/15/h21/image/link_cine21.png",
                                                    alt: "씨네21"
                                                })
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "//img.hani.co.kr/section-image/15/h21/image/link_split.png",
                                                alt: "\xb7",
                                                className: "split"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "http://www.economyinsight.co.kr/",
                                                target: "_blank",
                                                rel: "noopener noreferal",
                                                title: "이코노미인사이트",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "//img.hani.co.kr/section-image/15/h21/image/link_economyinsight.png",
                                                    alt: "이코노미인사이트"
                                                })
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "//img.hani.co.kr/section-image/15/h21/image/link_split.png",
                                                alt: "\xb7",
                                                className: "split"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://nuri.hani.co.kr",
                                            target: "_blank",
                                            rel: "noopener noreferal",
                                            title: "하니누리",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "//img.hani.co.kr/section-image/15/h21/image/link_haninuri.png",
                                                alt: "하니누리"
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "login_off",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "link3",
                                            href: "https://member.hani.co.kr/login.php",
                                            title: "로그인",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "//img.hani.co.kr/section-image/15/h21/image/button_login.png",
                                                alt: "로그인"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "link4",
                                            href: "https://member.hani.co.kr/join/join.php",
                                            title: "회원가입",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "//img.hani.co.kr/section-image/15/h21/image/button_join.png",
                                                alt: "회원가입"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
};

// EXTERNAL MODULE: ./context/index.js
var context = __webpack_require__(5144);
;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(context/* Provider */.z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "viewBase",
            className: "css3 W_M1M2L W_M2L W_L",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    }));
};


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
var __webpack_exports__ = (__webpack_exec__(9292));
module.exports = __webpack_exports__;

})();