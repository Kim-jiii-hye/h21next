import DotTitle from "../item/DotTitle";

export default function BoxListContents({data, title}) {
    return (
        <section id="section_article_column" className="box_list_dot_title">
            <h4>{title}</h4>
            <ul className="dot_title">
                {
                    data.map((element, index) => <DotTitle key={index} title={element.title} dataLink={element.url} />)
                }
            </ul>
        </section>
    )
}
