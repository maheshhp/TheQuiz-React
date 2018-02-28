import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginCard from '../loginCard/LoginCard';
import QuizPage from '../quizPage/QuizPage';
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
      <div className="Body White" />
    );
  }
}

Body.propTypes = {
  loginHandle: PropTypes.func.isRequired,
  screenId: PropTypes.number,
  questionBank: PropTypes.array,
  answerHandle: PropTypes.func.isRequired,
  leaderBoardHandle: PropTypes.func.isRequired,
};

Body.defaultProps = {
  screenId: 0,
  questionBank: [],
};

export default Body;
