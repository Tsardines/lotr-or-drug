import React, { Component } from 'react';
import './styles.css';

class Question extends Component {

propTypes: {
    setAnswer: React.PropTypes.func,
    validateAnswers: React.PropTypes.func,
    data: React.PropTypes.obj
}

    render() {
        let AnswerNodes = Object.keys(this.props.data.answers).map(function(value, index) {

        return (
            <div className="Question">
                <input
                    id={"answer-input-" + index}
                    type="checkbox"
                    value={value}
                    onChange={this.props.setAnswer}
                    defaultChecked={false}
                />
                <label htmlFor={"answer-input-" + index}>
                    {(parseInt(index) +1) + ": " + this.props.data.answers[index].value}
                </label>
            </div>
        )
    }.bind(this));

    return(
        <div>
            <h4>{(parseInt(this.props.id) + 1) + ": " + this.props.data.question}</h4>
            <form>
                {answerNodes}
                <br />
                <button type="button" onClick={this.props.validateAnswers}>
                    validate answer
                </button>
            </form>
        </div>
    );
}
});

export default Question;