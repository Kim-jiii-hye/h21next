import React, {Component} from "react";

export default class ListHomeAd extends Component {

    render() {
        return(
            <section id="section_home_ad" className="home_ad">
                <h4 className="hidden">광고</h4>
                <div className="table_home_ad">
                    <div className="ad728">
                        {/*<script type="text/javascript"*/}
                        {/*        src="//adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@Top1"></script>*/}
                    </div>
                    <div className="ad320">
                        {/*<script type="text/javascript"*/}
                        {/*        src="//adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@Top3?section=h21"></script>*/}
                    </div>
                </div>
            </section>


        )
    }
}
