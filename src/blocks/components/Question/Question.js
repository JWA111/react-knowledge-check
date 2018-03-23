import React from 'react';

import Content from './Content/Content'
import Option from './Option/Option';
import './Question.css';

export let Question = (props) => {
    const isCorrect = (option) => {
        return props.correctOption.value === option.value;
    }

    const isSelected = (option) => {
        let selected = false;
        if (props.selectedOption && props.selectedOption.value === option.value) {
            selected = true;
        }

        return selected;
    }

    const isSelectedAnswer = (option) => {
        return props.showAnswer && isSelected(option);
    }

    const isDisabled = (option) => {
        if (props.showAnswer) {
            return true;
        } else {
            return false;
        }
    }

    const handleSelection = (option) => {
        props.onSelect(option);
    }

    const getOptionIconClass = (option) => {
        let iconClass = 'fa ';  
        if (props.showAnswer && isCorrect(option)) {
            iconClass += 'fa-check' 
        } else if (props.showAnswer) {
            iconClass += 'fa-times' 
        } else if (isSelected(option)) {
            iconClass += 'fa-square';
        } else {
            iconClass += 'fa-square-o';
        }

        return iconClass;
    }

    const getOptionElements = (options) => {
        let optionElements = [];
        for (var i = 0; i < options.length; i++) {
            let option = options[i];
            
            optionElements.push(
                <Option
                    option={option}
                    onClick={handleSelection}
                    isSelectedAnswer={isSelectedAnswer(option)}
                    disabled={isDisabled(option)}
                    iconClass={getOptionIconClass(option)}
                    key={i}
                />
            );
        }

        return optionElements;
    }

    const question = props.question;

    return (
        <div className="question">
            <div className="question-prompt">
                {question.prompt}
            </div>
            {question.content ? 
                <div className="question-content">
                    <Content type={question.content.type} options={question.content.options}/>
                </div>
            : null}
            <div className="question-options">
                {getOptionElements(question.options)}
            </div>
        </div>
    );
}
