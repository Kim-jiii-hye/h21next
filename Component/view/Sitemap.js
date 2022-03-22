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
                                    <li><strong><Link href="/arti/"><h6>뉴스</h6></Link></strong></li>
                                    <li><span><Link href="/arti/SERIES/2337/" ><h6>표지이야기</h6></Link></span></li>
                                    <li><span><Link href="/arti/SERIES/2338/" ><h6>특집</h6></Link></span></li>
                                    <li><span><Link href="/arti/politics/" ><h6>정치</h6></Link></span></li>
                                    <li><span><Link href="/arti/economy/" ><h6>경제</h6></Link></span></li>
                                    <li><span><Link href="/arti/society/" ><h6>사회</h6></Link></span></li>
                                    <li><span><Link href="/arti/world/" ><h6>세계</h6></Link></span></li>
                                    <li><span><Link href="/arti/culture/" ><h6>문화</h6></Link></span></li>
                                    <li><span><Link href="/arti/photo/" ><h6>멀티미디어</h6></Link></span></li>
                                    <li><span><Link href="/arti/reader/" ><h6>커뮤니티</h6></Link></span></li>
                                    <li><span><Link href="/arti/SERIES/" ><h6>기획연재</h6></Link></span></li>
                                    <li><span><Link href="/arti/COLUMN/" ><h6>칼럼</h6></Link></span></li>
                                </ul>
                            </li>
                            <li className="column">
                                <ul className="column">
                                    <li><strong>그외</strong></li>
                                    <li><span><Link href="/arti/HO/"><h6>지난호보기</h6></Link></span></li>
                                    <li><span><a href="https://smartstore.naver.com/hankyoreh21"
                                        target="_blank">낱권구입</a></span></li>
                                    <li><span><a href="http://h21pdf.hani.co.kr/PaperList.aspx"
                                        target="_blank">PDF</a></span></li>
                                    <li><span><Link href="/arti/RSS"><h6>RSS</h6></Link></span></li>
                                </ul>
                            </li>
                            <li className="column">
                                <ul className="column">
                                    <li><strong>한겨레21</strong></li>
                                    <li><span><Link href="/arti/INTRODUCTION/1.html"><h6>소개</h6></Link></span></li>
                                    <li><span><Link href="/arti/INTRODUCTION/2.html"><h6>제작과정</h6></Link></span></li>
                                    <li><span><Link href="/arti/SUBSCRIPTION/1.html"><h6>구독신청</h6></Link></span></li>
                                    <li><span><Link href="/arti/INTRODUCTION/3.html"><h6>광고안내</h6></Link></span></li>
                                </ul>
                            </li>
                            <li className="column">
                                <ul className="column">
                                    <li><strong><Link href="/arti/CUSTOMER/home.html"><h6>고객센터</h6></Link></strong></li>
                                    <li><span><Link href="/arti/CUSTOMER/sub.html"><h6>자주하는 질문(FAQ)</h6></Link></span></li>
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
