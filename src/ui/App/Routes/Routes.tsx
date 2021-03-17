import React, {useEffect} from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import {Login } from '../../pages/Login/Login';
import {Dashboard } from '../../pages/Dashboard/Dashboard';
import {Settings } from '../../pages/Settings/Settings';
import { PrivateRoute } from './PrivateRoute';
import { useSelector } from 'react-redux';


const Routes: React.FC = () => {
  const history = useHistory();
  const redirectUser = (isLogged) => {
    if (isLogged) {
      console.log('redirect');
      history.push('/dashboard');
      // User is signed in.
    } else {
      console.log('no redirect');
      // No user is signed in
      history.push('/');
    }
  };
  
  // engancharnos al contexto, con un useSelector y ver si la propiedad isLogged  cambia
  const {isLogged} = useSelector(state => state.user);
  console.log('isLogged: ', isLogged)

  useEffect(() => {
    redirectUser(isLogged);
  }, [isLogged]);
  
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/settings" component={Settings}/>
    </Switch>
  );
};
  
export { Routes };