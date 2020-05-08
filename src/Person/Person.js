import React from "react";
import './Person.css';

const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>I am a {props.name}, and I am {Math.floor(Math.random()*30)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>


    )

};

export default person;
