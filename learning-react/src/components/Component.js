import React, { useState } from "react";


export default function Component(props){
    const [data,setData] = useState(["data"])
    const addData = () => setData(lastData => [...lastData, "more data"])
    props.func(data)

    return (
        <div>
            <h4>Hello component</h4>
            <p>{props.text} {props.number}</p>
            <button onClick={addData} >add more data</button>
        </div>
    );
}