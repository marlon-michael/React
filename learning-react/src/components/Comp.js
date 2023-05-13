import React, { useEffect, useState } from "react";



export default function Comp(props){
    const [p, setP] = useState("nothing")

    const parentF = (text) => {
        setP(props.params)
    }

    useEffect(() => {
        props.func(parentF)
        console.log(props.func, parentF)
    }, [])

    useEffect(() => {
        setP(props.params)
        console.log(props.params)
    }, [props.params])
    
    return (
        <div className="todo">
            {p}
        </div>
    );
}