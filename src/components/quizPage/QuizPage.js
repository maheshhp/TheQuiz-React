import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './quizPage.css';

class QuizPage extends Component {
  state = {
    numChecked: 0,
  }
  optionClickHandler =(event) => {
    this.setState({
      numChecked: this.state.numChecked + 1,
    });
    this.props.answerHandle(event.target.name, event.target.value);
  }
  render() {
    const { questionBank } = this.props;
    const questionCards = [];
    for (let i = 0; i < questionBank.length; i += 1) {
      const options = [];
      questionBank[i].questionOptions.forEach((option) => {
        if (questionBank[i].userOption.option === option.option) {
          options.push(<div className="QuizOptionRadio"><input onChange={this.optionClickHandler} type="radio" value={option.option} name={option.question_id} id={option.id} checked /> <span>{option.option}</span></div>);
          this.setState({
            numChecked: this.state.numChecked + 1,
          });
        } else {
          options.push(<div className="QuizOptionRadio"><input onChange={this.optionClickHandler} type="radio" value={option.option} name={option.question_id} id={option.id} /> <span>{option.option}</span></div>);
        }
      });
      questionCards.push(<div className="QuizQuestionContainer" key={i}>
        <h4 className="QuestionNumber">Question {i + 1}</h4>
        <div className="QuizQuestion">
          {questionBank[i].question}
        </div>
        <div className="QuizOptions">
          {options}
        </div>
                         </div>);
    }
    const returnValue =
    (<div className="QuizPage">
      {questionCards}
      <button onClick={() => { this.props.leaderBoardHandle(); }} disabled={!(this.state.numChecked >= this.props.questionBank.length)}>Calculate</button>
    </div>);
    return returnValue;
  }
}

QuizPage.propTypes = {
  questionBank: PropTypes.array,
  answerHandle: PropTypes.func.isRequired,
  leaderBoardHandle: PropTypes.func.isRequired,
};

QuizPage.defaultProps = {
  questionBank: [],
};

export default QuizPage;
