import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginCard from '../loginCard/LoginCard';
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
        <div className="Body" />
      );
    }
    return (
      <div className="Body" />
    );
  }
}

Body.propTypes = {
  loginHandle: PropTypes.func.isRequired,
  screenId: PropTypes.number,
};

Body.defaultProps = {
  screenId: 0,
};

export default Body;
