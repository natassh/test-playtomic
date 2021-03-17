import { USER_LOGIN_SUCCESS } from './actionTypes';
import { USER_LOGIN_FAILURE } from './actionTypes';

const initialState = { };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN_SUCCESS:
    return {
      ...state,
      isLogged: true,
      user: action.payload
    };

  case USER_LOGIN_FAILURE:
    return {
      isLogged: false,
      user: null
    };
    
  default:
    return state;
  }
  
};

export { userReducer };