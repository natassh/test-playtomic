import { createStore, applyMiddleware } from 'redux';
import { rootReducers} from './rootReducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducers, applyMiddleware(thunk));

export { store };