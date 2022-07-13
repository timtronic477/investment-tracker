import React from "react";

const FormInput = (props) => {
    return (
        <div>
            <label>{props.title}</label>
            <input>{props.input}</input>
        </div>
    )
}


export default FormInput;