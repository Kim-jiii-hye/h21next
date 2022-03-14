import Link from "next/link";
import dynamic from 'next/dynamic';
import { useRouter } from "next/router";
import HeaderOther from "../../../../Component/view/HeaderOther";
import Seo from "../../../../Component/Seo";
import Nothing from "../../../../Component/Nothing";

export default function Index() {
    const router = useRouter();
    const pagenumber = router.query.id;
    const page_name_list = ['한겨레21소개', '제작과정', '광고안내'];
    const ccName = parseInt(pagenumber);
    const DynamicComponent = dynamic(() => import(`../../../../Component/section/ViewIntroduction${ccName}`));
    return (
        <>
            <Seo title={"소개"} />
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        <HeaderOther navi={["소개", page_name_list[0]]} />
                        <div id="introduction_contents" className="etc_contents_menu">
                            <div className="contents0">
                                <div className="menu">
                                    <ul className="menu1">
                                        {
                                            page_name_list.map((cont, key) => (
                                                <li key={key}>
                                                    <Link href={`/arti/INTRODUCTION/${key + 1}.html`}><a>{cont}</a></Link>
                                                    <span className="split">|</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="contents1">
                                    {
                                        (ccName != NaN || ccName != undefined) ? <DynamicComponent /> : <Nothing />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
