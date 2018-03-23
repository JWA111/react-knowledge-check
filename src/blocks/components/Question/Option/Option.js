import React, { Component } from 'react';

import './Option.css';

export default class Option extends Component {
    getOptionClass = () => {
        let className = 'option';
        if (this.props.isCorrect === null) {
            className += ' allow-hover';
        } else if (this.props.isSelected) {
            className += ' selected-answered'
        }

        return className;
    }

    getIcon = () => {
        let iconClass = 'fa ';  
        if (this.props.isCorrect === true) {
            iconClass += 'fa-check' 
        } else if (this.props.isCorrect !== null) {
            iconClass += 'fa-times' 
        } else if (this.props.isSelected) {
            iconClass += 'fa-square';
        } else {
            iconClass += 'fa-square-o';
        }

        return <i className={iconClass}/>;
    }

    selectOption = () => {
        if (this.props.isCorrect === null) {
            this.props.onClick(this.props.option);
        }
    }

    render = () => {
        const option = this.props.option;

        return (
            <div
                className={this.getOptionClass()}
                onClick={this.selectOption}
            >
                {this.getIcon()} {option.text}
            </div>
        );
    }
}
