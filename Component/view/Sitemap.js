import React, { Component } from "react";
import Link from "next/link";
import $ from 'jquery';
import { useEffect } from "react";

export default function Sitemap() {
    useEffect(() => {
        $("#sitemap	.title").click
            (
                function () {
                    var obj = jQuery("#sitemap");
                    if (obj.hasClass("closed")) {
                        obj.removeClass("closed").addClass("opened");
                        jQuery(document).scrollTop(jQuery(document).scrollTop() + jQuery("#sitemap	div.page").height());
                    } else {
                        obj.removeClass("opened").addClass("closed");
                    }
                }
            );
    }, [])

    return (
        <nav id="sitemap" className="closed">
            <div className="map0">
                <div className="map1">
                    <div className="title">
                        서비스 전체보기
                        <span className="open"><img src={"//img.hani.co.kr/section-image/15/h21/image/arrow_down_box.png"} alt="닫기"
                            title="닫기" /></span>
                        <span className="close"><img src={"//img.hani.co.kr/section-image/15/h21/image/arrow_up_box.png"} alt="열기" title="열기" /></span>
                    </div>
                    <div className="page">
                        <ul className="page">
                            <li className="column">
                                <ul className="column">
                                    <li><strong><Link href="/arti/">뉴스</Link></strong></li>
                                    <li><span><Link href="/arti/SERIES/2337/">표지이야기</Link></span></li>
                                    <li><span><Link href="/arti/SERIES/2338/">특집</Link></span></li>
                                    <li><span><Link href="/arti/politics/">정치</Link></span></li>
                                    <li><span><Link href="/arti/economy/">경제</Link></span></li>
                                    <li><span><Link href="/arti/society/">사회</Link></span></li>
                                    <li><span><Link href="/arti/world/">세계</Link></span></li>
                                    <li><span><Link href="/arti/culture/">문화</Link></span></li>
                                    <li><span><Link href="/arti/photo/">멀티미디어</Link></span></li>
                                    <li><span><Link href="/arti/reader/">커뮤니티</Link></span></li>
                                    <li><span><Link href="/arti/SERIES/">기획연재</Link></span></li>
                                    <li><span><Link href="/arti/COLUMN/">칼럼</Link></span></li>
                                </ul>
                            </li>
                            <li className="column">
                                <ul className="column">
                                    <li><strong>그외</strong></li>
                                    <li><span><Link href="/arti/HO/">지난호보기</Link></span></li>
                                    <li><span><a href="https://smartstore.naver.com/hankyoreh21"
                                        target="_blank">낱권구입</a></span></li>
                                    <li><span><a href="http://h21pdf.hani.co.kr/PaperList.aspx"
                                        target="_blank">PDF</a></span></li>
                                    <li><span><Link href="/arti/RSS">RSS</Link></span></li>
                                </ul>
                            </li>
                            <li className="column">
                                <ul className="column">
                                    <li><strong>한겨레21</strong></li>
                                    <li><span><Link href="/arti/INTRODUCTION/1.html">소개</Link></span></li>
                                    <li><span><Link href="/arti/INTRODUCTION/2.html">제작과정</Link></span></li>
                                    <li><span><Link href="/arti/SUBSCRIPTION/1.html">구독신청</Link></span></li>
                                    <li><span><Link href="/arti/INTRODUCTION/3.html">광고안내</Link></span></li>
                                </ul>
                            </li>
                            <li className="column">
                                <ul className="column">
                                    <li><strong><Link href="/arti/CUSTOMER/home.html">고객센터</Link></strong></li>
                                    <li><span><Link href="/arti/CUSTOMER/sub.html">자주하는 질문(FAQ)</Link></span></li>
                                    <li><span><a href="//notice.hani.co.kr/h21/opinion">독자문의</a></span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
