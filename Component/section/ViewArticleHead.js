export default function ViewArticleHead({ ho, title, subtitle, wdate, mdate }) {
    return (
        <header className="article_head">
            <h5><a href="/arti/SERIES/2337/">표지이야기</a></h5>
            <h1>{title}</h1>
            <h3><div dangerouslySetInnerHTML={{__html: subtitle}}></div></h3>
            <div className="info"><div className="magazine_no">제 {ho}호</div></div>
            <div className="datebox"> 등록 : {wdate} 수정 : {mdate}</div>
        </header>
    )
}

