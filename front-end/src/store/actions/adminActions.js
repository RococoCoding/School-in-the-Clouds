// import { axiosWithAuth } from '../utils/axiosWithAuth';

// export const GET_TODOS = 'GET_TASKS';
// export const GET_TODOS_RES = 'GET_TASKS';
// export const GET_TODOS_ERR = 'GET_TASKS';
// export const ADD_TODOS = 'ADD_TASKS';
// export const ADD_RES = 'ADD_RES';
// export const EDIT_TODO = 'EDIT_TASK';
// export const DELETE_TODO = 'DELETE_TASK';
// export const SET_USER_ID = 'SET_USER_ID';
// export const SET_EDITING = 'SET_EDITING';
// export const LOADING_RES = 'LOADING_RES';
// export const SET_ERRORS = 'SET_ERRORS';
// export const DELETE_USER = 'DELETE_USER';

// export const setUserID = (res) => (dispatch) => {
//     dispatch({ type: SET_USER_ID, payload: res })
// }

// export const setEditing = (res) => (dispatch) => {
//     dispatch({ type: SET_EDITING, payload: res })
// }

// export const loadingRes = () => (dispatch) => {
//     dispatch({ type: LOADING_RES })
// }

// export const setErrors = (err) => (dispatch) => {
//     dispatch({ type: GET_TODOS_ERR, payload: err.message })
// }

// export const getTodos = () => (dispatch) => {
//     dispatch({ type: GET_TODOS });

//     axiosWithAuth().get('/todos')
//     .then(res=> {
      
//         dispatch({ type: GET_TODOS_RES, payload: res.data })
//     })
//     .catch(err => {
//         dispatch({ type: GET_TODOS_ERR, payload: err.data })
//     })
// }

// export const addTodos = (todos) => (dispatch) => {
//     dispatch({ type: GET_TODOS });

//     axiosWithAuth().post('/todos', todos)
//     .then(res=> {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

// export const editTodo = (id, todos) => (dispatch) => {

//     axiosWithAuth().put(`/todos/${id}`, todos)
//     .then(res=> {
//         dispatch({ type: EDIT_TODO, payload: res.data })
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

// export const deleteTodo = (todos) => (dispatch) => {

//     axiosWithAuth().delete(`/todos/${todos.id}`)
//     .then(res=> {
//         dispatch({ type: DELETE_TODO, payload: res.data })
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

// export const deleteUser = (users) => (dispatch) => {
// //this cannot fully function with our current backend setup
//     axiosWithAuth().delete(`/users/${users.id}`)
//     .then(res=> {
//         dispatch({ type: DELETE_USER, payload: res.data }) 
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }


