import { TOGGLE_ADD, TOGGLE_USER, TOGGLE_TASK } from '../actions';

const initialState = {
    isAddingTask: false,
    taskView: true,
    memberView: false
}

export const adminReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_ADD:
            return {
                ...state,
                addingTask: !state.isAddingTask
            };
        case TOGGLE_USER:
            return {
                ...state,
                taskView: false,
                memberView: true
            };
        case TOGGLE_TASK:
            return {
                ...state,
                taskView: true,
                memberView: false
            }
        default:
            return state
    }
}