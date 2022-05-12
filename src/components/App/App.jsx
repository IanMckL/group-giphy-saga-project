import axios from 'axios';
import React from 'react';
import {useEffect} from 'react'
import Search from '../Search/Search';

function App() {
  useEffect(()=>{
    getGifs();

  },[])

  const getGifs = () => {
    console.log('in function getGifs')
    axios({
      method: 'GET',
      url: '/giphy/:'
    })
    .then((response)=>{
      console.log(response.data)
    })
  }
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Search />
    </div>
  );
}

export default App;
