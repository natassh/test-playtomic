import * as actions from './actions';
import { USER_LOGIN_SUCCESS } from './actionTypes';

describe('actions', () => {
    it('should return the action USER_LOGIN_SUCCESS', () => {
      const user = {
        email: "natachaplaytomic@gmail.com",
        displayName: "",
        photo: ""
      }
      const expectedAction = {
        type: USER_LOGIN_SUCCESS,
        payload: user
      }
      expect(actions.setUserLogged(user)).toEqual(expectedAction)
    })
  })
