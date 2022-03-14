export default function ViewIntroduction3() {
    const defaultLink = "//img.hani.co.kr/section-image/15/h21";
    return (
        <div className="introduction_3">
            <div className="ad	ad_left">
                <div className="ad1">
                    <img src={defaultLink + "/image/introduction/ad0.png"} />
                    <div className="price">
                        표지2 : 6,000,000원<br />
                        표지2 대면 : 6,000,000원, 첫 페이지 대면
                    </div>
                </div>
            </div>
            <div className="ad	ad_right">
                <div className="ad1">
                    <img src={defaultLink + "/image/introduction/ad1.png"} />
                    <div className="price">
                        표지3 : 5,000,000원, 뒷면 앞
                    </div>
                </div>
            </div>
            <div className="clear"></div>
            <div className="ad	ad_left">
                <div className="ad1">
                    <img src={defaultLink + "/image/introduction/ad2.png"} />
                    <div className="price">
                        표지4 : 10,000,000원
                    </div>
                </div>
            </div>
            <div className="ad	ad_right">
                <div className="ad1">
                    <img src={defaultLink + "/image/introduction/ad3.png"} />
                    <div className="price">
                        목차 대면 : 5,000,000원
                    </div>
                </div>
            </div>
            <div className="clear"></div>
            <div className="ad	ad_left">
                <div className="ad1">
                    <img src={defaultLink + "/image/introduction/ad4.png"} />
                    <div className="price">
                        칼럼 대면 : 4,000,000원, 편집장 칼럼 대면
                    </div>
                </div>
            </div>
            <div className="ad	ad_right">
                <div className="ad1">
                    <img src={defaultLink + "/image/introduction/ad5.png"} />
                    <div className="price">
                        내지 : 3,000,000원, 기사와 함께 보는 광고
                    </div>
                </div>
            </div>
            <div className="clear"></div>
            <div className="ad_etc">
                센터 : 7,000,000원, 2페이지 스프레드<br />
                1/2 페이지 : 1,500,000원<br />
                1/3 페이지 : 1,200,000원<br />
                <br />
                ※ 부가가치세 별도, 원색기준(단색도 동일 단가 적용), 판형 : 가로 205㎜ × 세로 260㎜<br />
                광고문의 : <strong>02-710-0578</strong> (FAX 02-710-0555)
            </div>
        </div>
    );
}
