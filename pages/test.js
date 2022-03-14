import axios from "axios";
import { useState } from "react";
import HeadInfo from "../Component/HeadInfo";

export default function Test(){
    const [data, setData] = useState(null);
    const onClick = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            setData(response.data);
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div>
            <HeadInfo />
            <div>
                <button onClick={onClick}>데이터 불러오기</button>
            </div>
            {data && <textarea rows={10} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
    )
}