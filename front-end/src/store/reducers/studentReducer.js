import { GET_TASKS, GET_TASKS_RES, GET_TASKS_ERR, GET_VOLUNTEERS, GET_VOLUNTEERS_RES, GET_VOLUNTEERS_ERR } from '../actions/master';
import { LOADING_RES } from '../actions/master';

const initialState = {
    isLoading: false,
    error: '',
    todos: [],
    volunteers: [],
    isEditing: false
};

export const studentReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TASKS:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_TASKS_RES:
            return {
                ...state,
                tasks: action.payload,
                isLoading: false,
                error: ''
            };
        case GET_TASKS_ERR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case GET_VOLUNTEERS:
            return {
                ...state,
                loadingState: true,
                error: ''
            };
        case GET_VOLUNTEERS_RES:
            return {
                ...state,
                volunteers: action.payload,
                loadingState: false
            };
        case GET_VOLUNTEERS_ERR:
            return {
                ...state,
                error: action.payload
            };
        case LOADING_RES:
            return {
                ...state,
                isLoading: false,
            }
      
        default:
            return state;
    };
};