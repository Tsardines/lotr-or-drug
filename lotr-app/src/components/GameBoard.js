import React, { Component } from 'react';
import jquery from 'jquery';
import Question from './Question';
// import Options from './Options';

import './styles.css';

getInitialState: function() {
    return {
        quiz: {},
        userAnswers: [],
        step: 0
    }
}

componentDidMount: function(quizId) {
    $.getJSON("./api/Questions.json", function(res) {
    }.bind(this))
}


class GameBoard extends Component {
  render() {
    return (
      <div className="GameBoard">

        <Question />
        {/* <Options /> */}

      </div>
    );
  }
}

export default GameBoard;
