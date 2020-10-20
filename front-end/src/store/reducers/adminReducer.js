import { TOGGLE_ADD, TOGGLE_USER, TOGGLE_TASK, TOGGLE_USER_VIEW, TOGGLE_TASK_VIEW, SET_EDITING } from '../actions/master';

const initialState = {
    isAddingTask: false,
    taskView: true,
    memberView: false
}
//ad ADD_TASKS, ADD_RES, EDIT_TASK, DELETE_TASK
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
                userView: true
            };
        case TOGGLE_TASK:
            return {
                ...state,
                taskView: true,
                userView: false
            }
        case TOGGLE_USER_VIEW:
            return {
                ...state,
                taskView: true,
                userView: false
                }
        case TOGGLE_TASK_VIEW:
            return {
                ...state,
                taskView: true,
                userView: false
                    }
            case SET_EDITING:
                return {
                    ...state,
                    isEditing: !state.isEditing
                }
        default:
            return state
    }
}