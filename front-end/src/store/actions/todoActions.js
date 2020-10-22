import {axiosWithAuth} from '../utils/axiosWithAuth'


export const GET_TODO_START = "GET_TODO_START";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAIL = "GET_TODO_FAIL";

export const getTodo = () => dispatch => {
    dispatch({type: GET_TODO_START})
    axiosWithAuth()
    .get('/todos')
    .then(res => {
        dispatch({type:GET_TODO_SUCCESS, payload:res.data})
        console.log(res);
    })
    .catch(err => {
        console.log(err)
        dispatch({type:GET_TODO_FAIL, payload: "An Error has occured"})
    })
};

export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAIL = "DELETE_TODO_FAIL";

export const deleteTodo = (id) => dispatch => {
    dispatch({type:DELETE_TODO})
    axiosWithAuth()
    .delete(`/todos/${id}`)
    .then(res => {
        dispatch({type: DELETE_TODO_SUCCESS, payload:id})
    })
    .catch(err => {
        dispatch({type:DELETE_TODO_FAIL, payload: "An Error has occured"})
    })
} ;

export const CHANGE_TODO = "CHANGE_TODO";
export const CHANGE_TODO_SUCCESS = "CHANGE_TODO_SUCCESS";
export const CHANGE_TODO_FAIL = "CHANGE_TODO_FAIL";

export const changeTodo = (obj) => dispatch => {
    dispatch({type: CHANGE_TODO})
    axiosWithAuth()
        .put(`/todos/${obj.id}`, obj)
        .then(res => {
            dispatch({type: CHANGE_TODO_SUCCESS, payload:obj})
        })
        .catch(err => {
            dispatch({type: CHANGE_TODO_FAIL, payload: "An Error has occured"})
        })
}

export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAIL = "ADD_TODO_FAIL";

export const addTodo = (todos) => (dispatch) => {
        dispatch({ type: ADD_TODO });
    
        axiosWithAuth()
        .post('/todos', todos)
        .then(res=> {
            dispatch({type: ADD_TODO_SUCCESS, payload:todos})
        })
        .catch(err => {
            dispatch({type: ADD_TODO_FAIL, payload: "An Error has occured"})
        })
    }