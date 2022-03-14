import ItemHomeSub from "../item/ItemHomeSub";
import ViewSubscription from "./ViewSubscription";

export default function ListHometop({data, book}) {
return(
        <section id="section_home_sub" className="home_sub">
            <div className="hr"></div>
            <h4 className="hidden">한겨레21 List</h4>
            <div className="table_home_sub">
                <div className="row_home_sub row_home_sub_B">
                    <div className="cell_home_sub cell_home_sub_R" style={{width:"25%"}} >
                        <ItemHomeSub  data={data[0]} />
                    </div>
                    <div className="cell_home_sub cell_home_sub_R"  style={{width:"25%"}}>
                        <ItemHomeSub  data={data[1]} />
                    </div>
                    <div className="cell_home_sub cell_home_sub_R"  style={{width:"25%"}}>
                        <ItemHomeSub  data={data[2]} />
                    </div>
                    <div className="cell_home_sub cell_home_sub_subscription">
                        <ViewSubscription book={book}/>
                    </div>
                </div>
                <div className="row_home_sub row_home_sub_B">
                    <div className="cell_home_sub cell_home_sub_R"  style={{width:"25%"}}>
                        <ItemHomeSub  data={data[3]}/>
                    </div>
                    <div className="cell_home_sub cell_home_sub_R"  style={{width:"25%"}}>
                        <ItemHomeSub  data={data[4]}/>
                    </div>
                    <div className="cell_home_sub cell_home_sub_R"  style={{width:"25%"}}>
                        <ItemHomeSub  data={data[5]}/>
                    </div>
                    <div className="cell_home_sub"  style={{width:"25%"}}>
                        <ItemHomeSub  data={data[6]}/>
                    </div>
                </div>
                <div className="row_home_sub">
                    <div className="cell_home_sub cell_home_sub_R"  style={{width:"25%"}}>
                        <ItemHomeSub  data={data[7]}/>
                    </div>
                    <div className="cell_home_sub cell_home_sub_R"  style={{width:"25%"}}>
                        <ItemHomeSub  data={data[8]}/>
                    </div>
                    <div className="cell_home_sub cell_home_sub_R"  style={{width:"25%"}}>
                        <ItemHomeSub  data={data[9]}/>
                    </div>
                    <div className="cell_home_sub"  style={{width:"25%"}}>
                        <ItemHomeSub  data={data[10]}/>
                    </div>
                </div>
            </div>
        </section>

    )
}