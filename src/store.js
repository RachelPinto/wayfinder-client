import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {wayfinderReducer} from './reducers';

export default createStore(wayfinderReducer, composeWithDevTools(applyMiddleware(thunk)));
