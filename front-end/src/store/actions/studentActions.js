import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_VOLUNTEERS = 'GET_VOLUNTEERS';
export const GET_VOLUNTEERS_RES = 'GET_VOLUNTEERS_RES';
export const GET_VOLUNTEERS_ERR = 'GET_VOLUNTEERS_ERR';

export const getAllUsers = () => (dispatch) => {
    dispatch({ type: GET_VOLUNTEERS })

    axiosWithAuth().get('api/users')
    .then(res => {
        dispatch({ type: GET_VOLUNTEERS_RES, payload: res.data.data })
    })
    .catch(err => {
        dispatch({ type: GET_VOLUNTEERS_RES, payload: err.message})
    })
}

export const getVolunteers = () => (dispatch) => {
    dispatch({ type: GET_VOLUNTEERS })

    axiosWithAuth().get('api/users')
    .then(res => {
        dispatch({ type: GET_VOLUNTEERS_RES, payload: res.data.volunteers })
    })
    .catch(err => {
        dispatch({ type: GET_VOLUNTEERS_ERR, payload: err })
    })
}