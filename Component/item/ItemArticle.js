import Link from "next/link";
import ItemThumbnail from "./ItemThumbnail";

export default function ItemArticle({ data }) {
    return (
            <div className="article0">
                <div className="article1">
                    <div className="image0">
                        <div className="image1">
                            <Link href={data.url} >
                                <ItemThumbnail data={data.img} />
                            </Link>
                        </div>
                    </div>
                    <div className="image_on">
                        <div className="group0">
                            <div className="group1">
                                <a href={data.url} >

                                </a>
                            </div>
                        </div>
                        <div className="title0">
                            <div className="title1">
                                <Link href={data.url} >
                                    <a>{data.title}</a>
                                </Link>
                            </div>
                        </div>
                        <div className="magazine_no0">
                            <div className="magazine_no1">
                                <Link href={data.url} >
                                    <a>제{data.ho}호</a>
                                </Link>
                            </div>
                        </div>
                        <div className="prologue0">
                            <div className="prologue1">
                                <Link href={data.url} >
                                    <a>{data.prologue}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
