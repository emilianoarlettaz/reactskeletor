import PropTypes from 'prop-types';
import React from 'react';

const App = ({ title }) => <div>{title}</div>

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
