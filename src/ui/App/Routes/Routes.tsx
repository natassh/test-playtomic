import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Login } from '../../pages/Login/Login';
import {Dashboard } from '../../pages/Dashboard/Dashboard';
import {Settings } from '../../pages/Settings/Settings';
import { PrivateRoute } from './PrivateRoute';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/settings" component={Settings}/>
    </Switch>
  );
};
  
export { Routes };