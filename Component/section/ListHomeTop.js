import ItemHomeTop from "../item/ItemHomeTop";

const ListHomeTop = ({data}) => {
    return (
        <section id="section_home_top" className="home_top">
            <h4 className="hidden">한겨레21 Top</h4>
            <ul className="home_top">
                <ItemHomeTop data={data}/>
            </ul>
        </section>
    )
}
export default ListHomeTop;