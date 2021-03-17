import {combineReducers} from 'redux';
import { userReducer } from './modules/user/userReducer';

const rootReducers = combineReducers({
  user: userReducer,
});
export { rootReducers };

// TS  definir el tipo del estado de nuestra aplicación 
export type RootState = ReturnType<typeof rootReducers>