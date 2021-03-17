import { userReducer } from './modules/user/userReducer';

import {combineReducers} from 'redux';

const rootReducers = combineReducers({
  user: userReducer,
});
export { rootReducers };