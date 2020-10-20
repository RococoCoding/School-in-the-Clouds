import { GET_TASKS, GET_TASKS_RES, GET_TASKS_ERR, FETCH_VOLUNTEERS, FETCH_VOLUNTEERS_RES, FETCH_VOLUNTEERS_ERR, SET_EDITING } from '../actions';
import { LOADNG_RES } from '../actions/signInActions';

const initialState = {
    isLoading: false,
    error: '',
    tasks: [],
    volunteers: [],
    isEditing: false
};

export const memberReducer = (state = initialState, action) => {
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
        case FETCH_VOLUNTEERS:
            return {
                ...state,
                loadingState: true,
                error: ''
            };
        case FETCH_VOLUNTEERS_RES:
            return {
                ...state,
                volunteers: action.payload,
                loadingState: false
            };
        case FETCH_VOLUNTEERS_ERR:
            return {
                ...state,
                error: action.payload
            };
        case SET_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing
            }
        case LOADING_RES:
            return {
                ...state,
                isLoading: false,
            }
      
        default:
            return state;
    };
};