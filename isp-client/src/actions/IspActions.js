import { GET_ERRORS, baseUrl, GETALLISP, GETSINGLEISP } from '../constants/ActionTypes';

export const createIsp = (ispData) => dispatch => {
  return fetch(`${baseUrl}/isp/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify(ispData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.error
        });
      }
    });
};

export const getAllIsp = (ispData) => dispatch => {
  return fetch(`${baseUrl}/isp/`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify(ispData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.error
        });
      } else {
        return dispatch({
          type: GETALLISP,
          payload: data.data
        })
      }
    });
};

export const getSingleIsp = (id) => dispatch => {
  return fetch(`${baseUrl}/isp/${id}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.error
        });
      } else {
        return dispatch({
          type: GETSINGLEISP,
          payload: data
        })
      }
    });
};