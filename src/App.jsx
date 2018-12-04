import PropTypes from 'prop-types';
import React from 'react';
import Main from './Main';

const App = ({ title }) => (
  <div>
    <Main title={title} />
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
