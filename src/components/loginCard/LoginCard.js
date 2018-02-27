import React, { Component } from 'react';
import './loginCard.css';

class BookBox extends Component {
  state = {
    userName: '',
  }
  updateUsernameState = (event) => {
    this.setState({
      userName: event.target.value,
    });
  }
  verifyAndRequest = () => {
    if (this.state.userName === '' || this.state.userName === null) {
      console.log('Invalid');
    } else {
      this.props.loginHandle(this.state.userName);
    }
  }
  render() {
    return (
      <div className="LoginCard">
        <div className="LoginCardTitle">
          <div className="LoginCardTextBlack">Welcome</div>
          <div className="LoginCardTextBlack">to</div>
          <div className="LoginCardTextWhite">Quizzy!</div>
        </div>
        <div className="LoginCardField">
          <div className="LoginElements">
            <h3 className="LoginElementTitle">Login</h3>
            <h5>Username</h5>
            <input onChange={this.updateUsernameState} type="text" className="LoginCardUserName" />
            <button className="LoginCardButton" onClick={this.verifyAndRequest}>Login</button>
          </div>
        </div>
      </div>);
  }
}


export default BookBox;
