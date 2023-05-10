import React, { useState } from "react";


export default function Component(props){
    // const data = props.text
    const [data,setData] = useState()
    setData("data")
    props.func(data)

    return (
        <div>
            <h4>Hello component</h4>
            <p>{props.text} {props.number}</p>
        </div>
    );
}