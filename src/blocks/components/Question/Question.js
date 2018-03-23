import React, { Component } from 'react';

import Option from './Option/Option';
import './Question.css';

export class Question extends Component {
    isCorrect = (option) => {
        return this.props.correctOption.value === option.value;
    }

    isSelected = (option) => {
        let selected = false;
        if (this.props.selectedOption && this.props.selectedOption.value === option.value) {
            selected = true;
        }

        return selected;
    }

    isSelectedAnswer = (option) => {
        return this.props.showAnswer && this.isSelected(option);
    }

    isDisabled = (option) => {
        if (this.props.showAnswer) {
            return true;
        } else {
            return false;
        }
    }

    handleSelection = (option) => {
        this.props.onSelect(option);
    }

    getOptionIconClass = (option) => {
        let iconClass = 'fa ';  
        if (this.props.showAnswer && this.isCorrect(option)) {
            iconClass += 'fa-check' 
        } else if (this.props.showAnswer) {
            iconClass += 'fa-times' 
        } else if (this.isSelected(option)) {
            iconClass += 'fa-square';
        } else {
            iconClass += 'fa-square-o';
        }

        return iconClass;
    }

    getOptionElements = (options) => {
        let optionElements = [];
        for (var i = 0; i < options.length; i++) {
            let option = options[i];
            
            optionElements.push(
                <Option
                    option={option}
                    onClick={this.handleSelection}
                    isSelectedAnswer={this.isSelectedAnswer(option)}
                    disabled={this.isDisabled(option)}
                    iconClass={this.getOptionIconClass(option)}
                    key={i}
                />
            );
        }

        return optionElements;
    }

    render = () => {
        const question = this.props.question;

        return (
            <div className="question">
                <div className="question-prompt">
                    {question.prompt}
                </div>
                <div className="question-options">
                    {this.getOptionElements(question.options)}
                </div>
            </div>
        )
    }
}
