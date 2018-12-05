import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './components';
import { Demo } from './containers';

const Routes = () => (
  <div>
    <Route exact key="home" path="/" component={Home} />
    <Route key="Demo" path="/demo" component={Demo} />
  </div>
);

export default Routes;
