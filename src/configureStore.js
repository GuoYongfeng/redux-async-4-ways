import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import { createEpicMiddleware } from 'redux-observable'
import fetchUserEpic from './epic.js'

const epicMiddleware = createEpicMiddleware(fetchUserEpic)

export default function configureStore() {
  let store = createStore(app, applyMiddleware(epicMiddleware))
  return store
}
