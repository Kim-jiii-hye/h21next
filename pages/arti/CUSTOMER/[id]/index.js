import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import HeaderOther from "../../../../Component/view/HeaderOther";
import Seo from "../../../../Component/Seo";
import Nothing from "../../../../Component/Nothing";

export default function Section() {
    const router = useRouter();
    const pageurl = router.query.id;
    const DynamicComponent = dynamic(() => import(`../../../../Component/view/ViewCustomer_${pageurl}`));
    return (
        <>
            <Seo title={"고객센터"} />
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        <HeaderOther navi={["고객센터"]} />
                        {
                            (pageurl != NaN || pageurl != undefined) ? <DynamicComponent /> : <Nothing />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}