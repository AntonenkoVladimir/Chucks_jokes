import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {reducer} from "./reducers/reducer";
import {initialState} from "./initialState";
import {localMiddleware} from "./middleware/middleware";
import {addJokeWatcher} from "./middleware/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, initialState, applyMiddleware(localMiddleware, sagaMiddleware));
sagaMiddleware.run(addJokeWatcher);

export default store;

