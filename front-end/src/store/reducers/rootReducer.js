import { combineReducers } from 'redux';
import { adminReducer } from './adminReducer';
import { registerReducer } from './registerReducer';
import { studentReducer } from './studentReducer';
import { volunteerReducer } from './volunteerReducer';

export const rootReducer = combineReducers({
    adminReducer,
    registerReducer,
    studentReducer,
    volunteerReducer
});