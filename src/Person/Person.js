import React from "react";

const person = (props) => {
    return <p>I am a {props.name}, and I am {Math.floor(Math.random()*30)}</p>
};

export default person;
