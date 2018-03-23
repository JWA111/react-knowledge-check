import React from 'react';

import './Feedback.css';

export let Feedback = (props) => {
    const getFeedbackMessage = () => {
        if (props.isCorrect) {
            return props.correctMessage;
        } else {
            return props.hint;
        }
    }

    const getIndicatorClass = () => {
        if (props.isCorrect) {
            return 'fa fa-check';
        } else {
            return 'fa fa-times';
        }
    }

    const triggerReset = () => {
        if (typeof props.onReset === 'function') {
            props.onReset();
        }
    }

    let status;
    if (props.isCorrect) {
        status = 'Correct';
    } else {
        status = 'Incorrect';
    }

    return (
        <div className="feedback">
            <div className="feedback-indicator">
                <i className={getIndicatorClass()} />
            </div>
            <div className="status">
                {status}
            </div>
            <div className="feedback-message">
                {getFeedbackMessage()}
            </div>
            <div
                className="retry"
                onClick={triggerReset}
            >
                <span className="fa fa-repeat">&nbsp;TAKE AGAIN </span>
            </div>
        </div>
    );
}
