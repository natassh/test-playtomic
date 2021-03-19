import {  ThunkDispatch } from 'redux-thunk'
import { UserActions } from './types/actions';
import { User } from './types/user';
import { USER_LOGIN_SUCCESS } from './actionTypes';
import { USER_LOGIN_FAILURE } from './actionTypes';
import {firebase} from '../../../firebase/firebase'

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
    return async (dispatch: ThunkDispatch<{}, {}, UserActions>): Promise<void> => {
        try {
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
            const response = await firebase.auth().signInWithEmailAndPassword(
                user,
                password
            );
            const userLogged = { email: response.user?.email || '', displayName: response.user?.displayName || '', photo: response.user?.photoURL || ""};
            dispatch(setUserLogged(userLogged));
        } catch( error) {
            dispatch(setUserLoginFailure());
        }
    };
};


