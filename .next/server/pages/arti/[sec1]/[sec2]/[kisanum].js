"use strict";
(() => {
var exports = {};
exports.id = 522;
exports.ids = [522];
exports.modules = {

/***/ 1316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _kisanum_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./Component/section/ViewArticleHead.js

function ViewArticleHead({ ho , title , subtitle , wdate , mdate  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "article_head",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/arti/SERIES/2337/",
                    children: "표지이야기"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: subtitle
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "info",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "magazine_no",
                    children: [
                        "제 ",
                        ho,
                        "호"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "datebox",
                children: [
                    " 등록 : ",
                    wdate,
                    " 수정 : ",
                    mdate
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./Component/item/ItemSupport.js


class ItemSupport extends external_react_.Component {
    componentDidMount() {
        var supportLen = jQuery('.bn-promotion-support.kisa .support-con').length;
        if (supportLen > 0) {
            var supportRandom = Math.floor(Math.random() * supportLen);
            jQuery('.bn-promotion-support.kisa .support-con').hide().eq(supportRandom).show();
        }
    }
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bn-promotion-support kisa h21",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "support-con item1",
                    style: {
                        display: "none"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "support-tit",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "한겨레와 함께"
                                    }),
                                    " 걸어주세요"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "support-txt",
                            children: [
                                "섬세하게 세상을 보고 ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "용기있게 기사를 쓰겠습니다."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "support-btn",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn",
                                    href: "https://support.hani.co.kr/hani/support.hani",
                                    children: "후원하기"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn btn-w",
                                    href: "https://support.hani.co.kr/introduce/",
                                    target: "_blank",
                                    children: "후원제 소개"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "support-con item2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "support-tit",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "좋은 언론을 향한 동행,"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "한겨레를 후원해 주세요"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "support-txt",
                            children: "한겨레는 독자의 신뢰를 바탕으로 취재하고 보도합니다."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "support-btn",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn",
                                    href: "https://support.hani.co.kr/hani/support.hani",
                                    children: "후원하기"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn btn-w",
                                    href: "https://support.hani.co.kr/introduce/",
                                    target: "_blank",
                                    children: "후원제 소개"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "support-con item3",
                    style: {
                        display: "none"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "support-tit",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "당신의 가치를"
                                    }),
                                    " 후원으로 얹어주세요"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "support-txt",
                            children: [
                                "평화를 갈망하는 마음, 평등을 지향하는 마음,",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "환경을 염려하는 마음..."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "support-btn",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn",
                                    href: "https://support.hani.co.kr/hani/support.hani",
                                    children: "후원하기"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn btn-w",
                                    href: "https://support.hani.co.kr/introduce/",
                                    target: "_blank",
                                    children: "후원제 소개"
                                })
                            ]
                        })
                    ]
                })
            ]
        }));
    }
};

;// CONCATENATED MODULE: ./Component/section/ViewArticleToolbox.js

