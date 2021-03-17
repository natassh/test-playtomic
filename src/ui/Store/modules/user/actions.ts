import { USER_LOGIN_SUCCESS } from './actionTypes';
import { USER_LOGIN_FAILURE } from './actionTypes';
import {firebase} from '../../../firebase/firebase'
import { User } from './@types/user';
import { UserActions } from './@types/actions';
import {  ThunkDispatch } from 'redux-thunk'


export const setUserLogged = (user: User): UserActions => ({
  type: USER_LOGIN_SUCCESS,
  payload: user
});


export const setUserLoginFailure = ():UserActions => ({
  type: USER_LOGIN_FAILURE
});


type UserLoginsFields = {
    user: string;
    password: string;
}


export const signIn = ({user,password}: UserLoginsFields) => {
    console.log('user: ', user)
    console.log('password: ', password)
    return async (dispatch: ThunkDispatch<{}, {}, UserActions>): Promise<void> => {
        try {
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
            const response = await firebase.auth().signInWithEmailAndPassword(
                user,
                password
            );
            console.log('Login en firebase correcto', response);
            const userLogged = { email: response.user?.email || '', displayName: response.user?.displayName || ''};
            dispatch(setUserLogged(userLogged));
        } catch( error) {
            console.log('login en firebase inCorrecto');
            dispatch(setUserLoginFailure());
        }
    };
};


