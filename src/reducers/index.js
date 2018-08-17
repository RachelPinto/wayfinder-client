import { AUTH_SUCCESS } from '../actions/auth';
import { SELECT_SYMPTOM, NEW_SYMPTOM} from '../actions';

const initialState = {
    selectedSymptom: null,
    loading: false,
    lists: [],
    symptoms: [],
    error: null,
    records: []
};

export const wayfinderReducer = (state = initialState, action) => {
    //Log form
    // if (action.type === 'logFormRequest') {
    //     return Object.assign({}, state, { loading: true })
    // }
    // if (action.type === 'logFormSuccess') {
    //     console.log('state', state)
    //     console.log('action', action)
    //     const symptom = action.payload.symptoms[0]
    //     symptom.createdAt = action.payload.createdAt
    //     return Object.assign({}, state, {
    //         symptoms: [symptom, ...state.symptoms]
    //     })
    // }
    // if (action.type === 'logFormError') {
    //     return Object.assign({}, state, { error: action.error })
    // }
    if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            symptoms: action.currentUser.symptoms.map(symptom => ({
                name: symptom,
                experience: false,
                level: 0,
                impact: false,
                impactNote: "",
                symptomNote: "",
                successNote: ""
            }))
        })
    }
    if (action.type === SELECT_SYMPTOM) {
        return Object.assign({}, state, {selectedSymptom: action.symptom})
    }
    if (action.type === NEW_SYMPTOM) {
        const newSymptom = action.newSymptom
        return Object.assign({}, state, {
            symptoms: state.symptoms.map( (symptom) => {
                if (symptom.name === newSymptom.name) {
                    return newSymptom
                }
                return symptom;
            })
        })
    }
    if (action.type === 'showDataSuccess') {
        return Object.assign({}, state, {
            records: action.payload
        })
    }

    return state;
};