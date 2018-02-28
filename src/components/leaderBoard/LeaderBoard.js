import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './leaderBoard.css';

class LeaderBoard extends Component {
  render() {
    const tempLeaderBoard = this.props.leaderBoard;
    const rowsToRender = [];
    const scoreRender = [];
    for (let i = 0; i < tempLeaderBoard.length; i += 1) {
      if (tempLeaderBoard[i].user_name === this.props.userName) {
        scoreRender.push(<div className="UserScore">{tempLeaderBoard[i].score}</div>);
        console.log(scoreRender);
      }
      rowsToRender.push(<div className="ScoreRow"><span className="IdInRow">{i + 1}. </span><span className="NameInRow">{tempLeaderBoard[i].user_name}</span> <span className="ScoreInRow">{tempLeaderBoard[i].score}</span></div>);
    }
    console.log(scoreRender);
    return (
      <div className="LeaderBoard">
        <h4 className="ScoreTitle">Your Score</h4>
        <h3 className="TotalScore">{this.scoreRender}/{this.props.questionBank.length}</h3>
        <h4 className="LeaderBoardTitle">LeaderBoard</h4>
        <div className="ScoreRowContainer">
          {rowsToRender}
        </div>
        <button className="PlayAgainButton" onClick={() => { this.props.playAgainHandle(); }}> Play again </button>
      </div>
    );
  }
}

LeaderBoard.propTypes = {
  playAgainHandle: PropTypes.func.isRequired,
  leaderBoard: PropTypes.array,
  questionBank: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
};

LeaderBoard.defaultProps = {
  leaderBoard: [],
};

export default LeaderBoard;
