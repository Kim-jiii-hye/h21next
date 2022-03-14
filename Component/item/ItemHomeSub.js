import { useContext } from "react";
import { Context } from "../../context";
import ItemThumbnail from "./ItemThumbnail"

export default function ItemHomeSub({ data }) {
    const {
        state: {
            config_url: { SVC_PATH }
        }
    } = useContext(Context);
    const notitle = data.url.split('/');
    const notitle_num = notitle[notitle.length-2];
    return (
        <article className="item_home_sub">
            <div className="article0">
                <div className="article1">
                    <div className="image_on">
                        <div className="group0">
                            <div className="group1">
                                {
                                    data.titleheader !== undefined
                                        ? <a href={data.titleheaderurl}>
                                            {data.titleheader}
                                            <img src={`${SVC_PATH}/image/arrow_right_small.png`} />
                                        </a>
                                        : <a href="">
                                            {notitle_num}
                                            <img src={`${SVC_PATH}/image/arrow_right_small.png`} />
                                        </a>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="image0">
                        <div className="image1">
                            <a href={data.url}>
                                <ItemThumbnail data={data.img} />
                            </a>
                        </div>
                    </div>
                    <div className="image_on">
                        <div className="title0">
                            <div className="title1">
                                <a href={data.url}>
                                    <h6>{data.title}</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article_border">
                    <div className="line"></div>
                </div>
            </div>
        </article>
    )
}