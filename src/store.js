import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import getId from './middlewares/getId'

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const enhancer = composeEnhancers(applyMiddleware(getId))

const store = createStore(reducer,
  (localStorage['trello-clone']) ? JSON.parse(localStorage['trello-clone']) : {},
  enhancer)

store.subscribe(() => {
  localStorage['trello-clone'] = JSON.stringify(store.getState())
})

if (module.hot) {
  module.hot.accept('./reducer', () => {
    const nextRootReducer = require('./reducer');
    store.replaceReducer(nextRootReducer);
  });
}

export default store