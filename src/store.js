import { applyMiddleware, createStore } from 'redux'
import reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from 'src/reducers'
import rootSaga from 'src/sagas'
 
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware, reduxLogger))
  }
  return applyMiddleware(...middleware)
}
 
export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}
 
export const wrapper = createWrapper(makeStore, { debug: true })
 