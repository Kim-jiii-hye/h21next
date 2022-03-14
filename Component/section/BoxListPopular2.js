export default function BoxListPopular2({ hanidata }) {
    return (
        <section id="section_list_popular_hani" className="box_list_rank_title">
            <h4>한겨레 인기기사</h4>
            <ul>
                {hanidata.map((data, i) => (
                    <li key={i}>
                        <article className="rank_title	rank_title_not_last">
                            <div className="rank0">
                                <div className="rank1">
                                    {data.rank}.
                                </div>
                            </div>
                            <div className="title0">
                                <div className="title1">
                                    <a href={data.url}>
                                        <h6>{data.title}</h6>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    )
}
