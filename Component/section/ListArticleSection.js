import ItemArticle from "../item/ItemArticle"

export default function ListArticleSection({ data }) {
    return (
        <ul className="list_article">
            {
                data.map((cont, index) => (
                    <article className="item_article" key={index}>
                        <ItemArticle data={cont} />
                    </article>
                ))
            }
        </ul>
    )
}

