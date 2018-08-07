import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects'
import reducerRegistry from '../utils/reducerRegistry';

// import { promiseMiddleware, localStorageMiddleware, drizzleMiddleware } from './middleware';
import createReducers from './reducers';

let _store = null;
// Setter
function setStore(store) {
  _store = store;
}

// Getter
export const getStore = () => {
  return _store;
};

// Init store
export const configureStore = (history) => {
  let store = {};
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    routerMiddleware(history),
		// promiseMiddleware,
		// localStorageMiddleware,
    sagaMiddleware
  ];
  if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = require('redux-devtools-extension');
		const { createLogger } = require('redux-logger');
    middleware.push(createLogger({
      collapse: true,
      stateTransformer: state => state.toJS()
    }));
    const enhancer = composeWithDevTools(applyMiddleware(...middleware));

    store = createStore(createReducers(), enhancer);

    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(createReducers());
        store.dispatch({ type: '@@REDUCER_INJECTED' });
      });
    }
    setStore(store);
    return store;
  } else {

    store = applyMiddleware(...middleware)(createStore)(createReducers());
    setStore(store);
    return store;
  }
};

export default configureStore;
