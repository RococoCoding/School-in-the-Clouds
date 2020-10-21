//First two blocks consist of exported actions from the other action files 

export {
    GET_TASKS,
    GET_TASKS_RES,
    GET_TASKS_ERR,
    ADD_TASKS,
    ADD_RES,
    EDIT_TASK,
    DELETE_TASK,
    SET_USER_ID,
    SET_EDITING,
    LOADING_RES,
    SET_ERRORS,
    getTasks,
    addTasks,
    editTask,
    deleteTask,
    deleteUser,
    setUserID,
    setEditing,
    loadingRes,
    setErrors
} from './adminActions'

export {
    GET_VOLUNTEERS,
    GET_VOLUNTEERS_RES,
    GET_VOLUNTEERS_ERR,
    getAllUsers,
    getVolunteers
} from './studentActions'


export const SET_ADMIN = 'SET_ADMIN';
export const SET_STUDENT = 'SET_STUDENT';
export const SET_VOLUNTEER = 'SET_VOLUNTEER';

export const TOGGLE_ADD = 'TOGGLE_ADD';
export const TOGGLE_USER = 'TOGGLE_USER';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const TOGGLE_MAIN = 'TOGGLE_MAIN';
export const TOGGLE_USER_VIEW = 'TOGGLE_USER_VIEW';
export const TOGGLE_TASK_VIEW = 'TOGGLE_TASK_VIEW';

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

export const toggleMain = () => (dispatch) => {
    dispatch({ type: TOGGLE_MAIN })
}

export const toggleViewUser = () => (dispatch) => {
    dispatch({ type: TOGGLE_USER_VIEW })
}

export const toggleViewTasks = () => (dispatch) => {
    dispatch({ type: TOGGLE_USER_VIEW })
}