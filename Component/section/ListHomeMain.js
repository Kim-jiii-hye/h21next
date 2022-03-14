import ItemHomeMain from "../item/ItemHomeMain";

const ListHomeMain = ({data}) => {
    return (
        <section id="section_home_main" className="home_main">
                <h4 className="hidden">한겨레21 Main</h4>
                <div className="table_home_main">
                    <div className="row_home_main row_home_main_B">
                        <div className="cell_home_main cell_home_main_R" style={{width:"33.3333%"}}>
                            <ItemHomeMain data={data[0]}/>
                        </div>
                        <div className="cell_home_main cell_home_main_R" style={{width:"33.3333%"}}>
                            <ItemHomeMain data={data[1]}/>
                        </div>
                        <div className="cell_home_main " style={{width:"33.3333%"}}>
                            <ItemHomeMain data={data[2]}/>
                        </div>
                    </div>
                    <div className="row_home_main">
                        <div className="cell_home_main cell_home_main_R" style={{width:"33.3333%"}}>
                            <ItemHomeMain data={data[3]} />
                        </div>
                        <div className="cell_home_main cell_home_main_R" style={{width:"33.3333%"}}>
                            <ItemHomeMain data={data[4]} />
                        </div>
                        <div className="cell_home_main " style={{width:"33.3333%"}}>
                            <ItemHomeMain data={data[5]} />
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default ListHomeMain;