import React, { Component } from 'react';
import Question from './Question';
import Options from './Options';

import './styles.css';

class GameBoard extends Component {
  render() {
    return (
      <div className="GameBoard">

        <Question />
        <Options />

      </div>
    );
  }
}

export default GameBoard;
