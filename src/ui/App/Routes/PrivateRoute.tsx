import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const isLogged = false;

const PrivateRoute: React.FC<RouteProps> = ({...rest}) => {
  return (
    isLogged ? <Route {...rest} /> : <Redirect to={{ pathname: '/'}} />
  );
};
  
export { PrivateRoute };