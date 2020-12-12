import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './Reducer/index'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'


const store = createStore(rootReducers, compose(applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


export default store;