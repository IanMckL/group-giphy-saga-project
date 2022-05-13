import axios from 'axios';
import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Search.css'

function Search(){
//

//
const dispatch = useDispatch();

//REACT useState
const [search,setSearch]=useState('')
//FUNCTIONS
const sendSearch = () =>{
   dispatch({
       type: 'GET_GIFS',
       payload: search
   })
}




return(
<div className="Search">
    <h1>Search</h1>
    <div className="searchbar">
        
            <input onChange={(e)=>{setSearch(e.target.value)}}className='longinput'></input>
       
 
            <button onClick={sendSearch} className='searchbutton'>🔎</button>
      
    </div>
</div>
)
}

export default Search