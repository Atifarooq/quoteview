import { createStore, compose } from 'redux';
import applyMiddleware from '../middleware';
import reducers from './reducers';

const middlewares = [
    applyMiddleware,
    ...(process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__
        ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
        : []),
];

const enhancer = compose(...middlewares);
export default createStore(reducers, {}, enhancer);
