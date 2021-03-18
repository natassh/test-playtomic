import React, {useEffect, Fragment} from 'react';
import { Switch, Route, useHistory, Link } from 'react-router-dom';
import {Login } from '../../pages/Login/Login';
import {Dashboard } from '../../pages/Dashboard/Dashboard';
import {Courts } from '../../pages/Courts/Courts';
import {CourtEdit } from '../../pages/Courts/CourtEdit';
import { PrivateRoute } from './PrivateRoute';
import { useSelector, useDispatch } from 'react-redux';
import {firebase} from '../../firebase/firebase'
import {setUserLogged} from '../../Store/modules/user/actions'
import { RootState } from '../../Store/rootReducers';
import logo from '../../assets/images/logo-playtomic.png';


const Routes: React.FC = () => {
  const history = useHistory();
  const redirectUser = (isLogged: boolean) => {
    if (isLogged) {
      history.push('/dashboard');
      // User is signed in.
    } else {
      // No user is signed in
      history.push('/');
    }
  };
  
  // engancharnos al contexto, con un useSelector y ver si la propiedad isLogged  cambia
  const {isLogged} = useSelector((state: RootState) => state.user);

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
        dispatch(setUserLogged({ email: user.email || '', displayName: user.displayName || '', photo: user.photoURL || ""}));
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Switch>
      {!isLogged && <Route exact path="/" component={Login} /> }
      {isLogged && (
        <Fragment>
          <div className="cw">
            <header className="main-header">
              <h1>
                <img src={logo} alt="Logo devjobs" />
              </h1>
              <nav className="main-nav">
                <ul>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/courts">Courts</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/courts" component={Courts} />
            <PrivateRoute exact path="/court/:id/update" component={CourtEdit} />
          </div>
        </Fragment>
        
      )}
    </Switch>
  );
};
  
export { Routes };