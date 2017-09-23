import { 
  createStore, 
  applyMiddleware, 
  compose 
} from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import root from '../Saga/'


export default (rootReducer) => {

  const middleware = []
  const enhancers = []

  const sagaMiddleware = createSagaMiddleware()

  if (__DEV__) {
    const logger = createLogger({
      collapsed: true,
      diff: true
    })
    middleware.push(logger)
  }

  enhancers.push(applyMiddleware(sagaMiddleware))
  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  sagaMiddleware.run(root)

  return store
}
