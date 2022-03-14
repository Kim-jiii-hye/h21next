import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Context } from "../../context";

export default function NavigationPage({ totalpage, page }) {
    // 전역에서 사용하는 이미지 링크 (contextapi 사용)
    const {
        state: {
            config_url: { SVC_PATH }
        }
    } = useContext(Context);

    const router = useRouter();
    let router_url = router.asPath;
    const url = router_url.split('?');
    // 전체 페이지 배열
    const pagenum = [];
    for (let i = 1; i <= totalpage; i++) {
        pagenum.push(i);
    }

    const count_l = 5;
    const count_r = 4;
    let start = 1;
    let end = 0;

    switch (totalpage > 1) {
        case totalpage <= (2 * count_l + 1):
            start = 1;
            end = totalpage;
            break;
        case (page - count_l) <= 0:
            start = 1;
            end = 1 + count_l + count_r;
            break;
        case (page + count_r) >= totalpage:
            start = totalpage - (count_l + count_r);
            end = totalpage;
            break;
        default:
            start = (page - count_l);
            end = (page + count_r);
            break;
    }

    let hasPre = (start > 1);
    let hasNext = (end < totalpage);


    // function pageArr() {
    //     let pageArray = [];
    //     for (let i = start; i <= end; i++) {
    //         pageArray.push(i);
    //     }
    //     const pageList: JSX.Element[] = pageArray.map((number, index) =>
    //         <li key={index}>
    //             {
    //                 number == page
    //                     ? <strong>{number}</strong>
    //                     : <Link href={`${url[0]}/?cline=${number}`}><a>{number}</a></Link>
    //             }
    //         </li>
    //     )
    //     return pageList;
    // }

    const pageArr = () => {
        let pageArray = [];
        for (let i = start; i <= end; i++) {
            pageArray.push(i);
        }
        const data = pageArray.map((number, index) => (
            <li key={index}>
                {
                    number == page
                        ? <strong>{number}</strong>
                        : <Link href={`${url[0]}/?cline=${number}`}><a>{number}</a></Link>
                }
            </li>
        ))
        return data;
    }

    return (
        <nav className="navigation_page">
            <ul className="navigation_page">
                {
                    hasPre && <li><Link href={`${url[0]}/?cline=${start - 1}`}><img src={`${SVC_PATH}/image/bt_pre.png`} alt="이전 페이지" title="이전 페이지" /></Link></li>
                }
                {pageArr()}
                {
                    hasNext && <li><Link href={`${url[0]}/?cline=${end + 1}`}><img src={`${SVC_PATH}/image/bt_next.png`} alt="다음 페이지" title="다음 페이지" /></Link></li>
                }
            </ul>
        </nav>
    )
}