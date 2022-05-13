import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function SearchItem(gif) {

    const dispatch = useDispatch();

    const likeItem= ()=> {
        dispatch({
            type:'LIKE_GIF',
            payload: gif.gif
            
        })

    }

    return (
        
        
        <div>
         
            <img src={gif.gif}></img>
            <button onClick={likeItem}>❤️</button>
        </div>
    )
}

export default SearchItem;