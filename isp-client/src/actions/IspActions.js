import { GET_ERRORS, baseUrl } from '../constants/ActionTypes';

export const createIsp = (ispData) => dispatch => {
  console.log(ispData);
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
      console.log(data)
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
      console.log(data)
      if (data.error) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.error
        });
      }
    });
};

export const getSingleIsp = (ispData) => dispatch => {
  return fetch(`${baseUrl}/isp/:id`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify(ispData)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.error) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.error
        });
      }
    });
};