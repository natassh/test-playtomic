import { USER_LOGIN_SUCCESS } from './actionTypes';
import { USER_LOGIN_FAILURE } from './actionTypes';


export const setUserLogged = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user
});


export const setUserLoginFailure = () => ({
  type: USER_LOGIN_FAILURE
});