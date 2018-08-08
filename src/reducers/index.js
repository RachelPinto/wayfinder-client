import * as actions from '../actions';

const initialState = {
    lists: [],
    symptoms: {
        depression: null,
        anxiety: null,
        insomnia: null
    }
};

export const wayfinderReducer = (state=initialState, action) => {
    if (action.type === actions.LOG_FORM) {
        return Object.assign({}, state, {symptoms:{depression:action.formData}})
    }
    return state;
};