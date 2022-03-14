import Link from "next/link";
import { useRouter } from "next/router";
import ItemThumbnail from "./ItemThumbnail";

export default function ItemColumn({ data }) {
    const router = useRouter();
    const linkurl = router.query;
    const currentLink = `/arti/${linkurl['sec1']}/`
    return (
        <article className="item_column">
            <div className="article0">
                <div className="article1">
                    <div className="image0">
                        <div className="image1">
                            <a href={data.url}>
                                <ItemThumbnail data={data.img} />
                            </a>
                        </div>
                    </div>
                    <div className="image_on">
                        <div className="group0">
                            <div className="group1">
                            </div>
                        </div>
                        <div className="title0">
                            <div className="title1">
                                <Link href={`${currentLink}${data.columnsn}`}><h5>{data.title}</h5></Link>
                            </div>
                        </div>
                        <div className="magazine_no0">
                            <div className="magazine_no1">
                                <a href={`${currentLink}${data.seriessn}`}>제{data.ho_st}호 ~ </a>
                            </div>
                        </div>
                        <div className="list0">
                            <div className="list1">
                                <ul>
                                    {
                                        data.data !== undefined &&
                                        data.data.map((hodata, index) => (
                                            <li key={index}>
                                                <article>
                                                    <a href={hodata.url}>[제{hodata.ho}호]{hodata.title}</a>
                                                </article>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}