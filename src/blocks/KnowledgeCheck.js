import React, { Component } from 'react';

import {
    Feedback,
    Question
} from './components';

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
                    hint={this.props.questionaire.questions[0].hint}
                    correctMessage={this.props.questionaire.questions[0].correctMessage}
                    onReset={this.handleReset}
                />
            );
        }
    }

    handleReset = () => {
        this.setState({
            selectedOption: null,
            showAnswer: false
        });
    }

    handleSelection = (option) => {
        this.setState((state) => {
            state.selectedOption = option;
            return state;
        })
    }

    handleSubmit = () => {
        this.setState((state) => {
            state.showAnswer = true;
            return state;
        });
    }

    render = () => {
        const questionaire = this.props.questionaire;

        return (
            <div className="knowledge-check-container">
                <div className="knowledge-check-box">
                    <div className="knowledge-check-body">
                        <Question
                            question={questionaire.questions[0]}
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
