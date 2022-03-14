import ItemColumn from "../item/ItemColumn";

export default function ListColumn({ data }) {
    const seendata = () => {
        let seendata2 = []
        for (let i = 0; i < data.length; i++) {
            seendata2.push(<ItemColumn data={data[i]} />);
        }
        return seendata2.map(numb => (numb))
    }
    return (
        <ul className="list_column">
            {seendata()}
        </ul>
    )
}