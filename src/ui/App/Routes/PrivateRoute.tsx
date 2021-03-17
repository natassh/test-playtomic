import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/rootReducers';

const PrivateRoute: React.FC<RouteProps> = ({...rest}) => {
  // Leemos del contexto si esta logueado
  const {isLogged} = useSelector( (state: RootState) => state.user);
  console.log('isLogged', isLogged);
  
  return (
    isLogged ? <Route {...rest} /> : <Redirect to={{ pathname: '/'}} />
  );
};
  
export { PrivateRoute };