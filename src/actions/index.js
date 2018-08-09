
import {API_BASE_URL} from '../config';

function logFormRequest() {
  return {
    type: 'logFormRequest'
  }
}

function logFormSuccess(payload) {
  return {
    type: 'logFormSuccess',
    payload: payload
  }
}

function logFormError(err) {
  return {
    type: 'logFormError',
    error: err
  }
}

export const logForm = (formData) => dispatch => {
  dispatch(logFormRequest())
  return fetch(`${API_BASE_URL}/records`, {
    method:'POST',
    body: JSON.stringify(formData),
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    }
  })
  .then(res => {
    console.log(res)
    if (res.ok) {
      return res.json()
    }
  })
  .then(res => dispatch(logFormSuccess(res)))
  .catch(err => dispatch(logFormError(err)))
};