const ViewArticleToolbox = ()=>{
    const kakaoShareBtn = ()=>{
        const { Kakao , location  } = window;
        Kakao.Link.sendScrap({
            requestUrl: location.href
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "article-tools",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                type: "text/javascript",
                src: "//www.hani.co.kr/section-homepage/svc3/js/hani_common1.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                type: "text/javascript",
                src: "//www.hani.co.kr/section-homepage/svc3/js/hani_common2_seouland.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                type: "text/javascript",
                src: "//www.hani.co.kr/section-homepage/svc3/js/hani_article.js"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "tools",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "tool-f",
                        "data-status": "1",
                        title: "페이스북 공유",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon icon1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "blind",
                                children: "페이스북"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "overlay",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "icon-area",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon icon2"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                            className: "count-area",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "facebook-count",
                                                children: "0"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "tool-t",
                        "data-status": "1",
                        title: "트위터 공유",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon icon1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "blind",
                                children: "트위터"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "overlay",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "icon-area",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon icon2"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                            className: "count-area",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "twitter-count",
                                                children: "0"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "tool-share",
                        "data-status": "1",
                        title: "기사 공유 더보기",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon icon1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "blind",
                                children: "공유"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "overlay",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "icon-area",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon icon2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "http://blog.naver.com/openapi/share?url=<?=urlencode($h21Config->share_url)?>",
                                            className: "s-n",
                                            title: "네이버블로그 공유",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "blind",
                                                children: "네이버블로그"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://story.kakao.com/share?url=<?=urlencode($h21Config->share_url)?>",
                                            className: "s-k",
                                            title: "카카오스토리 공유",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "blind",
                                                children: "카카오스토리"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "kakao-btn",
                        onClick: kakaoShareBtn,
                        children: "카카오톡 공유하기"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "tool-scrap",
                        title: "기사 스크랩",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "blind",
                                children: "스크랩"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "tool-print",
                        title: "인쇄하기",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "/arti/PRINT/<?=$h21Config->article_no?>.html",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "blind",
                                    children: "프린트"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "font",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#increase_font_size",
                        title: "글씨크게",
                        className: "large",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "blind",
                            children: "크게"
                        })
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#decrease_font_size",
                        title: "글씨작게",
                        className: "small",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "blind",
                            children: "작게"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const section_ViewArticleToolbox = (ViewArticleToolbox);

;// CONCATENATED MODULE: ./Component/section/ViewArticleSection.js



function ViewArticleSection({ bodydata , img  }) {
    let bodydataRes;
    function stringToImg(i, num) {
        bodydataRes = i.replace(`[%%IMAGE${num}%%]`, `<div class="image0"><div class="image1" style={maxWidth:"659px;"}><div class="image2"><img src=${img[num - 1].url} /></div><div class="desc">${img[num - 1].desc}</div></div>`);
        if (img.length == num) {
            return bodydataRes;
        }
        num++;
        return stringToImg(bodydataRes, num);
    }
    stringToImg(bodydata, 1);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "article_tools",
                children: /*#__PURE__*/ jsx_runtime_.jsx(section_ViewArticleToolbox, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "article_body",
                style: {
                    fontSize: '16px'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text",
                        dangerouslySetInnerHTML: {
                            __html: bodydataRes
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ItemSupport, {})
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./Component/section/ViewArticleAd1.js

function ViewArticleAd1() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "section_sub_ad",
        className: "sub_ad",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "hidden",
                children: "����"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "visual-ad",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ad600",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            type: "text/javascript",
                            src: "//adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@Bottom1?kisano=<?=$section_data;?>"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ad320",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            type: "text/javascript",
                            src: "//adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@Top3?section=h21&kisano=<?=$section_data;?>"
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./Component/Seo.js
var Seo = __webpack_require__(2786);
// EXTERNAL MODULE: ./Component/view/HeaderKisa.js
var HeaderKisa = __webpack_require__(7591);
;// CONCATENATED MODULE: ./Component/section/ViewArticleAd2.js

function ViewArticleAd2() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "ad-side01",
        className: "side-ad",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "hidden"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "visual-ad",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ad600",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            type: "text/javascript",
                            src: "https://adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@x01?kisano=<?=$section_data;?>"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ad320",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            type: "text/javascript",
                            src: "https://adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@x11?kisano=<?=$section_data;?>"
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./Component/section/ViewSubscription.js
var ViewSubscription = __webpack_require__(5432);
;// CONCATENATED MODULE: ./Component/section/ViewArticleAd3.js

function ViewArticleAd3() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "ad-side01",
        className: "side-ad",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "hidden"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "visual-ad",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ad600",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            type: "text/javascript",
                            src: "https://adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@x02?kisano=<?=$section_data;?>"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ad320",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            type: "text/javascript",
                            src: "https://adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@x12?kisano=<?=$section_data;?>"
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Component/item/DotTitle.js


function DotTitle({ title , dataLink  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "dot_title ",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "title0",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "title1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: dataLink,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        children: title
                    })
                })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./Component/section/BoxListContents.js


function BoxListContents({ data , title  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "section_article_column",
        className: "box_list_dot_title",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "dot_title",
                children: data.map((element, index)=>/*#__PURE__*/ jsx_runtime_.jsx(DotTitle, {
                        title: element.title,
                        dataLink: element.url
                    }, index)
                )
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./Component/item/ArticleReply.js

function ArticleReply() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "article_reply",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "reply0",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "lv-container",
                "data-id": "han",
                "data-uid": "NTg3LzE0MjU3LzY2MQ=="
            })
        })
    }));
};

