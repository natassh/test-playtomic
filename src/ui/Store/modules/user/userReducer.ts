import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from './actionTypes';
import { UserState } from './@types/user';
import { SetUserLoggedAction, UserActions } from './@types/actions';

const initialState = {
  isLogged: false,
  user: null
};

const setUserLogged = (action: SetUserLoggedAction): UserState => {
  return {
    isLogged: true,
    user: action.payload
  };
};

const setUserLoginFailure = (): UserState => {
  return {
    isLogged: false,
    user: null
  };
};

const userReducer = (state: UserState = initialState, action: UserActions ): UserState => {
  console.log('action: ', action) // objeto con propiedades, la que podemos trabajar y nos importa es "payload: {password: "natacha123" user: "natachaplaytomic@gmail.com"}" 
  switch (action.type) {
  case USER_LOGIN_SUCCESS:
    return setUserLogged(action as SetUserLoggedAction);

  case USER_LOGIN_FAILURE:
    return setUserLoginFailure();
    
  default:
    return state;
  }
  
};

export { userReducer };
