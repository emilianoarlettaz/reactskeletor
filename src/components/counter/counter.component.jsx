import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter }) => <p>{counter}</p>;

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Counter;
