import Link from "next/link";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import HeaderOther from "../../../../Component/view/HeaderOther";
import Nothing from "../../../../Component/Nothing";
import Seo from "../../../../Component/Seo";

//아래 id 값을 가져오기 위해 useRouteHook 사용
export default function Index(){
    const router = useRouter();
    const pagenumber = router.query.id;
    const page_name_list = ['정기구독 신청', '구독정보 조회', '정기독자 인증'];
    const Test = () => {
        useEffect(() => {
            if(!router.isReady) {
                pagenumber = '';
                return pagenumber;
            }
        }, [router.isReady]);
        if(pagenumber !== undefined){
            const ccName = parseInt(pagenumber);
            const DynamicComponent = dynamic(() => import(`../../../../Component/section/ViewSubscription${ccName}`));
            return <DynamicComponent />
        }
    }

    return (
        <>
        <Seo title={"구독신청"}/>
        <div id="viewMain">
            <div className="main0">
                <div className="main1">
                    <HeaderOther navi={["정기구독", page_name_list[0]]} />
                    <div id="subscription_contents" className="etc_contents_menu">
                        {/* <script src="//magazine21.hani.co.kr/js/magazine21-dialogs.js"></script> */}
                        <div className="contents0">
                            <div className="menu">
                                <ul className="menu1">
                                    {
                                        page_name_list.map((cont, key) => (
                                            <li key={key}>
                                                <a>{cont}</a>
                                                {/* <Link href={"/arti/SUBSCRIPTION/" + (k + 1) + ".html"}><a >{cont}</a></Link> */}
                                                <span className="split">|</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="contents1">
                                {Test()}
                                {/*{*/}
                                {/*    (ccName != NaN || ccName != undefined) ? <DynamicComponent /> : <Nothing />*/}
                                {/*}*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}
