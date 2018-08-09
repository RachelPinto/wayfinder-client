import * as actions from '../actions';

const initialState = {
    loading: false,
    lists: [],
    symptoms: {
        depression: null,
        anxiety: null,
        insomnia: null
    },
    error: null
};

export const wayfinderReducer = (state=initialState, action) => {
    // if (action.type === actions.LOG_FORM) {
    //     return Object.assign({}, state, {symptoms:{depression:action.formData}})
    // }
    if (action.type === 'logFormRequest') {
        return Object.assign({}, state, {loading:true})
    }
    if (action.type === 'logFormSuccess') {
        return Object.assign({}, state, {
           symptoms: Object.assign({}, state.symptoms, {
                depression: action.payload.depression,
                anxiety: action.payload.anxiety,
                insomnia: action.payload.insomnia
           }), loading:false
        })
    }
    if (action.type === 'logFormError') {
        return Object.assign({}, state, {error: action.error})
    }
    return state;
};