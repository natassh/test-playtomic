import React, {useEffect} from 'react';
import { Switch, Route, useHistory, Link } from 'react-router-dom';
import {Login } from '../../pages/Login/Login';
import {Dashboard } from '../../pages/Dashboard/Dashboard';
import {Settings } from '../../pages/Settings/Settings';
import { PrivateRoute } from './PrivateRoute';
import { useSelector, useDispatch } from 'react-redux';
import {firebase} from '../../firebase/firebase'
import {setUserLogged} from '../../Store/modules/user/actions'
import { RootState } from '../../Store/rootReducers';


const Routes: React.FC = () => {
  const history = useHistory();
  const redirectUser = (isLogged: boolean) => {
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
  const {isLogged} = useSelector((state: RootState) => state.user);
  console.log('isLogged: ', isLogged)

  // Escuchamos si el usuario está logueado
  useEffect(() => {
    redirectUser(isLogged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  // Fase de montaje, para leer de firebase y sabrá cuando se monte si el usuario esta logueado o no
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUserLogged({ email: user.email || '', displayName: user.displayName || ''}));
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Switch>
      {!isLogged && <Route exact path="/" component={Login} /> }
      {isLogged && (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/companies">Companies</Link>
              </li>
            </ul>
          </nav>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/settings" component={Settings} />
        </>
      )}
    </Switch>
  );
};
  
export { Routes };