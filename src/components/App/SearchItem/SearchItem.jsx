import React from 'react';
import { useDispatch} from 'react-redux';


function SearchItem(gif) {

    const dispatch = useDispatch();

    const likeItem= ()=> {
        dispatch({
            type:'LIKE_GIF',
            payload: gif
        })
    }
    return (
        <div>
           <img src={gif}></img>
            <button onClick={likeItem}>❤️</button>
        </div>
    )
}

export default SearchItem;