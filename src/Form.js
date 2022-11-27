import React from 'react';

const Form = (props) => {
    return (
        <div>
        <label htmlFor={props.htmlFor}>
            {props.text}
        </label>

        <input
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.handleChange}
        checked ={props.checked}
        min={props.min}
        pattern ={props.pattern}
        />
            {props.sentence}

        </div>
    );
};

export default Form;