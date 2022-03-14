import { useRouter } from "next/router";
import { useContext } from "react";
import BoxListPopular1 from "../../../../Component/section/BoxListPopular1";
import BoxListPopular2 from "../../../../Component/section/BoxListPopular2";
import ListArticleSection from "../../../../Component/section/ListArticleSection";
import NavigationPage from "../../../../Component/section/NavigationPage";
import ViewSubscription from "../../../../Component/section/ViewSubscription";
import Seo from "../../../../Component/Seo";
import HeaderKisa from "../../../../Component/view/HeaderKisa";
import { Context } from "../../../../context";
import util from '../../../../Component/util.json';

export default function Detail({ hanitop, h21top, list }) {
    const router = useRouter();
    const fetchUrl = router.query;
    const str1 = fetchUrl['sec1'];
    const link1 = str1.replace(str1, util[str1].kr);
    const link2 = list.info['title'];
    return (
        <>
        <Seo title={`${link1} : ${link2}` }/>
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                    <HeaderKisa navi={[link1, link2]} />
                        <div id="article_contents" className="article2c_contents">
                            <div className="column_tb">
                                <div className="column_tr">
                                    <div className="column_tc	column0">
                                        <section id="section_list_article" className="list_article	">
                                            <h4 className="hidden">기사일람</h4>
                                            <ListArticleSection data={list.data} />
                                            <NavigationPage totalpage={list.totalpage} page={parseInt(list.page)}/>
                                        </section>
                                    </div>
                                    <div className="column_tc	column1">
                                        {/* <ViewSubscription /> */}
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
    const sec2Link = context.query['sec2'];
    const cline = context.query['cline'];

    let listRes;
    {
        cline == undefined 
        ?  listRes = await fetch(`http://mapi_h21-master.hani.co.kr/on/${sec1Link}/${sec2Link}`)
        : listRes = await fetch(`http://mapi_h21-master.hani.co.kr/on/${sec1Link}/${sec2Link}/${cline}`)
    }
    const listData = await listRes.json();
    const hanitop = data.hanitop;
    const h21top = data.h21top;
    const list = listData;

    return {
        props: {
            hanitop,
            h21top,
            list
        }
    }
}
