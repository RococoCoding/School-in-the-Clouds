import { TOGGLE_ADD, TOGGLE_USER, TOGGLE_TODO, TOGGLE_USER_VIEW, TOGGLE_TODO_VIEW, SET_EDITING } from '../actions/master';

const initialState = {
    isAddingTodo: false,
    todoView: true,
    userView: false
}

export const adminReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_ADD:
            return {
                ...state,
                addingTodo: !state.isAddingTodo
            };
        case TOGGLE_USER:
            return {
                ...state,
                todoView: false,
                userView: true
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todoView: true,
                userView: false
            }
        case TOGGLE_USER_VIEW:
            return {
                ...state,
                todoView: false,
                userView: true
                }
        case TOGGLE_TODO_VIEW:
            return {
                ...state,
                todoView: true,
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