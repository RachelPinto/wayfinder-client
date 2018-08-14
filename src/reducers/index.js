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
        return Object.assign({}, state, {
            symptoms: Object.assign({}, state.symptoms, {
                depression: action.payload.depression,
                anxiety: action.payload.anxiety,
                insomnia: action.payload.insomnia
            }), loading: false
        })
    }
    if (action.type === 'logFormError') {
        return Object.assign({}, state, { error: action.error })
    }

    //simple experience form
    if (action.type === 'experiencedRequest') {
        return Object.assign({}, state, { loading: true })
    }
    if (action.type === 'experiencedSuccess') {
        return Object.assign({}, state, {
            symptoms: Object.assign({}, state.symptoms, {
                depression: action.payload.depression,
                anxiety: action.payload.anxiety,
                insomnia: action.payload.insomnia
            }), loading: false
        })
    }
    if (action.type === 'experiencedError') {
        return Object.assign({}, state, { error: action.error })
    }
    //show data

    if (action.type === 'showDataRequest') {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if (action.type === 'showDataSuccess') {
        return Object.assign({}, state, {
            characters: action.characters,
            loading: false,
            error: null
        });
    }
    else if (action.type === 'showDataError') {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }

    if (action.type === 'AUTH_SUCCESS') {
        return Object.assign({}, state, {
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

    return state;
};