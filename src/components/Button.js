import React from 'react';

const Button = (props) => {
    return (
         <button
         type= {props.type}
         onClick={props.handleClick}
         disabled={props.disabled}
         className={props.className}>
             {props.text}
         </button>

    );
};

export default Button;