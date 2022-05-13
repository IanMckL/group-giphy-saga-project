import axios from 'axios';
import { useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import './Search.css'

function Search(){
//

//
const dispatch = useDispatch();
const history = useHistory();
//REACT useState
const [search,setSearch]=useState('')
//FUNCTIONS
const sendSearch = () =>{
   dispatch({
       type: 'GET_GIFS',
       payload: search
   })
}

const onSearchClick =() =>{
    sendSearch();
    goToHome();
}


const goToHome = () => {
    history.push('/')
}


const goToFav = () =>{
    dispatch({
        type:'FETCH_FAVORITES'
    })
    history.push('/favlist')
    
}
return(
<div className="Search">
  
    <div className="searchbar">
            <h1>Search</h1>
            <input onChange={(e)=>{setSearch(e.target.value)}}className='longinput'></input>
       
 
            <button onClick={onSearchClick} className='searchbutton'>🔎</button>

            
      
    </div>
    <div className='nav-to-fav'>
        <h1>Favorites</h1>
        <button onClick={goToFav}className='nav-button'>Favorites</button>
    </div>
</div>
)
}

export default Search