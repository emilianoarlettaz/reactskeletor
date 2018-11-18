import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React Test App';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
