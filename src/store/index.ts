import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from '../middleware';
const persistState = require('redux-localstorage');
import rootReducer, { RootState } from '../reducers';
import * as Raven from "raven-js";
import * as createRavenMiddleware from "raven-for-redux"  ;

export function configureStore(initialState?: RootState) {
  let middleware = applyMiddleware(
    logger,
    createRavenMiddleware(Raven, {})
  );

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(
      middleware,
      persistState(/*paths, config*/)
    );
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
