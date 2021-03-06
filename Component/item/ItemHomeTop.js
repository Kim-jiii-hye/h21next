import Link from "next/link";
import ItemThumbnail from "./ItemThumbnail";

export default function ItemHomeTop({ data }) {
    return (
        <article className="item_home_top">
            <div className="article0">
                <div className="article1">
                    <div className="title0">
                        <div className="title1">
                            <Link href={data.url}>
                                <a><h6>{data.title}</h6></a>
                            </Link>
                        </div>
                    </div>
                    <div className="image0">
                        <div className="image1">
                            <ItemThumbnail data={data.img} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}