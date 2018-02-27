import React, { Component } from 'react';
import './loginCard.css';

class BookBox extends Component {
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
            <input type="text" className="LoginCardUserName" />
            <button className="LoginCardButton">Login</button>
          </div>
        </div>
      </div>);
  }
}


export default BookBox;
