import axios from 'axios';
import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Search.css'

function Search(){
//

//
const dispatch = useDispatch();
const ourArray = useSelector((store)=> store.gifList)
//REACT useState
const [search,setSearch]=useState('')
//FUNCTIONS
const sendSearch = () =>{
    axios({
        type: 'GET',
        url: `/giphy/:${search}`
    })
    .then((response)=>{
        console.log(response.data)
        dispatch({
            type: 'NEW_GIF_ARRAY',
            payload: response.data
        })
        console.log(ourArray)
    })
    
}




return(
<div className="Search">
    <h1>Search</h1>
    <div className="searchbar">
        
            <input onChange={(e)=>{setSearch(e.target.value), console.log(search)}}className='longinput'></input>
       
 
            <button onClick={sendSearch} className='searchbutton'>🔎</button>
      
    </div>
</div>
)
}

export default Search