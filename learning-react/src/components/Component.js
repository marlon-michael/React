import React from "react";

export default function Component(props){
    return (
        <div>
            <h3>Hello component</h3>
            <p>{props.text}</p>
        </div>
    );
}