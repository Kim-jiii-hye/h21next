import ItemSeries from "../item/ItemSeries";

export default function ListSeries({ data }) {
    const seendata = () => {
        let seendata2 = []
        for (let i = 0; i < data.length; i++) {
            seendata2.push(<ItemSeries data={data[i]} />);
        }
        return seendata2.map(numb => (numb))
    }
    return (
        <ul	className="list_series">
            {seendata()}
        </ul>
    )
}