import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://cloudskool.herokuapp.com/api',
    headers: {
      Authorization: window.localStorage.getItem('token')
    }
  });
};