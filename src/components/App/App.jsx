import axios from 'axios';
import React from 'react';
import {useEffect} from 'react'

function App() {
  useEffect(()=>{
    getGifs();

  },[])

  const getGifs = () => {
    console.log('in function getGifs')
    axios({
      method: 'GET',
      url: '/giphy'
    })
    .then((response)=>{
      console.log(response.data)
    })
  }
  return (
    <div>
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;
