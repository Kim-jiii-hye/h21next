import Link from "next/link";

export default function DotTitle({title, dataLink}) {
    return (
        <article className="dot_title	">
            <div className="title0">
                <div className="title1">
                    <a href={dataLink}>
                        <h6>{title}</h6>
                    </a>
                </div>
            </div>
        </article>
    )
}
