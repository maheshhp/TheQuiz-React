import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginCard from '../loginCard/LoginCard';
import QuizPage from '../quizPage/QuizPage';
import LeaderBoard from '../leaderBoard/LeaderBoard';
import './body.css';

class Body extends Component {
  render() {
    if (this.props.screenId === 0) {
      return (
        <div className="Body">
          <LoginCard loginHandle={this.props.loginHandle} />
        </div>
      );
    } else if (this.props.screenId === 1) {
      return (
        <div className="Body White">
          <QuizPage
            questionBank={this.props.questionBank}
            answerHandle={this.props.answerHandle}
            leaderBoardHandle={this.props.leaderBoardHandle}
          />
        </div>
      );
    }
    return (
      <div className="Body White">
        <LeaderBoard
          playAgainHandle={this.props.playAgainHandle}
          leaderBoard={this.props.leaderBoard}
          userName={this.props.userName}
          questionBank={this.props.questionBank}
        />
      </div>
    );
  }
}

Body.propTypes = {
  loginHandle: PropTypes.func.isRequired,
  screenId: PropTypes.number,
  questionBank: PropTypes.array,
  answerHandle: PropTypes.func.isRequired,
  leaderBoardHandle: PropTypes.func.isRequired,
  playAgainHandle: PropTypes.func.isRequired,
  leaderBoard: PropTypes.array,
  userName: PropTypes.string,
};

Body.defaultProps = {
  screenId: 0,
  questionBank: [],
  leaderBoard: [],
  userName: '',
};

export default Body;
