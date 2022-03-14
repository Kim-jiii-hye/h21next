import Link from "next/link";

export default function ViewSubscription({book}){
    return (        
            <div	id="section_subscription">
                <div	className="subscription0">
                    <div	className="subscription1">
                        <div	className="subscription2">
                            <div	className="image0">
                                <div	className="image1">
                                    <img src={book[0].coverimg} title={"제"+book[0].ho+"호"} alt={"제"+book[0].ho+"호"} />
                                </div>
                            </div>
                            <div	className="text0">
                                <div	className="info0">
                                    <div	className="magazine_no">제 {book[0].ho}호</div>
                                    <div	className="date">{book[0].startdt}</div>
                                    <div	className="list"><Link	href={"/arti/HO/" + book[0].ho + ".html"}>차례보기</Link></div>
                                </div>
                                <div	className="link0">
                                    <div	className="link1"><Link	href={"/arti/HO/" + book[1].ho + ".html"}>지난호보기</Link></div>
                                    <div	className="link1"><Link	href="https://smartstore.naver.com/hankyoreh21"	target="_blank" rel="noopener noreferal">낱권구입</Link></div>
                                    <div	className="link2"><Link	href="/arti/SUBSCRIPTION/1.html">구독신청</Link></div>
                                </div>
                            </div>
                            <div	className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>

    )
}
