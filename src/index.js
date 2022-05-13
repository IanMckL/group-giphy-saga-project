import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';
import App from './components/App/App.jsx';

const gifList = (state=[], action) => {
if(action.type === 'NEW_GIF_ARRAY'){
  console.log('action.payload in NEW_GIF_ARRAY---->', action.payload)
  return action.payload
}
return state
}
// const favoritesList = (state=[], action)=>{
//   if(action.type === 'SET_FAVORITE'){
//     return action.payload
//   }
//   return state
// }

function* likeSearchItem(action) {
  const response = yield axios ({
      method: 'POST',
      url: `/giphy/${action.payload.id}`
  })
  console.log(response);
  yield put({
    type: 'NEW_GIF_ARRAY'
    })
}

 function* fetchGifs(action){
   

   const response = yield axios({
    method: 'GET',
    url: `/giphy/${action.payload}`
    });
  
    yield put({
      type: 'NEW_GIF_ARRAY',
      payload: response.data
    })

 }

const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
    combineReducers({

      gifList,


    }),
    
    // ⚡ TODO Apply Saga middleware:
    applyMiddleware(logger, sagaMiddleware)
  );

  function* rootSaga() {

    yield takeEvery('GET_GIFS', fetchGifs)

    // yield takeEvery('LIKE_ITEM',likeSearchItem)

  }

sagaMiddleware.run(rootSaga);

ReactDOM.render(
 <Provider store={storeInstance}>
    <App />
  </Provider>,
document.getElementById('root'));