// EXTERNAL MODULE: ./Component/section/BoxListPopular1.js
var BoxListPopular1 = __webpack_require__(609);
// EXTERNAL MODULE: ./Component/section/BoxListPopular2.js
var BoxListPopular2 = __webpack_require__(2173);
// EXTERNAL MODULE: ./Component/util.json
var util = __webpack_require__(5156);
;// CONCATENATED MODULE: ./pages/arti/[sec1]/[sec2]/[kisanum]/index.tsx
















const KAKAO_KEY = 'e4535029ec4a0922a5042a26645178fc';
// 기사 뷰 페이지에서만 공유 기능 사용하므로
const KisaView = ({ hanitop , h21top , data , book  }, { children  })=>{
    const router = (0,router_.useRouter)();
    const fetchUrl = router.query;
    (0,external_react_.useEffect)(()=>{
        window.Kakao.init(KAKAO_KEY);
    }, []);
    // path따라 가야함
    const HeaderKisaCont = ()=>{
        const str1 = data.sec; //103001000
        const path = util[str1]['path'];
        let pathArr = [];
        for(let i = 0; i < path.length; i++){
            pathArr.push(util[path[i]]['kr']);
        }
        return(/*#__PURE__*/ jsx_runtime_.jsx(HeaderKisa/* default */.Z, {
            navi: pathArr
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* default */.Z, {
                title: "기사내용보기"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "viewMain",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main1",
                        children: [
                            HeaderKisaCont(),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "article_contents",
                                className: "article2c_contents",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ViewArticleHead, {
                                        ho: data.ho,
                                        title: data.title,
                                        subtitle: data.subtitle,
                                        mdate: data.mdate,
                                        wdate: data.wdate
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "column_tb",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "column_tr",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "column_tc column0",
                                                    children: [
                                                        children,
                                                        /*#__PURE__*/ jsx_runtime_.jsx(ViewArticleSection, {
                                                            bodydata: data.body,
                                                            img: data.img.data
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(ViewArticleAd1, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(ArticleReply, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "column_tc column1",
                                                    children: [
                                                        data.series_info.data != null ? /*#__PURE__*/ jsx_runtime_.jsx(BoxListContents, {
                                                            data: data.series_info.data,
                                                            title: data.series_info.title
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                        data.column_info.data != null ? /*#__PURE__*/ jsx_runtime_.jsx(BoxListContents, {
                                                            data: data.column_info.data,
                                                            title: data.column_info.title
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(ViewArticleAd2, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(BoxListPopular1/* default */.Z, {
                                                            h21data: h21top
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(ViewSubscription["default"], {
                                                            book: book
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(ViewArticleAd3, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(BoxListPopular2/* default */.Z, {
                                                            hanidata: hanitop
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
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
    const hanidata = await res.json();
    const kisaNum = context.query['kisanum'];
    const kisa_res = await fetch(`http://mapi_h21-master.hani.co.kr/on/view/${kisaNum}`);
    const data = await kisa_res.json();
    const res_book = await fetch(`http://mapi_h21-master.hani.co.kr/ho/latest`);
    const data_book = await res_book.json();
    const hanitop = hanidata.hanitop;
    const h21top = hanidata.h21top;
    const book = data_book.data;
    return {
        props: {
            data,
            hanitop,
            h21top,
            book
        }
    };
};
/* harmony default export */ const _kisanum_ = (KisaView);


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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,193,432,156,626], () => (__webpack_exec__(1316)));
module.exports = __webpack_exports__;

})();