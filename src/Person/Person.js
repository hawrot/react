import React from "react";

const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>I am a {props.name}, and I am {Math.floor(Math.random()*30)}</p>
            <p>{props.children}</p>
        </div>


    )

};

export default person;
