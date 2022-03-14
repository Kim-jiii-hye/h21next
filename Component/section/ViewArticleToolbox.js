const ViewArticleToolbox = () => {
    const kakaoShareBtn = () => {
        const {Kakao, location} = window;
        Kakao.Link.sendScrap({
            requestUrl: location.href,
        });
    };
    return (
        <div className="article-tools">
            <script type="text/javascript" src="//www.hani.co.kr/section-homepage/svc3/js/hani_common1.js"></script>
            <script type="text/javascript"
                src="//www.hani.co.kr/section-homepage/svc3/js/hani_common2_seouland.js"></script>
            <script type="text/javascript" src="//www.hani.co.kr/section-homepage/svc3/js/hani_article.js"></script>
            <ul className="tools">
                <li className="tool-f" data-status="1" title="페이스북 공유"><span className="icon icon1"></span><span className="blind">페이스북</span>
                    <div className="overlay">
                        <div className="icon-area"><span className="icon icon2"></span> <em
                            className="count-area"><span className="facebook-count">0</span></em></div>
                    </div>
                </li>
                <li className="tool-t" data-status="1" title="트위터 공유">
                    <span className="icon icon1"></span><span className="blind">트위터</span>
                    <div className="overlay">
                        <div className="icon-area"><span className="icon icon2"></span> <em
                            className="count-area"><span className="twitter-count">0</span></em></div>
                    </div>
                </li>
                <li className="tool-share" data-status="1" title="기사 공유 더보기"><span
                    className="icon icon1"></span><span className="blind">공유</span>
                    <div className="overlay">
                        <div className="icon-area">
                            <span className="icon icon2"></span>
                            <a href="http://blog.naver.com/openapi/share?url=<?=urlencode($h21Config->share_url)?>"
                                className="s-n" title="네이버블로그 공유"><span className="blind">네이버블로그</span></a>
                            <a href="https://story.kakao.com/share?url=<?=urlencode($h21Config->share_url)?>"
                                className="s-k" title="카카오스토리 공유"><span className="blind">카카오스토리</span></a>
                        </div>
                    </div>
                </li>
                <button className="kakao-btn" onClick={kakaoShareBtn}>카카오톡 공유하기</button>
                <li className="tool-scrap"
                    title="기사 스크랩"><span className="icon"></span><span className="blind">스크랩</span>
                </li>
                <li className="tool-print" title="인쇄하기"><a href="/arti/PRINT/<?=$h21Config->article_no?>.html">
                    <span className="icon"></span><span className="blind">프린트</span></a></li>
            </ul>
            <p className="font"><a href="#increase_font_size" title="글씨크게" className="large">
                <span className="blind">크게</span></a> <a href="#decrease_font_size" title="글씨작게" className="small">
                    <span className="blind">작게</span></a></p>
        </div>

    )
}
export default ViewArticleToolbox;