import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <span className="AppName">{this.props.appName}</span>
        <span className="UserName">{this.props.userName}</span>
      </div>
    );
  }
}

Header.propTypes = {
  appName: PropTypes.string,
  userName: PropTypes.string,
};

Header.defaultProps = {
  appName: 'Quizzy',
  userName: '',
};

export default Header;
