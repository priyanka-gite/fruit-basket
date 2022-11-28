import React from 'react';

const Form = (props) => {
    return (
        <>
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

        </>
    );
};

export default Form;