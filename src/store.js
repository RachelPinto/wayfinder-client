import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import {wayfinderReducer} from './reducers';

export default createStore(wayfinderReducer, applyMiddleware(thunk));
