import React, { Component } from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';
import './App.css';

class App extends Component {
  state = {
    screenId: 0,
    userName: '',
    questionBank: [],
    leaderBoard: [],
  }
  loginHandle = (userName) => {
    fetch(`/questions/${userName}`)
      .then((response) => {
        if (!response.ok) {
          console.log('Network request failed');
        }
        return response;
      })
      .then(res => res.json())
      .then((jsonRes) => {
        this.setState({
          questionBank: [...this.state.questionBank, ...jsonRes.data],
          userName: jsonRes.data[0].userName,
          screenId: 1,
        }, () => { console.log(this.state.questionBank, this.state.userName); });
      });
  }
  leaderBoardHandle = () => {
    fetch('/leaderBoard')
      .then((response) => {
        if (!response.ok) {
          console.log('Network request failed');
        }
        return response;
      })
      .then(res => res.json())
      .then((jsonRes) => {
        this.setState({
          leaderBoard: [...this.state.leaderBoard, ...jsonRes.data],
          screenId: 2,
        }, () => { console.log(this.state.leaderBoard, this.state.userName); });
      });
  }
  handleAnswer = (questionId, newOption) => {
    console.log(questionId, newOption);
  }
  render() {
    if (this.state.screenId === 1) {
      return (
        <div className="App">
          <Header
            userName={`Hello ${this.state.userName}`}
          />
          <Body
            loginHandle={this.loginHandle}
            screenId={this.state.screenId}
            questionBank={this.state.questionBank}
            leaderBoard={this.state.leaderBoard}
            answerHandle={this.handleAnswer}
            leaderBoardHandle={this.leaderBoardHandle}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <Header />
        <Body
          loginHandle={this.loginHandle}
          screenId={this.state.screenId}
          questionBank={this.state.questionBank}
          leaderBoard={this.state.leaderBoard}
          answerHandle={this.handleAnswer}
          leaderBoardHandle={this.leaderBoardHandle}
        />
      </div>
    );
  }
}

export default App;
