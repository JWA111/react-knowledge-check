import React, { Component } from 'react';

import './Feedback.css';

export class Feedback extends Component {
    getFeedbackMessage = () => {
        if (this.props.isCorrect) {
            return this.props.correctMessage;
        } else {
            return this.props.hint;
        }
    }

    getIndicatorClass = () => {
        if (this.props.isCorrect) {
            return 'fa fa-check';
        } else {
            return 'fa fa-times';
        }
    }

    triggerReset = () => {
        if (typeof this.props.onReset === 'function') {
            this.props.onReset();
        }
    }

    render = () => {
        let status;
        if (this.props.isCorrect) {
            status = 'Correct';
        } else {
            status = 'Incorrect';
        }

        return (
            <div className="feedback">
                <div className="feedback-indicator">
                    <i className={this.getIndicatorClass()} />
                </div>
                <div className="status">
                    {status}
                </div>
                <div className="feedback-message">
                    {this.getFeedbackMessage()}
                </div>
                <div
                    className="retry"
                    onClick={this.triggerReset}
                >
                    <span className="fa fa-repeat">&nbsp;TAKE AGAIN </span>
                </div>
            </div>
        );
    }
}
