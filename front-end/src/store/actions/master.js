// ADD_TASKS, ADD_TASKS_RES, ADD_TASKS_ERR
// SET_USER_ID, LOADING_RES
// getTasks, addTask, deleteTask, setUserID, deleteUser, setLoading, loadingRes, setErros

// GET_VOLUNTEERS, GET_VOLUNTEER_RES, GET_VOLUNTEERS_ERR
// getVolunteers, getAllUsers

export const SET_ADMIN = 'SET_ADMIN';
export const SET_STUDENT = 'SET_STUDENT';
export const SET_VOLUNTEER = 'SET_VOLUNTEER';

export const TOGGLE_ADD = 'TOGGLE_ADD';
export const TOGGLE_USER = 'TOGGLE_USER';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const setAdmin = () => (dispatch) => {
    dispatch({ type: SET_ADMIN })
}

export const setStudent = () => (dispatch) => {
    dispatch({ type: SET_STUDENT })
}

export const setVolunteer = () => (dispatch) => {
    dispatch({ type: SET_VOLUNTEER })
}

export const toggleAdd = () => (dispatch) => {
    dispatch({ type: TOGGLE_ADD })
}

export const toggleUser = () => (dispatch) => {
    dispatch({ type: TOGGLE_USER })
}

export const toggleTask = () => (dispatch) => {
    dispatch({ type: TOGGLE_TASK })
}