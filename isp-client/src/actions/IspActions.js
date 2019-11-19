import { GET_ERRORS } from '../constants/ActionTypes';

const baseUrl = process.env.baseUrl;
console.log(baseUrl);

export const createIsp = (ispData, history) => dispatch => {
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
      if (data){
        history.push('/isp');
      }
    });
};

export const getAllIsp = (ispData, history) => dispatch => {
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
      if (data){
        history.push('/isp');
      }
    });
};

export const getSingleIsp = (ispData, history) => dispatch => {
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
      if (data){
        history.push('/isp');
      }
    });
};