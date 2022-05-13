import axios from 'axios';
import React from 'react';
import {useEffect} from 'react'

import SearchResultsList from '../SearchResultsList/SearchResultsList';

import Search from '../Search/Search';


function App() {
  useEffect(()=>{
  
  },[])

  


  return (

    <div>
      <h1>Giphy Search!</h1>
      <Search />
    
      <SearchResultsList />

    

    </div>
  );
}

export default App;
