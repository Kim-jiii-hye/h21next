import Link from "next/link";
import { useRouter } from "next/router";

export default function ItemSeries({ data }) {
    const router = useRouter();
    const linkurl = router.query;
    const currentLink = `/arti/${linkurl['sec1']}/`
    return (
        <article className="item_series">
            <div className="article0">
                <div className="article1">
                    <div className="image_ff">
                        <div className="group0">
                            <div className="group1">
                            </div>
                        </div>
                        <div className="title0">
                            <div className="title1">
                                <Link href={`${currentLink}${data.seriessn}`}><h5>{data.title}</h5></Link>
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
        </article >
    )
}