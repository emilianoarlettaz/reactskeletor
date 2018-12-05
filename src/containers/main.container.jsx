import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from '../routes';

const Main = () => (
  <main>
    <Switch>
      <Routes />
    </Switch>
  </main>
);

export default Main;
