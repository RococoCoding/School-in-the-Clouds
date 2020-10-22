import {axiosWithAuth} from '../utils/axiosWithAuth';


export const GET_VOLUNTEERS_START = "GET_VOLUNTEERS_START";
export const GET_VOLUNTEERS_SUCCESS = "GET_VOLUNTEERS_SUCCESS";
export const GET_VOLUNTEERS_FAIL = "GET_VOLUNTEERS_FAIL";

export const getVolunteers = () => dispatch => {
    dispatch({type: GET_VOLUNTEERS_START})
    axiosWithAuth()
    .get('/volunteers')
    .then(res => {
        dispatch({type: GET_VOLUNTEERS_SUCCESS, payload: res.data})
        console.log(res.data);
    })
    .catch(err =>{
        console.log(err)
        dispatch({type: GET_VOLUNTEERS_FAIL, payload: "An Error has occured"})
    })
};

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export const getUsers = () => dispatch => {
    dispatch({type: GET_USERS_START})
    axiosWithAuth()
    .get('/users')
    .then(res => {
        dispatch({type: GET_USERS_SUCCESS, payload: res.data.users})
        // console.log(res.data);
    })
    .catch(err =>{
        console.log(err)
        dispatch({type: GET_USERS_FAIL, payload: err.message})
    })
};

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const deleteUser = (id) => dispatch => {
    dispatch({type: DELETE_USER})
    axiosWithAuth()
        .delete(`users/${id}`)
        .then(res => {
            dispatch({type:DELETE_USER_SUCCESS, payload: id})
        })
        .catch(err => {
            dispatch({type:DELETE_USER_FAIL, payload: "An Error has occured"})
        })
};