import Link from "next/link";
import SearchForm from "../section/SearchForm";

const HeaderOther = ({ navi }) => {
    const navi_cnt = navi.length;
    return (
        <>
            <div id="title_bar">
                <div className="title0">
                    <div className="title1">
                        <div className="logo"><Link href="/"><a><img src={"//img.hani.co.kr/section-image/15/h21/image/logo_h21.png"} alt="한겨레21" title="한겨레21" /></a></Link></div>
                        <SearchForm />
                    </div>
                </div>
            </div>
            <nav id="navigation_section">
                <div className="navigation0">
                    <div className="navigation1">
                        <span className="path_not_last"><Link href="/"><a>HOME</a></Link></span> &gt;
                        {
                            navi_cnt <= 1
                            ? <span className="path_last">{navi[0]}</span>
                            :
                            <>
                                <span className="path_not_last"><a>{navi[0]}</a></span> &gt;
                                <span className="path_last">{navi[1]}</span>
                            </>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
export default HeaderOther;