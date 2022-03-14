import SearchForm from '../section/SearchForm';
import ListHomeAd from "../section/ListHomeAd";
import ListHomeMain from "../section/ListHomeMain";
import ListHomeSub from "../section/ListHomeSub";
import ListHomeTop from "../section/ListHomeTop";
import Sitemap from "./Sitemap";
import { useContext } from 'react';
import { Context } from '../../context';

const ViewHome = ({ ho, wdate, maindata, book }) => {
    const {
        state: {
            config_url: { SVC_PATH }
        }
    } = useContext(Context);
    return (
        <div id="viewMain">
            <div className="main0">
                <div className="main1">
                    <div id="title_bar">
                        <div className="title0">
                            <div className="title1">
                                <div className="logo_main"><img src={`${SVC_PATH}/image/logo_h21.png`} alt="한겨레21" title="한겨레21" /></div>
                                <div className="date"><strong>제 {ho}호</strong> {wdate.slice(0, 10).replaceAll('-', '.')}</div>
                                <div className="btn_support1"><a href="https://support.hani.co.kr/hani/support.hani" target="_blank"><span>후원하기</span></a></div>
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                    <div id="main_contents">
                        <ListHomeTop data={maindata[0]} />
                        <ListHomeMain data={maindata.slice(1, 7)} />
                        <ListHomeAd />
                        <ListHomeSub data={maindata.slice(7, maindata.length)} book={book} />
                    </div>
                </div>
            </div>
            <Sitemap />
        </div>
    )
}

export default ViewHome;