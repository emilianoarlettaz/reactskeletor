import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter }) => <h1>{counter}</h1>;

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Counter;
