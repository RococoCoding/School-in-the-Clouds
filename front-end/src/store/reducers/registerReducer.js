import { TOGGLE_MAIN, SET_ADMIN, SET_STUDENT, SET_VOLUNTEER, SET_USER_ID } from '../actions/master';

const initialState = {
    isSignUp: false,
    admin: false,
    student: false,
    volunteer: false,
    userID: ''
}

export const registerReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_MAIN:
            return {
                ...state,
                isSignUp: !state.isSignUp
            };
        case SET_ADMIN:
            return {
                admin: true,
                student: false,
                volunteer: false
            };
        case SET_STUDENT:
            return {
                admin: false,
                student: true,
                volunteer: false
            };
        case SET_VOLUNTEER:
            return {
                admin: false,
                student: false,
                volunteer: true
            };
        case SET_USER_ID:
            return {
                ...state,
                userID: action.payload
            }
        default:
            return state
    };
};