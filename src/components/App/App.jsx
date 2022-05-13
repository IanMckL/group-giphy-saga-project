import axios from 'axios';
import React from 'react';
import {useEffect} from 'react'
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import Search from '../Search/Search';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



function App() {
  useEffect(()=>{
  
  },[])

  


  return (
<Router>
    <div>
      <h1>Giphy Search!</h1>
      
      <Route exact path='/'>
          <Search />
          <SearchResultsList />
      </Route>
          <Route exact path='/favlist'>
      <Search />
      </Route>
   
    </div>
</Router>
    

   
  );
}

export default App;
