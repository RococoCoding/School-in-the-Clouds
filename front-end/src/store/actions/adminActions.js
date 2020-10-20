import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_TASKS = 'GET_TASKS';
export const GET_TASKS_RES = 'GET_TASKS';
export const GET_TASKS_ERR = 'GET_TASKS';
export const ADD_TASKS = 'ADD_TASKS';
export const ADD_RES = 'ADD_RES';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_EDITING = 'SET_EDITING';
export const LOADING_RES = 'LOADING_RES';
export const SET_ERRORS = 'SET_ERRORS';

export const setUserID = (res) => (dispatch) => {
    dispatch({ type: SET_USER_ID, payload: res })
}

export const setEditing = (res) => (dispatch) => {
    dispatch({ type: SET_EDITING, payload: res })
}

export const loadingRes = () => (dispatch) => {
    dispatch({ type: LOADING_RES })
}

export const setErrors = (err) => (dispatch) => {
    dispatch({ type: GET_TASKS_ERR, payload: err.message })
}

export const getTasks = () => (dispatch) => {
    dispatch({ type: GET_TASKS });

    axiosWithAuth().get('api/todos')
    .then(res=> {
        dispatch({ type: GET_TASKS_RES, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: GET_TASKS_ERR, payload: err.data })
    })
}

export const addTasks = (task) => (dispatch) => {
    dispatch({ type: GET_TASKS });

    axiosWithAuth().post('api/todos', task)
    .then(res=> {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}

export const editTask = (id, task) => (dispatch) => {

    axiosWithAuth().put(`api/todos/${id}`, task)
    .then(res=> {
        dispatch({ type: EDIT_TASK, payload: res.data })
    })
    .catch(err => {
        console.log(err);
    })
}

export const deleteTask = (task) => (dispatch) => {

    axiosWithAuth().delete(`api/todos/${task.id}`)
    .then(res=> {
        dispatch({ type: DELETE_TASK, payload: res.data })
    })
    .catch(err => {
        console.log(err);
    })
}


