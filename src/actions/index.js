
import {API_BASE_URL} from '../config';
import { clearAuthToken, loadAuthToken } from '../local-storage';

//----------------- log form action
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
  const authToken = loadAuthToken()
  dispatch(logFormRequest())
  return fetch(`${API_BASE_URL}/records`, {
    method:'POST',
    body: JSON.stringify(formData),
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }
  })
  .then(res => dispatch(logFormSuccess(res)))
  .catch(err => dispatch(logFormError(err)))
};

//------------------------- symptom (records) actions

export const NEW_SYMPTOM = 'NEW_SYMPTOM'
export const newSymptom = (newSymptom) => {
  return {
    type: NEW_SYMPTOM,
    newSymptom
  }
}


export const SELECT_SYMPTOM = 'SELECT_SYMPTOM'
export const selectSymptom = (symptom) => {
  return {
    type: SELECT_SYMPTOM,
    symptom
  }
}

//-------------------- show data action

function showDataRequest() {
  return {
    type: 'showDataRequest'
  }
}

function showDataSuccess(payload) {
  return {
    type: 'showDataSuccess',
    payload: payload
  }
}

function showDataError(err) {
  return {
    type: 'showDataError',
    error: err
  }
}


export const showData = (data) => (dispatch, getState) => {
  dispatch(showDataRequest())
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/records`, {
    method:'GET',
    body: JSON.stringify(data),
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    console.log(res)
    if (res.ok) {
      return res.json()
    }
  })
  .then(res => dispatch(showDataSuccess(res)))
  .catch(err => dispatch(showDataError(err)))
};

// //-------------- experience form action
// function experiencedRequest() {
//   return {
//     type: 'experiencedRequest'
//   }
// }

// function experiencedSuccess(payload) {
//   return {
//     type: 'experiencedSuccess',
//     payload: payload
//   }
// }

// function experiencedError(err) {
//   return {
//     type: 'experiencedError',
//     error: err
//   }
// }


// export const experiencedForm = (experiencedformData) => dispatch => {
//   dispatch(experiencedRequest())
//   return fetch(`${API_BASE_URL}/experience-records`, {
//     method:'POST',
//     body: JSON.stringify(experiencedformData),
//     headers: {
//       'Accept':'application/json',
//       'Content-Type':'application/json'
//     }
//   })
//   .then(res => {
//     console.log(res, "toggle workin")
//     if (res.ok) {
//       return res.json()
//     }
//   })
//   .then(res => dispatch(experiencedSuccess(res)))
//   .catch(err => dispatch(experiencedError(err)))
// };
