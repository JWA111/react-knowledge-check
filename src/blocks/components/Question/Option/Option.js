import React from 'react';

import './Option.css';

let Option = (props) => {
    let optionClass = 'option';
    if (!props.disabled) {
        optionClass += ' allow-hover'
    }

    if (props.isSelectedAnswer) {
        optionClass += ' selected-answered'
    }

    let onClick;
    if (props.disabled) {
        onClick = () => {}
    } else {
        onClick = () => {
            props.onClick(props.option);
        };
    }

    return (
        <div className={optionClass} onClick={onClick}>
            <i className={props.iconClass}/>{props.option.text}
        </div>
    );
} 
export default Option;
