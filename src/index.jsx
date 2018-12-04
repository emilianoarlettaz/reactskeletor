import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

const title = 'React Skeletor App';

ReactDOM.render(
  <BrowserRouter>
    <App title={title} />
  </BrowserRouter>,
  document.getElementById('app'),
);

module.hot.accept();
