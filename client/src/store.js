import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "./reducers/index";
import thunk from "redux-thunk";

const initialState = {};

const store = createStore(
  combineReducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
