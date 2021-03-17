import { USER_LOGIN_SUCCESS } from './actionTypes';
import { USER_LOGIN_FAILURE } from './actionTypes';
import {firebase} from '../../../firebase/firebase'


export const setUserLogged = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user
});


export const setUserLoginFailure = () => ({
  type: USER_LOGIN_FAILURE
});

export const signIn = ({user,password}) => {
    console.log('user: ', user)
    console.log('password: ', password)
    return async (dispatch) => {
        try {
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
            const response = await firebase.auth().signInWithEmailAndPassword(
                user,
                password
            );
            console.log('Login en firebase correcto', response);
            dispatch(setUserLogged({user, password }));
        } catch( error) {
            console.log('login en firebase inCorrecto');
            dispatch(setUserLoginFailure());
        }
    };
};