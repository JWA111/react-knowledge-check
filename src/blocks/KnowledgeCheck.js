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
            selected: null,
            submitted: false
        };
    }

    getFooter = () => {
        if (!this.state.submitted) {
            return (
                <button
                    className="knowledge-check-submit"
                    disabled={this.state.selected === null}
                    onClick={this.handleSubmit}
                >SUBMIT</button>
            );
        } else {
            let isCorrect = this.state.selected.value === this.props.correct.value;
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
            selected: null,
            submitted: false
        });
    }

    handleSelection = (option) => {
        this.setState((state) => {
            state.selected = option;
            return state;
        })
    }

    handleSubmit = () => {
        this.setState((state) => {
            state.submitted = true;
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
                            selected={this.state.selected}
                            correct={this.props.correct}
                            showAnswer={this.state.submitted}
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
