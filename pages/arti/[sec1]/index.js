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

export default function Detail({ hanitop, h21top, list }){
    const router = useRouter();
    const fetchUrl = router.query;
    let numb = '';
    let link1 = '';
    const openListType = () =>{
        if(list.title.includes("series")){
            numb = 'SERIES';
            link1 = numb.replace(numb, util[numb]['kr']);
            return <ListSeries data={list.data} />
        }else if(list.title.includes("column")){
            numb = 'COLUMN';
            link1 = numb.replace(numb, util[numb]['kr']);
            return <ListColumn data={list.data} />
        }else{
            numb = list.title.substring(3);//sec 문자 3개는 자름
            link1 = numb.replace(numb, util[numb]['kr']);
            return <ListArticleSection data={list.data} /> 
        }
    }
    
    // list.title이 seriesing_1이거나 columning_1이면 
    // const numb = list.title.substring(3);//sec 문자 3개는 자름
    // const link1 = numb.replace(numb, util[numb]['kr'])
    return (
        <>
        <Seo title={link1} />
        <div id="viewMain">
            <div className="main0">
                <div className="main1">
                    <HeaderKisa navi={['뉴스', link1]} />
                    <div id="article_contents" className="article2c_contents">
                        <div className="column_tb">
                            <div className="column_tr">
                                <div className="column_tc	column0">
                                    <section id="section_list_article" className="list_article	">
                                        <h4 className="hidden">기사일람</h4>
                                        {openListType()}
                                        {/* {
                                            link1 !== 'test' ? <ListArticleSection data={list.data}/> 
                                            : <></>
                                        }
                                         */}
                                        <NavigationPage totalpage={list.totalpage} page={parseInt(list.page)} />
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
    const cline = context.query['cline'];
    const sec1Link_ = sec1Link.toLowerCase();
    let listRes;
    {
        cline == undefined 
        ? listRes = await fetch(`http://mapi_h21-master.hani.co.kr/on/sec/list/${sec1Link_}`)
        : listRes = await fetch(`http://mapi_h21-master.hani.co.kr/on/sec/list/${sec1Link_}/${cline}`)
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
