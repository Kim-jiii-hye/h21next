import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../context";
import SearchForm from "../section/SearchForm";

export default function HeaderKisa ({ navi }) {
    const navi_cnt = navi.length;
    const {
        state: {
            config_url: { SVC_PATH }
        }
    } =  useContext(Context);

    const navicont = () => {
        let data = [];
        for(let i=0;i<navi_cnt-1; i++){
            data.push(<><span className="path_not_last"><a>{navi[i]}</a></span> &gt;</>);
        }
        const datares = data.map(numb =>(
            numb
        ))
        return datares;
    }
    return (
        <>
            <div id="title_bar">
                <div className="title0">
                    <div className="title1">
                        <div className="logo"><Link href="/"><a><img src={`${SVC_PATH}/image/logo_h21.png`} alt="한겨레21" title="한겨레21" /></a></Link></div>
                        <SearchForm />
                    </div>
                </div>
            </div>
            <nav id="navigation_section">
                <div className="navigation0">
                    <div className="navigation1">
                        <span className="path_not_last"><Link href="/arti"><a>전체</a></Link></span> &gt;
                        {
                            navi_cnt > 1 && navicont()
                        }
                        <span className="path_last">{navi[navi_cnt-1]}</span>
                    </div>
                </div>
            </nav>
        </>
    )
}