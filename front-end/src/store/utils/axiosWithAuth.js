import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://cloudskool.herokuapp.com/',
    headers: {
      Authorization: window.localStorage.getItem('token')
    }
  });
};