import { applyMiddleware, compose, createStore } from 'redux';// for state managment
import createLogger from 'redux-logger';
import Reducers from '../reducers';// schema designer object shape and identify when something happens
import LocalStorageMiddleware from './LocalStorageMiddleware';// when something happens that change is stored in  localstorage
import PerfMiddleware from './PerfMiddleware';// re-rendering application with state change
import { getInitialState } from '../utils/helpers';// loading initial state from localstorage is saved any

const logger = createLogger();
const middleware = [LocalStorageMiddleware];

let extension = (next) => next;

if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
    middleware.push(PerfMiddleware);
    extension = window.devToolsExtension ? window.devToolsExtension() : extension;
}

const initialState = getInitialState();
const store = createStore(Reducers, initialState, compose(applyMiddleware(...middleware), extension));


if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers/index').default; // eslint-disable-line global-require
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
