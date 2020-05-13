import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'

import allReducers from "../Components/reducers/all.reducer";
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const initiaState = {};

const store = createStore(
    allReducers,
    initiaState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );
  
sagaMiddleware.run(rootSaga);

export default store;