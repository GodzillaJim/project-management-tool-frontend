import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
const initState = {}
const allMiddleware = [reduxThunk]
const store = createStore(
  reducers,
  initState,
  composeWithDevTools(applyMiddleware(...allMiddleware))
)
export default store
