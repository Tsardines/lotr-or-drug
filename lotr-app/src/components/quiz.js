import React, { Component } from 'react';
import $ from 'jquery';
import Question from './Question';

import './styles.css';

class Quiz extends Component {

getInitialState() {
    return {
        quiz: {},
        userAnswers: [],
        step: 0
    }
}

componentDidMount(quizId) {
    $.getJSON("./api/Questions.json", function(result) {
        this.setState({ quiz: result});
    }.bind(this))
}

nextStep() {
    this.setState({step: (this.state.step + 1)});
}

setAnswer(e) {
    this.setState.user_answers[this.setState.step] = this.setState.user_answers[this.setState.step] || [];
    this.setState.user_answers[this.setState.step][parseInt(e.target.value)] = e.target.checked;
}

isAnswerRight(index) {
    let result = true;
    Object.keys(this.state.quiz.questions[index].answers).map(function(value, answer_index) {
        let answer = this.state.quiz.questions[index].answers[value]
        if (!this.state.user_answers[index] || (answer.is_right !== (this.state.user_answers[index][value] || false))) {
            result = false;
        }
    }.bind(this));
    return result;
}

computeScore(index) {
    let score = 0
    Object.keys(this.state.quiz.questions).map(function(value, index) {
        if (this.isAnswerRight(parseInt(value))) {
            score += 1;
        }
    }.bind(this));
    return score;
}

renderResult() {
    let result = Object.keys(this.state.quiz.questions).map(function(value, index) {
        if (this.isAnswerRight(value)) {
            return(
                <div>{"Question " + index + ": You were right!"}</div>
            )
        } else {
            return (
                <div>{"Question " + index + ": You were wrong."}</div>
            )
        }
    }.bind(this));
    return (
        <div>
            <h3>Results</h3>
            <div>
                {this.computerScore()}/{this.state.quiz.questions.length}
            </div>
            <div>
                <h3>Your answers</h3>
                {result}
            </div>
        </div>
    );
}


  render() {
      if (!this.state.quiz.questions) {
    return (
      <div className="GameBoard">

        <h1>{this.state.quiz.title}</h1>
        {(this.state.step < this.state.quiz.questions.length 
        ? (<Question
            id={this.state.step}
            data={this.state.quiz.questions[this.state.step]}
            validateAnswers={this.nextStep}
            setAnswer={this.setAnswer}/>)
        : (<div>{this.renderResult()}</div>)
        )}
      </div>
    )}
  }
};

export default Quiz;
