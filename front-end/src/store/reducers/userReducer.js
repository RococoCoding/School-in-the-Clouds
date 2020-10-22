import {
    
    GET_VOLUNTEERS_START,
    GET_VOLUNTEERS_SUCCESS,
    GET_VOLUNTEERS_FAIL,

    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,

} from '../actions/userActions';

const initialState = {
    users: [],
    volunteers: [],
    error:'',
    loading:false
}

export function userReducer(state=initialState, action){
    switch(action.type) {
        case GET_VOLUNTEERS_START: 
        return {
            ...state,
            loading:true
        }
        case GET_VOLUNTEERS_SUCCESS: 
        return{
            ...state, 
            loading: false, 
            error:'',
            volunteers: action.payload
        }
        case GET_VOLUNTEERS_FAIL:
        return{
            ...state, 
            loading:false, 
            error:action.payload
        }
        case GET_USERS_START: 
            return {
                ...state,
                loading:true
            }
        case GET_USERS_SUCCESS: 
            return{
                ...state, 
                loading: false, 
                error:'',
                users: action.payload
            }
        case GET_USERS_FAIL:
            return{
                ...state, 
                loading:false, 
                error:action.payload
            }
        case DELETE_USER: 
            return{
                ...state, 
                loading:true
            }
        case DELETE_USER_SUCCESS: 
            return{
                ...state,
                loading:false,
                users: state.users.filter(user => user.userid !== action.payload)
            }
        case DELETE_USER_FAIL:
            return{
                ...state, 
                loading:false,
                error: action.payload
            }
        
        default: return state
    }
}