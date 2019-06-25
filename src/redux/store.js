import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import reduxThunk from "redux-thunk"
import catalog from "src/modules/catalog/redux/catalog"
import auth from "src/modules/auth/redux/auth"

const rootReducer = combineReducers({
  catalog,
  auth,
})

const middlewares = [reduxThunk]

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line
  const { createLogger } = require("redux-logger")

  const LOGGING_BLACKLIST = []

  const loggerPredicate = (getState, action) =>
    !LOGGING_BLACKLIST.includes(action.type)

  const logger = createLogger({
    predicate: loggerPredicate,
  })
  middlewares.push(logger)
}

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
