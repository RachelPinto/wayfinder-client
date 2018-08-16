import * as actions from '../actions';

const initialState = {
    loading: false,
    lists: [],
    symptoms: [{    
        name: "",
        experience: false,
        level: 0,
        impact: false,
        impactNote: "",
        symptomNote: "",
        successNote: ""
    },
    {
        name: "",
        experience: false,
        level: 0,
        impact: false,
        impactNote: "",
        symptomNote: "",
        successNote: ""

    }],
    error: null
};

export const wayfinderReducer = (state = initialState, action) => {
    //Log form
    if (action.type === 'logFormRequest') {
        return Object.assign({}, state, { loading: true })
    }
    if (action.type === 'logFormSuccess') {
        console.log('state', state)
        console.log('action', action)
        const symptom = action.payload.symptoms[0]
        symptom.createdAt = action.payload.createdAt
        return Object.assign({}, state, {
            symptoms: [symptom, ...state.symptoms]
        })
    }
    if (action.type === 'logFormError') {
        return Object.assign({}, state, { error: action.error })
    }

    return state;
};