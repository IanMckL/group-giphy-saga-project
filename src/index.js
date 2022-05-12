import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';
import App from './components/App/App.jsx';



function* likeSearchItem(action) {
  const response = yield axios ({
      method: 'POST',
      url: `/giphy/${action.payload.id}`
  })
  console.log(response);
  yield put({
    type: ''
    })
}



const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
    combineReducers({


    }),
    
    // ⚡ TODO Apply Saga middleware:
    applyMiddleware(logger, sagaMiddleware)
  );

  function* rootSaga() {
    yield takeEvery('LIKE_ITEM',likeSearchItem)
  }

sagaMiddleware.run(rootSaga);

ReactDOM.render(
 <Provider store={storeInstance}>
    <App />
  </Provider>,
document.getElementById('root'));

