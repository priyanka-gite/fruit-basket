import React from 'react';

const Select = (props) => {
    return (
        <div >
            <label htmlFor={props.htmlFor}>
                {props.text}
            </label>

            <select
                id = {props.selId}
                name={props.selName}
                onChange={props.handleSelect} >
                >
                {props.children}
                             <option

                    // value={props.freqValue}
                >
                   {props.timeFrequency}
                </option>
            </select>
        </div>
    );
};

export default Select;