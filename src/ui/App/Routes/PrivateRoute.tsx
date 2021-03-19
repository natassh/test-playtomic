import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/rootReducers';

const PrivateRoute: React.FC<RouteProps> = ({...rest}) => {
  const {isLogged} = useSelector( (state: RootState) => state.user);
  
  return (
    isLogged ? <Route {...rest} /> : <Redirect to={{ pathname: '/'}} />
  );
};
  
export { PrivateRoute };