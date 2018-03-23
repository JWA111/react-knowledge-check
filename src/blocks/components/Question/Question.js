import React, { Component } from 'react';

import Option from './Option/Option';
import './Question.css';

export class Question extends Component {
    isCorrect = (option) => {
        if (this.props.showAnswer && this.props.selected !== null) {
            return this.props.correct.value === option.value;
        } else {
            return null;
        }
    }

    handleSelection = (option) => {
        this.props.onSelect(option);
    }

    getOptionElements = (options) => {
        let optionElements = [];
        for (var i = 0; i < options.length; i++) {
            let option = options[i];
            let isSelected = false;
            if (this.props.selected && this.props.selected.value === option.value) {
                isSelected = true;
            }
            optionElements.push(
                <Option
                    option={option}
                    onClick={this.handleSelection}
                    isSelected={isSelected}
                    isCorrect={this.isCorrect(option)}
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
