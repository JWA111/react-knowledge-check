import React, { Component } from 'react';

import { Question } from '../question/Question';
import { Feedback } from '../feedback/Feedback';
import './KnowledgeCheck.css';

export default class KnowledgeCheck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
            showAnswer: false
        };
    }

    getFooter = () => {
        if (!this.state.showAnswer) {
            return (
                <button
                    className="knowledge-check-submit"
                    disabled={this.state.selectedOption === null}
                    onClick={this.handleSubmit}
                >SUBMIT</button>
            );
        } else {
            let isCorrect = this.state.selectedOption.value === this.props.correctOption.value;
            return (
                <Feedback
                    isCorrect={isCorrect}
                    hint={this.props.question.hint}
                    correctMessage={this.props.question.correctMessage}
                    onReset={this.handleReset}
                />
            );
        }
    };

    handleReset = () => {
        this.setState({
            selectedOption: null,
            showAnswer: false
        });
    };

    handleSelection = (option) => {
        this.setState((state) => {
            state.selectedOption = option;
            return state;
        })
    };

    handleSubmit = () => {
        this.setState((state) => {
            state.showAnswer = true;
            return state;
        });
    };

    render = () => {
        return (
            <div className="knowledge-check-container">
                <div className="knowledge-check-box">
                    <div className="knowledge-check-body">
                        <Question
                            question={this.props.question}
                            selectedOption={this.state.selectedOption}
                            correctOption={this.props.correctOption}
                            showAnswer={this.state.showAnswer}
                            onSelect={this.handleSelection}
                        />
                    </div>
                    <div className="knowledge-check-footer">
                        {this.getFooter()}
                    </div>
                </div>
            </div>
        );
    }
}
