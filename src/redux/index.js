import {combineReducers} from 'redux'
import { adressAutoCompleateReducer } from './reducers/adressAutoCompleateReducer'
import { usersReducer } from './reducers/usersReducer';

export const rootReducer = combineReducers({
  autocompleate: adressAutoCompleateReducer,
  users: usersReducer,
});
