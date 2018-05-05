import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { layoutReducer } from './layoutReducer';

export default combineReducers({
    userReducer,
    layoutReducer,
});