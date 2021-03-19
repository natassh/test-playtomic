import {combineReducers} from 'redux';
import { userReducer } from './modules/user/userReducer';

const rootReducers = combineReducers({
  user: userReducer,
});
export { rootReducers };

export type RootState = ReturnType<typeof rootReducers>