import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginCard from '../loginCard/LoginCard';
import './body.css';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <LoginCard />
      </div>
    );
  }
}

Body.propTypes = {
};

Body.defaultProps = {
};

export default Body;
