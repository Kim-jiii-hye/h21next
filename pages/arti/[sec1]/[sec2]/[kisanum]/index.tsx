import { useRouter } from "next/router";
import ViewArticleHead from "../../../../../Component/section/ViewArticleHead";
import ViewArticleSection from "../../../../../Component/section/ViewArticleSection";
import ViewArticleAd1 from "../../../../../Component/section/ViewArticleAd1";
import Seo from "../../../../../Component/Seo";
import HeaderKisa from "../../../../../Component/view/HeaderKisa";
import ViewArticleAd2 from "../../../../../Component/section/ViewArticleAd2";
import ViewSubscription from "../../../../../Component/section/ViewSubscription";
import ViewArticleAd3 from "../../../../../Component/section/ViewArticleAd3";
import BoxListContents from "../../../../../Component/section/BoxListContents";
import ArticleReply from "../../../../../Component/item/ArticleReply";
import BoxListPopular1 from "../../../../../Component/section/BoxListPopular1";
import BoxListPopular2 from "../../../../../Component/section/BoxListPopular2";
import React, { useEffect } from "react";
import util from '../../../../../Component/util.json';

const KAKAO_KEY = 'e4535029ec4a0922a5042a26645178fc';

interface IProps {
    children: React.ReactNode;
}
// 기사 뷰 페이지에서만 공유 기능 사용하므로

const KisaView = ({ hanitop, h21top, data, book },{children}:IProps) => {
    const router = useRouter();
    const fetchUrl = router.query;

    useEffect(() => {
        window.Kakao.init(KAKAO_KEY);
    },[]);

    
    // path따라 가야함
    const HeaderKisaCont = () => {
        const str1 = data.sec;//103001000
        const path = util[str1]['path'];
        let pathArr = [];
        for(let i=0; i<path.length; i++){
            pathArr.push(util[path[i]]['kr']);
        }
        return <HeaderKisa navi={pathArr} />
    }
    return (
        <>
            <Seo title={"기사내용보기"} />
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        {HeaderKisaCont()}
                        <div id="article_contents" className="article2c_contents">
                            <ViewArticleHead ho={data.ho} title={data.title} subtitle={data.subtitle}
                                mdate={data.mdate} wdate={data.wdate} />
                            <div className="column_tb">
                                <div className="column_tr">
                                    <div className="column_tc	column0">
                                        {children}
                                        <ViewArticleSection bodydata={data.body} img={data.img.data} />
                                        <ViewArticleAd1 />
                                        <ArticleReply />
                                    </div>
                                    <div className="column_tc	column1">
                                        {
                                            data.series_info.data != null ? <BoxListContents data={data.series_info.data} title={data.series_info.title} /> : <></>
                                        }
                                        {
                                            data.column_info.data != null ? <BoxListContents data={data.column_info.data} title={data.column_info.title} /> : <></>
                                        }

                                        <ViewArticleAd2 />
                                        <BoxListPopular1 h21data={h21top} />
                                        <ViewSubscription book={book} />
                                        <ViewArticleAd3 />
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
    const hanidata = await res.json();

    const kisaNum = context.query['kisanum'];
    const kisa_res = await fetch(`http://mapi_h21-master.hani.co.kr/on/view/${kisaNum}`)
    const data = await kisa_res.json();

    const res_book = await fetch(`http://mapi_h21-master.hani.co.kr/ho/latest`)
    const data_book = await res_book.json();

    const hanitop = hanidata.hanitop;
    const h21top = hanidata.h21top;
    const book = data_book.data;

    return {
        props: {
            data,
            hanitop,
            h21top,
            book
        }
    }
}

export default KisaView;