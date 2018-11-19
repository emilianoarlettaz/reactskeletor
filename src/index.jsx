import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const title = 'React Test App';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app'),
);

module.hot.accept();
