import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';
import App from './components/App/App.jsx';

//sagas--------------------------------------------

function* fetchFavorites() {
  const response = yield axios({
    method: 'GET',
    url: `/api/favorite`
  });
  console.log('this is the response from favorites table:',response.data);
  yield put({
    type: 'SET_FAVORITE',
    payload: response.data
  })
}


function* likeSearchItem(action) {
  console.log('this is the post payload:',action.payload);
  const response = yield axios({
    method: 'POST',
    url: `/api/favorite`,
    data: {gif:action.payload}
  })
  console.log(response);
  yield put({
    type: 'FETCH_FAVORITES'
  })
}

function* fetchGifs(action) {

  const response = yield axios({
    method: 'GET',
    url: `/giphy/${action.payload}`
  });

  yield put({
    type: 'NEW_GIF_ARRAY',
    payload: response.data
  })
}

//reducers------------------------------------------------------

const gifList = (state = [], action) => {
  if (action.type === 'NEW_GIF_ARRAY') {
    console.log('action.payload in NEW_GIF_ARRAY---->', action.payload)
    return action.payload
  }
  return state
}
const favoritesList = (state = [], action) => {
  if (action.type === 'SET_FAVORITE') {
    return action.payload
  }
  return state;
}

//store---------------------------------------------------------

const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
  combineReducers({
    gifList,
    favoritesList
  }),

// middleware-------------------------------------------------
  applyMiddleware(logger, sagaMiddleware)
);

//roots-------------------------------------------------------------
function* rootSaga() {
  yield takeEvery('GET_GIFS', fetchGifs)
  yield takeEvery('LIKE_GIF', likeSearchItem)
  yield takeEvery('FETCH_FAVORITES', fetchFavorites)
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root'));

