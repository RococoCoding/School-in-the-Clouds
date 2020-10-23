import { 
    GET_TODO_START,
    GET_TODO_SUCCESS,
    GET_TODO_FAIL,

    DELETE_TODO,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAIL,
    
    CHANGE_TODO,
    CHANGE_TODO_SUCCESS,
    CHANGE_TODO_FAIL,

    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAIL

 } from '../actions/todoActions'

 const initialState = {
    error: "",
    loading: false,
    todos: []
 }

 export function todoReducer(state=initialState, action){
    switch(action.type) {
        case GET_TODO_START: 
            return {
                ...state,
                loading:true
            }
        case GET_TODO_SUCCESS: 
            return{
                ...state, 
                loading: false, 
                error:'',
                todos: action.payload
            }
        case GET_TODO_FAIL:
            return{
                ...state, 
                loading:false, 
                error:action.payload
            }
        case DELETE_TODO: 
            return {
                ...state, 
                loading:true
            }
        case DELETE_TODO_SUCCESS:
            return{
                ...state,
                loading:false,
                todos: state.todos.filter(todo => todo.todoid !== action.payload)
            }
        case DELETE_TODO_FAIL:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case CHANGE_TODO:
            return{
                ...state,
                loading:true,
            }
        case CHANGE_TODO_SUCCESS:
            return{
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo.todoid === action.payload.todoid){
                        console.log(action.payload)
                        return action.payload
                    } else {
                        return todo
                    }
                })
            }
        case CHANGE_TODO_FAIL:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case ADD_TODO: 
            return {
                ...state,
                loading:true
            }
        case ADD_TODO_SUCCESS: 
            return{
                ...state, 
                loading: false, 
                error:'',
                todos: action.payload
            }
        case ADD_TODO_FAIL:
            return{
                ...state, 
                loading:false, 
                error:action.payload
            }
        default: return state
    }
}