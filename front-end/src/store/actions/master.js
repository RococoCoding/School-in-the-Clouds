// export {
//     GET_TODO_FAIL
// }from "./todoActions"

export const SET_ADMIN = 'SET_ADMIN';
export const SET_STUDENT = 'SET_STUDENT';
export const SET_VOLUNTEER = 'SET_VOLUNTEER';
export const SET_ERRORS = 'SET_ERRORS';
export const LOADING_RES = 'LOADING_RES';
export const SET_USER_ID = 'SET_USER_ID';
export const GET_TODO_FAIL = "GET_TODO_FAIL";

export const TOGGLE_ADD = 'TOGGLE_ADD';
export const TOGGLE_USER = 'TOGGLE_USER';
export const TOGGLE_TODO = 'TOGGLE_TASK';
export const TOGGLE_MAIN = 'TOGGLE_MAIN';
export const TOGGLE_USER_VIEW = 'TOGGLE_USER_VIEW';
export const TOGGLE_TODO_VIEW = 'TOGGLE_TASK_VIEW';

export const setAdmin = () => (dispatch) => {
    dispatch({ type: SET_ADMIN })
}

export const setStudent = () => (dispatch) => {
    dispatch({ type: SET_STUDENT })
}

export const setVolunteer = () => (dispatch) => {
    dispatch({ type: SET_VOLUNTEER })
}

export const setErrors = (err) => (dispatch) => {
    dispatch({ type: GET_TODO_FAIL, payload: err.message })
}

export const loadingRes = () => (dispatch) => {
    dispatch({ type: LOADING_RES })
}

export const setUserID = (res) => (dispatch) => {
    dispatch({ type: SET_USER_ID, payload: res })
}

export const toggleAdd = () => (dispatch) => {
    dispatch({ type: TOGGLE_ADD })
}

export const toggleUser = () => (dispatch) => {
    dispatch({ type: TOGGLE_USER })
}

export const toggleTodo = () => (dispatch) => {
    dispatch({ type: TOGGLE_TODO })
}

export const toggleMain = () => (dispatch) => {
    dispatch({ type: TOGGLE_MAIN })
}

export const toggleViewUser = () => (dispatch) => {
    dispatch({ type: TOGGLE_USER_VIEW })
}

export const toggleViewTodos = () => (dispatch) => {
    dispatch({ type: TOGGLE_USER_VIEW })
}