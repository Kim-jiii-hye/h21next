import { useRouter } from "next/router";
import BoxListPopular1 from "../../../Component/section/BoxListPopular1";
import BoxListPopular2 from "../../../Component/section/BoxListPopular2";
import ListArticleSection from "../../../Component/section/ListArticleSection";
import NavigationPage from "../../../Component/section/NavigationPage";
import ViewSubscription from "../../../Component/section/ViewSubscription";
import Seo from "../../../Component/Seo";
import HeaderKisa from "../../../Component/view/HeaderKisa";
import util from "../.../../../../Component/util.json";
import ListColumn from "../../../Component/section/ListColumn";
import ListSeries from "../../../Component/section/ListSeries";

export default function Detail({ hanitop, h21top, list, book }) {
    const router = useRouter();
    const fetchUrl = router.query;
    let link1 = '';
    
    const headerNaviLink = () => {
        if(fetchUrl['sec1'] == "SERIES"){
            let sec = fetchUrl['sec1'];
            link1 = sec.replace(sec, util[sec].kr);
            return <HeaderKisa navi={[ link1]} />
        }else if(fetchUrl['sec1'] == "COLUMN"){
            let sec = fetchUrl['sec1'];
            link1 = sec.replace(sec, util[sec].kr);
            return <HeaderKisa navi={[link1]} />
        }else{
            let sec = list.title.substring(3);
            link1 = sec.replace(sec, util[sec].kr);
            return <HeaderKisa navi={['뉴스', link1]} />
        }
    }

    const openListType = () => {
        if(fetchUrl['sec1'] == "SERIES"){
            return <ListSeries data={list.data} />
        }else if(fetchUrl['sec1'] == "COLUMN"){
            return <ListColumn data={list.data} />
        }else{
            return <ListArticleSection data={list.data} />
        }
    }

    return (
        <>
            <Seo title={link1} />
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        {headerNaviLink()}
                        <div id="article_contents" className="article2c_contents">
                            <div className="column_tb">
                                <div className="column_tr">
                                    <div className="column_tc	column0">
                                        <section id="section_list_article" className="list_article	">
                                            <h4 className="hidden">기사일람</h4>
                                            {openListType()}
                                            <NavigationPage totalpage={list.totalpage} page={parseInt(list.page)} />
                                        </section>
                                    </div>
                                    <div className="column_tc	column1">
                                        <ViewSubscription book={book} />
                                        <BoxListPopular1 h21data={h21top} />
                                        <BoxListPopular2 hanidata={hanitop} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://mapi_h21-master.hani.co.kr/on/famous`)
    const data = await res.json();
    const sec1Link = context.query['sec1'];
    const cline = context.query['cline'];
    const sec1Link_ = sec1Link.toLowerCase();
    let listRes;
    {
        cline == undefined
            ? listRes = await fetch(`http://mapi_h21-master.hani.co.kr/on/sec/list/${sec1Link_}`)
            : listRes = await fetch(`http://mapi_h21-master.hani.co.kr/on/sec/list/${sec1Link_}/${cline}`)
    }
    const listData = await listRes.json();

    const res_book = await fetch(`http://mapi_h21-master.hani.co.kr/ho/latest`)
    const data_book = await res_book.json();

    const hanitop = data.hanitop;
    const h21top = data.h21top;
    const list = listData;
    const book = data_book.data;

    return {
        props: {
            hanitop,
            h21top,
            list,
            book
        }
    }
}
